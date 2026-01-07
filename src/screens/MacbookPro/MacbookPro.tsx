import React, { useState } from "react";
import { ArrowRightIcon, VideoIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { supabase } from "../../lib/supabase";

const companyLogos = [
  {
    name: "SCATR",
    src: "https://c.animaapp.com/mk3i7h91OjH2GA/img/frame-3.svg",
  },
];

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

export const MacbookPro = (): JSX.Element => {
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
      const { data, error } = await supabase
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
      className="bg-[#fee7d2] overflow-hidden w-full min-w-[1512px] min-h-[4254px] relative"
      data-model-id="1:46"
    >
      {/* Background blur effects */}
      <div className="absolute top-[1215px] -left-8 w-[1012px] h-[568px]">
        <div className="top-0 left-0 w-[761px] h-[506px] rounded-[380.5px/253px] absolute bg-[#fb6d26] blur-[150px]" />
        <div className="top-[62px] left-[251px] w-[761px] h-[506px] rounded-[380.5px/253px] absolute bg-[#fb6d26] blur-[150px]" />
      </div>

      <img
        className="absolute top-[1019px] left-[calc(50.00%_-_756px)] w-[888px] h-[982px]"
        alt="Group"
        src="https://c.animaapp.com/mk3i7h91OjH2GA/img/group-86.png"
      />

      <div className="absolute top-[2860px] left-[226px] w-[1296px] h-[537px]">
        <div className="absolute top-[31px] left-[535px] w-[761px] h-[506px] bg-[#fb6d26] rounded-[380.5px/253px] rotate-180 blur-[150px]" />
        <div className="top-0 left-0 w-[761px] h-[506px] rounded-[380.5px/253px] rotate-180 absolute bg-[#fb6d26] blur-[150px]" />
      </div>

      <div className="absolute left-[-75px] bottom-0 w-[1662px] h-[982px]">
        <div className="absolute top-[295px] left-[calc(50.00%_-_831px)] w-[1662px] h-[687px] blur-[50px] bg-[linear-gradient(0deg,rgba(255,118,39,1)_0%,rgba(255,255,255,0)_100%)]" />
        <img
          className="absolute top-0 left-[calc(50.00%_-_750px)] w-[1500px] h-[982px] object-cover"
          alt="Image"
          src="https://c.animaapp.com/mk3i7h91OjH2GA/img/image-17.png"
        />
      </div>

      <div className="top-[226px] left-[calc(50.00%_-_406px)] w-[844px] h-[582px] rounded-[422px/291px] absolute bg-[#fb6d26] blur-[150px]" />

      <img
        className="absolute top-0 left-[calc(50.00%_-_460px)] w-[982px] h-[936px] translate-y-[-1rem] animate-fade-in opacity-0"
        alt="Group"
        src="https://c.animaapp.com/mk3i7h91OjH2GA/img/group-5.png"
      />

      <img
        className="absolute top-[2621px] left-[calc(50.00%_-_149px)] w-[905px] h-[982px]"
        alt="Group"
        src="https://c.animaapp.com/mk3i7h91OjH2GA/img/group-87.png"
      />

      {/* Header */}
      <header className="absolute top-[41px] left-[54px] right-[54px] flex items-center justify-between translate-y-[-1rem] animate-fade-in opacity-0">
        <div className="[font-family:'Libre_Baskerville',Helvetica] font-normal text-transparent text-4xl leading-[normal]">
          <span className="text-black tracking-[-1.68px]">agen</span>
          <span className="italic text-[#ff5500] tracking-[0]">8</span>
        </div>

        <nav className="flex items-center gap-[34px]">
          <Button
            variant="outline"
            onClick={() => setIsWaitlistOpen(true)}
            className="h-[53px] bg-white rounded-xl shadow-[0px_2px_4px_#00000040] [font-family:'Microsoft_Sans_Serif-Regular',Helvetica] font-normal text-black text-base hover:bg-gray-100 hover:scale-105 transition-all duration-300 flex items-center gap-2 px-6"
          >
            <span>Join the waitlist</span>
            <img src="/resources/Arrow right.svg" alt="arrow" className="w-5 h-5" />
          </Button>
          <Button
            asChild
            className="h-[53px] bg-[#fb6d26] rounded-xl shadow-[0px_2px_4px_#00000040] [font-family:'Microsoft_Sans_Serif-Regular',Helvetica] font-normal text-black text-base hover:bg-[#ff7d36] hover:scale-105 transition-all duration-300 flex items-center gap-2 px-6"
          >
            <a href="https://calendly.com/sangwavishvendra/agen8" target="_blank" rel="noopener noreferrer">
              <span>Try for free</span>
              <img src="/resources/Arrow right.svg" alt="arrow" className="w-5 h-5" />
            </a>
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="absolute top-52 left-[calc(50.00%_-_433px)] w-[867px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <h1 className="[-webkit-text-stroke:0.5px_#fbc49c] [font-family:'Libre_Baskerville',Helvetica] font-normal text-transparent text-[64px] text-center leading-[64px]">
          <span className="italic text-black tracking-[-4.92px] leading-[75.1px]">
            infinite
          </span>
          <span className="font-bold text-black text-[55px] tracking-[0] leading-[52.0px]">
            &nbsp;
          </span>
          <span className="[font-family:'Microsoft_Sans_Serif-Regular',Helvetica] text-black text-[55px] tracking-[-1.51px] leading-[63.0px]">
            POSSIBILITIES
            <br />
            SINGLE
          </span>
          <span className="text-black text-[55px] tracking-[0] leading-[52.0px]">
            &nbsp;
          </span>
          <span className="italic text-black tracking-[-4.51px] leading-[75.1px]">
            prompt
          </span>
          <span className="text-black tracking-[0] leading-[75.1px]">.</span>
        </h1>
      </section>

      {/* Description */}
      <p className="absolute top-[396px] left-[calc(50.00%_-_420px)] [font-family:'Microsoft_Sans_Serif-Regular',Helvetica] font-normal text-black text-lg text-center tracking-[0] leading-[normal] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        <span className="[font-family:'Microsoft_Sans_Serif-Regular',Helvetica] font-normal text-black text-lg tracking-[0]">
          Enable your limitless potential with{" "}
        </span>
        <span className="[font-family:'Libre_Baskerville',Helvetica] italic">
          agen8
        </span>
        <span className="[font-family:'Microsoft_Sans_Serif-Regular',Helvetica] font-normal text-black text-lg tracking-[0]">
          , You can now automate infinite number of apps simultaneously.
        </span>
      </p>

      {/* Search Card */}
      <div className="absolute top-[474px] left-[calc(50.00%_-_394px)] w-[789px] h-[221px] flex flex-col translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
        <div className="w-[280px] h-11 flex bg-[#ffdfc4] shadow-[0px_-0.5px_4px_#00000040] items-center px-3 gap-2">
          <img src="/resources/infiinnnity.png" alt="infinity" className="w-10 h-10" />
          <div className="[font-family:'Microsoft_Sans_Serif-Regular',Helvetica] font-normal text-black text-sm tracking-[0] leading-[normal] whitespace-nowrap">
            What are you looking for?
          </div>
        </div>

        <div className="ml-1 h-[177px] w-[793px] self-center relative">
          <Card className="absolute top-0 left-[calc(50.00%_-_396px)] w-[789px] h-[177px] bg-white rounded-[0px_20px_20px_20px] shadow-[0px_4px_12px_#00000040] border-0">
            <CardContent className="p-0 relative">
              <textarea
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyPress={handleSearchKeyPress}
                placeholder={exampleTexts[currentExampleIndex]}
                className="absolute top-[20px] left-[25px] w-[710px] h-[130px] [font-family:'Microsoft_Sans_Serif-Regular',Helvetica] font-normal text-black text-base tracking-[0] leading-[24px] bg-transparent border-0 outline-none resize-none placeholder:text-[#9b9b9b] placeholder:transition-opacity placeholder:duration-500 p-0"
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
            className="absolute bottom-4 right-4 w-[45px] h-[45px] group hover:scale-110 transition-transform duration-300 cursor-pointer z-10"
          >
            <img src="/resources/Ellipse 9.svg" alt="circle" className="absolute inset-0 w-full h-full" />
            <img src="/resources/Send.svg" alt="send" className="absolute inset-0 w-6 h-6 m-auto group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Unlimited integrations text */}
      <p className="absolute top-[728px] left-[calc(50.00%_-_140px)] [font-family:'Libre_Baskerville',Helvetica] italic font-normal text-black text-base text-center tracking-[0] leading-[normal]">
        Unlimited integrations. Zero constraints.
      </p>

      {/* Why agen8? Section */}
      <section className="absolute top-[900px] left-[calc(50.00%_-_657px)] w-[1315px] h-[715px] bg-white rounded-[20px] shadow-[0px_4px_12px_#00000040] flex flex-col items-center">
        <h2 className="mt-[52px] [font-family:'Libre_Baskerville',Helvetica] font-normal text-black text-[40px] text-center tracking-[0] leading-[normal]">
          <span className="tracking-[-1.87px]">Why agen</span>
          <span className="italic text-[#ff5500] tracking-[0]">8</span>
          <span className="tracking-[-1.87px]"> ?</span>
        </h2>

        <p className="mt-6 [font-family:'Microsoft_Sans_Serif-Regular',Helvetica] font-normal text-black text-base text-center tracking-[0] leading-[normal]">
          Single Prompt • Node Formation • Complex Workflows
        </p>

        {/* Video section with border and label */}
        <div className="mt-8 relative">
          {/* "Hear it directly from the founder" label box */}
          <div className="absolute -top-[15px] left-1/2 transform -translate-x-1/2 z-10 w-[262px] h-[59px] bg-[#ffe0c5] rounded-[12px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex items-center justify-center gap-2 px-4">
            <img
              className="w-6 h-6"
              alt="Video"
              src="/resources/majesticons_video.svg"
            />
            <p className="[font-family:'Microsoft_Sans_Serif-Regular',Helvetica] font-normal text-black text-sm tracking-[0] leading-[normal]">
              Hear it directly from the founder
            </p>
          </div>

          {/* Video box with border */}
          <div className="w-[641px] h-[367px] rounded-[12px] border-[12px] border-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] overflow-hidden">
            {/* Video Placeholder */}
            <div className="w-full h-full bg-[#949494] rounded-[8px] flex items-center justify-center relative group cursor-pointer hover:bg-[#858585] transition-colors">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <VideoIcon className="w-10 h-10 text-[#949494] ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Button
          asChild
          className="mt-8 h-[53px] px-8 bg-[#fb6d26] rounded-xl shadow-[0px_2px_4px_#00000040] hover:bg-[#ff7d36] hover:scale-105 transition-all duration-300 flex items-center gap-3"
        >
          <a href="https://calendly.com/sangwavishvendra/agen8" target="_blank" rel="noopener noreferrer">
            <span className="[font-family:'Microsoft_Sans_Serif-Regular',Helvetica] font-normal text-black text-base">
              Start building
            </span>
            <img src="/resources/Arrow right.svg" alt="arrow" className="w-5 h-5" />
          </a>
        </Button>
      </section>

      {/* Built with teams section */}
      <section className="absolute top-[1900px] left-0 right-0 flex flex-col items-center overflow-hidden">
        <h3 className="[font-family:'Microsoft_Sans_Serif-Regular',Helvetica] font-normal text-black text-[36px] text-center tracking-[0] leading-[normal] font-[400]">
          <span>Built with </span>
          <span className="[font-family:'Libre_Baskerville',Helvetica] italic text-[#ff5500] text-[40px] tracking-[-3.6px] font-[400]">
            teams
          </span>
          <span> who move fast</span>
        </h3>

        {/* Company Logos - First Row (Moving Right) */}
        <div className="relative mt-16 w-full overflow-hidden">
          <div className="flex animate-marquee gap-12 [--duration:25s]">
            {/* Repeat logos multiple times to fill screen */}
            {[...Array(4)].map((_, setIndex) => (
              <React.Fragment key={setIndex}>
                <img
                  className="h-16 object-contain opacity-80 hover:opacity-100 hover:brightness-75 transition-all flex-shrink-0 w-32"
                  alt="build3"
                  src="/resources/build3 logo 1.png"
                />
                <img
                  className="h-16 object-contain opacity-80 hover:opacity-100 hover:brightness-75 transition-all flex-shrink-0 w-40"
                  alt="emergent"
                  src="/resources/emergent-logo-new 1.svg"
                />
                <img
                  className="h-16 object-contain opacity-80 hover:opacity-100 hover:brightness-75 transition-all flex-shrink-0 w-32"
                  alt="ACKO"
                  src="/resources/ACKO(logo).png"
                />
                <img
                  className="h-16 object-contain opacity-80 hover:opacity-100 hover:brightness-75 transition-all flex-shrink-0 w-40"
                  alt="YourERPCoach.Com"
                  src="/resources/YourERPcoach(logo).png"
                />
                <img
                  className="h-16 object-contain opacity-80 hover:opacity-100 hover:brightness-75 transition-all flex-shrink-0 w-32"
                  alt="OZU"
                  src="/resources/ozu-logo-white 1.png"
                />
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Company Logos - Second Row (Moving Left) */}
        <div className="relative mt-12 w-full overflow-hidden">
          <div className="flex animate-marquee gap-12 [animation-direction:reverse] [--duration:25s]">
            {/* Repeat logos multiple times to fill screen */}
            {[...Array(5)].map((_, setIndex) => (
              <React.Fragment key={setIndex}>
                <img
                  className="h-16 object-contain opacity-80 hover:opacity-100 hover:brightness-75 transition-all flex-shrink-0 w-36"
                  alt="Classplus"
                  src="/resources/classplus(logo).png"
                />
                <img
                  className="h-16 object-contain opacity-80 hover:opacity-100 hover:brightness-75 transition-all flex-shrink-0 w-40"
                  alt="bookmyshow"
                  src="/resources/bookmyshow(logo).png"
                />
                <img
                  className="h-16 object-contain opacity-80 hover:opacity-100 hover:brightness-75 transition-all flex-shrink-0 w-32"
                  alt="Maker's Asylum"
                  src="/resources/logo-1 1.svg"
                />
                <img
                  className="h-16 object-contain opacity-80 hover:opacity-100 hover:brightness-75 transition-all flex-shrink-0 w-40"
                  alt="Dodo Payments"
                  src="/resources/DodoPayments(logo).png"
                />
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Bottom Text */}
        <p className="mt-16 [font-family:'Microsoft_Sans_Serif-Regular',Helvetica] font-normal text-black text-base text-center tracking-[0] leading-[normal]">
          <span>From startups to enterprises, </span>
          <span className="[font-family:'Libre_Baskerville',Helvetica] italic">agen8</span>
          <span> powers real work.</span>
        </p>
      </section>

      {/* Not just these apps section */}
      <section className="absolute top-[2400px] left-[calc(50.00%_-_657px)] w-[1315px] flex flex-col items-center">
        {/* Main container with heading and image inside */}
        <div className="w-[1315px] h-[715px] bg-[#fbfbfa] rounded-[20px] shadow-[0px_4px_12px_rgba(0,0,0,0.25)] overflow-hidden flex flex-col">
          {/* Header section inside the box */}
          <div className="pt-12 px-20 pb-6 text-center">
            <h3 className="[font-family:'Microsoft_Sans_Serif-Regular',Helvetica] font-normal text-black text-[36px] tracking-[0] leading-[normal] mb-4">
              <span>Not just these apps. Literally </span>
              <span className="[font-family:'Libre_Baskerville',Helvetica] italic text-[#ff5500]">any app</span>
              <span>.</span>
            </h3>

            <p className="[font-family:'Microsoft_Sans_Serif-Regular',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal]">
              <span>Connect </span>
              <span className="[font-family:'Libre_Baskerville',Helvetica] italic">agen8</span>
              <span> with any tool your workflow needs – today or tomorrow.</span>
            </p>
          </div>

          {/* App Integration Image fills remaining space */}
          <div className="flex-1 flex items-center justify-center px-20 pb-8 overflow-hidden">
            <img
              className="w-full h-full object-cover scale-125"
              alt="App Integrations"
              src="/resources/anyAPP_image.png"
            />
          </div>
        </div>

        {/* Bottom text outside the box */}
        <p className="mt-8 [font-family:'Microsoft_Sans_Serif-Regular',Helvetica] font-normal text-black text-base text-center tracking-[0] leading-[normal]">
          <span>Don't see your tool? Good. </span>
          <span className="[font-family:'Libre_Baskerville',Helvetica] italic">agen8</span>
          <span> doesn't need it listed.</span>
        </p>
      </section>

      {/* CTA Section with agen8 text */}
      <section className="absolute top-[3400px] left-[calc(50.00%_-_300px)] w-[600px] flex flex-col items-center gap-8">
        <h2 className="[font-family:'Libre_Baskerville',Helvetica] font-normal text-black text-5xl text-center tracking-[0] leading-[normal]">
          <span className="tracking-[-2.24px]">agen</span>
          <span className="text-[52px] tracking-[-2.43px] [font-family:'Libre_Baskerville',Helvetica] italic text-[#ff5500]">
            8
          </span>
        </h2>

        <p className="relative w-fit [font-family:'Microsoft_Sans_Serif-Regular',Helvetica] font-normal text-black text-base text-center tracking-[0] leading-[normal]">
          <span className="[font-family:'Microsoft_Sans_Serif-Regular',Helvetica] font-normal text-black text-base tracking-[0]">
            Replace your pre-existing Al flows with{" "}
          </span>
          <span className="[font-family:'Libre_Baskerville',Helvetica]">
            agen
          </span>
          <span className="[font-family:'Libre_Baskerville',Helvetica] italic">
            8
          </span>
          <span className="[font-family:'Microsoft_Sans_Serif-Regular',Helvetica] font-normal text-black text-base tracking-[0]">
            , which is more precise, reliable, and faster.
          </span>
        </p>

        <Button
          onClick={() => setIsWaitlistOpen(true)}
          className="relative w-[242px] h-[69px] bg-white rounded-xl shadow-[0px_2px_4px_#00000040] hover:bg-gray-100 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
        >
          <span className="text-xl [font-family:'Microsoft_Sans_Serif-Regular',Helvetica] font-normal text-black tracking-[0] leading-[normal] whitespace-nowrap">
            Join the waitlist
          </span>
          <img src="/resources/Arrow right.svg" alt="arrow" className="w-6 h-6" />
        </Button>
      </section>

      {/* Footer */}
      <footer className="absolute top-[3750px] left-[98px] right-[98px]">
        <div className="flex items-start justify-between">
          <div>
            <div className="[font-family:'Libre_Baskerville',Helvetica] font-normal text-black text-4xl leading-[normal] mb-[58px]">
              <span className="tracking-[-1.68px]">agen</span>
              <span className="italic tracking-[0]">8</span>
            </div>

            <p className="[font-family:'Microsoft_Sans_Serif-Regular',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal] whitespace-nowrap mb-[61px]">
              Unlock infinite possibilities with a single prompt
            </p>

            <div className="flex items-center gap-[15px]">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-11 h-11 p-0 hover:opacity-80 transition-opacity"
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

          <div className="flex flex-col items-end gap-[27px]">
            <p className="[font-family:'Microsoft_Sans_Serif-Regular',Helvetica] font-normal text-black text-base text-right tracking-[0] leading-[normal] whitespace-nowrap">
              Ready to See It in Action?
            </p>

            <Button
              asChild
              className="w-[194px] h-[55px] bg-white rounded-xl shadow-[0px_2px_4px_#00000040] hover:bg-gray-100 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <a href="https://calendly.com/sangwavishvendra/agen8" target="_blank" rel="noopener noreferrer">
                <span className="[font-family:'Microsoft_Sans_Serif-Regular',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal] whitespace-nowrap">
                  Try for free
                </span>
                <img src="/resources/Arrow right.svg" alt="arrow" className="w-6 h-6" />
              </a>
            </Button>
          </div>
        </div>
      </footer>

      {/* Waitlist Modal */}
      {isWaitlistOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl p-8 w-[450px] shadow-2xl relative animate-fade-in">
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
              <div className="text-center py-8">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-black mb-2 [font-family:'Libre_Baskerville',Helvetica]">
                  You're on the list!
                </h2>
                <p className="text-gray-600 [font-family:'Microsoft_Sans_Serif-Regular',Helvetica]">
                  Thanks for joining the <span className="italic text-[#ff5500] font-semibold">agen8</span> waitlist.<br />
                  We'll reach out to you at <span className="font-semibold">{email}</span> soon!
                </p>
              </div>
            ) : (
              // Form State
              <>
                <h2 className="text-2xl font-bold text-black mb-2 [font-family:'Libre_Baskerville',Helvetica]">
                  Join the <span className="italic text-[#ff5500]">agen8</span> waitlist
                </h2>
                
                <p className="text-gray-600 mb-6 [font-family:'Microsoft_Sans_Serif-Regular',Helvetica]">
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
