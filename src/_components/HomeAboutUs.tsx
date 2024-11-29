import aboutUsImg from "@/images/people-raise-hands.jpg";
import Image from "next/image";

export default function HomeAboutUs() {
  return (
    <div className="bg-beige-125 py-20">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden px-6 py-10 sm:rounded-3xl sm:px-10 sm:py-24 lg:py-24 xl:px-24">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
            <div className="lg:row-start-2 lg:max-w-md">
              <h2 className="text-h3 font-serif font-bold tracking-wide text-white sm:text-h2">
                About Us
              </h2>
              <p className="mt-6 text-h6 text-pretty leading-8 text-gray-100">
                Welcome to our exclusive online auction platform, where history
                enthusiasts and collectors converge to discover and acquire some
                of the world&apos;s rarest and most valuable coins and banknotes.
                Whether you are a seasoned collector or a passionate newcomer,
                our curated selection offers something extraordinary for
                everyone.
              </p>
            </div>
            <Image
              alt="Product screenshot"
              src={aboutUsImg}
              width={0}
              height={0}
              sizes="100vw"
              className="relative -z-20 min-w-full max-w-xl rounded-xl shadow-xl ring-1 ring-white/10 lg:row-span-4 lg:max-w-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
