import Marquee from "@/components/magicui/marquee";
// import Image from "next/image";
import { BlurIn } from "@/components/magicui/blur-in";

const universities = [
  "Ashesi",
  "University of Ghana",
  "UCC",
  "KNUST",
  "Ghana Communication Technology",
  "University Academic City",
  "MEST",
  "Tarkoradi Technical University",
  "University for Development Studies",
  "Accra Institute of Technology",
  "University of Energy and Natural Resources",
  "Ho Technical University",
  "University of Mines and Technology",
  "University of Technology and Applied Sciences",
  "Valley View University",
  "GIMPA",
  "Lancaster University Ghana",
  "University of the People",
  "SDD University of Business and Integrated Development Studies",
  "Fred N. Binks School of Public Health",
  "University of Professional Studies",
];

const first_universities = [
  "Ashesi",
  "University of Ghana",
  "UCC",
  "KNUST",
  "Ghana Communication Technology",
];

const second_universities = [
  "University Academic City",
  "MEST",
  "Tarkoradi Technical University",
  "University for Development Studies",
  "Accra Institute of Technology",
];

const third_universities = [
  "University of Energy and Natural Resources",
  "Ho Technical University",
  "University of Mines and Technology",
  "University of Technology and Applied Sciences",
  "Valley View University",
  "GIMPA",
];

const fourth_universities = [
  "Lancaster University Ghana",
  "University of the People",
  "SDD University of Business and Integrated Development Studies",
  "Fred N. Binks School of Public Health",
  "University of Professional Studies",
];

export default function Logos() {
  return (
    <section id="logos">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <h3 className="text-center text-sm font-semibold text-gray-500 uppercase">
          Participating universities
        </h3>
        <div className="relative mt-6">
          <Marquee className="max-w-full [--duration:120s]">
            {universities.map((name, idx) => (
              // <Image
              //   key={idx}
              //   width={112}
              //   height={40}
              //   src={`https://cdn.magicui.design/companies/${logo}.svg`}
              //   className="h-10 w-28 dark:brightness-0 dark:invert grayscale opacity-30"
              //   alt={logo}
              // />
              <BlurIn
                key={idx}
                word={name}
                className="text-lg font-bold text-black dark:text-white border-r-8 pr-4 border-primary"
              />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-background"></div>
        </div>
      </div>
    </section>
  );
}

export function Logos2() {
  return (
    <section id="logos">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <h3 className="text-center text-sm font-semibold text-gray-500 uppercase">
          Participating universities
        </h3>
        <div className="relative mt-6">
          <Marquee pauseOnHover className="[--duration:120s]">
            {first_universities.map((name, idx) => (
              <BlurIn
                key={`${idx}-first-uni`}
                word={name}
                className="text-lg font-bold text-black dark:text-white border-r-4 md:border-r-8 md:px-8 px-2 md:-ml-5 -ml-4 border-black"
              />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:120s]">
            {second_universities.map((name, idx) => (
              <BlurIn
                key={`${idx}-second-uni`}
                word={name}
                className="text-lg font-bold text-black dark:text-white border-r-4 md:border-r-8 md:px-8 px-2 md:-ml-5 -ml-4 border-black"
              />
            ))}
          </Marquee>
          <Marquee pauseOnHover className="[--duration:120s]">
            {third_universities.map((name, idx) => (
              <BlurIn
                key={`${idx}-third-uni`}
                word={name}
                className="text-lg font-bold text-black dark:text-white border-r-4 md:border-r-8 md:px-8 px-2 md:-ml-5 -ml-4 border-black"
              />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:120s]">
            {fourth_universities.map((name, idx) => (
              <BlurIn
                key={`${idx}-fourth-uni`}
                word={name}
                className="text-lg font-bold text-black dark:text-white border-r-4 md:border-r-8 md:px-8 px-2 md:-ml-5 -ml-4 border-black"
              />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background dark:from-background"></div>
        </div>
      </div>
    </section>
  );
}
