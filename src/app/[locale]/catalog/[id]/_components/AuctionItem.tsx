"use client";
import React, { FC, Fragment } from "react";
import Item from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";

const AuctionItem: FC<Item> = (item: Item): React.JSX.Element => {

  //const [loading, setLoading] = useState(true); //State to handle loading status

  const startDate = isoDateToLocale(item.auction_details?.start_date);

  const endDate = isoDateToLocale(item.auction_details?.end_date);

  function isoDateToLocale(d: string | undefined, locale = "us-EN") {
    if (!d) return;

    const date = new Date(d);

    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short", // 'long', 'short', or 'narrow'
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true, // Use 12-hour clock format (true) or 24-hour (false)
    };

    const localDateString = date.toLocaleString(locale, options);

    return localDateString;
  }

  if (!item) {
    return <p>No data available</p>;
  }

  const startingBid = item.auction_details?.starting_bid.usd || 0;
  const bidIncrement = item.auction_details?.bid_increment.usd || 0;

  return (
    <>
      {/* Product */}
      <div className="flex items-center justify-between pb-12">
        <div className="text-h4 font-semibold font-serif py-2 inline-flex items-center gap-x-1.5 rounded-md px-2 text-gray-900 ">
          <span className="pr-2">
            <svg
              viewBox="0 0 6 6"
              aria-hidden="true"
              className="h-2 w-2  fill-green-500"
            >
              <circle r={3} cx={3} cy={3} />
            </svg>
          </span>
          Live Auction
        </div>
        <div className="text-h6 hover:underline cursor-pointer">
          Next Lot &rarr;
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
        {/* Product image */}

        <div className="lg:col-span-4 lg:row-end-1">
          <div className="overflow-hidden rounded-lg bg-gray-100">
            <Image
              alt={item.item_name}
              src={item.item_details.photos[0]}
              className="object-cover object-center"
              width={800}
              height={800}
              layout="responsive"
            />
          </div>
        </div>

        {/* Product details */}
        <div className="mx-auto mt-14 max-w-2xl sm:mt-16 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none">
          <div className="flex flex-col-reverse">
            <div className="mt-0">
              <div className="flex justify-between items-start">
                <h1 className="font-serif text-h3 font-bold text-gray-900 sm:text-h2 flex-grow">
                  {item.item_name}
                </h1>
                <button
                  type="button"
                  title="Add to watchList"
                  className="shrink"
                >
                  <HeartIcon className="size-8 ml-4 font-bold" />
                </button>
              </div>

              <h2 id="information-heading" className="sr-only">
                Product information
              </h2>
              {item.auction_details?.start_date && (
                <p className="mt-4 font-semibold text-base text-gray-500">
                  Auction Ends On {endDate}
                </p>
              )}
            </div>
          </div>

          <p className="mt-6 text-gray-500">{item.item_short_description}</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 bg-black text-white p-6 rounded-md">
            <div className="flex justify-between items-center gap-20 tracking-wide">
              <h4>
                Current Bid ( 1750 USD ) <br></br>{" "}
                <span className="w-full text-sm">
                  with Buyer&apos;s premium 1950 USD
                </span>
              </h4>
              <h6>11 Bids</h6>
            </div>
            <div className="flex items-center justify-between gap-16">
              <label
                htmlFor="bid"
                className="ml-2 block text-h6 font-semibold leading-6 text-gray-100"
              >
                BID
              </label>
              <select
                id="bid"
                name="bid"
                defaultValue={startingBid}
                className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 text-base-lg font-bold ring-1 ring-inset ring-gray-300 focus:ring-2  sm:text-sm sm:leading-6"
              >
                <option value={startingBid}>{startingBid}</option>
                <option value={startingBid + bidIncrement}>
                  {startingBid + bidIncrement}
                </option>
                <option value={startingBid + bidIncrement * 2}>
                  {startingBid + bidIncrement * 2}
                </option>
                <option value={startingBid + bidIncrement * 3}>
                  {startingBid + bidIncrement * 3}
                </option>
                <option value={startingBid + bidIncrement * 4}>
                  {startingBid + bidIncrement * 4}
                </option>
                <option value={startingBid + bidIncrement * 5}>
                  {startingBid + bidIncrement * 5}
                </option>
                <option value={startingBid + bidIncrement * 6}>
                  {startingBid + bidIncrement * 6}
                </option>
                <option value={startingBid + bidIncrement * 7}>
                  {startingBid + bidIncrement * 7}
                </option>
                <option value={startingBid + bidIncrement * 8}>
                  {startingBid + bidIncrement * 8}
                </option>
                <option value={startingBid + bidIncrement * 9}>
                  {startingBid + bidIncrement * 9}
                </option>
                <option value={startingBid + bidIncrement * 10}>
                  {startingBid + bidIncrement * 10}
                </option>
              </select>
            </div>
            <button
              type="button"
              className="flex w-full items-center justify-center rounded-md border border-transparent bg-beige-100 px-8 py-3 text-base text-white hover:bg-beige-50 hover:text-beige-125 font-semibold focus:outline-none focus:ring-2 focus:ring-beige-100 focus:ring-offset-2 focus:ring-offset-gray-50"
            >
              Place Bid
            </button>
          </div>

          {!item.is_buy_now_available && (
            <div className="mt-10 border-t border-gray-200 pt-10">
              <h3 className="text-sm font-medium text-gray-700">
                Auction Details
              </h3>
              <div className="mt-4 text-gray-500">
                <ul role="list">
                  <li className="my-2 text-gray-600">
                    <span className="font-semibold mr-2">Started Date:</span>{" "}
                    {startDate}
                  </li>
                  <li className="my-2 text-gray-600">
                    <span className="font-semibold mr-2">End Date:</span>{" "}
                    {endDate}
                  </li>
                  {/* <li className="my-2 text-gray-600">
                    <span className="font-semibold mr-2">Reserve Price:</span> $
                    {item.auction_details?.reserve_price.usd}
                  </li> */}
                  <li className="my-2 text-gray-600">
                    <span className="font-semibold mr-2">Starting Bid: </span>$
                    {item.auction_details?.starting_bid.usd}
                  </li>
                  {/* <li className="my-2 text-gray-600">
                    <span className="font-semibold mr-2">Bid Increment: </span>{" "}
                    ${item.auction_details?.bid_increment.usd}
                  </li> */}
                  <li className="my-2 text-gray-600">
                    <span className="font-semibold mr-2">Condition:</span> PMG
                    Grade 64 Choice
                  </li>
                  <li className="my-2 text-gray-600">
                    <span className="font-semibold mr-2">Terms:</span>{" "}
                    {item.auction_details?.terms_and_conditions}
                  </li>
                </ul>
              </div>
            </div>
          )}

          <div className="mt-10 border-t border-gray-200 pt-10">
            <h3 className="text-sm font-medium text-gray-900">
              Notes for Buyers
            </h3>
            <p className="mt-4 text-sm text-gray-500">
              <ul role="list">
                <li className="mb-4">
                  <span className="font-bold">Inspection:</span> We encourage
                  prospective buyers to review the detailed photographs provided
                  in the auction listing, which showcase the guitar from various
                  angles and highlight its condition.
                </li>
                <li className="mb-4">
                  <span className="font-bold">Questions:</span> Please do not
                  hesitate to contact us with any specific questions or requests
                  for additional information. We are happy to provide further
                  details to assist in your decision-making process.
                </li>
              </ul>
              <Link
                href="#"
                className="font-semibold text-beige-125 hover:underline"
              >
                Contact Us
              </Link>
            </p>
          </div>

          <div className="mt-10 border-t border-gray-200 pt-10">
            <h3 className="text-sm font-medium text-gray-900">Share</h3>
            <ul role="list" className="mt-4 flex items-center space-x-6">
              <li>
                <Link
                  href="#"
                  className="flex h-6 w-6 items-center justify-center text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">Share on Facebook</span>
                  <FaFacebook size={20} />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex h-6 w-6 items-center justify-center text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">Share on Instagram</span>
                  <FaInstagram size={20} />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex h-6 w-6 items-center justify-center text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">Share on X</span>
                  <FaXTwitter size={20} />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-16 w-full max-w-2xl lg:col-span-4 lg:mt-0 lg:max-w-none">
          <TabGroup>
            <div className="border-b border-gray-200">
              <TabList className="-mb-px flex space-x-8">
                <Tab className="whitespace-nowrap border-b-2 border-transparent py-6 text-sm text-gray-500 hover:border-beige-125 hover:text-beige-125 data-[selected]:border-beige-125 data-[selected]:text-beige-125 font-bold">
                  Overview
                </Tab>
                <Tab className="whitespace-nowrap border-b-2 border-transparent py-6 text-sm text-gray-500 hover:border-beige-125 hover:text-beige-125 data-[selected]:border-beige-125 data-[selected]:text-beige-125 font-bold">
                  Authentication
                </Tab>
                <Tab className="whitespace-nowrap border-b-2 border-transparent py-6 text-sm text-gray-500 hover:border-beige-125 hover:text-beige-125 data-[selected]:border-beige-125 data-[selected]:text-beige-125 font-bold">
                  FAQ&apos;s
                </Tab>
              </TabList>
            </div>
            <TabPanels as={Fragment}>
              <TabPanel className="-mb-10 text-black">
                <h3 className="sr-only">Overview</h3>
                <div
                  className="mt-4"
                  dangerouslySetInnerHTML={{
                    __html: item.item_long_description,
                  }}
                />
              </TabPanel>

              <TabPanel className="pt-10">
                <h3 className="sr-only">Authentication</h3>

                <div className="prose prose-sm max-w-none text-gray-500">
                  <p className="text-black mt-2">
                    <div
                      className="mt-4"
                      dangerouslySetInnerHTML={{
                        __html: item.item_details.authentication,
                      }}
                    />
                  </p>
                </div>
              </TabPanel>

              {/* <TabPanel className="text-sm text-gray-500">
                     <h3 className="sr-only">Frequently Asked Questions</h3>
  
                     <dl>
                       {faqs.map((faq) => (
                         <Fragment key={faq.question}>
                           <dt className="mt-10 font-medium text-gray-900">
                             {faq.question}
                           </dt>
                           <dd className="prose prose-sm mt-2 max-w-none text-gray-500">
                             <p>{faq.answer}</p>
                           </dd>
                         </Fragment>
                       ))}
                     </dl>
                   </TabPanel> */}
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    </>
  );
};

export default AuctionItem;
