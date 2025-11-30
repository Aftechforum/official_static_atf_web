"use client";

import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import Section from "@/components/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/magicui/border-beam";
import { BookOpen, Users, Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function GoogleSupportPage() {
  return (
    <main>
      <Header />
      <HeroSection />
      <ImageSection />
      <ChallengeOpportunitySection />
      <ThreeStagePipelineSection />
      <PartnershipSection />
      <GetInvolvedSection />
      <Footer />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-white to-atf-offwhite pt-20 pb-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center space-y-8">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-poppins text-atf-charcoal leading-tight">
            The Future of African AI is Here.
          </h1>

          {/* Sub-Headline */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-inter text-gray-700 leading-relaxed max-w-4xl mx-auto">
            The African Technology Forum, with{" "}
            <span className="font-bold text-atf-teal">
              $1M in support from Google.org
            </span>
            , is launching the ATF AI Challenge to train{" "}
            <span className="font-bold text-atf-orange">
              10,000+ young innovators
            </span>{" "}
            across Ghana, Kenya, Nigeria, and South Africa.
          </h2>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            {/* Primary CTA */}
            <Button
              size="lg"
              className="bg-gradient-to-r from-atf-orange to-atf-gold text-white font-bold py-6 px-10 rounded-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-lg"
            >
              Notify Me: 2026 Registrations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            {/* Secondary CTA */}
            <Link
              href="#partnership"
              className="text-atf-teal font-bold text-lg hover:underline transition-all duration-300 flex items-center gap-2"
            >
              Are you a company or university? Partner with us.
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImageSection() {
  return (
    <section className="py-12 bg-atf-offwhite">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="relative rounded-lg overflow-hidden shadow-2xl">
          <img
            src="/ATF-Challenge-Winners-2024-2025.png"
            alt="ATF Challenge Winners 2024-2025"
            className="w-full h-auto object-cover"
          />
          <BorderBeam
            size={400}
            duration={12}
            delay={9}
            borderWidth={1.5}
            colorFrom="hsl(var(--primary))"
            colorTo="hsl(var(--primary)/0)"
          />
        </div>
      </div>
    </section>
  );
}

function ChallengeOpportunitySection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center space-y-6">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins text-atf-charcoal">
            The Challenge & The Opportunity
          </h3>
          <p className="text-2xl font-semibold text-atf-teal max-w-3xl mx-auto">
            We are building the proven pathway from the classroom to a career in
            AI.
          </p>
          <div className="pt-6 max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              Africa's greatest resource is its human talent, but a critical gap
              exists between education and employment. The ATF AI Challenge is
              our solution. We are building the continent's largest, most
              advanced talent pipeline to ensure the next generation doesn't
              just consume AI, but builds it,{" "}
              <span className="font-bold text-atf-teal">
                for Africa, by Africans.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ThreeStagePipelineSection() {
  const stages = [
    {
      number: "1",
      title: "THE AI SCHOOL",
      subtitle: "Learn",
      description:
        "A free, 4-week virtual bootcamp where 15,000 learners get the foundational AI skills and confidence they need to start building.",
      icon: BookOpen,
      color: "atf-teal",
    },
    {
      number: "2",
      title: "THE AI CHALLENGE",
      subtitle: "Build",
      description:
        "10,000 participants form 2,500+ teams. Mentored by experts, they build functional AI-powered solutions to solve real-world problems set by our institutional partners.",
      icon: Users,
      color: "atf-orange",
    },
    {
      number: "3",
      title: "THE DEMO DAYS",
      subtitle: "Launch",
      description:
        "The grand finale. Top teams showcase their solutions to 200+ employers, investors, and partners in each country, creating a direct pathway to jobs, internships, and funding.",
      icon: Rocket,
      color: "atf-gold",
    },
  ];

  return (
    <section className="py-20 bg-atf-offwhite">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins text-atf-charcoal">
            The 3-Stage Pipeline
          </h3>
          <p className="text-2xl font-semibold text-atf-teal">
            A Complete Journey. A Proven Model.
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our high-touch program guides participants through a three-stage
            journey:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <Card
                key={index}
                className="border-none shadow-lg bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-center mb-4">
                    <div
                      className={`w-16 h-16 rounded-full bg-${stage.color} flex items-center justify-center`}
                      style={{
                        backgroundColor:
                          stage.color === "atf-teal"
                            ? "#006B7D"
                            : stage.color === "atf-orange"
                            ? "#F75C2F"
                            : "#F9A826",
                      }}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold font-poppins text-center">
                    <div className="text-sm text-gray-500 font-normal mb-1">
                      Stage {stage.number}
                    </div>
                    <div className="text-atf-charcoal">{stage.title}</div>
                    <div className="text-lg text-atf-teal font-semibold mt-1">
                      ({stage.subtitle})
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed text-center">
                    {stage.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PartnershipSection() {
  return (
    <section id="partnership" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins text-atf-charcoal">
            The Partnership Section
          </h3>
          <p className="text-2xl font-semibold text-atf-teal">
            Powered by History, Supported by Google.org
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            This scale-up is made possible by two powerful forces:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* ATF History */}
          <div className="space-y-4">
            <div className="bg-atf-offwhite rounded-lg p-8 h-full">
              <h4 className="text-2xl font-bold text-atf-teal mb-4">
                ATF's 37-Year History
              </h4>
              <p className="text-gray-700 leading-relaxed">
                We aren't a startup. The African Technology Forum's deep-rooted
                university and industry networks, built since 1988, provide the
                stability and access to make this scale-up possible.
              </p>
            </div>
          </div>

          {/* Google.org Support */}
          <div className="space-y-4">
            <div className="bg-atf-offwhite rounded-lg p-8 h-full">
              <h4 className="text-2xl font-bold text-atf-orange mb-4">
                Google.org's $1M Support
              </h4>
              <p className="text-gray-700 leading-relaxed">
                This funding is an accelerant, allowing us to dedicate 19
                full-time staff to provide the intensive, high-touch mentorship
                that sets our program apart from any online course.
              </p>
            </div>
          </div>
        </div>

        {/* Logos */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-16">
          <div className="text-3xl font-bold text-atf-teal font-poppins">
            African Technology Forum
          </div>
          <div className="text-4xl text-gray-400 font-light">×</div>
          <div className="text-3xl font-bold text-atf-orange font-poppins">
            Google.org
          </div>
        </div>
      </div>
    </section>
  );
}

function GetInvolvedSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-atf-offwhite to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins text-atf-charcoal">
            Get Involved
          </h3>
          <p className="text-2xl font-semibold text-atf-teal">
            The Future is Collaborative. Join Us.
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We are actively seeking partners to help shape Africa's AI future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* For Students & Innovators */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-atf-teal hover:shadow-2xl transition-all duration-300">
            <h4 className="text-2xl font-bold text-atf-charcoal mb-4">
              For Students & Innovators
            </h4>
            <p className="text-gray-700 leading-relaxed mb-6">
              Registrations for the 2026 AI School cohort are not yet open, but
              you can be the first to know.
            </p>
            <Button
              size="lg"
              className="w-full bg-atf-teal hover:bg-atf-teal/90 text-white font-bold py-6 rounded-lg transition-all duration-300"
            >
              Notify Me When Registrations Open
            </Button>
          </div>

          {/* For Universities & Partners */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-atf-orange hover:shadow-2xl transition-all duration-300">
            <h4 className="text-2xl font-bold text-atf-charcoal mb-4">
              For Universities & Partners
            </h4>
            <p className="text-gray-700 leading-relaxed mb-6">
              We are seeking university, corporate, and NGO partners for our
              2026 cohort. Help us find talent, provide mentorship, or set a
              real-world challenge.
            </p>
            <Button
              size="lg"
              className="w-full bg-atf-orange hover:bg-atf-orange/90 text-white font-bold py-6 rounded-lg transition-all duration-300"
            >
              Learn More About Partnership
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
