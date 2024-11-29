"use client";
import { useEffect, useState } from "react";
import LotCard from "../_components/LotCard";
import { Item } from "@/types/types";
import Link  from "next/link";

const LiveAuctions = () => {
  const [lots, setLots] = useState<any[]>([]);

  useEffect(() => {
    async function fetchLots() {
      const res = await fetch(
        "https://gist.githubusercontent.com/R-sbs/1f3c7fb03b379b7e0cb40c97ea69ccef/raw/9df4f242c33573e99890ec2d55783774227ed4e0/new-items.json"
      );

      const data: Item[] = await res.json();

      const live = data.filter((lot) => {
        if (
          !lot.auction_details ||
          !lot.auction_details.start_date ||
          !lot.auction_details.end_date
        ) {
          return false; // Exclude items where auction_details is null or missing required properties
        }

        const startTime = new Date(lot.auction_details.start_date);

        console.log(startTime);
        const endTime = new Date(lot.auction_details.end_date);
        console.log(endTime);

        const now = new Date();
        console.log(now);


        // Return true if the auction is currently live
        return startTime <= now && endTime > now;
      });


      setLots(live);

      console.log(live);
    }
    fetchLots();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-h2 font-serif font-bold my-6">Live Auctions</h1>
      {lots.length > 0 ? (lots.map((item, index) => (
        <LotCard key={index} item={item} />
      ))) : (
        <div className="h-[calc(100vh-150px)]  grid place-content-center">
          <h3 className="text-h3">No Live Lots to show</h3>
          <Link href="/" className="hover:underline mx-auto my-2">Go Home</Link>
          <Link href="/auctions/upcoming" className="hover:underline mx-auto my-2">See Upcoming Auctions</Link>
        </div>
      )}
    </div>
  );
};

export default LiveAuctions;
