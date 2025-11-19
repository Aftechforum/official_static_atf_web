// import LandingHeader from "@/components/sections/landing-header";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import Section from "@/components/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AftLogoWrapper } from "@/components/icons";

export default function Home() {
  return (
    <main>
      {/* <LandingHeader /> */}
      <Header />
      <span className="block text-center w-10/12 sm:w-3/5 md:w-1/2 lg:w-2/5 xl:w-1/3 mx-auto bg-white rounded-3xl p-4 mt-12">
        <AftLogoWrapper className="" />
      </span>
      <WhatWeDoSection />
      <OurHistorySection />
      <Footer />
    </main>
  );
}

function WhatWeDoSection() {
  const services = [
    {
      title: "Publications",
      description:
        "ATF publishes the African Technology Forum, a magazine focusing on STEM development in Africa since 1988. Our publications reach a wide network internationally and bring depth to stories that would not otherwise be told.",
    },
    {
      title: "Networking",
      description:
        "Through its Chapter network ATF is able to gather news and information from its publication. Currently in Ghana, ATF has established in Ghana four chapters including the Ashesi University Chapter, UG Chapter, KNUST Chapter and the UCC Chapter.",
    },
    {
      title: "Consulting",
      description:
        "We understand how science and technology can work in Africa. Contact us for guidance and resources in developing your research or ventures on technical matters.",
    },
  ];

  return (
    <Section title="What We Do" className="bg-background">
      <div className="mt-8">
        <div className="border-t border-dashed border-gray-300 mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-none shadow-none bg-transparent"
            >
              <CardHeader className="px-0 pb-4">
                <CardTitle className="text-xl font-bold">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}

function OurHistorySection() {
  return (
    <Section title="Our History" className="bg-background">
      <div className="mt-8 max-w-4xl mx-auto">
        <p className="text-muted-foreground leading-relaxed text-lg">
          {`
          African Technology Forum was founded by students in 1988 at the
          Massachusetts Institute of Technology. They found at the time that
          Africans were largely absent from scientific writings, even when
          Africa was the subject matter. As a result they launched a quarterly
          magazine called the African Technology Forum to bring to light
          Africa's contributions. The situation is not very different today, and
          the need to place Africans in Africa's development story remains as
          great as ever.
          `}
        </p>
      </div>
    </Section>
  );
}
