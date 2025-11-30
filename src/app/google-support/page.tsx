"use client";

import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
// import { BorderBeam } from "@/components/magicui/border-beam";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  GraduationCap,
  Building2,
} from "lucide-react";
import { ArticleContentV1, ArticleContentV0 } from "./article-components";
import { useState } from "react";

export default function GoogleSupportPage() {
  const [articleContent, setArticleContent] = useState<"v0" | "v1">("v0");

  const handleArticleContentChange = (content: "v0" | "v1") => {
    setArticleContent(content);
  };

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
              {/* <BorderBeam
                size={400}
                duration={12}
                delay={9}
                borderWidth={1.5}
                colorFrom="hsl(var(--primary))"
                colorTo="hsl(var(--primary)/0)"
              /> */}
            </div>
            <p className="text-sm text-gray-600 mt-3 text-center italic">
              ATF Challenge Winners 2024 & 2025 Cohorts
              <span
                onClick={() => {
                  if (articleContent === "v0") handleArticleContentChange("v1");
                  else handleArticleContentChange("v0");
                }}
                className="text-xs text-gray-500"
              >
                <span className="ml-4 text-xs font-semibold text-red-500 cursor-pointer hover:text-red-700">
                  [DEV MODE] Toggle Article Content{" - "}
                  {articleContent === "v0" ? "V1" : "V0"}
                </span>
              </span>
            </p>
          </div>

          {/* Main Content with Sidebar Layout */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Main Article Content */}
              {articleContent === "v0" ? (
                <ArticleContentV0 />
              ) : (
                <ArticleContentV1 />
              )}

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
