"use client";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  ListBulletIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import React, { useEffect, useState, Fragment } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Item } from "@/types/items";
import LotCard from "../_components/LotCard";

interface Auction {
  id: string;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  location: string;
  currency: string[];
  item_ids: string[];
  status: string;
}

// const navigation = {
//   categories: [
//     {
//       id: "women",
//       name: "Women",
//       featured: [
//         {
//           name: "New Arrivals",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
//           imageAlt:
//             "Models sitting back to back, wearing Basic Tee in black and bone.",
//         },
//         {
//           name: "Basic Tees",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
//           imageAlt:
//             "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
//         },
//       ],
//       sections: [
//         {
//           id: "clothing",
//           name: "Clothing",
//           items: [
//             { name: "Tops", href: "#" },
//             { name: "Dresses", href: "#" },
//             { name: "Pants", href: "#" },
//             { name: "Denim", href: "#" },
//             { name: "Sweaters", href: "#" },
//             { name: "T-Shirts", href: "#" },
//             { name: "Jackets", href: "#" },
//             { name: "Activewear", href: "#" },
//             { name: "Browse All", href: "#" },
//           ],
//         },
//         {
//           id: "accessories",
//           name: "Accessories",
//           items: [
//             { name: "Watches", href: "#" },
//             { name: "Wallets", href: "#" },
//             { name: "Bags", href: "#" },
//             { name: "Sunglasses", href: "#" },
//             { name: "Hats", href: "#" },
//             { name: "Belts", href: "#" },
//           ],
//         },
//         {
//           id: "brands",
//           name: "Brands",
//           items: [
//             { name: "Full Nelson", href: "#" },
//             { name: "My Way", href: "#" },
//             { name: "Re-Arranged", href: "#" },
//             { name: "Counterfeit", href: "#" },
//             { name: "Significant Other", href: "#" },
//           ],
//         },
//       ],
//     },
//     {
//       id: "men",
//       name: "Men",
//       featured: [
//         {
//           name: "New Arrivals",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
//           imageAlt:
//             "Drawstring top with elastic loop closure and textured interior padding.",
//         },
//         {
//           name: "Artwork Tees",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
//           imageAlt:
//             "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
//         },
//       ],
//       sections: [
//         {
//           id: "clothing",
//           name: "Clothing",
//           items: [
//             { name: "Tops", href: "#" },
//             { name: "Pants", href: "#" },
//             { name: "Sweaters", href: "#" },
//             { name: "T-Shirts", href: "#" },
//             { name: "Jackets", href: "#" },
//             { name: "Activewear", href: "#" },
//             { name: "Browse All", href: "#" },
//           ],
//         },
//         {
//           id: "accessories",
//           name: "Accessories",
//           items: [
//             { name: "Watches", href: "#" },
//             { name: "Wallets", href: "#" },
//             { name: "Bags", href: "#" },
//             { name: "Sunglasses", href: "#" },
//             { name: "Hats", href: "#" },
//             { name: "Belts", href: "#" },
//           ],
//         },
//         {
//           id: "brands",
//           name: "Brands",
//           items: [
//             { name: "Re-Arranged", href: "#" },
//             { name: "Counterfeit", href: "#" },
//             { name: "Full Nelson", href: "#" },
//             { name: "My Way", href: "#" },
//           ],
//         },
//       ],
//     },
//   ],
// };
const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];
const subCategories = [
  { name: "BankNotes", href: "#" },
  { name: "Coins", href: "#" },
  { name: "Cars", href: "#" },
  { name: "Sword & Weapons", href: "#" },
  { name: "Documents", href: "#" },
  { name: "Arts", href: "#" },
];
const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White", checked: false },
      { value: "beige", label: "Beige", checked: false },
      { value: "blue", label: "Blue", checked: true },
      { value: "brown", label: "Brown", checked: false },
      { value: "green", label: "Green", checked: false },
      { value: "purple", label: "Purple", checked: false },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "new-arrivals", label: "New Arrivals", checked: false },
      { value: "sale", label: "Sale", checked: false },
      { value: "travel", label: "Travel", checked: true },
      { value: "organization", label: "Organization", checked: false },
      { value: "accessories", label: "Accessories", checked: false },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "2l", label: "2L", checked: false },
      { value: "6l", label: "6L", checked: false },
      { value: "12l", label: "12L", checked: false },
      { value: "18l", label: "18L", checked: false },
      { value: "20l", label: "20L", checked: false },
      { value: "40l", label: "40L", checked: true },
    ],
  },
];



