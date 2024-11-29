"use client";
import Link from "next/link";
import React, { FC } from "react";
import Image from "next/image";

import { HeartIcon } from "@heroicons/react/24/outline";
import { Item } from "@/types/items";
import RemainingTime from "./RemainingTime";

type ItemCardProps = {
  item: Item;
  listViewMode?: boolean;
};

const LotCard: FC<ItemCardProps> = ({
  item,
  listViewMode,
}: ItemCardProps) => {
  

  console.log("ItemCard received list View Mode:", listViewMode);
  

  return (
    <div
      key={item.id}
      className={`relative hover:border hover:border-gray-200 rounded-lg p-3 flex flex-col justify-between 
        ${listViewMode ? "md:flex-row md:gap-6" : "md:flex-col"}`}
    >
      <div className="relative h-72 w-full overflow-hidden rounded-lg">
        <Image
          alt={item.name}
          src={item.details?.photos[0].url}
          className={`h-full w-full object-cover object-center ${ listViewMode && 'flex-[0_0_60%]'}`}
          width={0}
          height={0}
          sizes="100vw"
        />
        <Link
          className="absolute inset-0 z-10"
          href={`/lots/${item.id}`}
          passHref
        />
      </div>

      <div className={` ${listViewMode && 'flex flex-col justify-between flex-[0_0_35%]' }`}>
        <div className="relative mt-4 flex justify-between items-center">
          <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
          <HeartIcon height={20} />
        </div>

        <div className="mt-6">
          <>
            <p className="mt-4 mb-2 text-sm text-gray-600">
              Estimated Value &nbsp;&nbsp;${item.estimated_value.usd || "N/A"}
            </p>
            <Link
              href={`/lots/${item.id}`}
              passHref
              className="relative flex items-center justify-center rounded-md bg-beige-100 px-8 py-2 text-base font-medium text-slate-50 border-2 border-transparent hover:opacity-75"
            >
              View Lot<span className="sr-only">, {item.name}</span>
            </Link>
            <p className="text-xs text-gray-500 my-4">Bidding Closes in  <RemainingTime endDate={item.auction_details.end_date} /></p>
          </>
        </div>
      </div>
    </div>
  );
};

export default LotCard;

