"use client";
import Link from "next/link";
import React, { FC } from "react";
import Image from "next/image";

import { CheckCircleIcon } from "@heroicons/react/20/solid";
import ItemProps from "@/types/types";

const ItemCard: FC<ItemProps> = (item) => {
  const ListView = item.toggleViewMode;

  console.log("ItemCards in list View Mode:", ListView);

  return (
    <div
      key={item.item_id}
      className={`relative border border-gray-200 rounded-lg p-4 flex flex-col ${ListView ? 'sm:flex-row' : ''} ${ListView ? 'gap-4' : ''} justify-between`}
    >
      <div className={`${ListView ? 'flex-[0_0_60%]' : ''} relative h-72 w-full overflow-hidden rounded-lg`} >
        <Image
        width={0}
        height={0}
        sizes="100vw"
          alt={item.item_name}
          src={item.item_details?.photos[0]}
          className="h-full w-full object-cover object-center"
        />
        <Link
          className="absolute inset-0 z-10"
          href={`/catalog/${item.item_id}`}
          passHref
        />
      </div>

      <div className={` ${ListView ? 'flex flex-col justify-between flex-[0_0_30%]' : ''}`}>
        <div >
          <h3 className="text-h6 font-serif font-medium text-gray-900 mt-4">
            {item.item_name}
          </h3>
        </div>

        <div className="mt-6">
          {item.is_buy_now_available && item.buy_now_price ? (
            <>
              <p className="mt-4 mb-2 text-sm text-gray-600">
                Buy Now Price&nbsp;&nbsp;${item.buy_now_price.usd}
              </p>
              <p>The current view mode is: {ListView ?  "List": "Grid" }</p>
              <Link
                href={`/catalog/${item.item_id}`}
                passHref
                className="relative flex items-center justify-center rounded-md border border-transparent bg-beige-100 px-8 py-2 text-base font-medium text-slate-50 hover:opacity-85"
              >
                Add to Cart<span className="sr-only">, {item.item_name}</span>
              </Link>
            </>
          ) : (
            <>
              <p className="mt-4 mb-2 text-sm text-gray-600">
                Estimated Value &nbsp;&nbsp;${item.estimated_value.usd || "N/A"}
              </p>
              <Link
                href={`/catalog/${item.item_id}`}
                passHref
                className="relative flex items-center justify-center rounded-md bg-beige-100 px-8 py-2 text-base font-medium text-slate-50 border-2 border-transparent hover:opacity-75"
              >
                View Lot<span className="sr-only">, {item.item_name}</span>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
