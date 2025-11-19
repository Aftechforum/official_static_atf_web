import BlurFade from "@/components/magicui/blur-fade";
import Section from "@/components/section";
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
      id="about-challenge"
      title="What is this challenge?"
      subtitle="About The Challenge"
      className="bg-neutral-100 dark:bg-neutral-900"
    >
      <p className="mt-6 text-lg leading-8 text-slate-600= max-w-2xl= mx-auto px-6">
        Thank you for expressing your interest in this challenge! We are
        thrilled to have you on board as we embark on this exciting journey of
        innovation and collaboration in the world of AI technology
      </p>

      <p className="mt-6 text-lg leading-8 text-slate-600= mx-auto px-6">
        African Technology Forum Student challenge is not just a competition;
        {
          " it's an opportunity to push the boundaries of what's possible in AI. "
        }
        This challenge is designed for students to bring together minds from
        diverse backgrounds to tackle real-world problems and create meaningful
        solutions in the field health, energy and other sector in africa.
      </p>

      <h3 className=" text-center mx-auto mt-6 max-w-xs text-xl font-semibold sm:max-w-none sm:text-2xl md:text-3xl">
        Purpose of the ATF AI Challenge
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
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
