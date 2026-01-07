# 🔧 Supabase Integration Setup Guide

## Current Status: ⚠️ Needs Anon Key

Your Supabase integration is **almost complete**! You just need to add your anon key.

---

## 📋 Step-by-Step Setup

### 1. Get Your Supabase Anon Key

1. Go to your Supabase dashboard:
   ```
   https://supabase.com/dashboard/project/zxlnmxhvvbivqkettowy/settings/api
   ```

2. In the **API Settings** section, you'll see:
   - **Project URL**: `https://zxlnmxhvvbivqkettowy.supabase.co` ✅ (Already configured)
   - **Project API keys**:
     - `anon` `public` - This is the key you need! (starts with `eyJ...`)
     - `service_role` `secret` - ⚠️ Don't use this one

3. Click the **copy** button next to the `anon` `public` key

---

### 2. Update Your Configuration

1. Open the file: **`src/lib/supabase.ts`**

2. Find this line:
   ```typescript
   const supabaseAnonKey = 'PASTE_YOUR_ANON_KEY_HERE';
   ```

3. Replace `'PASTE_YOUR_ANON_KEY_HERE'` with your actual anon key:
   ```typescript
   const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'; // Your actual key
   ```

4. Save the file

---

### 3. Verify Your Table Setup

Make sure your `agen8_wait` table has:

#### Table Structure:
```sql
CREATE TABLE agen8_wait (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

#### Row Level Security (RLS) Policies:

**Enable RLS:**
```sql
ALTER TABLE agen8_wait ENABLE ROW LEVEL SECURITY;
```

**Allow Inserts (for the waitlist form):**
```sql
CREATE POLICY "Allow public inserts"
ON agen8_wait
FOR INSERT
TO public
WITH CHECK (true);
```

**Allow Select (to check for duplicates):**
```sql
CREATE POLICY "Allow public to read emails"
ON agen8_wait
FOR SELECT
TO public
USING (true);
```

---

## ✅ Testing the Integration

Once you've added the anon key:

1. **Refresh your browser** at `http://localhost:5173`

2. **Test New Email:**
   - Click "Join the waitlist"
   - Enter a new email (e.g., `test@example.com`)
   - Click "Join Waitlist"
   - ✅ Should show "You're on the list!" with a green checkmark

3. **Test Duplicate Email:**
   - Open the modal again
   - Enter the **same email** you just used
   - Click "Join Waitlist"
   - ✅ Should show error: "This email is already on the waitlist!"

4. **Check Your Database:**
   - Go to: `https://supabase.com/dashboard/project/zxlnmxhvvbivqkettowy/editor`
   - Open the `agen8_wait` table
   - ✅ You should see the email you submitted!

---

## 🎯 What's Already Working

✅ Modal UI with loading states  
✅ Success confirmation screen  
✅ Error handling for duplicates  
✅ Email validation  
✅ Auto-close after 2 seconds  
✅ Calendly integration for "Try for free" buttons  

---

## 🐛 Troubleshooting

### Error: 401 Unauthorized
- ❌ Wrong anon key or not set
- ✅ **Fix**: Update `src/lib/supabase.ts` with correct anon key

### Error: "This email is already on the waitlist!"
- ❌ Email already exists in database
- ✅ **Fix**: This is working correctly! Try a different email

### Error: "Something went wrong"
- ❌ RLS policies not set up correctly
- ✅ **Fix**: Run the RLS policy SQL commands above

### Modal doesn't close after success
- ❌ JavaScript error in console
- ✅ **Fix**: Check browser console for errors

---

## 📁 Files Modified

| File | Purpose |
|------|---------|
| `src/lib/supabase.ts` | Supabase client configuration |
| `src/screens/MacbookPro/MacbookPro.tsx` | Waitlist modal + form logic |
| `package.json` | Added `@supabase/supabase-js` dependency |

---

## 🚀 Next Steps (Optional)

### Email Notifications
Consider adding email confirmations when someone joins:
- Use Supabase Database Webhooks
- Trigger on INSERT to `agen8_wait` table
- Send welcome email via SendGrid/Resend/etc.

### Admin Dashboard
View all waitlist signups:
```sql
SELECT 
  email, 
  created_at,
  COUNT(*) OVER () as total_signups
FROM agen8_wait
ORDER BY created_at DESC;
```

### Export to CSV
```sql
COPY agen8_wait TO '/path/to/waitlist.csv' CSV HEADER;
```

---

## 💡 Need Help?

1. Check the [Supabase Documentation](https://supabase.com/docs)
2. Verify your RLS policies in the Supabase dashboard
3. Check browser console for errors (F12 → Console)

---

**Once you add the anon key, everything will work perfectly! 🎉**
