"use client";
import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PhotoIcon } from "@heroicons/react/24/outline";
import BidStartTime from "./BidStartTime";
import img from '@/images/categories/cars.jpeg'

interface AuctionCardProps {
  auction: {
    id: string;
    title: string;
    description: string;
    start_date: string;
    end_date: string;
    location: string;
    currency: string[];
    item_ids: string[];
    status?: string; // Optional, for auctions that are closed
  };
}

const AuctionCard: React.FC<AuctionCardProps> = ({ auction }): JSX.Element => {
  const lots = auction.item_ids.length || 0;
  const status = auction.status || null;

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-8 lg:grid lg:max-w-7xl lg:gap-x-8 lg:px-8">
        <div className=" overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg">
          <div className="">
            <div className="lg:col-start-2 lg:row-span-3 lg:self-center">
              <div className="overflow-hidden mx-auto">
                 <Image
                  alt="photo"
                  src={img}
                  className="h-full w-full object-cover object-center"
                  width={0}
                  height={0}
                  sizes="100vw"
                />
                {/* <PhotoIcon className="h-full w-full object-contain object-center" /> */}
              </div>
              
            </div>
           
          </div>
          <div className="px-4 py-4 sm:px-6">
            <div className="flex flex-col gap-2 justify-between items-start lg:max-w-lg lg:self-start ">
            <div className="w-full p-1 text-sm"><BidStartTime startDate={auction.start_date} /></div>
              <div className="flex justify-between items-center w-full">
                <p className="text-h5 font-serif font-bold text-gray-900 sm:text-h5 pb-2">
                  {auction.title}{" "}
                </p>
                <p className="text-h6 font-serif pb-2 font-bold text-gray-600 sm:text-h6 flex-end tracking-wide">
                  {lots} lots
                </p>
              </div>
              <div className="min-h-20 flex justify-start gap-10">
                <p className="text-base-sm text-gray-900">
                  {auction.description}
                </p>

                {/* <Button
                  asChild
                  size="lg"
                  variant="default"
                  className="bg-beige-100 hover:bg-beige-125 font-semibold tracking-wide text-base"
                >
                  {status === "upcoming" ? (
                    <Link href="/auth/register">Register</Link>
                  ) : (
                    <Link href="#" className="text-red">
                      Closed
                    </Link>
                  )}
                </Button> */}
                <Button
                  asChild
                  size="lg"
                  variant="default"
                  className="bg-beige-100 hover:bg-beige-125 font-semibold tracking-wide text-base"
                >
                  {status === "upcoming" ? (
                    <Link href={`/auctions/${auction.id}`}>Preview</Link>
                  ) : (
                    <Link href="#" className="text-red">
                      Closed
                    </Link>
                  )}
                    
                  
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionCard;
