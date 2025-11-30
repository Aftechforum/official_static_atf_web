"use client";

import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { BorderBeam } from "@/components/magicui/border-beam";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  GraduationCap,
  Building2,
} from "lucide-react";

export default function GoogleSupportPage() {
  return (
    <main className="bg-white">
      <Header />

      {/* Breadcrumb */}
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 max-w-7xl">
          <nav className="text-sm text-gray-600">
            <span>Home</span>
            <span className="mx-2">/</span>
            <span>News</span>
            <span className="mx-2">/</span>
            <span className="text-gray-900">
              The Future of African AI is Here
            </span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <article className="bg-white">
        <div className="container mx-auto px-4 py-12 max-w-7xl">
          {/* Article Header */}
          <div className="max-w-4xl mx-auto mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-poppins text-gray-900 leading-tight mb-6">
              The Future of African AI is Here
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed mb-8">
              The African Technology Forum, with $1M in support from Google.org,
              is launching the ATF AI Challenge to train 10,000+ young
              innovators across Ghana, Kenya, Nigeria, and South Africa.
            </p>

            {/* Article Metadata */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 pb-8 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>November 30, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>8 min read</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
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
            <p className="text-sm text-gray-600 mt-3 text-center italic">
              ATF Challenge Winners 2024-2025 cohort
            </p>
          </div>

          {/* Main Content with Sidebar Layout */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Main Article Content */}
              <div className="lg:col-span-8">
                {/* Opening Paragraph */}
                <div className="prose prose-lg max-w-none mb-8">
                  <p className="text-lg text-gray-800 leading-relaxed mb-6">
                    Why does our foundation invest in the Global Fund to Fight
                    AI Education Gaps? Because it works.
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
                    The ATF AI Challenge operates through a proven three-stage
                    model that guides participants from foundational learning to
                    real-world application and career opportunities.
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
                      The culmination brings top teams face-to-face with more
                      than 200 employers, investors, and strategic partners in
                      each participating country. These showcase events create
                      direct pathways to employment, internships, and
                      funding—converting educational achievement into economic
                      opportunity.
                    </p>
                  </div>
                </div>

                {/* Section: Why It Works */}
                <div className="mb-10">
                  <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-4">
                    Why This Partnership Works
                  </h2>
                  <p className="text-lg text-gray-800 leading-relaxed mb-6">
                    This scale-up succeeds because it combines two essential
                    elements: institutional depth and strategic acceleration.
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
                    Addressing Africa's Critical Skills Gap
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
                    Building Africa's AI Future
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

              {/* Sidebar */}
              <aside className="lg:col-span-4">
                <div className="sticky top-24 space-y-8">
                  {/* Key Facts Box */}
                  <div className="bg-atf-offwhite border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 pb-3 border-b border-gray-300">
                      Key Facts
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Users className="h-5 w-5 text-atf-teal mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-gray-900">
                            10,000+
                          </div>
                          <div className="text-sm text-gray-600">
                            Young innovators to be trained
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-atf-teal mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-gray-900">
                            4 Countries
                          </div>
                          <div className="text-sm text-gray-600">
                            Ghana, Kenya, Nigeria, South Africa
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Building2 className="h-5 w-5 text-atf-teal mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-gray-900">
                            $1 Million
                          </div>
                          <div className="text-sm text-gray-600">
                            Investment from Google.org
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <GraduationCap className="h-5 w-5 text-atf-teal mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-gray-900">
                            37 Years
                          </div>
                          <div className="text-sm text-gray-600">
                            {`ATF's history since 1988`}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Program Timeline */}
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 pb-3 border-b border-gray-300">
                      Program Timeline
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <div className="font-semibold text-atf-teal">
                          Early 2026
                        </div>
                        <div className="text-sm text-gray-600">
                          Registration opens
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold text-atf-teal">
                          Week 1-4
                        </div>
                        <div className="text-sm text-gray-600">
                          AI School bootcamp
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold text-atf-teal">
                          Month 2-4
                        </div>
                        <div className="text-sm text-gray-600">
                          AI Challenge team projects
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold text-atf-teal">
                          Month 5
                        </div>
                        <div className="text-sm text-gray-600">
                          Demo Days across 4 countries
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Partnership Logo */}
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4">
                      Partners
                    </h3>
                    <div className="space-y-4">
                      <div className="text-lg font-bold text-atf-teal">
                        African Technology Forum
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-px bg-gray-300 flex-1"></div>
                        <div className="text-gray-400 text-xs">×</div>
                        <div className="h-px bg-gray-300 flex-1"></div>
                      </div>
                      <div className="text-lg font-bold text-atf-orange">
                        Google.org
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
