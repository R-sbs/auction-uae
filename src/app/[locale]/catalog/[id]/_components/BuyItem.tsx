"use client";
import { FC, Fragment } from "react";
import Item from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";

const BuyItem: FC<Item> = (item: Item) => {
  // const [loading, setLoading] = useState(true); //State to handle loading status

  if (!item) {
    return <p>No data available</p>;
  }

  return (
    <>
      {/* Product */}
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
            <div className="mt-4">
              <h1 className="font-serif text-h3 font-bold text-gray-900 sm:text-h2">
                {item.item_name}
              </h1>

              <h2 id="information-heading" className="sr-only">
                Product information
              </h2>
            </div>
          </div>

          <p className="mt-6 text-gray-500">{item.item_short_description}</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
            {item.is_buy_now_available && (
              <button
                type="button"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-beige-100 px-8 py-3 text-base text-white hover:bg-beige-50 hover:text-beige-125 font-semibold focus:outline-none focus:ring-2 focus:ring-beige-100 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Buy Now &nbsp; {"  "} {item.buy_now_price?.usd} $
              </button>
            )}
            <button
              type="button"
              className="flex w-full items-center justify-center rounded-md hover:text-white hover:bg-beige-100 px-8 py-3 text-base font-semibold text-beige-125 bg-white border-beige-100 border-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
            >
              Add to Cart
            </button>
          </div>

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
                  className="flex h-6 w-6 items-center justify-center text-gray-400 hover:text-beige-100"
                >
                  <span className="sr-only">Share on Facebook</span>
                  <FaFacebook size={20}/>
                 
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex h-6 w-6 items-center justify-center text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">Share on Instagram</span>
                  <FaInstagram size={20}/>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex h-6 w-6 items-center justify-center text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">Share on X</span>
                  <FaXTwitter size={20}/>
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

export default BuyItem;
