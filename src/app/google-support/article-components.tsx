"use client";

import { motion } from "framer-motion";
import { useState, FormEvent } from "react";

export const ArticleContentV0 = () => {
  return (
    <div className="lg:col-span-8">
      {/* Opening Paragraph */}
      <div className="prose prose-lg max-w-none mb-8">
        <p className="text-lg text-gray-800 leading-relaxed mb-6">
          Why does our foundation invest in the Global Fund to Fight AI
          Education Gaps? Because it works.
        </p>
        <p className="text-lg text-gray-800 leading-relaxed mb-6">
          {`Since 1988, the African Technology Forum has been at the
        forefront of bridging the technology gap across the African
        continent. Now, with a historic $1 million investment from
        Google.org, ATF is launching its most ambitious initiative
        yet: the ATF AI Challenge.`}
        </p>
        <p className="text-lg text-gray-800 leading-relaxed mb-6">
          {`The program aims to train more than 10,000 young innovators
        across four countries—Ghana, Kenya, Nigeria, and South
        Africa—by supporting efforts to build AI literacy, foster
        innovation, and create direct pathways from education to
        employment. The ATF AI Challenge is a strategic investment
        because it addresses the critical skills gap, strengthens
        local tech ecosystems, and positions Africa's youth as
        builders—not just consumers—of AI technology.`}
        </p>
      </div>

      {/* Section: The Model */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-4">
          A Three-Stage Model That Works
        </h2>
        <p className="text-lg text-gray-800 leading-relaxed mb-6">
          The ATF AI Challenge operates through a proven three-stage model that
          guides participants from foundational learning to real-world
          application and career opportunities.
        </p>

        <div className="bg-atf-offwhite border-l-4 border-atf-teal p-6 mb-6">
          <h3 className="text-xl font-bold text-atf-teal mb-2">
            Stage 1: The AI School
          </h3>
          <p className="text-gray-700 leading-relaxed">
            {`A free, 4-week virtual bootcamp serves as the entry point,
          welcoming 15,000 learners who gain foundational AI skills
          and confidence. The school eliminates financial barriers
          while providing structured, high-quality education that
          prepares participants for the next stage.`}
          </p>
        </div>

        <div className="bg-atf-offwhite border-l-4 border-atf-orange p-6 mb-6">
          <h3 className="text-xl font-bold text-atf-orange mb-2">
            Stage 2: The AI Challenge
          </h3>
          <p className="text-gray-700 leading-relaxed">
            {`From the school's graduates, 10,000 participants form more
          than 2,500 teams. These teams are mentored by industry
          experts as they build functional AI-powered solutions to
          address real-world problems identified by institutional
          partners. This phase transforms theoretical knowledge into
          practical experience.`}
          </p>
        </div>

        <div className="bg-atf-offwhite border-l-4 border-atf-gold p-6 mb-6">
          <h3 className="text-xl font-bold text-atf-gold mb-2">
            Stage 3: The Demo Days
          </h3>
          <p className="text-gray-700 leading-relaxed">
            The culmination brings top teams face-to-face with more than 200
            employers, investors, and strategic partners in each participating
            country. These showcase events create direct pathways to employment,
            internships, and funding—converting educational achievement into
            economic opportunity.
          </p>
        </div>
      </div>

      {/* Section: Why It Works */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-4">
          Why This Partnership Works
        </h2>
        <p className="text-lg text-gray-800 leading-relaxed mb-6">
          This scale-up succeeds because it combines two essential elements:
          institutional depth and strategic acceleration.
        </p>
        <p className="text-lg text-gray-800 leading-relaxed mb-6">
          {`ATF brings 37 years of established relationships with
        universities and industry across Africa. These aren't new
        connections being built from scratch—they're mature networks
        that provide immediate access to talent, venues, and
        institutional support. The organization's longevity offers
        stability and credibility that startups typically lack.`}
        </p>
        <p className="text-lg text-gray-800 leading-relaxed mb-6">
          {`Google.org's $1 million investment serves as an accelerant,
        enabling ATF to dedicate 19 full-time staff members to
        provide intensive, personalized mentorship. This level of
        human investment distinguishes the program from massive open
        online courses or purely digital platforms. The funding
        transforms capacity from volunteer-driven to professionally
        staffed, ensuring consistent quality and meaningful guidance
        for every participant.`}
        </p>
      </div>

      {/* Section: The Gap It Fills */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-4">
          {`Addressing Africa's Critical Skills Gap`}
        </h2>
        <p className="text-lg text-gray-800 leading-relaxed mb-6">
          {`Africa's greatest resource is its human capital, but a
        persistent gap exists between educational achievement and
        employment opportunity. University graduates often lack
        practical experience with emerging technologies, while
        employers struggle to find candidates with job-ready AI
        skills.`}
        </p>
        <p className="text-lg text-gray-800 leading-relaxed mb-6">
          {`The ATF AI Challenge directly addresses this disconnect. By
        providing hands-on project experience, expert mentorship,
        and direct employer connections, the program creates a
        structured pathway that traditional education systems
        haven't established. Participants don't just learn about
        AI—they build with it, solving real problems for real
        organizations.`}
        </p>
      </div>

      {/* Section: Looking Forward */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-4">
          {`Building Africa's AI Future`}
        </h2>
        <p className="text-lg text-gray-800 leading-relaxed mb-6">
          {`The 2026 cohort represents more than a training program—it's
        an investment in ensuring that Africa's next generation
        doesn't merely consume AI technology but actively shapes it.
        When African innovators build AI solutions for African
        contexts, they create tools that genuinely address local
        needs, reflect local values, and generate local economic
        value.`}
        </p>
        <p className="text-lg text-gray-800 leading-relaxed mb-6">
          {`This matters because AI development worldwide often
        overlooks African perspectives, languages, and challenges.
        By training thousands of African AI developers, the ATF AI
        Challenge helps ensure that the continent's 1.4 billion
        people are represented in the technologies that will shape
        the coming decades.`}
        </p>
      </div>

      {/* Closing Section */}
      <div className="bg-gradient-to-r from-atf-teal/10 to-atf-orange/10 border border-atf-teal/20 rounded-lg p-8 mb-10">
        <h2 className="text-2xl font-bold font-poppins text-gray-900 mb-4">
          Get Involved
        </h2>
        <p className="text-gray-800 leading-relaxed mb-6">
          {`Registrations for the 2026 AI School cohort will open in
        early 2026. The African Technology Forum is also actively
        seeking university, corporate, and NGO partners to
        participate in the program—whether by helping identify
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
    </div>
  );
};

export const ArticleContentV1 = () => {
  return (
    <div className="lg:col-span-8">
      {/* Section: THE CHALLENGE & THE OPPORTUNITY */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-4">
          THE CHALLENGE & THE OPPORTUNITY
        </h2>
        <p className="text-lg text-gray-800 leading-relaxed mb-6">
          {`We are building the proven pathway from the classroom to a career in AI.`}
        </p>
        <p className="text-lg text-gray-800 leading-relaxed mb-6">
          {`Africa's greatest resource is its human talent, but a critical gap exists between education and employment. The ATF AI Challenge is our solution. We are building the continent's largest, most advanced talent pipeline to ensure the next generation doesn't just consume AI, but builds it, for Africa, by Africans.`}
        </p>
      </div>

      {/* Section: THE 3-STAGE PIPELINE */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-4">
          THE 3-STAGE PIPELINE
        </h2>
        <p className="text-lg text-gray-800 leading-relaxed mb-6">
          {`A Complete Journey. A Proven Model.`}
        </p>
        <p className="text-lg text-gray-800 leading-relaxed mb-6">
          {`Our high-touch program guides participants through a three-stage journey:`}
        </p>

        <div className="bg-atf-offwhite border-l-4 border-atf-teal p-6 mb-6">
          <h3 className="text-xl font-bold text-atf-teal mb-2">
            Stage 1: The AI School (Learn)
          </h3>
          <p className="text-gray-700 leading-relaxed">
            {`A free, 4-week virtual bootcamp where 15,000 learners get the 
            foundational AI skills and confidence they need to start building.`}
          </p>
        </div>

        <div className="bg-atf-offwhite border-l-4 border-atf-orange p-6 mb-6">
          <h3 className="text-xl font-bold text-atf-orange mb-2">
            Stage 2: The AI Challenge (Build)
          </h3>
          <p className="text-gray-700 leading-relaxed">
            {`From the school's graduates, 10,000 participants form more than 2,500 teams. These teams are mentored by industry experts as they build functional AI-powered solutions to address real-world problems identified by institutional partners.`}
          </p>
        </div>

        <div className="bg-atf-offwhite border-l-4 border-atf-gold p-6 mb-6">
          <h3 className="text-xl font-bold text-atf-gold mb-2">
            Stage 3: The Demo Days (Launch)
          </h3>
          <p className="text-gray-700 leading-relaxed">
            {`The culmination brings top teams face-to-face with more than 200 employers, investors, and strategic partners in each participating country. These showcase events create direct pathways to employment, internships, and funding—converting educational achievement into economic opportunity.`}
          </p>
        </div>
      </div>

      {/* Section: THE PARTNERSHIP SECTION */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-4">
          Why This Partnership Works
        </h2>
        <p className="text-lg text-gray-800 leading-relaxed mb-6">
          {`Powered by History, Supported by Google.org`}
        </p>
        <p className="text-lg text-gray-800 leading-relaxed mb-6">
          This scale-up succeeds because it combines two essential elements:
          institutional depth and strategic acceleration.
        </p>
        <p className="text-lg text-gray-800 leading-relaxed mb-6">
          {`ATF brings 37 years of established relationships with
        universities and industry across Africa. These aren't new
        connections being built from scratch—they're mature networks
        that provide immediate access to talent, venues, and
        institutional support. The organization's longevity offers
        stability and credibility that startups typically lack.`}
        </p>
        <p className="text-lg text-gray-800 leading-relaxed mb-6">
          {`Google.org's $1 million investment serves as an accelerant,
        enabling ATF to dedicate 19 full-time staff members to
        provide intensive, personalized mentorship. This level of
        human investment distinguishes the program from massive open
        online courses or purely digital platforms. The funding
        transforms capacity from volunteer-driven to professionally
        staffed, ensuring consistent quality and meaningful guidance
        for every participant.`}
        </p>
      </div>

      {/* Section: The Gap It Fills */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-4">
          {`Addressing Africa's Critical Skills Gap`}
        </h2>
        <p className="text-lg text-gray-800 leading-relaxed mb-6">
          {`Africa's greatest resource is its human capital, but a
        persistent gap exists between educational achievement and
        employment opportunity. University graduates often lack
        practical experience with emerging technologies, while
        employers struggle to find candidates with job-ready AI
        skills.`}
        </p>
        <p className="text-lg text-gray-800 leading-relaxed mb-6">
          {`The ATF AI Challenge directly addresses this disconnect. By
        providing hands-on project experience, expert mentorship,
        and direct employer connections, the program creates a
        structured pathway that traditional education systems
        haven't established. Participants don't just learn about
        AI—they build with it, solving real problems for real
        organizations.`}
        </p>
      </div>

      {/* Section: Looking Forward */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-4">
          {`Building Africa's AI Future`}
        </h2>
        <p className="text-lg text-gray-800 leading-relaxed mb-6">
          {`The 2026 cohort represents more than a training program—it's
        an investment in ensuring that Africa's next generation
        doesn't merely consume AI technology but actively shapes it.
        When African innovators build AI solutions for African
        contexts, they create tools that genuinely address local
        needs, reflect local values, and generate local economic
        value.`}
        </p>
        <p className="text-lg text-gray-800 leading-relaxed mb-6">
          {`This matters because AI development worldwide often
        overlooks African perspectives, languages, and challenges.
        By training thousands of African AI developers, the ATF AI
        Challenge helps ensure that the continent's 1.4 billion
        people are represented in the technologies that will shape
        the coming decades.`}
        </p>
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
                Join us in empowering the next generation of African innovators.
                Let's build together.
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
