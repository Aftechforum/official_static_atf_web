"use client";

import { useState } from "react";
import {
  Users,
  Award,
  BookOpen,
  TrendingUp,
  CheckCircle2,
  Rocket,
  Target,
  Globe,
  Code,
  Briefcase,
  GraduationCap,
  Heart,
  Mail,
  MapPin,
  Phone,
  Calendar,
  ArrowRight,
  Star,
  Zap,
} from "lucide-react";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Newsletter subscription state
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | null>(
    null
  );

  // Email validation function - extensible for future rules
  const validateEmail = (
    email: string
  ): { isValid: boolean; error?: string } => {
    // Trim whitespace
    const trimmedEmail = email.trim();

    // Check if empty
    if (!trimmedEmail) {
      return { isValid: false, error: "Email address is required" };
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      return { isValid: false, error: "Please enter a valid email address" };
    }

    // Future validation rules can be added here:
    // - Minimum length check
    // - Domain whitelist/blacklist
    // - Disposable email detection
    // - etc.

    return { isValid: true };
  };

  // Handle newsletter subscription
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    // Clear previous messages
    setMessage("");
    setMessageType(null);

    // Validate email
    const validation = validateEmail(email);
    if (!validation.isValid) {
      setMessage(validation.error || "Invalid email");
      setMessageType("error");
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
          body: JSON.stringify({ email: email.trim() }),
        }
      );

      const data = await response.json();

      if (response.ok && data.success) {
        // Success - clear form and show message
        setEmail("");
        setMessage(
          data.message || "Successfully subscribed to our newsletter!"
        );
        setMessageType("success");
      } else {
        // API returned error
        setMessage(data.message || "Failed to subscribe. Please try again.");
        setMessageType("error");
      }
    } catch (error) {
      // Network or other error
      setMessage(
        "An error occurred. Please check your connection and try again."
      );
      setMessageType("error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="flex items-center">
            <img
              src="/atf-logo-vector.svg"
              alt="African Technology Forum"
              className="h-12 w-auto"
            />
          </a>
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#home"
              className="text-gray-600 hover:text-atf-teal transition"
            >
              Home
            </a>
            <a
              href="#challenge"
              className="text-gray-600 hover:text-atf-teal transition"
            >
              ATF Challenge
            </a>
            <a
              href="#partnership"
              className="text-gray-600 hover:text-atf-teal transition"
            >
              Partnership
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-atf-teal transition"
            >
              About
            </a>
            <a
              href="#blog"
              className="text-gray-600 hover:text-atf-teal transition"
            >
              News
            </a>
          </div>
          <a
            href="#challenge"
            className="bg-gradient-to-r from-atf-orange to-atf-gold text-white font-bold py-2 px-6 rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            Get Involved
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-gradient-to-br from-atf-teal to-atf-teal/80 text-white py-32 px-6 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-atf-orange rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-atf-gold rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold font-poppins mb-6 leading-tight">
            {`Empowering Africa's`}
            <br />
            Next Generation of Innovators
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-white/90">
            Promoting the development of science and technology in Africa since
            1988
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#challenge"
              className="bg-gradient-to-r from-atf-orange to-atf-gold text-white font-bold py-4 px-8 rounded-full hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center"
            >
              Join the Movement <ArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Homepage Concept */}
      <section id="homepage" className="py-20 px-6 bg-atf-offwhite">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-atf-orange font-semibold text-sm uppercase tracking-wide">
              Our Impact
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold font-poppins text-gray-800 mt-2 mb-4">
              By the Numbers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {`Decades of dedication to the African technology ecosystem, from our MIT origins to our current continental reach.`}
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-5xl font-extrabold font-poppins text-atf-orange mb-2">
                37+
              </div>
              <p className="text-gray-600 font-semibold">Years of Impact</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-5xl font-extrabold font-poppins text-atf-teal mb-2">
                30+
              </div>
              <p className="text-gray-600 font-semibold">University Chapters</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-5xl font-extrabold font-poppins text-atf-gold mb-2">
                1000+
              </div>
              <p className="text-gray-600 font-semibold">
                Challenge Participants
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-5xl font-extrabold font-poppins text-atf-emerald mb-2">
                100+
              </div>
              <p className="text-gray-600 font-semibold">Sci-Tech Articles</p>
            </div>
          </div>

          {/* Programs Preview */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-atf-orange/10 rounded-full flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-atf-orange" />
              </div>
              <h3 className="text-2xl font-bold font-poppins text-gray-800 mb-3">
                ATF AI Challenge
              </h3>
              <p className="text-gray-600 mb-4">
                Tackle problems in Health, Energy, Agriculture, and Education.
              </p>
              <a
                href="#challenge"
                className="text-atf-orange font-semibold hover:underline inline-flex items-center"
              >
                View Challenge <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-atf-teal/10 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-atf-teal" />
              </div>
              <h3 className="text-2xl font-bold font-poppins text-gray-800 mb-3">
                Student Chapters
              </h3>
              <p className="text-gray-600 mb-4">
                A network across Ashesi, UG, KNUST, and more.
              </p>
              <a
                href="#home"
                className="text-atf-teal font-semibold hover:underline inline-flex items-center"
              >
                Find a Chapter <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-atf-gold/10 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="w-8 h-8 text-atf-gold" />
              </div>
              <h3 className="text-2xl font-bold font-poppins text-gray-800 mb-3">
                Publications
              </h3>
              <p className="text-gray-600 mb-4">
                Explore the archives of our pioneering quarterly magazine.
              </p>
              <a
                href="#publications"
                className="text-atf-gold font-semibold hover:underline inline-flex items-center"
              >
                Read Archives <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ATF AI Challenge Section */}
      <section
        id="challenge"
        className="py-20 px-6 bg-gradient-to-br from-atf-teal/90 to-atf-teal text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-atf-orange rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-atf-gold rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="bg-atf-orange text-white font-semibold text-sm uppercase tracking-wide px-4 py-2 rounded-full inline-block mb-4">
              Flagship Program
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold font-poppins mb-6">
              ATF AI Challenge 2025
            </h2>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90 mb-8">
              The 2025 challenge has concluded. Discover the innovators who
              built AI solutions to transform their communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.msn.com/en-xl/africa/ghana/young-innovators-transform-healthcare-through-ai-at-the-2025-atf-ai-challenge-awards/ar-AA1PNDrg"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-atf-orange to-atf-gold text-white font-bold py-4 px-10 rounded-full hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center"
              >
                View Winners <Award className="ml-2" />
              </a>
              <button className="bg-white text-atf-teal font-bold py-4 px-10 rounded-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                Join 2026 Waitlist
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
              <Target className="w-12 h-12 text-atf-gold mb-4" />
              <h3 className="text-2xl font-bold font-poppins mb-3">
                Real-World Impact
              </h3>
              <p className="text-white/90">
                Tackle critical issues in healthcare, agriculture, and
                education.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
              <Users className="w-12 h-12 text-atf-gold mb-4" />
              <h3 className="text-2xl font-bold font-poppins mb-3">
                Expert Mentorship
              </h3>
              <p className="text-white/90">
                1-on-1 guidance from global tech leaders and researchers.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
              <TrendingUp className="w-12 h-12 text-atf-gold mb-4" />
              <h3 className="text-2xl font-bold font-poppins mb-3">
                Career Acceleration
              </h3>
              <p className="text-white/90">
                Fast-track access to investors, jobs, and seed funding.
              </p>
            </div>
          </div>

          {/* Challenge Timeline */}
          <div className="mt-16 bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
            <h3 className="text-3xl font-bold font-poppins mb-8 text-center">
              Challenge Timeline
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-atf-orange rounded-full flex items-center justify-center mx-auto mb-3">
                  <Calendar className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-lg mb-2">Registration</h4>
                <p className="text-white/80 text-sm">Closed</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-atf-gold rounded-full flex items-center justify-center mx-auto mb-3">
                  <Code className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-lg mb-2">Hackathon</h4>
                <p className="text-white/80 text-sm">Ended</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-atf-emerald rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-lg mb-2">Finals</h4>
                <p className="text-white/80 text-sm">Completed</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white text-atf-teal rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-lg mb-2">Awards</h4>
                <p className="text-white/80 text-sm">Winners Announced</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section
        id="partnership"
        className="py-20 px-6 bg-atf-charcoal text-white"
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-atf-gold font-semibold text-sm uppercase tracking-wide">
              Partner with
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold font-poppins mt-2 mb-4">
              The Future of African Tech
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              {`Join leading organizations like 37 Military Hospital, Esoko, and KNUST in advancing innovation. We offer tailored partnership packages.`}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-atf-gold transition-all duration-300">
              <Zap className="w-10 h-10 text-atf-gold mb-4" />
              <h3 className="text-xl font-bold font-poppins mb-2">
                Technology Sponsors
              </h3>
              <p className="text-white/70 text-sm">
                Provide tools, platforms, and infrastructure
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-atf-gold transition-all duration-300">
              <Heart className="w-10 h-10 text-atf-gold mb-4" />
              <h3 className="text-xl font-bold font-poppins mb-2">
                Funding Partners
              </h3>
              <p className="text-white/70 text-sm">
                Support scholarships and prizes
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-atf-gold transition-all duration-300">
              <Users className="w-10 h-10 text-atf-gold mb-4" />
              <h3 className="text-xl font-bold font-poppins mb-2">
                Academic Partners
              </h3>
              <p className="text-white/70 text-sm">
                Collaborate on research and programs
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-atf-gold transition-all duration-300">
              <Globe className="w-10 h-10 text-atf-gold mb-4" />
              <h3 className="text-xl font-bold font-poppins mb-2">
                Strategic Partners
              </h3>
              <p className="text-white/70 text-sm">
                Long-term collaboration opportunities
              </p>
            </div>
          </div>

          {/* Current Partners Showcase */}
          <div className="bg-white/5 backdrop-blur-sm p-12 rounded-lg border border-white/10">
            <h3 className="text-3xl font-bold font-poppins mb-8 text-center">
              Trusted by Leading Organizations
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              <div className="bg-white/10== rounded-lg p-6 flex items-center justify-center h-24 w-40">
                <img
                  src="/supporters/knust - rail.png"
                  alt="KNUST"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="bg-white/10== rounded-lg p-6 flex items-center justify-center h-24 w-40">
                <img
                  src="/partners/korle bu original.png"
                  alt="Korle Bu Teaching Hospital"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="bg-white/10== rounded-lg p-6 flex items-center justify-center h-24 w-40">
                <img
                  src="/supporters/indaba logo.png"
                  alt="Deep Learning Indaba"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="bg-white/10== rounded-lg p-6 flex items-center justify-center h-24 w-40">
                <img
                  src="/supporters/blossomlog.png"
                  alt="Blossom"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-atf-orange to-atf-gold text-white font-bold py-4 px-10 rounded-full hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 inline-flex items-center">
              Explore Partnership <ArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <span className="text-atf-teal font-semibold text-sm uppercase tracking-wide">
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold font-poppins text-gray-800 mt-2 mb-6">
                The ATF Story
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Founded in 1988 by students at MIT, the African Technology Forum
                began with a singular mission: to ensure Africans were writing
                the scientific history of Africa.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What started as a quarterly magazine has evolved into a
                continental movement bridging the gap between academic potential
                and real-world impact.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                <strong>Mission:</strong> To promote the development of science
                and technology in Africa.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                <strong>Offices:</strong> Accra, Ghana & Sylvania, Ohio, USA.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-atf-emerald mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">
                      Publishing Excellence
                    </p>
                    <p className="text-gray-600">
                      Decades of research and thought leadership
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-atf-emerald mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">
                      Community Building
                    </p>
                    <p className="text-gray-600">
                      30+ active university chapters
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-atf-emerald mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">Global Impact</p>
                    <p className="text-gray-600">
                      Partnerships with leading institutions worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-atf-teal to-atf-teal/80 rounded-lg shadow-2xl flex items-center justify-center text-white">
                <div className="text-center">
                  <p className="text-6xl font-extrabold font-poppins mb-2">
                    1988
                  </p>
                  <p className="text-xl">Founded at MIT</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Values */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-atf-offwhite rounded-lg">
              <Target className="w-12 h-12 text-atf-orange mx-auto mb-4" />
              <h3 className="text-xl font-bold font-poppins text-gray-800 mb-3">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To promote the development of science and technology in Africa.
              </p>
            </div>
            <div className="text-center p-8 bg-atf-offwhite rounded-lg">
              <Rocket className="w-12 h-12 text-atf-teal mx-auto mb-4" />
              <h3 className="text-xl font-bold font-poppins text-gray-800 mb-3">
                Our Vision
              </h3>
              <p className="text-gray-600">
                A future where African innovation drives global technological
                progress
              </p>
            </div>
            <div className="text-center p-8 bg-atf-offwhite rounded-lg">
              <Heart className="w-12 h-12 text-atf-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold font-poppins text-gray-800 mb-3">
                Our Values
              </h3>
              <p className="text-gray-600">
                Excellence, collaboration, innovation, and community empowerment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section
        id="publications"
        className="hidden py-20 px-6 bg-gradient-to-br from-gray-50 to-atf-offwhite"
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-atf-teal font-semibold text-sm uppercase tracking-wide">
              Publications
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold font-poppins text-gray-800 mt-2 mb-4">
              Research & Thought Leadership
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Access our extensive archive of research publications, policy
              papers, and industry insights.
            </p>
          </div>

          {/* Featured Publication */}
          <div className="bg-white p-8 rounded-lg shadow-xl mb-12 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="bg-atf-teal text-white text-sm font-semibold px-3 py-1 rounded-full">
                Featured
              </span>
              <h3 className="text-3xl font-bold font-poppins text-gray-800 mt-4 mb-3">
                The State of AI in African Healthcare
              </h3>
              <p className="text-gray-600 mb-4">
                A comprehensive analysis of artificial intelligence adoption in
                healthcare systems across the continent, featuring case studies
                from 15 countries.
              </p>
              <div className="flex items-center text-gray-500 text-sm mb-6">
                <span className="mr-4">Dr. Amara Okafor</span>
                <span className="mr-4">•</span>
                <span>October 2025</span>
              </div>
              <button className="bg-gradient-to-r from-atf-orange to-atf-gold text-white font-bold py-3 px-8 rounded-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                Download PDF
              </button>
            </div>
            <div className="h-80 bg-gradient-to-br from-atf-teal to-atf-teal/80 rounded-lg flex items-center justify-center text-white">
              <BookOpen className="w-32 h-32 opacity-20" />
            </div>
          </div>

          {/* Recent Publications Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <div className="w-full h-48 bg-atf-orange/10 rounded-lg mb-4 flex items-center justify-center">
                <BookOpen className="w-16 h-16 text-atf-orange" />
              </div>
              <span className="text-xs text-atf-orange font-semibold uppercase">
                Research Paper
              </span>
              <h4 className="text-xl font-bold font-poppins text-gray-800 mt-2 mb-2">
                Mobile Money and Financial Inclusion
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                Impact assessment across East Africa...
              </p>
              <a
                href="#"
                className="text-atf-teal font-semibold text-sm hover:underline"
              >
                Read More →
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <div className="w-full h-48 bg-atf-teal/10 rounded-lg mb-4 flex items-center justify-center">
                <BookOpen className="w-16 h-16 text-atf-teal" />
              </div>
              <span className="text-xs text-atf-teal font-semibold uppercase">
                Policy Brief
              </span>
              <h4 className="text-xl font-bold font-poppins text-gray-800 mt-2 mb-2">
                Digital Infrastructure in Rural Areas
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                Recommendations for policymakers...
              </p>
              <a
                href="#"
                className="text-atf-teal font-semibold text-sm hover:underline"
              >
                Read More →
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <div className="w-full h-48 bg-atf-gold/10 rounded-lg mb-4 flex items-center justify-center">
                <BookOpen className="w-16 h-16 text-atf-gold" />
              </div>
              <span className="text-xs text-atf-gold font-semibold uppercase">
                Case Study
              </span>
              <h4 className="text-xl font-bold font-poppins text-gray-800 mt-2 mb-2">
                Successful EdTech Startups in Nigeria
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                Lessons from leading innovators...
              </p>
              <a
                href="#"
                className="text-atf-teal font-semibold text-sm hover:underline"
              >
                Read More →
              </a>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="border-2 border-atf-teal text-atf-teal font-bold py-3 px-8 rounded-full hover:bg-atf-teal hover:text-white transition-all duration-300">
              Browse Full Archive
            </button>
          </div>
        </div>
      </section>

      {/* News & Blog Section */}
      <section
        id="blog"
        className="py-20 px-6 bg-white== hidden bg-gradient-to-br from-gray-50 to-atf-offwhite"
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-atf-orange font-semibold text-sm uppercase tracking-wide">
              News & Updates
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold font-poppins text-gray-800 mt-2 mb-4">
              Latest from ATF
            </h2>
            <p className=" hidden text-lg text-gray-600 max-w-2xl mx-auto">
              Success stories, announcements, and insights from across the
              African tech ecosystem.
            </p>
          </div>

          {/* Category Filters */}
          <div className="hidden flex== flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === "all"
                  ? "bg-atf-teal text-white"
                  : "bg-white border-2 border-gray-200 text-gray-700 hover:border-atf-teal"
              }`}
            >
              All Posts
            </button>
            <button
              onClick={() => setSelectedCategory("success")}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === "success"
                  ? "bg-atf-teal text-white"
                  : "bg-white border-2 border-gray-200 text-gray-700 hover:border-atf-teal"
              }`}
            >
              Success Stories
            </button>
            <button
              onClick={() => setSelectedCategory("chapter")}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === "chapter"
                  ? "bg-atf-teal text-white"
                  : "bg-white border-2 border-gray-200 text-gray-700 hover:border-atf-teal"
              }`}
            >
              Chapter News
            </button>
            <button
              onClick={() => setSelectedCategory("research")}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === "research"
                  ? "bg-atf-teal text-white"
                  : "bg-white border-2 border-gray-200 text-gray-700 hover:border-atf-teal"
              }`}
            >
              Research Highlights
            </button>
          </div>

          {/* Featured Article */}
          <div className="grid lg:grid-cols-2 gap-8 items-center bg-atf-offwhite rounded-lg overflow-hidden shadow-lg mb-12">
            <div className="h-full w-full bg-gradient-to-br from-atf-orange to-atf-orange/80 flex items-center justify-center text-white p-12">
              <div className="text-center">
                <Award className="w-24 h-24 mx-auto mb-4 opacity-50" />
                <p className="text-xl font-semibold">Featured Story</p>
              </div>
            </div>
            <div className="p-8 md:p-12">
              <h3 className="mt-2 text-3xl font-bold font-poppins text-gray-800 leading-tight">
                Announcing the Winners of the 2025 ATF AI Challenge
              </h3>
              <p className="mt-4 text-gray-600">
                Young innovators transform healthcare through AI at the African
                Technology Forum Challenge. Discover the teams building AI
                solutions that are changing their communities.
              </p>
              <div className="mt-6">
                <a
                  href="https://www.msn.com/en-xl/africa/ghana/young-innovators-transform-healthcare-through-ai-at-the-2025-atf-ai-challenge-awards/ar-AA1PNDrg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-atf-orange font-semibold hover:underline"
                >
                  Read Full Story <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-full h-56 bg-gradient-to-br from-atf-teal to-atf-teal/80 flex items-center justify-center text-white">
                <Users className="w-16 h-16 opacity-50" />
              </div>
              <div className="p-6">
                <span className="text-sm font-semibold text-atf-teal uppercase">
                  Chapter News
                </span>
                <h4 className="mt-2 font-bold text-xl text-gray-800 leading-tight">
                  ATF Launches New University Chapter at Ashesi University
                </h4>
                <p className="mt-2 text-gray-600 text-sm">October 10, 2025</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-full h-56 bg-gradient-to-br from-atf-gold to-atf-gold/80 flex items-center justify-center text-white">
                <TrendingUp className="w-16 h-16 opacity-50" />
              </div>
              <div className="p-6">
                <span className="text-sm font-semibold text-atf-gold uppercase">
                  Research Highlights
                </span>
                <h4 className="mt-2 font-bold text-xl text-gray-800 leading-tight">
                  The Impact of Mobile Money on Financial Inclusion
                </h4>
                <p className="mt-2 text-gray-600 text-sm">October 5, 2025</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-full h-56 bg-gradient-to-br from-atf-emerald to-atf-emerald/80 flex items-center justify-center text-white">
                <Calendar className="w-16 h-16 opacity-50" />
              </div>
              <div className="p-6">
                <span className="text-sm font-semibold text-atf-emerald uppercase">
                  Announcements
                </span>
                <h4 className="mt-2 font-bold text-xl text-gray-800 leading-tight">
                  Save the Date: ATF 2026 Annual Conference in Nairobi
                </h4>
                <p className="mt-2 text-gray-600 text-sm">September 28, 2025</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="border-2 border-gray-300 text-gray-800 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-all duration-300">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-6 bg-atf-teal text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Mail className="w-16 h-16 mx-auto mb-6 text-atf-gold" />
            <h2 className="text-4xl font-extrabold font-poppins mb-4">
              Stay Connected
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Subscribe for the latest research highlights, event invitations,
              and ecosystem news delivered straight to your inbox.
            </p>
            <form className="max-w-md mx-auto" onSubmit={handleSubscribe}>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-6 py-4 rounded-full text-gray-800 border-0 focus:ring-4 focus:ring-atf-gold/30 outline-none"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-atf-orange to-atf-gold text-white px-8 py-4 rounded-full font-bold hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
              {message && (
                <div
                  className={`mt-4 px-6 py-3 rounded-full text-center font-medium ${
                    messageType === "success"
                      ? "bg-green-100 text-green-800 border border-green-300"
                      : "bg-red-100 text-red-800 border border-red-300"
                  }`}
                >
                  {message}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-atf-charcoal text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img
                src="/atf-logo-vector.svg"
                alt="African Technology Forum"
                className="h-16 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-400">
                {`Empowering Africa's next generation of innovators since 1988.`}
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#about" className="hover:text-atf-orange transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#challenge"
                    className="hover:text-atf-orange transition"
                  >
                    ATF Challenge
                  </a>
                </li>
                <li>
                  <a href="#blog" className="hover:text-atf-orange transition">
                    News & Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Get Involved</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#partnership"
                    className="hover:text-atf-orange transition"
                  >
                    Partner with Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-atf-orange transition">
                    Mentor Students
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-atf-orange transition">
                    Donate
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Contact</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Kokomlemle, Accra North, Ghana</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-2 flex-shrink-0" />
                  <span>info@africantechnologyforum.org</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
                  <span>+233 302 234349</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-500">
            <p>&copy; 2025 Africa Technology Forum. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
