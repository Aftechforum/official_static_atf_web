import Section from "@/components/section";

export default function Component() {
  return (
    <Section
      id="about-us"
      title="Who are we?"
      subtitle="About Us"
      className="bg-neutral-100= dark:bg-neutral-900"
    >
      <p className="mt-6 text-lg leading-8 text-slate-600= max-w-2xl= mx-auto px-6">
        African Technology Forum (ATF) is a registered non-profit organization
        (NGO) in Ghana dedicated to the promotion of science and technology in
        Africa. Founded in 1988, the organization has published pioneering
        publications in science and related fields and built a network of
        students and professionals in Africa, Europe, and the Americas.
      </p>

      <p className="mt-6 text-lg leading-8 text-slate-600= mx-auto px-6">
        {
          "The objective of the Challenge is to bring out the innovative and creative abilities in students and to encourage the application of acquired knowledge and skills to solve real world problems. This year's challenge will introduce students to AI technologies as one of the tools for solving local problems."
        }
      </p>
    </Section>
  );
}