function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const SingleAuctionPage = () => {
  
  const { id } = useParams();

  const [auction, setAuction] = useState<Auction>();
  const [items, setItems] = useState<Item[]>([]);

  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [toggleViewMode, setToggleViewMode] = useState<boolean>(false);

  type ResponseType = {
    auctions: Auction[];
  };

  useEffect(() => {
    const fetchAuctionData = async () => {
      try {
        const response = await fetch(
          "https://gist.githubusercontent.com/R-sbs/006dbfe59386f0f5c066e0998e4d733a/raw/2c8bf559a33ebeda8021cb5ca33b7c591b261078/auctions.json"
        );

        const auctionsData: ResponseType = await response.json();

        setAuction(
          auctionsData.auctions.filter(
            (thisAuction) => thisAuction.id === id
          )[0]
        );
      } catch (error) {
        console.error(error);
      }
    };

    fetchAuctionData();
  }, [id]);

  //fetching items.json

  useEffect(() => {
    const fetchItemData = async () => {
      try {
        const Iresponse = await fetch(
          "https://gist.githubusercontent.com/R-sbs/1f3c7fb03b379b7e0cb40c97ea69ccef/raw/9df4f242c33573e99890ec2d55783774227ed4e0/new-items.json"
        );

        const itemsData: Item[] = await Iresponse.json();

        setItems(itemsData.filter((thisItem) => thisItem.auction_id === id));
      } catch (error) {
        console.error(error);
      }
    };

    fetchItemData();
  }, [id]);

  console.log(items);

  if (!auction) {
    return <></>;
  }

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

 // const startDate = isoDateToLocale(auction.start_date);
  const endDate = isoDateToLocale(auction.end_date);

  return (
    <>
      <div className="bg-white">
        {/* Mobile filter dialog */}
        <Dialog
          open={mobileFiltersOpen}
          onClose={setMobileFiltersOpen}
          className="relative z-40 lg:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="relative ml-auto flex h-full w-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
            >
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="relative -mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>

              {/* Filters */}
              <form className="mt-4 border-t border-gray-200">
                <h3 className="sr-only">Categories</h3>
                <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href} className="block px-2 py-3">
                        {category.name}
                      </a>
                    </li>
                  ))}
                </ul>

                {filters.map((section) => (
                  <Disclosure
                    key={section.id}
                    as="div"
                    className="border-t border-gray-200 px-4 py-6"
                  >
                    <h3 className="-mx-2 -my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">
                          {section.name}
                        </span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon
                            aria-hidden="true"
                            className="h-5 w-5 group-data-[open]:hidden"
                          />
                          <MinusIcon
                            aria-hidden="true"
                            className="h-5 w-5 [.group:not([data-open])_&]:hidden"
                          />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-6">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              defaultValue={option.value}
                              defaultChecked={option.checked}
                              id={`filter-mobile-${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                              className="ml-3 min-w-0 flex-1 text-gray-500"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </form>
            </DialogPanel>
          </div>
        </Dialog>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-baseline justify-between pt-8 pb-20">
            <h1 className="text-h2 font-serif text-gray-900 py-4">
              {auction.title}
            </h1>
            <p className="text-base text-gray-700 pl-4 tracking-wide">
              Ends at {endDate}
            </p>

            <p className="text-base-xs text-gray-500 pl-4 tracking-wide">
              Disclaimer: Lots Close time is subjected to change
            </p>

            <div className="flex justify-start gap-10 p-4">
              <Button
                asChild
                size="lg"
                variant="default"
                className="bg-beige-100 text-white uppercase hover:bg-beige-125  tracking-wide text-base-sm"
              >
                <Link href="/auth/register" className="text-white">
                  Register to Bid
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="default"
                className="text-beige-125 bg-transparent border border-black uppercase hover:text-white tracking-wide text-base-sm"
              >
                <Link href="#">Save</Link>
              </Button>
            </div>
          </div>
          <div className="mx-auto w-full pb-30 max-w-2xl lg:col-span-4 lg:mt-0 lg:max-w-none">
            <TabGroup>
              <div className="border-b border-gray-200">
                <TabList className="-mb-px flex space-x-8">
                  <Tab className="whitespace-nowrap border-b-2 border-transparent py-2 text-base-xs text-gray-500 hover:border-beige-125 hover:text-beige-125 data-[selected]:border-beige-125 data-[selected]:text-beige-125 uppercase font-semibold tracking-wide">
                    Overview
                  </Tab>
                  <Tab className="whitespace-nowrap border-b-2 border-transparent py-2 text-base-xs text-gray-500 hover:border-beige-125 hover:text-beige-125 data-[selected]:border-beige-125 data-[selected]:text-beige-125  uppercase font-semibold tracking-wide">
                    Auction Details
                  </Tab>
                  <Tab className="whitespace-nowrap border-b-2 border-transparent py-2 text-base-xs text-gray-500 hover:border-beige-125 hover:text-beige-125 data-[selected]:border-beige-125 data-[selected]:text-beige-125 uppercase font-semibold tracking-wide">
                    Conditions of Bussiness
                  </Tab>
                </TabList>
              </div>
              <TabPanels as={Fragment}>
                <TabPanel className="-mb-10 text-black">
                  <h3 className="sr-only">Overview</h3>
                  <div
                    className="mt-4"
                    dangerouslySetInnerHTML={{
                      __html: auction.description,
                    }}
                  />
                </TabPanel>

                <TabPanel className="text-sm text-gray-500">
                  <h3 className="sr-only"> Auction Details</h3>
                  <p className="mt-6 prose prose-sm max-w-none text-gray-500">
                    Auction Details
                  </p>
                  {/* <dl>
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
                  </dl> */}
                </TabPanel>

                <TabPanel className="pt-10">
                  <h3 className="sr-only">Authentication</h3>

                  <div className="prose prose-sm max-w-none text-gray-500">
                    <p className="text-black mt-2">
                      {/* <div
                        className="mt-4"
                        dangerouslySetInnerHTML={{
                          __html: auction.end_date,
                        }}
                      /> */}
                      Conditions of Bussiness
                    </p>
                  </div>
                </TabPanel>
              </TabPanels>
            </TabGroup>
          </div>
          <div className="flex items-baseline justify-between border-b border-gray-200 pt-32 pb-6">
            <p className="text-h5 font-serif text-gray-900">
              Total Lots {auction.item_ids.length}
            </p>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                  </MenuButton>
                </div>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <MenuItem key={option.name}>
                        <a
                          href={option.href}
                          className={classNames(
                            option.current
                              ? "font-medium text-gray-900"
                              : "text-gray-500",
                            "block px-4 py-2 text-sm data-[focus]:bg-gray-100"
                          )}
                        >
                          {option.name}
                        </a>
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Menu>

              <button
                type="button"
                title="View Mode"
                onClick={() => setToggleViewMode((prev) => !prev)}
                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
              >
                {toggleViewMode ? (
                  <Squares2X2Icon title="grid" className="h-5 w-5" />
                ) : (
                  <ListBulletIcon title="List" className="h-5 w-5" />
                )}
              </button>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="py-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                <ul
                  role="list"
                  className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                >
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href}>{category.name}</a>
                    </li>
                  ))}
                </ul>

                {filters.map((section) => (
                  <Disclosure
                    key={section.id}
                    as="div"
                    className="border-b border-gray-200 py-6"
                  >
                    <h3 className="-my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">
                          {section.name}
                        </span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon
                            aria-hidden="true"
                            className="h-5 w-5 group-data-[open]:hidden"
                          />
                          <MinusIcon
                            aria-hidden="true"
                            className="h-5 w-5 [.group:not([data-open])_&]:hidden"
                          />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-4">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              defaultValue={option.value}
                              defaultChecked={option.checked}
                              id={`filter-${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor={`filter-${section.id}-${optionIdx}`}
                              className="ml-3 text-sm text-gray-600"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
              <div
                className={`grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-${
                  toggleViewMode ? "1" : "2"
                } lg:col-span-3 lg:gap-x-8`}
              >
                {items.map((item) => (
                  <LotCard
                    key={item.auction_id}
                    item={item}
                    listViewMode={toggleViewMode}
                  />
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default SingleAuctionPage;
