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
              href="#membership"
              className="text-gray-600 hover:text-atf-teal transition"
            >
              Membership
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
            Empowering Africa's
            <br />
            Next Generation of Innovators
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-white/90">
            Discover the reimagined ATF digital experience—designed to inspire,
            connect, and accelerate African technology innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#challenge"
              className="bg-gradient-to-r from-atf-orange to-atf-gold text-white font-bold py-4 px-8 rounded-full hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center"
            >
              Explore the Vision <ArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Homepage Concept */}
      <section id="homepage" className="py-20 px-6 bg-atf-offwhite">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-atf-orange font-semibold text-sm uppercase tracking-wide">
              Homepage Concept
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold font-poppins text-gray-800 mt-2 mb-4">
              Engaging Entry Point
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A powerful first impression that drives users to action.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-5xl font-extrabold font-poppins text-atf-orange mb-2">
                35+
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
                400+
              </div>
              <p className="text-gray-600 font-semibold">
                Challenge Participants
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-5xl font-extrabold font-poppins text-atf-emerald mb-2">
                100+
              </div>
              <p className="text-gray-600 font-semibold">
                Research Publications
              </p>
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
                Our flagship program empowering African students to solve
                real-world problems with AI.
              </p>
              <a
                href="#challenge"
                className="text-atf-orange font-semibold hover:underline inline-flex items-center"
              >
                Learn More <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-atf-teal/10 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-atf-teal" />
              </div>
              <h3 className="text-2xl font-bold font-poppins text-gray-800 mb-3">
                University Chapters
              </h3>
              <p className="text-gray-600 mb-4">
                Join a vibrant community of innovators at leading African
                universities.
              </p>
              <a
                href="#membership"
                className="text-atf-teal font-semibold hover:underline inline-flex items-center"
              >
                Join a Chapter <ArrowRight className="ml-1 w-4 h-4" />
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
                Access decades of research and thought leadership on African
                technology.
              </p>
              <a
                href="#publications"
                className="text-atf-gold font-semibold hover:underline inline-flex items-center"
              >
                Browse Archive <ArrowRight className="ml-1 w-4 h-4" />
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
              Empowering African students to build AI solutions that transform
              their communities. $50,000 in prizes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-atf-orange to-atf-gold text-white font-bold py-4 px-10 rounded-full hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center">
                Register Your Team <Rocket className="ml-2" />
              </button>
              <button className="bg-white text-atf-teal font-bold py-4 px-10 rounded-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                View 2024 Winners
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
                Build solutions that address healthcare, agriculture, education,
                and more.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
              <Users className="w-12 h-12 text-atf-gold mb-4" />
              <h3 className="text-2xl font-bold font-poppins mb-3">
                Expert Mentorship
              </h3>
              <p className="text-white/90">
                Get guidance from leading African technologists and researchers.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
              <TrendingUp className="w-12 h-12 text-atf-gold mb-4" />
              <h3 className="text-2xl font-bold font-poppins mb-3">
                Career Acceleration
              </h3>
              <p className="text-white/90">
                Winners gain exposure to investors, job opportunities, and
                funding.
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
                <h4 className="font-bold text-lg mb-2">Registration Opens</h4>
                <p className="text-white/80 text-sm">January 2025</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-atf-gold rounded-full flex items-center justify-center mx-auto mb-3">
                  <Code className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-lg mb-2">Hackathon</h4>
                <p className="text-white/80 text-sm">March 2025</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-atf-emerald rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-lg mb-2">Finals</h4>
                <p className="text-white/80 text-sm">May 2025</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white text-atf-teal rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-lg mb-2">Awards Ceremony</h4>
                <p className="text-white/80 text-sm">June 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section id="membership" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-atf-teal font-semibold text-sm uppercase tracking-wide">
              Membership
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold font-poppins text-gray-800 mt-2 mb-4">
              Join the ATF Network
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Connect with a community of innovators, access exclusive
              resources, and shape Africa's tech future.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Student Membership */}
            <div className="bg-gradient-to-br from-atf-offwhite to-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-atf-orange">
              <GraduationCap className="w-12 h-12 text-atf-orange mb-4" />
              <h3 className="text-2xl font-bold font-poppins text-gray-800 mb-3">
                Student Member
              </h3>
              <p className="text-gray-600 mb-6">
                Perfect for undergraduate and graduate students
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-atf-emerald mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Access to all events and workshops
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-atf-emerald mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    ATF Challenge participation
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-atf-emerald mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Networking opportunities
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-atf-emerald mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Publication access</span>
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-atf-orange to-atf-gold text-white font-bold py-3 px-6 rounded-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                Join as Student
              </button>
            </div>

            {/* Professional Membership */}
            <div className="bg-gradient-to-br from-atf-teal to-atf-teal/90 p-8 rounded-lg shadow-xl text-white transform scale-105 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-atf-gold text-atf-charcoal font-bold text-sm px-4 py-1 rounded-full">
                Most Popular
              </div>
              <Briefcase className="w-12 h-12 text-atf-gold mb-4" />
              <h3 className="text-2xl font-bold font-poppins mb-3">
                Professional Member
              </h3>
              <p className="text-white/90 mb-6">
                For working professionals and academics
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-atf-gold mr-2 mt-0.5 flex-shrink-0" />
                  <span>Everything in Student</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-atf-gold mr-2 mt-0.5 flex-shrink-0" />
                  <span>Mentorship opportunities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-atf-gold mr-2 mt-0.5 flex-shrink-0" />
                  <span>Speaking engagements</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-atf-gold mr-2 mt-0.5 flex-shrink-0" />
                  <span>Exclusive networking events</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-atf-gold mr-2 mt-0.5 flex-shrink-0" />
                  <span>Partnership opportunities</span>
                </li>
              </ul>
              <button className="w-full bg-white text-atf-teal font-bold py-3 px-6 rounded-full hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                Join as Professional
              </button>
            </div>

            {/* Institutional Membership */}
            <div className="bg-gradient-to-br from-atf-offwhite to-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-atf-teal">
              <Globe className="w-12 h-12 text-atf-teal mb-4" />
              <h3 className="text-2xl font-bold font-poppins text-gray-800 mb-3">
                Institutional Partner
              </h3>
              <p className="text-gray-600 mb-6">
                For universities and organizations
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-atf-emerald mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Everything in Professional
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-atf-emerald mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Establish university chapter
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-atf-emerald mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Brand visibility</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-atf-emerald mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Custom programs</span>
                </li>
              </ul>
              <button className="w-full border-2 border-atf-teal text-atf-teal font-bold py-3 px-6 rounded-full hover:bg-atf-teal hover:text-white transition-all duration-300">
                Become a Partner
              </button>
            </div>
          </div>

          {/* Application Form Preview */}
          <div className="max-w-2xl mx-auto bg-atf-offwhite p-8 rounded-lg">
            <h3 className="text-2xl font-bold font-poppins text-gray-800 mb-6 text-center">
              Quick Application
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-atf-teal focus:ring-2 focus:ring-atf-teal/20 outline-none transition"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-atf-teal focus:ring-2 focus:ring-atf-teal/20 outline-none transition"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Membership Type
                </label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-atf-teal focus:ring-2 focus:ring-atf-teal/20 outline-none transition">
                  <option>Student</option>
                  <option>Professional</option>
                  <option>Institutional</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-atf-orange to-atf-gold text-white font-bold py-4 px-6 rounded-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                Submit Application
              </button>
            </form>
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
              Partnership Opportunities
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold font-poppins mt-2 mb-4">
              Partner with ATF
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Join leading organizations in advancing African technology
              innovation.
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
              <div className="bg-white/10 rounded-lg p-6 flex items-center justify-center h-24 w-40">
                <img
                  src="/supporters/knust - rail.png"
                  alt="KNUST"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="bg-white/10 rounded-lg p-6 flex items-center justify-center h-24 w-40">
                <img
                  src="/supporters/UoG.png"
                  alt="University of Ghana"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="bg-white/10 rounded-lg p-6 flex items-center justify-center h-24 w-40">
                <img
                  src="/supporters/indaba logo.png"
                  alt="Deep Learning Indaba"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="bg-white/10 rounded-lg p-6 flex items-center justify-center h-24 w-40">
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
                35+ Years of Innovation
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Founded at MIT in 1988, the Africa Technology Forum has been at
                the forefront of advancing African technology innovation for
                over three decades.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What started as a small gathering of passionate technologists
                has grown into a continental movement, with active chapters
                across Africa and the diaspora.
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
                To empower Africa's next generation of technology leaders and
                innovators
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
        className="py-20 px-6 bg-gradient-to-br from-gray-50 to-atf-offwhite"
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
      <section id="blog" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-atf-orange font-semibold text-sm uppercase tracking-wide">
              News & Updates
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold font-poppins text-gray-800 mt-2 mb-4">
              Latest from the ATF Community
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Success stories, announcements, and insights from across the
              African tech ecosystem.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
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
              <span className="text-sm font-semibold text-atf-orange uppercase">
                Success Story
              </span>
              <h3 className="mt-2 text-3xl font-bold font-poppins text-gray-800 leading-tight">
                From Challenge to Startup: How 'Agri-Detect' Secured Pre-Seed
                Funding
              </h3>
              <p className="mt-4 text-gray-600">
                Just six months after winning the ATF AI Challenge, the team
                behind Agri-Detect has successfully closed a $150,000 pre-seed
                funding round.
              </p>
              <div className="mt-6 flex items-center">
                <div className="w-12 h-12 bg-atf-charcoal rounded-full mr-4 flex items-center justify-center text-white font-bold">
                  AM
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Dr. Akua Mensah</p>
                  <p className="text-sm text-gray-500">
                    October 14, 2025 • 5 min read
                  </p>
                </div>
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
              Stay Connected with African Innovation
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Subscribe to our newsletter for the latest news, event
              invitations, and research highlights delivered straight to your
              inbox.
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
                Empowering Africa's next generation of innovators since 1988.
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
                  <a
                    href="#membership"
                    className="hover:text-atf-orange transition"
                  >
                    Membership
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
                  <a
                    href="#membership"
                    className="hover:text-atf-orange transition"
                  >
                    Become a Member
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
                  <span>Cambridge, MA, USA</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-2 flex-shrink-0" />
                  <span>info@atforum.org</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
                  <span>+1 (617) 555-0100</span>
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
