// import Features from "@/components/features-vertical";
import Section from "@/components/section";

import BlurFade from "@/components/magicui/blur-fade";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, Merge, Zap, Sparkles, Upload } from "lucide-react";

const data = [
  {
    id: 1,
    title: "1. Upload Your Data",
    content:
      "Simply upload your data to our secure platform. We support various file formats and data types to ensure a seamless integration with your existing systems.",
    image: "/dashboard.png",
    icon: <Upload className="w-6 h-6 text-primary" />,
  },
  {
    id: 2,
    title: "2. Click Start",
    content:
      "Our advanced AI algorithms automatically process and analyze your data, extracting valuable insights and patterns that would be difficult to identify manually.",
    image: "/dashboard.png",
    icon: <Zap className="w-6 h-6 text-primary" />,
  },
  {
    id: 3,
    title: "3. Get Actionable Insights",
    content:
      "Receive clear, actionable insights and recommendations based on the AI analysis. Use these insights to make data-driven decisions and improve your business strategies.",
    image: "/dashboard.png",
    icon: <Sparkles className="w-6 h-6 text-primary" />,
  },
];

const conducts = [
  {
    title: "Respect And Inclusivity",
    description:
      "Every participant should be treated with respect, regardless of their background, expertise, or experience. We strive to create an inclusive environment where diversity is celebrated.",
  },
  {
    title: "Collaboration And Teamwork",
    description:
      "While competition is a part of the hackathon, collaboration and teamwork are key. Participants are encouraged to share ideas, help each other, and work together towards innovative solutions.",
  },
  {
    title: "Ethical Conduct",
    description:
      "All work should be original and developed during the hackathon. Plagiarism, use of unauthorized materials, or unethical behavior will not be tolerated. Respect for intellectual property rights is essential.",
  },
  {
    title: "Safety And Well-Being",
    description:
      "Prioritize your health and well-being. Take regular breaks, eat properly, and stay hydrated. If you feel unwell or notice someone in distress, please contact an organizer immediately.",
  },
  {
    title: "Positive Communication",
    description:
      "Keep all communication, whether verbal or written, positive and constructive. Avoid negative comments or criticisms that are not constructive.",
  },
  {
    title: "Adherence To Rules",
    description:
      "All participants must adhere to the specific rules and guidelines of the hackathon. This includes any rules regarding the submission of projects, use of technology, and timelines.",
  },
  {
    title: "No Harassment",
    description:
      "Harassment in any form, including but not limited to harassment based on gender, race, ethnicity, religion, age, sexual orientation, or disability, is strictly prohibited. This applies to all interactions during the hackathon, including social media and online forums.",
  },
  {
    title: "Privacy And Data Protection",
    description:
      "Be mindful of privacy and data protection laws. Do not use or distribute personal data without proper authorization and consent.",
  },
  {
    title: "Conflict Resolution",
    description:
      "In case of any disputes or conflicts, participants should approach the organizers who will work towards a fair and amicable resolution.",
  },
  {
    title: "Enjoy The Experience",
    description:
      "Lastly, remember to have fun and enjoy the experience of learning, creating, and collaborating!",
  },
];

export default function Component() {
  return (
    <Section
      id="code-of-conduct"
      title="Our expectations for you"
      subtitle="Code Of Conduct"
      description="To foster a collaborative and inclusive environment where participants can learn, innovate, and address local challenges, the African Technology Forum (ATF) established a Code of Conduct that all participants must adhere to during the challenge. This code outlines the principles of respect, integrity, and responsible behavior that we expect everyone to uphold:"
    >
      {/* <Features data={data} /> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
        {conducts.map((conduct, index) => (
          <BlurFade key={index} delay={0.2 + index * 0.2} inView>
            <Card className="dark:bg-neutral-900 border-none shadow-none">
              <CardContent className="space-y-2">
                {/* <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <conduct.icon className="w-6 h-6 text-primary" />
                </div> */}
                <h3 className="text-xl font-semibold">{conduct.title}</h3>
                <p className="text-muted-foreground">{conduct.description}</p>
              </CardContent>
            </Card>
          </BlurFade>
        ))}
      </div>
    </Section>
  );
}
