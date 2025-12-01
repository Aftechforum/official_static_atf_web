"use client";

import { motion } from "framer-motion";
import { useState, FormEvent } from "react";

export const ArticleContent = () => {
  return (
    <div className="lg:col-span-8">
      {/* Section: THE CHALLENGE & THE OPPORTUNITY */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-4">
          The Challenge & The Opportunity
        </h2>
        <p className="text-lg text-gray-800 leading-relaxed mb-6 font-bold">
          {`We are building the proven pathway from the classroom to a career in AI.`}
        </p>
        <p className="text-lg text-gray-800 leading-relaxed mb-6">
          {`Africa's greatest resource is its human talent, but a critical gap exists between education and employment. The ATF AI Challenge is our solution. We are building the continent's largest, most advanced talent pipeline to ensure the next generation doesn't just consume AI, but builds it, for Africa, by Africans.`}
        </p>
      </div>

      {/* Section: THE 3-STAGE PIPELINE */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-4">
          The 3-Stage Pipeline
        </h2>
        <p className="text-lg text-gray-800 leading-relaxed mb-6 font-bold">
          {`A Complete Journey. A Proven Model.`}
        </p>
        <p className="text-lg text-gray-800 leading-relaxed mb-6">
          {`Our high-touch program guides participants through a three-stage journey:`}
        </p>

        <div className="bg-atf-offwhite border-l-4 border-atf-teal p-6 mb-6">
          <h3 className="text-xl font-bold text-atf-teal mb-2">
            1. The AI School (Learn)
          </h3>
          <p className="text-gray-700 leading-relaxed">
            {`A free, 4-week virtual bootcamp where 15,000 learners get the 
            foundational AI skills and confidence they need to start building.`}
          </p>
        </div>

        <div className="bg-atf-offwhite border-l-4 border-atf-orange p-6 mb-6">
          <h3 className="text-xl font-bold text-atf-orange mb-2">
            2. The AI Challenge (Build)
          </h3>
          <p className="text-gray-700 leading-relaxed">
            {`From the school's graduates, 10,000 participants form more than 2,500 teams. These teams are mentored by industry experts as they build functional AI-powered solutions to address real-world problems identified by institutional partners.`}
          </p>
        </div>

        <div className="bg-atf-offwhite border-l-4 border-atf-gold p-6 mb-6">
          <h3 className="text-xl font-bold text-atf-gold mb-2">
            3. The Demo Days (Launch)
          </h3>
          <p className="text-gray-700 leading-relaxed">
            {`The culmination brings top teams face-to-face with more than 200 employers, investors, and strategic partners in each participating country. These showcase events create direct pathways to employment, internships, and funding, converting educational achievement into economic opportunity.`}
          </p>
        </div>
      </div>

      {/* Section: THE PARTNERSHIP SECTION */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-4">
          The Partnership
        </h2>
        <p className="text-lg text-gray-800 leading-relaxed mb-6 font-bold">
          {`Powered by History, Supported by Google.org`}
        </p>
        <p className="text-lg text-gray-800 leading-relaxed mb-6">
          This scale-up succeeds because it combines two essential elements:
          institutional depth and strategic acceleration.
        </p>
        <p className="text-lg text-gray-800 leading-relaxed mb-6">
          <span className="font-bold">{`ATF's 37-Year History: `}</span>
          {`We aren't a startup. The African Technology Forum's deep-rooted university and industry networks, built since 1988, provide the stability and access to make this scale-up possible.`}
        </p>
        <p className="text-lg text-gray-800 leading-relaxed mb-6">
          <span className="font-bold">{`Google.org's $1M Support: `}</span>
          {`This funding is an accelerant, allowing us to dedicate a full-time staff to provide the intensive, high-touch mentorship that sets our program apart from any online course.`}
        </p>
      </div>

      <ATFGoogleLogo />

      {/* Closing Section */}
      <div className="bg-gradient-to-r from-atf-teal/10 to-atf-orange/10 border border-atf-teal/20 rounded-lg p-8 mb-10">
        <h2 className="text-2xl font-bold font-poppins text-gray-900 mb-4">
          Get Involved
        </h2>
        <p className="text-gray-800 leading-relaxed mb-6">
          {`Registrations for the 2026 AI School cohort will open in
        early 2026. The African Technology Forum is also actively
        seeking university, corporate, and NGO partners to
        participate in the program, whether by helping identify
        talent, providing mentorship, or setting real-world
        challenges for teams to solve.`}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#"
            className="inline-block bg-atf-teal text-white font-semibold px-6 py-3 rounded-lg hover:bg-atf-teal/90 transition-colors text-center"
          >
            Learn About Student Registration
          </a>
          <a
            href="#"
            className="inline-block bg-white text-atf-teal border-2 border-atf-teal font-semibold px-6 py-3 rounded-lg hover:bg-atf-teal/5 transition-colors text-center"
          >
            Explore Partnership Opportunities
          </a>
        </div>
      </div>

      <SubscribePartnershipCard />
    </div>
  );
};

// Component for subscribing and partnership

export const SubscribePartnershipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Subscribe form state
  const [subscribeEmail, setSubscribeEmail] = useState("");
  const [subscribeMessage, setSubscribeMessage] = useState("");
  const [subscribeMessageType, setSubscribeMessageType] = useState<
    "success" | "error"
  >("success");

  // Partnership form state
  const [partnerName, setPartnerName] = useState("");
  const [partnerInstitution, setPartnerInstitution] = useState("");
  const [partnerEmail, setPartnerEmail] = useState("");
  const [partnerMessage, setPartnerMessage] = useState("");
  const [partnerMessageType, setPartnerMessageType] = useState<
    "success" | "error"
  >("success");

  const handleSubscribe = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Clear previous messages
    setSubscribeMessage("");

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(subscribeEmail)) {
      setSubscribeMessageType("error");
      setSubscribeMessage("Please enter a valid email address");
      return;
    }

    try {
      // Submit to API
      const response = await fetch(
        "https://atf-emails-buckket.up.railway.app/emails",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: subscribeEmail.trim() }),
        }
      );

      const data = await response.json();

      if (response.ok && data.success) {
        // Success - clear form and show message
        setSubscribeEmail("");
        setSubscribeMessage(
          data.message || "Successfully subscribed to our newsletter!"
        );
        setSubscribeMessageType("success");
      } else {
        // API returned error
        setSubscribeMessage(
          data.message || "Failed to subscribe. Please try again."
        );
        setSubscribeMessageType("error");
      }
    } catch (error) {
      // Network or other error
      setSubscribeMessage(
        "An error occurred. Please check your connection and try again."
      );
      setSubscribeMessageType("error");
    }
  };

  const handlePartnership = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic validation
    if (!partnerName.trim() || !partnerInstitution.trim()) {
      setPartnerMessageType("error");
      setPartnerMessage("Please fill in all fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(partnerEmail)) {
      setPartnerMessageType("error");
      setPartnerMessage("Please enter a valid email address");
      return;
    }

    // Mock API call - log to console
    console.log("Partnership form submitted:", {
      name: partnerName,
      institution: partnerInstitution,
      email: partnerEmail,
    });

    // Simulate API delay and success
    setPartnerMessage("Processing...");
    setPartnerMessageType("success");

    setTimeout(() => {
      setPartnerMessage("Thank you! We'll be in touch soon.");
      setPartnerMessageType("success");
      setPartnerName("");
      setPartnerInstitution("");
      setPartnerEmail("");
    }, 500);
  };

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
    // Clear messages when flipping
    setSubscribeMessage("");
    setPartnerMessage("");
  };

  return (
    <div className="w-full max-w-4xl mx-auto perspective-1000">
      <div className="relative min-h-[600px]" style={{ perspective: "1000px" }}>
        <motion.div
          className="relative w-full h-full"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{
            duration: 0.6,
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front Side - Subscribe Form */}
          <div
            className="w-full"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <div className="bg-gradient-to-r from-atf-teal/10 to-atf-orange/10 border border-atf-teal/20 rounded-lg p-8">
              <h2 className="text-2xl font-bold font-poppins text-gray-900 mb-4 text-center">
                Stay Connected
              </h2>
              <p className="text-gray-800 leading-relaxed mb-6 text-center">
                Subscribe for the latest updates, event invitations, and news
                delivered straight to your inbox.
              </p>

              <form className="max-w-md mx-auto" onSubmit={handleSubscribe}>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={subscribeEmail}
                    onChange={(e) => setSubscribeEmail(e.target.value)}
                    className="flex-1 px-6 py-4 rounded-full text-gray-800 border-0 focus:ring-4 focus:ring-atf-gold/30 outline-none"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-atf-orange to-atf-gold text-white px-8 py-4 rounded-full font-bold hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </div>
                {subscribeMessage && (
                  <div
                    className={`mt-4 px-6 py-3 rounded-full text-center font-medium ${
                      subscribeMessageType === "success"
                        ? "bg-green-100 text-green-800 border border-green-300"
                        : "bg-red-100 text-red-800 border border-red-300"
                    }`}
                  >
                    {subscribeMessage}
                  </div>
                )}
              </form>

              <div className="text-center mt-6">
                <button
                  onClick={toggleFlip}
                  className="text-atf-teal hover:text-atf-orange font-medium underline transition-colors"
                >
                  Are you a company or university? Partner with us.
                </button>
              </div>
            </div>
          </div>

          {/* Back Side - Partnership Form */}
          <div
            className="w-full h-full absolute top-0 left-0"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div className="bg-gradient-to-r from-atf-orange/10 to-atf-gold/10 border border-atf-orange/20 rounded-lg p-8">
              <h2 className="text-2xl font-bold font-poppins text-gray-900 mb-4 text-center">
                Partnership Opportunities
              </h2>
              <p className="text-gray-800 leading-relaxed mb-6 text-center">
                {`Join us in empowering the next generation of African innovators.
                Let's build together.`}
              </p>

              <form
                className="max-w-md mx-auto space-y-4"
                onSubmit={handlePartnership}
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  value={partnerName}
                  onChange={(e) => setPartnerName(e.target.value)}
                  className="w-full px-6 py-4 rounded-full text-gray-800 border-0 focus:ring-4 focus:ring-atf-gold/30 outline-none"
                  required
                />
                <input
                  type="text"
                  placeholder="Institution Name"
                  value={partnerInstitution}
                  onChange={(e) => setPartnerInstitution(e.target.value)}
                  className="w-full px-6 py-4 rounded-full text-gray-800 border-0 focus:ring-4 focus:ring-atf-gold/30 outline-none"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={partnerEmail}
                  onChange={(e) => setPartnerEmail(e.target.value)}
                  className="w-full px-6 py-4 rounded-full text-gray-800 border-0 focus:ring-4 focus:ring-atf-gold/30 outline-none"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-atf-orange to-atf-gold text-white px-8 py-4 rounded-full font-bold hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                >
                  Submit Partnership Request
                </button>

                {partnerMessage && (
                  <div
                    className={`mt-4 px-6 py-3 rounded-full text-center font-medium ${
                      partnerMessageType === "success"
                        ? "bg-green-100 text-green-800 border border-green-300"
                        : "bg-red-100 text-red-800 border border-red-300"
                    }`}
                  >
                    {partnerMessage}
                  </div>
                )}
              </form>

              <div className="text-center mt-6">
                <button
                  onClick={toggleFlip}
                  className="text-atf-orange hover:text-atf-teal font-medium underline transition-colors"
                >
                  Looking to subscribe instead?
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export const ATFGoogleLogo = () => {
  return (
    <div className="flex flex-col items-center gap-4 mb-10">
      <img
        src="/atf-logo-vector.svg"
        alt="African Technology Forum"
        className="h-24 w-auto"
      />
      <img
        src="/google-logo-vector.svg"
        alt="Google.org"
        className="h-8 w-auto"
      />
    </div>
  );
};
