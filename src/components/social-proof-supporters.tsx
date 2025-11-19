const supporters = [
  "knust - rail.png",
  "indaba logo.png",
  "blossomlog.png",
  "UoG.png",
];

export function SocialProofSupporters() {
  return (
    <section id="SocialProofSupporters">
      <div className="py-14">
        <div className="container mx-auto px-4 md:px-8">
          <h3 className="text-center text-sm font-semibold text-gray-500">
            SUPPORTING ORGANIZATIONS
          </h3>
          <div className="relative mt-6">
            <div className="flex flex-wrap justify-center items-center gap-2">
              {supporters.map((logo, idx) => {
                if (logo === "indaba logo.png") {
                  return (
                    <img
                      key={idx}
                      src={`/supporters/${logo}`}
                      className="w-40 px-2 invert dark:invert-0"
                      alt={logo}
                    />
                  );
                } else {
                  return (
                    <img
                      key={idx}
                      src={`/supporters/${logo}`}
                      className="w-40 px-2 dark:invert"
                      alt={logo}
                    />
                  );
                }
              })}
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-background dark:from-black="></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-background dark:from-black="></div>
          </div>
        </div>
      </div>
    </section>
  );
}
