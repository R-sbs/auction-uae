"use client";
import React from "react";
import { useState, useEffect } from "react";
import AuctionCard from "@/_components/AuctionCard";
import Link from "next/link";
import { Auction } from "@/types/types";
import Spinner from "@/_components/Spinner";

const upcomingAuctionsPage = () => {
  const [auctions, setAuctions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAuctionsData = async () => {

      try {
        const response = await fetch(
          "https://gist.githubusercontent.com/R-sbs/006dbfe59386f0f5c066e0998e4d733a/raw/2c8bf559a33ebeda8021cb5ca33b7c591b261078/auctions.json"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        
        type ResponseType = { auctions: Auction[] }
        const auctionsData: ResponseType = await response.json();

        setAuctions(auctionsData.auctions);

      } catch (error) {
        console.error("Error fetching auctions data:" + error);
      } finally {
        setLoading(false);
      }
    };

    fetchAuctionsData();
  }, []);

  if (loading) return <div className="h-full w-full bg-white"><Spinner loading={loading} /></div>;

  console.log(auctions); // [ {...}, {...}, {...}, {...}, ...]

  return (
    <>
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="flex items-end sm:items-baseline justify-between">
            <h2 className="text-h2 font-medium font-serif tracking-tight py-20 cursor-pointer">
              Upcoming Auctions
            </h2>
            <Link
              href="#"
              className="group text-sm font-semibold text-beige-125 inline-flex min-w-24 items-center transition-all"
            >
              View All
              <span
                aria-hidden="true"
                className="ml-2 transition-transform transform group-hover:translate-x-1"
              >
                &rarr;
              </span>
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
            {auctions.map((auction) => (
              <AuctionCard key={auction.id} auction={auction} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default upcomingAuctionsPage;
