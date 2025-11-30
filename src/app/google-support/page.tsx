// import LandingHeader from "@/components/sections/landing-header";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { AftLogoWrapper } from "@/components/icons";
import { motion } from "framer-motion";
import { BorderBeam } from "@/components/magicui/border-beam";

export default function Home() {
  return (
    <main>
      {/* <LandingHeader /> */}
      <Header />
      <span className="block text-center w-10/12 sm:w-3/5 md:w-1/2 lg:w-2/5 xl:w-1/3 mx-auto bg-white rounded-3xl p-4 mt-12">
        <AftLogoWrapper className="" />
      </span>
      <Footer />
    </main>
  );
}

function HeroImage() {
  const ease = [0.16, 1, 0.3, 1];
  return (
    <motion.div
      className="relative mx-auto flex w-full rounded-lg p-1 items-center justify-center mt-16"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 1, ease }}
    >
      <motion.img
        // key={currentIndex}
        src={"/atf-award-ceremony-2024.png"}
        alt="atf-award-ceremony-2024"
        // className="border rounded-lg shadow-lg max-w-screen-lg"
        className="aspect-auto h-full w-full object-cover relative border rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      />
      {/* <HeroVideoDialog
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
          thumbnailSrc="/dashboard.png"
          thumbnailAlt="Hero Video"
          className="border rounded-lg shadow-lg max-w-screen-lg mt-16=="
        /> */}
      <BorderBeam
        size={400}
        duration={12}
        delay={9}
        borderWidth={1.5}
        colorFrom="hsl(var(--primary))"
        colorTo="hsl(var(--primary)/0)"
      />
    </motion.div>
  );
}
