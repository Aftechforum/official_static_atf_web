"use client";

import Section from "@/components/section";
import { cn, formLink } from "@/lib/utils";
// import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";

import Link from "next/link";

import BlurFade from "@/components/magicui/blur-fade";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, Merge, Zap } from "lucide-react";

const purposes = [
  {
    title: "Empower Innovation",
    description:
      "To empower students to create innovative solutions to problems in any area of their choice (particularly education, agriculture, health and energy) through the application of knowledge and skills gained in their areas of study.",
    icon: Zap,
  },
  {
    title: "Introduce AI",
    description:
      "To introduce students to AI as an emerging powerful technology that can be leveraged to create solutions relevant to Africa.",
    icon: Bot,
  },
  {
    title: "Foster Teamwork",
    description:
      "To foster teamwork among students across the different disciplines through collaboration and encourage students to develop enthusiasm and practical entrepreneurial skills.",
    icon: Merge,
  },
];

export default function Component() {
  return (
    <Section
      id="participate"
      title="How to Participate?"
      // subtitle="~Empower Your Business with AI Workflows"
      subtitle="Eligibility"
      // description="~Generic AI tools won't suffice. Our platform is purpose-built to provide exceptional AI-driven solutions for your unique business needs."
      description="The Challenge welcomes all undergraduate and graduate students, as well as recent graduates, students having gaduated within the last five years, with a particular focus on those in tech hubs and those driven by an entrepreneurial spirit. Participation is open to teams of 3-5 individuals, with multi-disciplinary teams strongly encouraged."
      className="bg-neutral-100 dark:bg-neutral-900"
    >
      <div className="text-center space-y-4 pb-6 mx-auto">
        <h3
          // className="text-center mx-auto mt-6 max-w-xs text-xl font-semibold sm:max-w-none sm:text-2xl md:text-3xl"
          className="mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl"
        >
          Team Composition
        </h3>
        <p
          // className="mt-6 text-lg leading-8 text-slate-600= mx-auto px-6"
          className="mt-6 text-lg leading-8 text-slate-600 max-w-2xl mx-auto"
        >
          Multidisciplinary teams are essential for diverse perspectives and
          skillsets. One or two members must possess an intermediate to advanced
          level of experience in a general-purpose programming language like
          Python, Ruby, or C++.
        </p>
        <h3 className="hidden mx-auto pt-8 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl text-red-600">
          {/* Deadline: February 11, 2024 at 11:59pm */}
          <span className="text-red-600">Deadline:</span>{" "}
          <span className="text-green-600">March 25, 2025 at 11:59pm</span>
        </h3>
        <div className="flex flex-col w-full sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
          <Link
            // href="#participate"
            href={formLink}
            className={cn(
              buttonVariants({ variant: "default" }),
              "w-full sm:w-auto text-background flex gap-2"
            )}
          >
            Register now
          </Link>
        </div>
      </div>

      <div className="grid== hidden grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {purposes.map((purpose, index) => (
          <BlurFade key={index} delay={0.2 + index * 0.2} inView>
            <Card className="bg-background== bg-neutral-100 dark:bg-neutral-900 border-none shadow-none">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <purpose.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{purpose.title}</h3>
                <p className="text-muted-foreground">{purpose.description}</p>
              </CardContent>
            </Card>
          </BlurFade>
        ))}
      </div>
    </Section>
  );
}
