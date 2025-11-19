const partners = [
  "37 military hospital.png",
  "BELA-LOGO-2-1-1-300x58.png",
  "Esoko_Logo.png",
  "korle bu original.png",
];

export function SocialProofPartner() {
  return (
    <section id="SocialProofPartner" className="bg-red-500==">
      <div className="py-14">
        <div className="container mx-auto px-4 md:px-8">
          <h3 className="text-center text-sm font-semibold text-gray-500">
            PARTNERING ORGANIZATIONS
          </h3>
          <div className="relative mt-6">
            <div className="flex flex-wrap justify-center items-center gap-2">
              {partners.map((logo, idx) => (
                <img
                  key={idx}
                  src={`/partners/${logo}`}
                  className="h-20= w-40 px-2 dark:brightness-0= dark:invert"
                  alt={logo}
                />
              ))}
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-background dark:from-black="></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-background dark:from-black="></div>
          </div>
        </div>
      </div>
    </section>
  );
}
