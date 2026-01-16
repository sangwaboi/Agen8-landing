import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { supabase } from "../../lib/supabase";

const socialLinks = [
  {
    icon: "https://c.animaapp.com/mk3i7h91OjH2GA/img/line-md-instagram.svg",
    alt: "Instagram",
  },
  {
    icon: "https://c.animaapp.com/mk3i7h91OjH2GA/img/prime-twitter.svg",
    alt: "Twitter",
  },
  {
    icon: "https://c.animaapp.com/mk3i7h91OjH2GA/img/mdi-linkedin.svg",
    alt: "LinkedIn",
  },
];

export const MacbookPro = (): React.JSX.Element => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [currentExampleIndex, setCurrentExampleIndex] = useState(0);

  // Rotating example texts
  const exampleTexts = [
    "E.g., build automated CRM for Gmail/Outlook: categorizes emails by sentiment, drafts AI replies with upsells, logs to dashboard, sends follow-ups, escalates via Slack, runs daily campaigns at 10 a.m. UTC.",
    "E.g., create an automated Notion manager syncing Calendar/Trello: updates project databases, generates weekly reports, archives after 90 days, sends daily reminders at 8 a.m., backs up to Drive nightly.",
    "E.g., develop an automated finance optimizer linking banks/investments: tracks transactions with fraud detection, forecasts flow, reallocates funds, invests change, emails weekly summaries, and auto-pays bills on the 1st."
  ];

  // Rotate example text every 4 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentExampleIndex((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Handle Enter key press in search input
  const handleSearchKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      setIsWaitlistOpen(true);
    }
  };

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      // Insert email into Supabase
      const { error } = await supabase
        .from("agen8_wait")
        .insert([{ email }])
        .select();

      if (error) {
        // Check for duplicate email error
        if (error.code === "23505") {
          setErrorMessage("This email is already on the waitlist!");
        } else {
          setErrorMessage("Something went wrong. Please try again.");
        }
        setSubmitStatus("error");
        setIsLoading(false);
        return;
      }

      // Success!
      setSubmitStatus("success");
      setIsLoading(false);

      // Reset and close after 2 seconds
      setTimeout(() => {
        setEmail("");
        setSubmitStatus("idle");
        setIsWaitlistOpen(false);
      }, 2000);
    } catch (err) {
      console.error("Error submitting to waitlist:", err);
      setErrorMessage("Network error. Please check your connection.");
      setSubmitStatus("error");
      setIsLoading(false);
    }
  };

  return (
    <div
      className="bg-[#fee7d2] overflow-hidden w-full lg:min-w-[1512px] lg:min-h-[4254px] relative"
      data-model-id="1:46"
    >
      {/* Background blur effects - Visible on all devices */}
      <div className="absolute top-[600px] lg:top-[1215px] left-[50%] -translate-x-1/2 lg:left-[-32px] lg:translate-x-0 w-[400px] lg:w-[1012px] h-[300px] lg:h-[568px]">
        <div className="top-0 left-0 w-[300px] lg:w-[761px] h-[200px] lg:h-[506px] rounded-[150px/100px] lg:rounded-[380.5px/253px] absolute bg-[#fb6d26] blur-[80px] lg:blur-[150px] opacity-70 lg:opacity-100" />
        <div className="top-[30px] lg:top-[62px] left-[100px] lg:left-[251px] w-[300px] lg:w-[761px] h-[200px] lg:h-[506px] rounded-[150px/100px] lg:rounded-[380.5px/253px] absolute bg-[#fb6d26] blur-[80px] lg:blur-[150px] opacity-70 lg:opacity-100" />
      </div>

      <img
        className="hidden lg:block absolute top-[1019px] left-[calc(50.00%_-_756px)] w-[888px] h-[982px]"
        alt="Group"
        src="https://c.animaapp.com/mk3i7h91OjH2GA/img/group-86.png"
      />

      <div className="absolute top-[1400px] lg:top-[2860px] left-[50%] -translate-x-1/2 lg:left-[226px] lg:translate-x-0 w-[500px] lg:w-[1296px] h-[300px] lg:h-[537px]">
        <div className="absolute top-[15px] lg:top-[31px] left-[200px] lg:left-[535px] w-[300px] lg:w-[761px] h-[200px] lg:h-[506px] bg-[#fb6d26] rounded-[150px/100px] lg:rounded-[380.5px/253px] rotate-180 blur-[80px] lg:blur-[150px] opacity-70 lg:opacity-100" />
        <div className="top-0 left-0 w-[300px] lg:w-[761px] h-[200px] lg:h-[506px] rounded-[150px/100px] lg:rounded-[380.5px/253px] rotate-180 absolute bg-[#fb6d26] blur-[80px] lg:blur-[150px] opacity-70 lg:opacity-100" />
      </div>

      <div className="hidden lg:block absolute left-[-75px] bottom-0 w-[1662px] h-[982px]">
        <div className="absolute top-[295px] left-[calc(50.00%_-_831px)] w-[1662px] h-[687px] blur-[50px] bg-[linear-gradient(0deg,rgba(255,118,39,1)_0%,rgba(255,255,255,0)_100%)]" />
        <img
          className="absolute top-0 left-[calc(50.00%_-_750px)] w-[1500px] h-[982px] object-cover"
          alt="Image"
          src="https://c.animaapp.com/mk3i7h91OjH2GA/img/image-17.png"
        />
      </div>

      {/* Top hero blur - Visible on all devices */}
      <div className="top-[100px] lg:top-[226px] left-[50%] -translate-x-1/2 lg:left-[calc(50.00%_-_406px)] lg:translate-x-0 w-[400px] lg:w-[844px] h-[250px] lg:h-[582px] rounded-[200px/125px] lg:rounded-[422px/291px] absolute bg-[#fb6d26] blur-[80px] lg:blur-[150px] opacity-60 lg:opacity-100" />

      <img
        className="hidden lg:block absolute top-0 left-[calc(50.00%_-_460px)] w-[982px] h-[936px] translate-y-[-1rem] animate-fade-in opacity-0"
        alt="Group"
        src="https://c.animaapp.com/mk3i7h91OjH2GA/img/group-5.png"
      />

      <img
        className="hidden lg:block absolute top-[2621px] left-[calc(50.00%_-_149px)] w-[905px] h-[982px]"
        alt="Group"
        src="https://c.animaapp.com/mk3i7h91OjH2GA/img/group-87.png"
      />

      {/* Header */}
      <header className="lg:absolute relative top-0 lg:top-[41px] left-0 lg:left-[54px] right-0 lg:right-[54px] flex flex-row items-center justify-between px-4 lg:px-0 py-6 lg:py-0 translate-y-[-1rem] animate-fade-in opacity-0">
        <div className="[font-family:'Libre_Baskerville',Helvetica] font-normal text-transparent text-2xl lg:text-4xl leading-[normal]">
          <span className="text-black tracking-[-1.68px]">agen</span>
          <span className="italic text-[#ff5500] tracking-[0]">8</span>
        </div>

        {/* Desktop buttons - hidden on mobile */}
        <nav className="hidden lg:flex items-center gap-[34px]">
          <Button
            variant="outline"
            onClick={() => setIsWaitlistOpen(true)}
            className="h-[53px] bg-white rounded-xl shadow-[0px_2px_4px_#00000040] [font-family:'Microsoft_Sans_Serif-Regular',Helvetica] font-normal text-black text-base hover:bg-gray-100 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 px-6"
          >
            <span>Join the waitlist</span>
            <img src="/resources/Arrow right.svg" alt="arrow" className="w-5 h-5" />
          </Button>
          <Button
            asChild
            className="h-[53px] bg-[#fb6d26] rounded-xl shadow-[0px_2px_4px_#00000040] [font-family:'Microsoft_Sans_Serif-Regular',Helvetica] font-normal text-black text-base hover:bg-[#ff7d36] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 px-6"
          >
            <a href="https://calendly.com/sangwavishvendra/agen8" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <span>Try for free</span>
              <img src="/resources/Arrow right.svg" alt="arrow" className="w-5 h-5" />
            </a>
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="lg:absolute relative top-0 lg:top-52 left-0 lg:left-[calc(50.00%_-_433px)] w-full lg:w-[867px] px-4 lg:px-0 mt-4 lg:mt-0 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <h1 className="[-webkit-text-stroke:0.5px_#fbc49c] [font-family:'Libre_Baskerville',Helvetica] font-normal text-transparent text-[32px] sm:text-[48px] lg:text-[64px] text-center leading-[38px] sm:leading-[52px] lg:leading-[64px]">
          <span className="italic text-black tracking-[-2.5px] sm:tracking-[-3.5px] lg:tracking-[-4.92px] leading-[40px] sm:leading-[55px] lg:leading-[75.1px]">
            infinite
          </span>
          <span className="font-bold text-black text-[28px] sm:text-[42px] lg:text-[55px] tracking-[0] leading-[32px] sm:leading-[44px] lg:leading-[52.0px]">
            &nbsp;
          </span>
          <span className="[font-family:'Microsoft_Sans_Serif-Regular',Helvetica] text-black text-[28px] sm:text-[42px] lg:text-[55px] tracking-[-1px] sm:tracking-[-1.2px] lg:tracking-[-1.51px] leading-[35px] sm:leading-[48px] lg:leading-[63.0px]">
            POSSIBILITIES
            <br />
            SINGLE
          </span>
          <span className="text-black text-[28px] sm:text-[42px] lg:text-[55px] tracking-[0] leading-[32px] sm:leading-[44px] lg:leading-[52.0px]">
            &nbsp;
          </span>
          <span className="italic text-black tracking-[-2.3px] sm:tracking-[-3.3px] lg:tracking-[-4.51px] leading-[40px] sm:leading-[55px] lg:leading-[75.1px]">
            prompt
          </span>
          <span className="text-black tracking-[0] leading-[40px] sm:leading-[55px] lg:leading-[75.1px]">.</span>
        </h1>
      </section>

      {/* Description */}
      <p className="lg:absolute relative top-0 lg:top-[396px] left-0 lg:left-[calc(50.00%_-_420px)] w-full lg:w-auto px-4 lg:px-0 mt-6 lg:mt-0 max-w-[840px] mx-auto [font-family:'Microsoft_Sans_Serif-Regular',Helvetica] font-normal text-black text-sm sm:text-base lg:text-lg text-center tracking-[0] leading-[normal] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        <span className="[font-family:'Microsoft_Sans_Serif-Regular',Helvetica] font-normal text-black text-sm sm:text-base lg:text-lg tracking-[0]">
          Enable your limitless potential with{" "}
        </span>
        <span className="[font-family:'Libre_Baskerville',Helvetica] italic">
          agen8
        </span>
        <span className="[font-family:'Microsoft_Sans_Serif-Regular',Helvetica] font-normal text-black text-sm sm:text-base lg:text-lg tracking-[0]">
          , You can now automate infinite number of apps simultaneously.
        </span>
      </p>

      {/* Search Card */}
      <div className="lg:absolute relative top-0 lg:top-[474px] left-0 lg:left-[calc(50.00%_-_394px)] w-full lg:w-[789px] px-4 lg:px-0 mt-8 lg:mt-0 flex flex-col translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
        <div className="w-full lg:w-[280px] h-11 flex bg-[#ffdfc4] shadow-[0px_-0.5px_4px_#00000040] items-center px-3 gap-2 rounded-t-[8px] lg:rounded-t-[0px]">
          <img src="/resources/infiinnnity.png" alt="infinity" className="w-8 h-8 lg:w-10 lg:h-10" />
          <div className="[font-family:'Microsoft_Sans_Serif-Regular',Helvetica] font-normal text-black text-xs lg:text-sm tracking-[0] leading-[normal] whitespace-nowrap">
            What are you looking for?
          </div>
        </div>

        <div className="w-full lg:ml-1 lg:w-[793px] self-center relative min-h-[150px] lg:h-[177px]">
          <Card className="lg:absolute relative top-0 left-0 lg:left-[calc(50.00%_-_396px)] w-full lg:w-[789px] min-h-[150px] lg:h-[177px] bg-white rounded-[0px_20px_20px_20px] shadow-[0px_4px_12px_#00000040] border-0">
            <CardContent className="p-0 relative h-full">
              <textarea
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyPress={handleSearchKeyPress}
                placeholder={exampleTexts[currentExampleIndex]}
                className="w-full h-full p-4 lg:absolute lg:top-[20px] lg:left-[25px] lg:w-[710px] lg:h-[130px] [font-family:'Microsoft_Sans_Serif-Regular',Helvetica] font-normal text-black text-sm lg:text-base tracking-[0] leading-[20px] lg:leading-[24px] bg-transparent border-0 outline-none resize-none placeholder:text-[#9b9b9b] placeholder:transition-opacity placeholder:duration-500 lg:p-0"
                style={{
                  scrollbarWidth: 'thin',
                  scrollbarColor: '#e0e0e0 transparent'
                }}
              />
            </CardContent>
          </Card>
          
          {/* Send Button with Eclipse */}
          <button
            onClick={() => setIsWaitlistOpen(true)}
            className="absolute bottom-2 right-2 lg:bottom-4 lg:right-4 w-[40px] h-[40px] lg:w-[45px] lg:h-[45px] group hover:scale-110 transition-transform duration-300 cursor-pointer z-10"
          >
            <img src="/resources/Ellipse 9.svg" alt="circle" className="absolute inset-0 w-full h-full" />
            <img src="/resources/Send.svg" alt="send" className="absolute inset-0 w-5 h-5 lg:w-6 lg:h-6 m-auto group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Mobile-only buttons below search box */}
      <div className="lg:hidden flex flex-row items-center gap-3 px-4 mt-6">
        <Button
          variant="outline"
          onClick={() => setIsWaitlistOpen(true)}
          className="flex-1 h-[48px] bg-white rounded-xl shadow-[0px_2px_4px_#00000040] [font-family:'Microsoft_Sans_Serif-Regular',Helvetica] font-normal text-black text-sm hover:bg-gray-100 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
        >
          <span>Join the waitlist</span>
          <img src="/resources/Arrow right.svg" alt="arrow" className="w-4 h-4" />
        </Button>
        <Button
          asChild
          className="flex-1 h-[48px] bg-[#fb6d26] rounded-xl shadow-[0px_2px_4px_#00000040] [font-family:'Microsoft_Sans_Serif-Regular',Helvetica] font-normal text-black text-sm hover:bg-[#ff7d36] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
        >
          <a href="https://calendly.com/sangwavishvendra/agen8" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
            <span>Try for free</span>
            <img src="/resources/Arrow right.svg" alt="arrow" className="w-4 h-4" />
          </a>
        </Button>
      </div>

      {/* Unlimited integrations text */}
      <p className="lg:absolute relative top-0 lg:top-[728px] left-0 lg:left-[calc(50.00%_-_140px)] px-4 lg:px-0 mt-8 lg:mt-0 [font-family:'Libre_Baskerville',Helvetica] italic font-normal text-black text-sm lg:text-base text-center tracking-[0] leading-[normal]">
        Unlimited integrations. Zero constraints.
      </p>

      {/* Why agen8? Section */}
      <section className="lg:absolute relative top-0 lg:top-[900px] left-0 lg:left-[calc(50.00%_-_657px)] w-full lg:w-[1315px] min-h-[500px] lg:h-[715px] px-4 lg:px-0 mx-0 lg:mx-auto mt-12 lg:mt-0 flex items-center justify-center">
        <div className="w-full max-w-[calc(100%-32px)] lg:max-w-none lg:w-full bg-white rounded-[20px] shadow-[0px_4px_12px_#00000040] flex flex-col items-center pb-8 lg:pb-0">
        <h2 className="mt-6 lg:mt-[52px] px-4 lg:px-0 [font-family:'Libre_Baskerville',Helvetica] font-normal text-black text-[28px] lg:text-[40px] text-center tracking-[0] leading-[normal]">
          <span className="tracking-[-1.3px] lg:tracking-[-1.87px]">Why agen</span>
          <span className="italic text-[#ff5500] tracking-[0]">8</span>
          <span className="tracking-[-1.3px] lg:tracking-[-1.87px]"> ?</span>
        </h2>

        <p className="mt-4 lg:mt-6 px-4 lg:px-0 [font-family:'Microsoft_Sans_Serif-Regular',Helvetica] font-normal text-black text-sm lg:text-base text-center tracking-[0] leading-[normal]">
          Single Prompt • Node Formation • Complex Workflows
        </p>

        {/* Video section with border and label */}
        <div className="mt-6 lg:mt-8 relative px-4 lg:px-0 w-full lg:w-auto flex justify-center">
          <div className="relative w-full max-w-[641px]">
            {/* "Hear it directly from the founder" label box */}
            <div className="absolute -top-[12px] lg:-top-[15px] left-1/2 transform -translate-x-1/2 z-10 w-[220px] lg:w-[262px] h-[48px] lg:h-[59px] bg-[#ffe0c5] rounded-[8px] lg:rounded-[12px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex items-center justify-center gap-2 px-3 lg:px-4">
              <img
                className="w-5 h-5 lg:w-6 lg:h-6"
                alt="Video"
                src="/resources/majesticons_video.svg"
              />
              <p className="[font-family:'Microsoft_Sans_Serif-Regular',Helvetica] font-normal text-black text-xs lg:text-sm tracking-[0] leading-[normal] whitespace-nowrap">
                Hear it directly from the founder
              </p>
            </div>

            {/* Video box with border */}
            <div className="w-full aspect-video lg:w-[641px] lg:h-[367px] rounded-[8px] lg:rounded-[12px] border-[8px] lg:border-[12px] border-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] overflow-hidden">
              {/* Video Placeholder */}
              <div className="w-full h-full bg-[#949494] rounded-[4px] lg:rounded-[8px] flex items-center justify-center relative group cursor-pointer hover:bg-[#858585] transition-colors">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 lg:w-10 lg:h-10 text-[#949494] ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Button
          asChild
          className="mt-6 lg:mt-8 h-[48px] lg:h-[53px] px-6 lg:px-8 bg-[#fb6d26] rounded-xl shadow-[0px_2px_4px_#00000040] hover:bg-[#ff7d36] hover:scale-105 transition-all duration-300 flex items-center gap-2 lg:gap-3"
        >
          <a href="https://calendly.com/sangwavishvendra/agen8" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 lg:gap-3">
            <span className="[font-family:'Microsoft_Sans_Serif-Regular',Helvetica] font-normal text-black text-sm lg:text-base whitespace-nowrap">
              Start building
            </span>
            <img src="/resources/Arrow right.svg" alt="arrow" className="w-4 h-4 lg:w-5 lg:h-5" />
          </a>
        </Button>
        </div>
      </section>

      {/* Built with teams section */}
      <section className="lg:absolute relative top-0 lg:top-[1900px] left-0 right-0 flex flex-col items-center overflow-hidden mt-12 lg:mt-0 px-4 lg:px-0">
        <h3 className="[font-family:'Microsoft_Sans_Serif-Regular',Helvetica] font-normal text-black text-[24px] lg:text-[36px] text-center tracking-[0] leading-[normal] font-[400]">
          <span>Built with </span>
          <span className="[font-family:'Libre_Baskerville',Helvetica] italic text-[#ff5500] text-[28px] lg:text-[40px] tracking-[-2px] lg:tracking-[-3.6px] font-[400]">
            teams
          </span>
          <span> who move fast</span>
        </h3>

        {/* Company Logos - First Row (Moving Right) */}
        <div className="relative mt-8 lg:mt-16 w-full overflow-hidden">
          <div className="flex animate-marquee gap-6 lg:gap-12 [--duration:25s]">
            {/* Repeat logos multiple times to fill screen */}
            {[...Array(4)].map((_, setIndex) => (
              <React.Fragment key={setIndex}>
                <img
                  className="h-10 lg:h-16 object-contain opacity-80 hover:opacity-100 hover:brightness-75 transition-all flex-shrink-0 w-24 lg:w-32"
                  alt="build3"
                  src="/resources/build3 logo 1.png"
                />
                <img
                  className="h-10 lg:h-16 object-contain opacity-80 hover:opacity-100 hover:brightness-75 transition-all flex-shrink-0 w-28 lg:w-40"
                  alt="emergent"
                  src="/resources/emergent-logo-new 1.svg"
                />
                <img
                  className="h-10 lg:h-16 object-contain opacity-80 hover:opacity-100 hover:brightness-75 transition-all flex-shrink-0 w-24 lg:w-32"
                  alt="ACKO"
                  src="/resources/ACKO(logo).png"
                />
                <img
                  className="h-10 lg:h-16 object-contain opacity-80 hover:opacity-100 hover:brightness-75 transition-all flex-shrink-0 w-28 lg:w-40"
                  alt="YourERPCoach.Com"
                  src="/resources/YourERPcoach(logo).png"
                />
                <img
                  className="h-10 lg:h-16 object-contain opacity-80 hover:opacity-100 hover:brightness-75 transition-all flex-shrink-0 w-24 lg:w-32"
                  alt="OZU"
                  src="/resources/ozu-logo-white 1.png"
                />
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Company Logos - Second Row (Moving Left) */}
        <div className="relative mt-6 lg:mt-12 w-full overflow-hidden">
          <div className="flex animate-marquee gap-6 lg:gap-12 [animation-direction:reverse] [--duration:25s]">
            {/* Repeat logos multiple times to fill screen */}
            {[...Array(5)].map((_, setIndex) => (
              <React.Fragment key={setIndex}>
                <img
                  className="h-10 lg:h-16 object-contain opacity-80 hover:opacity-100 hover:brightness-75 transition-all flex-shrink-0 w-28 lg:w-36"
                  alt="Classplus"
                  src="/resources/classplus(logo).png"
                />
                <img
                  className="h-10 lg:h-16 object-contain opacity-80 hover:opacity-100 hover:brightness-75 transition-all flex-shrink-0 w-28 lg:w-40"
                  alt="bookmyshow"
                  src="/resources/bookmyshow(logo).png"
                />
                <img
                  className="h-10 lg:h-16 object-contain opacity-80 hover:opacity-100 hover:brightness-75 transition-all flex-shrink-0 w-24 lg:w-32"
                  alt="Maker's Asylum"
                  src="/resources/logo-1 1.svg"
                />
                <img
                  className="h-10 lg:h-16 object-contain opacity-80 hover:opacity-100 hover:brightness-75 transition-all flex-shrink-0 w-28 lg:w-40"
                  alt="Dodo Payments"
                  src="/resources/DodoPayments(logo).png"
                />
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Bottom Text */}
        <p className="mt-8 lg:mt-16 px-4 lg:px-0 [font-family:'Microsoft_Sans_Serif-Regular',Helvetica] font-normal text-black text-sm lg:text-base text-center tracking-[0] leading-[normal]">
          <span>From startups to enterprises, </span>
          <span className="[font-family:'Libre_Baskerville',Helvetica] italic">agen8</span>
          <span> powers real work.</span>
        </p>
      </section>

      {/* Not just these apps section */}
      <section className="lg:absolute relative top-0 lg:top-[2400px] left-0 lg:left-[calc(50.00%_-_657px)] w-full lg:w-[1315px] flex flex-col items-center mt-12 lg:mt-0 px-4 lg:px-0">
        {/* Main container with heading and image inside */}
        <div className="w-full max-w-[calc(100%-32px)] lg:max-w-none lg:w-[1315px] min-h-[400px] lg:h-[715px] bg-[#fbfbfa] rounded-[12px] lg:rounded-[20px] shadow-[0px_4px_12px_rgba(0,0,0,0.25)] overflow-hidden flex flex-col">
          {/* Header section inside the box */}
          <div className="pt-6 lg:pt-12 px-4 lg:px-20 pb-4 lg:pb-6 text-center">
            <h3 className="[font-family:'Microsoft_Sans_Serif-Regular',Helvetica] font-normal text-black text-[22px] lg:text-[36px] tracking-[0] leading-[normal] mb-2 lg:mb-4">
              <span>Not just these apps. Literally </span>
              <span className="[font-family:'Libre_Baskerville',Helvetica] italic text-[#ff5500]">any app</span>
              <span>.</span>
            </h3>

            <p className="[font-family:'Microsoft_Sans_Serif-Regular',Helvetica] font-normal text-black text-sm lg:text-base tracking-[0] leading-[normal]">
              <span>Connect </span>
              <span className="[font-family:'Libre_Baskerville',Helvetica] italic">agen8</span>
              <span> with any tool your workflow needs – today or tomorrow.</span>
            </p>
          </div>

          {/* App Integration Image fills remaining space */}
          <div className="flex-1 flex items-center justify-center px-4 lg:px-20 pb-4 lg:pb-8 overflow-hidden">
            <img
              className="w-full h-full object-cover scale-110 lg:scale-125"
              alt="App Integrations"
              src="/resources/anyAPP_image.png"
            />
          </div>
        </div>

        {/* Bottom text outside the box */}
        <p className="mt-4 lg:mt-8 px-4 lg:px-0 [font-family:'Microsoft_Sans_Serif-Regular',Helvetica] font-normal text-black text-sm lg:text-base text-center tracking-[0] leading-[normal]">
          <span>Don't see your tool? Good. </span>
          <span className="[font-family:'Libre_Baskerville',Helvetica] italic">agen8</span>
          <span> doesn't need it listed.</span>
        </p>
      </section>

      {/* CTA Section with agen8 text */}
      <section className="lg:absolute relative top-0 lg:top-[3400px] left-0 lg:left-[calc(50.00%_-_300px)] w-full lg:w-[600px] flex flex-col items-center gap-6 lg:gap-8 mt-12 lg:mt-0 px-4 lg:px-0">
        <h2 className="[font-family:'Libre_Baskerville',Helvetica] font-normal text-black text-3xl lg:text-5xl text-center tracking-[0] leading-[normal]">
          <span className="tracking-[-1.5px] lg:tracking-[-2.24px]">agen</span>
          <span className="text-[36px] lg:text-[52px] tracking-[-1.8px] lg:tracking-[-2.43px] [font-family:'Libre_Baskerville',Helvetica] italic text-[#ff5500]">
            8
          </span>
        </h2>

        <p className="relative w-full lg:w-fit [font-family:'Microsoft_Sans_Serif-Regular',Helvetica] font-normal text-black text-sm lg:text-base text-center tracking-[0] leading-[normal] px-4 lg:px-0">
          <span className="[font-family:'Microsoft_Sans_Serif-Regular',Helvetica] font-normal text-black text-sm lg:text-base tracking-[0]">
            Replace your pre-existing Al flows with{" "}
          </span>
          <span className="[font-family:'Libre_Baskerville',Helvetica]">
            agen
          </span>
          <span className="[font-family:'Libre_Baskerville',Helvetica] italic">
            8
          </span>
          <span className="[font-family:'Microsoft_Sans_Serif-Regular',Helvetica] font-normal text-black text-sm lg:text-base tracking-[0]">
            , which is more precise, reliable, and faster.
          </span>
        </p>

        <Button
          onClick={() => setIsWaitlistOpen(true)}
          className="relative w-full lg:w-[242px] max-w-[242px] h-[58px] lg:h-[69px] bg-white rounded-xl shadow-[0px_2px_4px_#00000040] hover:bg-gray-100 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 lg:gap-3"
        >
          <span className="text-lg lg:text-xl [font-family:'Microsoft_Sans_Serif-Regular',Helvetica] font-normal text-black tracking-[0] leading-[normal] whitespace-nowrap">
            Join the waitlist
          </span>
          <img src="/resources/Arrow right.svg" alt="arrow" className="w-5 h-5 lg:w-6 lg:h-6" />
        </Button>
      </section>

      {/* Footer */}
      <footer className="lg:absolute relative top-0 lg:top-[3750px] left-0 lg:left-[98px] right-0 lg:right-[98px] mt-12 lg:mt-0 px-4 lg:px-0 pb-8 lg:pb-0">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-0">
          <div className="flex flex-col items-center lg:items-start">
            <div className="[font-family:'Libre_Baskerville',Helvetica] font-normal text-black text-3xl lg:text-4xl leading-[normal] mb-6 lg:mb-[58px]">
              <span className="tracking-[-1.4px] lg:tracking-[-1.68px]">agen</span>
              <span className="italic tracking-[0]">8</span>
            </div>

            <p className="[font-family:'Microsoft_Sans_Serif-Regular',Helvetica] font-normal text-black text-sm lg:text-base text-center lg:text-left tracking-[0] leading-[normal] mb-6 lg:mb-[61px] max-w-[300px] lg:whitespace-nowrap">
              Unlock infinite possibilities with a single prompt
            </p>

            <div className="flex items-center gap-[15px]">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-10 h-10 lg:w-11 lg:h-11 p-0 hover:opacity-80 transition-opacity"
                >
                  <img
                    className="w-full h-full"
                    alt={social.alt}
                    src={social.icon}
                  />
                </Button>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-end gap-4 lg:gap-[27px]">
            <p className="[font-family:'Microsoft_Sans_Serif-Regular',Helvetica] font-normal text-black text-sm lg:text-base text-center lg:text-right tracking-[0] leading-[normal] whitespace-nowrap">
              Ready to See It in Action?
            </p>

            <Button
              asChild
              className="w-full lg:w-[194px] max-w-[194px] h-[50px] lg:h-[55px] bg-white rounded-xl shadow-[0px_2px_4px_#00000040] hover:bg-gray-100 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <a href="https://calendly.com/sangwavishvendra/agen8" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <span className="[font-family:'Microsoft_Sans_Serif-Regular',Helvetica] font-normal text-black text-sm lg:text-base tracking-[0] leading-[normal] whitespace-nowrap">
                  Try for free
                </span>
                <img src="/resources/Arrow right.svg" alt="arrow" className="w-5 h-5 lg:w-6 lg:h-6" />
              </a>
            </Button>
          </div>
        </div>
      </footer>

      {/* Waitlist Modal */}
      {isWaitlistOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in px-4">
          <div className="bg-white rounded-2xl p-6 lg:p-8 w-full max-w-[450px] shadow-2xl relative animate-fade-in">
            <button
              onClick={() => {
                setIsWaitlistOpen(false);
                setSubmitStatus("idle");
                setErrorMessage("");
                setEmail("");
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold transition-colors"
            >
              ×
            </button>
            
            {submitStatus === "success" ? (
              // Success State
              <div className="text-center py-6 lg:py-8">
                <div className="mb-4 flex justify-center">
                  <div className="w-14 h-14 lg:w-16 lg:h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-7 h-7 lg:w-8 lg:h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <h2 className="text-xl lg:text-2xl font-bold text-black mb-2 [font-family:'Libre_Baskerville',Helvetica]">
                  You're on the list!
                </h2>
                <p className="text-sm lg:text-base text-gray-600 [font-family:'Microsoft_Sans_Serif-Regular',Helvetica]">
                  Thanks for joining the <span className="italic text-[#ff5500] font-semibold">agen8</span> waitlist.<br />
                  We'll reach out to you at <span className="font-semibold">{email}</span> soon!
                </p>
              </div>
            ) : (
              // Form State
              <>
                <h2 className="text-xl lg:text-2xl font-bold text-black mb-2 [font-family:'Libre_Baskerville',Helvetica]">
                  Join the <span className="italic text-[#ff5500]">agen8</span> waitlist
                </h2>
                
                <p className="text-sm lg:text-base text-gray-600 mb-4 lg:mb-6 [font-family:'Microsoft_Sans_Serif-Regular',Helvetica]">
                  Be the first to know when we launch. Get early access and exclusive updates.
                </p>
                
                <form onSubmit={handleWaitlistSubmit} className="space-y-4">
                  <div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setSubmitStatus("idle");
                        setErrorMessage("");
                      }}
                      placeholder="Enter your email address"
                      required
                      disabled={isLoading}
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors [font-family:'Microsoft_Sans_Serif-Regular',Helvetica] ${
                        submitStatus === "error"
                          ? "border-red-500 focus:border-red-600"
                          : "border-gray-200 focus:border-[#ff5500]"
                      } disabled:opacity-50 disabled:cursor-not-allowed`}
                    />
                    
                    {submitStatus === "error" && errorMessage && (
                      <p className="mt-2 text-sm text-red-600 [font-family:'Microsoft_Sans_Serif-Regular',Helvetica]">
                        {errorMessage}
                      </p>
                    )}
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-12 bg-[#fb6d26] hover:bg-[#ff7d36] hover:scale-105 rounded-xl text-white font-medium transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Joining...</span>
                      </>
                    ) : (
                      <>
                        <span>Join Waitlist</span>
                        <img src="/resources/Arrow right.svg" alt="arrow" className="w-5 h-5 brightness-0 invert" />
                      </>
                    )}
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
