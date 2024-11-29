import Image from "next/image";
import ctcImg from "@/images/downloadCTC.jpg";
import appStoreImg from "@/images/Download_on_the_App_Store_Badge.png";
import googlePlayImg from "@/images/Google_Play_Store_badge.png";
import Link from "next/link";

export default function DowloadAppCTC() {
  return (
    <div className="bg-black py-24">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-black px-6 py-20 sm:rounded-3xl sm:px-10 sm:py-24 lg:py-24 xl:px-24">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
            <Image
              alt="DownloadCtcImage"
              src={ctcImg}
              width={0}
              height={0}
              sizes="100vw"
              className="rounded-xl shadow-xl ring-1 ring-white/10 lg:row-span-2 object-cover"
            />

            <div className="sm:max-w">
              <h2 className="text-h3 font-serif font-bold tracking-wide text-white sm:text-h2">
                Download Our App Today
              </h2>
              <p className="mt-6 text-base-lg leading-8 text-gray-300">
                Download our Convenient to use, Auction App Today, Available
                Both On App Store And Google Play.
              </p>
              <div className="mt-8 min-w-full gap-4 flex flex-col sm:flex-row justify-around items-center">
                <Link
                  href="#"
                  className="flex rounded-md bg-white/10 text-sm font-semibold text-white hover:scale-[1.01] focus-visible:outline focus-visible:outline-white text-center items-center	gap-2 transition-all"
                >
                  <Image
                    alt="app-store"
                    src={appStoreImg}
                    width={200}
                    height={100}
                    sizes="100vw"
                  />
                </Link>
                <Link
                  href="#"
                  className="inline-flex rounded-md bg-white/10 text-sm font-semibold text-white hover:scale-[1.01] focus-visible:outline focus-visible:outline-white text-center items-center	gap-2  transition-all"
                >
                  <Image
                    alt="app-store"
                    src={googlePlayImg}
                    width={200}
                    height={100}
                    sizes="100vw"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
