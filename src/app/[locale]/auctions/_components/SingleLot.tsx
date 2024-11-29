"use client";
import Link from "next/link";
import React, { FC } from "react";
import Item from "@/types/types";
import Image from "next/image";

const SingleLot: FC<Item> = (item: Item) => {
  return (
    <div
      key={item.item_id}
      className="relative border border-gray-200 rounded-lg p-2 flex flex-col justify-between"
    >
      <div className="relative h-96 w-full overflow-hidden rounded-lg">
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
          href={`/live_auction/${item.item_id}`}
          passHref
        />
      </div>

      <div>
        <div className="relative mt-4">
          <h3 className="text-sm font-medium text-gray-900">
            {item.item_name}
          </h3>
        </div>

        <div className="mt-6">
          {item.is_buy_now_available && item.buy_now_price ? (
            <>
              <p className="mt-4 mb-2 text-sm text-gray-600">
                Buy Now Price&nbsp;&nbsp;${item.buy_now_price.usd}
              </p>
              <Link
                href={`/live_auction/${item.item_id}`}
                passHref
                className="relative flex items-center justify-center rounded-md border border-transparent bg-beige-100 px-8 py-2 text-base font-medium text-slate-50 hover:opacity-85"
              >
                Add to Cart<span className="sr-only">, {item.item_name}</span>
              </Link>
            </>
          ) : (
            <>
              <p className="mt-4 mb-2 text-sm text-gray-600">
                Reserved Value &nbsp;&nbsp;$
                {item.auction_details?.reserve_price.usd}
              </p>
              <Link
                href={`/live_auction/${item.item_id}`}
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

export default SingleLot;
