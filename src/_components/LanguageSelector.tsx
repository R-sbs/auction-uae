"use client";
import clsx from "clsx";
import { usePathname, useRouter } from "@/navigation";
import { useParams } from "next/navigation";
import React, { ChangeEvent, ReactNode, useTransition } from "react";

import { GlobeIcon } from "lucide-react";

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LanguageSelector({
  children,
  defaultValue,
  label,
}: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const params = useParams();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(
        //@ts-ignore
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }

  return (
    <label
      className={clsx(
        "relative text-gray-400 border-1 border-white",
        isPending && "transition-opacity [&:disabled]:opacity-30"
      )}
    >
      <p className="sr-only">{label}</p>
      <GlobeIcon className="text-base text-white inline-flex mr-2" />
      <select
        title="Select Language"
        onChange={onSelectChange}
        disabled={isPending}
        id="location"
        name="location"
        defaultValue={defaultValue}
        className="inline-flex appearance-none py-1 max-w-fit rounded border-0  text-beige-125 bg-white font-bold hover:ring-2 hover:ring-beige-125 sm:text-sm sm:leading-6 transition-all"
      >
        {children}
      </select>
    </label>
  );
}
