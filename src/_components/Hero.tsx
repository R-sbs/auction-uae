import Link from "next/link";

import Image from "next/image";
import heroImage from "@/images/auction_hero.webp";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const t = useTranslations("home");
  return (
    <div
      className="relative bg-[#F9FAFB] bg-cover bg-left w-full"
      style={{ backgroundImage: `url(${heroImage.src})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8 place-content-center">
        <div className="px-6 py-28 lg:col-span-7 lg:px-0  xl:col-span-8">
          <div className="m-auto max-w-2xl lg:mx-0">
            <h1 className="text-h2 font-serif font-bold tracking-wide text-gray-100 sm:text-[54px]">
              {t("hero.title")}
            </h1>

            <p className="my-10 text-h6 text-gray-200">{t("hero.sub")}</p>

            <Button
              asChild
              variant="default"
              className="text-white font-serif hover:tracking-wide transition-all text-[18px] sm:text-[30px] font-bold bg-transparent border-beige-100 border-2 hover:text-white hover:bg-beige-100 py-4 sm:py-8 px-8 sm:px-16 hover:underline-offset-4 tracking-wider button-85"
            >
              <Link href="/about">Join Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
