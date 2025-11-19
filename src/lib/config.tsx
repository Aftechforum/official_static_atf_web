// import { Icons } from "@/components/icons";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

export const BLUR_FADE_DELAY = 0.15;

export const siteConfig = {
  name: "Official ATF Website",
  // name: "African Technology Forum",
  description: "Promoting Science and Technology in Africa",
  // description: "Push the boundaries of what's possible in AI",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  keywords: ["ATF", "AI", "Challenge", "Africa", "Ghana", "Nigeria"],
  links: {
    email: "info@africantechnologyforum.org",
    twitter: "#", // https://africantechnologyforum.org/
    github: "#", //"https://github.com/Aftechforum",
    instagram: "#",
  },
  header: [
    {
      href: "/#participate",
      label: "Participate",
    },
    {
      href: "/#about-us",
      label: "About Us",
    },
    {
      href: "/#code-of-conduct",
      label: "Code of Conduct",
    },
    {
      href: "/about-org",
      label: "About Org",
    },
  ],
  faqs: [
    {
      question: "What is acme.ai?",
      answer: (
        <span>
          acme.ai is a platform that helps you build and manage your AI-powered
          applications. It provides tools and services to streamline the
          development and deployment of AI solutions.
        </span>
      ),
    },
    {
      question: "How can I get started with acme.ai?",
      answer: (
        <span>
          You can get started with acme.ai by signing up for an account on our
          website, creating a new project, and following our quick-start guide.
          We also offer tutorials and documentation to help you along the way.
        </span>
      ),
    },
    {
      question: "What types of AI models does acme.ai support?",
      answer: (
        <span>
          acme.ai supports a wide range of AI models, including but not limited
          to natural language processing, computer vision, and predictive
          analytics. We continuously update our platform to support the latest
          AI technologies.
        </span>
      ),
    },
    {
      question: "Is acme.ai suitable for beginners in AI development?",
      answer: (
        <span>
          Yes, acme.ai is designed to be user-friendly for both beginners and
          experienced developers. We offer intuitive interfaces, pre-built
          templates, and extensive learning resources to help users of all skill
          levels create AI-powered applications.
        </span>
      ),
    },
    {
      question: "What kind of support does acme.ai provide?",
      answer: (
        <span>
          acme.ai provides comprehensive support including documentation, video
          tutorials, a community forum, and dedicated customer support. We also
          offer premium support plans for enterprises with more complex needs.
        </span>
      ),
    },
  ],
  footer: [
    {
      title: "Product",
      links: [
        { href: "#", text: "Features", icon: null },
        { href: "#", text: "Pricing", icon: null },
        { href: "#", text: "Documentation", icon: null },
        { href: "#", text: "API", icon: null },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "#", text: "About Us", icon: null },
        { href: "#", text: "Careers", icon: null },
        { href: "#", text: "Blog", icon: null },
        { href: "#", text: "Press", icon: null },
        { href: "#", text: "Partners", icon: null },
      ],
    },
    {
      title: "Resources",
      links: [
        { href: "#", text: "Community", icon: null },
        { href: "#", text: "Contact", icon: null },
        { href: "#", text: "Support", icon: null },
        { href: "#", text: "Status", icon: null },
      ],
    },
    {
      title: "Social",
      links: [
        {
          href: "#",
          text: "Twitter",
          icon: <FaTwitter />,
        },
        {
          href: "#",
          text: "Instagram",
          icon: <RiInstagramFill />,
        },
        {
          href: "#",
          text: "Youtube",
          icon: <FaYoutube />,
        },
      ],
    },
  ],
};

export type SiteConfig = typeof siteConfig;
