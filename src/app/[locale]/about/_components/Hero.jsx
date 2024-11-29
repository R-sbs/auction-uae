import Image from "next/image";
import heroImage from "@/images/auction_hero.webp";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero({ title, sub }) {
  return (
    <div className="bg-[#F9FAFB]">
      <div className="mx-auto max-w-7xl flex flex-col items-center lg:flex-row gap-20 lg:px-8">
        <div className="px-6 py-20 flex-1 lg:px-0">
          <div className="m-auto max-w-2xl lg:mx-0 flex flex-col gap-6">
            <h1 className="mt-24 text-h3 font-serif font-bold tracking-wide text-gray-900 sm:mt-10 ">
              {title}
            </h1>
            <p className="my-6 text-base-lg leading-8 text-gray-700">{sub}</p>

            <Button
              asChild
              className="rounded-md border border-transparent bg-beige-100 py-3 text-h6  text-white font-semibold hover:bg-beige-125"
            >
              <Link href="/register" prefetch={true}>
                Join Now<span className="sr-only">, Join Now</span>
              </Link>
            </Button>
          </div>
        </div>

        <Image
          alt="Hero image"
          src={heroImage}
          width={500} 
          height={500}
          sizes="100vw"
          className="pt-20 ml-0 flex-1"
        />
      </div>
    </div>
  );
}
