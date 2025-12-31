import Link from "next/link";

export default function HeaderBanner() {
  return (
    <div className="border-b border-gray-200 bg-white overflow-hidden">
      <div className="relative py-2">
        <style
          dangerouslySetInnerHTML={{
            __html: `
              @keyframes scroll-left {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-200%);
                }
              }
              .animate-scroll {
                animation: scroll-left 15s linear infinite;
              }
              .animate-scroll:hover {
                animation-play-state: paused;
              }
              @media (min-width: 768px) {
                @keyframes scroll-left {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-70%);
                  }
                }
              }
            `,
          }}
        />
        <div className="flex animate-scroll whitespace-nowrap">
          {/* First copy */}
          <div>
            <Link href="/google-support">
              <div className="flex items-center gap-2 px-8 text-sm">
                <span className="text-gray-900 font-bold">
                  📣 The Future of African AI is Here
                </span>
                <span className="text-gray-700">
                  The African Technology Forum, with $1M in support from
                  Google.org...
                </span>
                <span className="font-bold text-atf-teal underline cursor-pointer hover:text-atf-teal/80">
                  Read more
                </span>
              </div>
            </Link>
          </div>
          {/* Second copy for seamless loop */}
          <div>
            <Link href="/google-support">
              <div className="flex items-center gap-2 px-8 text-sm">
                <span className="text-gray-900 font-bold">
                  📣 The Future of African AI is Here
                </span>
                <span className="text-gray-700">
                  The African Technology Forum, with $1M in support from
                  Google.org...
                </span>
                <span className="font-bold text-atf-teal underline cursor-pointer hover:text-atf-teal/80">
                  Read more
                </span>
              </div>
            </Link>
          </div>
          {/* Third copy for seamless loop */}
          <div>
            <Link href="/google-support">
              <div className="flex items-center gap-2 px-8 text-sm">
                <span className="text-gray-900 font-bold">
                  📣 The Future of African AI is Here
                </span>
                <span className="text-gray-700">
                  The African Technology Forum, with $1M in support from
                  Google.org...
                </span>
                <span className="font-bold text-atf-teal underline cursor-pointer hover:text-atf-teal/80">
                  Read more
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

