"use client";

import { FC, JSX, Key, useEffect, useState } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItems,
} from "@headlessui/react";
import {
  ChevronDownIcon,
  FunnelIcon,
  Squares2X2Icon,
  ListBulletIcon,
} from "@heroicons/react/20/solid";
import SelectMenu from "./[id]/_components/SelectMenu";
import Link from "next/link";

import ItemCard from "@/_components/ItemCard";
import ItemProps from "@/types/types";
import Spinner from "@/_components/Spinner";

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
//         {
//           name: "Accessories",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg",
//           imageAlt:
//             "Model wearing minimalist watch with black wristband and white watch face.",
//         },
//       ],
//       sections: [
//         [
//           {
//             id: "shoes",
//             name: "Shoes & Accessories",
//             items: [
//               { name: "Sneakers", href: "#" },
//               { name: "Boots", href: "#" },
//               { name: "Flats", href: "#" },
//               { name: "Sandals", href: "#" },
//               { name: "Heels", href: "#" },
//               { name: "Socks", href: "#" },
//             ],
//           },
//           {
//             id: "collection",
//             name: "Shop Collection",
//             items: [
//               { name: "Everything", href: "#" },
//               { name: "Core", href: "#" },
//               { name: "New Arrivals", href: "#" },
//               { name: "Sale", href: "#" },
//               { name: "Accessories", href: "#" },
//             ],
//           },
//         ],
//         [
//           {
//             id: "clothing",
//             name: "All Clothing",
//             items: [
//               { name: "Basic Tees", href: "#" },
//               { name: "Artwork Tees", href: "#" },
//               { name: "Tops", href: "#" },
//               { name: "Bottoms", href: "#" },
//               { name: "Swimwear", href: "#" },
//               { name: "Underwear", href: "#" },
//             ],
//           },
//           {
//             id: "accessories",
//             name: "All Accessories",
//             items: [
//               { name: "Watches", href: "#" },
//               { name: "Wallets", href: "#" },
//               { name: "Bags", href: "#" },
//               { name: "Sunglasses", href: "#" },
//               { name: "Hats", href: "#" },
//               { name: "Belts", href: "#" },
//             ],
//           },
//         ],
//         [
//           {
//             id: "brands",
//             name: "Brands",
//             items: [
//               { name: "Full Nelson", href: "#" },
//               { name: "My Way", href: "#" },
//               { name: "Re-Arranged", href: "#" },
//               { name: "Counterfeit", href: "#" },
//               { name: "Significant Other", href: "#" },
//             ],
//           },
//         ],
//       ],
//     },
//     {
//       id: "men",
//       name: "Men",
//       featured: [
//         {
//           name: "Accessories",
//           href: "#",
//           imageSrc:
//             "https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg",
//           imageAlt:
//             "Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters.",
//         },
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
//         [
//           {
//             id: "shoes",
//             name: "Shoes & Accessories",
//             items: [
//               { name: "Sneakers", href: "#" },
//               { name: "Boots", href: "#" },
//               { name: "Sandals", href: "#" },
//               { name: "Socks", href: "#" },
//             ],
//           },
//           {
//             id: "collection",
//             name: "Shop Collection",
//             items: [
//               { name: "Everything", href: "#" },
//               { name: "Core", href: "#" },
//               { name: "New Arrivals", href: "#" },
//               { name: "Sale", href: "#" },
//             ],
//           },
//         ],
//         [
//           {
//             id: "clothing",
//             name: "All Clothing",
//             items: [
//               { name: "Basic Tees", href: "#" },
//               { name: "Artwork Tees", href: "#" },
//               { name: "Pants", href: "#" },
//               { name: "Hoodies", href: "#" },
//               { name: "Swimsuits", href: "#" },
//             ],
//           },
//           {
//             id: "accessories",
//             name: "All Accessories",
//             items: [
//               { name: "Watches", href: "#" },
//               { name: "Wallets", href: "#" },
//               { name: "Bags", href: "#" },
//               { name: "Sunglasses", href: "#" },
//               { name: "Hats", href: "#" },
//               { name: "Belts", href: "#" },
//             ],
//           },
//         ],
//         [
//           {
//             id: "brands",
//             name: "Brands",
//             items: [
//               { name: "Re-Arranged", href: "#" },
//               { name: "Counterfeit", href: "#" },
//               { name: "Full Nelson", href: "#" },
//               { name: "My Way", href: "#" },
//             ],
//           },
//         ],
//       ],
//     },
//   ],
//   pages: [
//     { name: "Company", href: "#" },
//     { name: "Stores", href: "#" },
//   ],
// };
const filters = {
  price: [
    { value: "0", label: "$0 - $25", checked: false },
    { value: "25", label: "$25 - $50", checked: false },
    { value: "50", label: "$50 - $75", checked: false },
    { value: "75", label: "$75+", checked: false },
  ],
  color: [
    { value: "white", label: "White", checked: false },
    { value: "beige", label: "Beige", checked: false },
    { value: "blue", label: "Blue", checked: true },
    { value: "brown", label: "Brown", checked: false },
    { value: "green", label: "Green", checked: false },
    { value: "purple", label: "Purple", checked: false },
  ],
  size: [
    { value: "xs", label: "XS", checked: false },
    { value: "s", label: "S", checked: true },
    { value: "m", label: "M", checked: false },
    { value: "l", label: "L", checked: false },
    { value: "xl", label: "XL", checked: false },
    { value: "2xl", label: "2XL", checked: false },
  ],
  category: [
    { value: "all-new-arrivals", label: "All New Arrivals", checked: false },
    { value: "tees", label: "Tees", checked: false },
    { value: "objects", label: "Objects", checked: false },
    { value: "sweatshirts", label: "Sweatshirts", checked: false },
    { value: "pants-and-shorts", label: "Pants & Shorts", checked: false },
  ],
};
// const sortOptions = [
//  { name: 'Most Popular', href: '#', current: true },
//    { name: 'Best Rating', href: '#', current: false },
//   { name: "Newest", href: "#", current: true },
//   { name: "Price: Low to High", href: "#", current: false },
//   { name: "Price: High to Low", href: "#", current: false },
// ];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const CataloguePage: FC = (): JSX.Element => {
  const [loading, setLoading] = useState(true);
  const [toggleViewMode, setToggleViewMode] = useState<boolean>(false);

  const [items, setItems] = useState<ItemProps[]>([]);
  const [allItems, setAllItems] = useState<ItemProps[]>([]);
  const [buyItems, setbuyItems] = useState<ItemProps[]>([]);
  const [auctionItems, setAuctionItems] = useState<ItemProps[]>([]);

  //sorting options
  const [sortOptions, setSortOptions] = useState([
    { name: "Newest", href: "#", current: true },
    { name: "Price: Low to High", href: "#", current: false },
    { name: "Price: High to Low", href: "#", current: false },
  ]);

  const handleSortOptionClick = (optionName: string) => {
    // Update sortOptions state
    setSortOptions((prevOptions) =>
      prevOptions.map((option) => ({
        ...option,
        current: option.name === optionName,
      }))
    );
  };

  //const currentSortOption = sortOptions.find((option) => option.current)?.name || "Newest";

  // const sortedItems = (() => {
  //   switch (currentSortOption) {
  //     case "Price: Low to High":
  //       return items.slice().sort((a, b) => a.buy_now_price - b.buy_now_price);
  //     case "Price: High to Low":
  //       return items.slice().sort((a, b) => b.buy_now_price - a.buy_now_price);
  //     case "Newest":
  //       return items
  //         .slice()
  //         .sort((a, b) => new Date(b.date) - new Date(a.date));
  //     default:
  //       return items;
  //   }
  // })();

  //end of sorting

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://gist.githubusercontent.com/R-sbs/38ba54ab513a9ca2efe5c9c10a7a5b84/raw/46cd36b7697c9c8454c9fb55f48bc9e85cf663ec/items.json"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data: ItemProps[] = await response.json();

        setItems(data);

        setAllItems(data);

        // Filter items based on availability to buy

        const buyNowItems = data.filter((item) => item.is_buy_now_available);

        setbuyItems(buyNowItems);

        const auctionOnlyItems = data.filter(
          (item) => !item.is_buy_now_available
        );

        setAuctionItems(auctionOnlyItems);
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
        } else {
          console.log("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  //sorting menu options
  const handleMenuOption = (option: string) => {
    console.log(option);

    if (option.includes("All")) {
      setItems(allItems);
    } else if (option.includes("Auction")) {
      setItems(auctionItems);
    } else if (option.includes("Buy")) {
      setItems(buyItems);
    }
  };

  console.log("Parent Component View Mode:", toggleViewMode);

  return loading ? (
    <Spinner loading={loading} />
  ) : (
    <main className="pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 flex flex-row flex-wrap gap-10 justify-between items-end sm:px-6 lg:px-8">
        <div className="">
          <h1 className="font-serif text-h3 sm:text-h1 font-bold tracking-wide text-gray-900">
            Catalog
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base-lg tracking-wide text-gray-500">
            Choose from our Full catalogue for immediate purchases of
            collectible items or participate in the live auction to bid on
            exclusive finds. Both options cater to different collecting
            preferences.
          </p>
        </div>
        <SelectMenu selectedOption={handleMenuOption} />
      </div>

      {/* Filters */}
      <div className="inline-flex gap-0 justify-between items-center w-full border-b border-t border-gray-200">
        <Disclosure
          as="section"
          aria-labelledby="filter-heading"
          className="grid items-center  w-11/12"
        >
          <h2 id="filter-heading" className="sr-only">
            Filters
          </h2>
          <div className="relative col-start-1 row-start-1 py-4">
            <div className="mx-auto flex max-w-7xl space-x-6 divide-x divide-gray-200 px-4 text-sm sm:px-6 lg:px-8">
              <div>
                <DisclosureButton className="group flex items-center font-medium text-gray-700">
                  <FunnelIcon
                    aria-hidden="true"
                    className="mr-2 h-5 w-5 flex-none text-gray-400 group-hover:text-gray-500"
                  />
                  2 Filters
                </DisclosureButton>
              </div>
              <div className="pl-6">
                <button type="button" className="text-gray-500">
                  Clear all
                </button>
              </div>
            </div>
          </div>
          <DisclosurePanel className="border-t border-gray-200 py-10">
            <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 px-4 text-sm sm:px-6 md:gap-x-6 lg:px-8">
              <div className="grid auto-rows-min grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6">
                <fieldset>
                  <legend className="block font-medium">Price</legend>
                  <div className="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
                    {filters.price.map((option, optionIdx) => (
                      <div
                        key={option.value}
                        className="flex items-center text-base sm:text-sm"
                      >
                        <input
                          defaultValue={option.value}
                          defaultChecked={option.checked}
                          id={`price-${optionIdx}`}
                          name="price[]"
                          type="checkbox"
                          className="h-4 w-4 flex-shrink-0 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor={`price-${optionIdx}`}
                          className="ml-3 min-w-0 flex-1 text-gray-600"
                        >
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </fieldset>
                <fieldset>
                  <legend className="block font-medium">Color</legend>
                  <div className="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
                    {filters.color.map((option, optionIdx) => (
                      <div
                        key={option.value}
                        className="flex items-center text-base sm:text-sm"
                      >
                        <input
                          defaultValue={option.value}
                          defaultChecked={option.checked}
                          id={`color-${optionIdx}`}
                          name="color[]"
                          type="checkbox"
                          className="h-4 w-4 flex-shrink-0 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor={`color-${optionIdx}`}
                          className="ml-3 min-w-0 flex-1 text-gray-600"
                        >
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </fieldset>
              </div>
              <div className="grid auto-rows-min grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6">
                <fieldset>
                  <legend className="block font-medium">Size</legend>
                  <div className="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
                    {filters.size.map((option, optionIdx) => (
                      <div
                        key={option.value}
                        className="flex items-center text-base sm:text-sm"
                      >
                        <input
                          defaultValue={option.value}
                          defaultChecked={option.checked}
                          id={`size-${optionIdx}`}
                          name="size[]"
                          type="checkbox"
                          className="h-4 w-4 flex-shrink-0 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor={`size-${optionIdx}`}
                          className="ml-3 min-w-0 flex-1 text-gray-600"
                        >
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </fieldset>
                <fieldset>
                  <legend className="block font-medium">Category</legend>
                  <div className="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
                    {filters.category.map((option, optionIdx) => (
                      <div
                        key={option.value}
                        className="flex items-center text-base sm:text-sm"
                      >
                        <input
                          defaultValue={option.value}
                          defaultChecked={option.checked}
                          id={`category-${optionIdx}`}
                          name="category[]"
                          type="checkbox"
                          className="h-4 w-4 flex-shrink-0 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor={`category-${optionIdx}`}
                          className="ml-3 min-w-0 flex-1 text-gray-600"
                        >
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </fieldset>
              </div>
            </div>
          </DisclosurePanel>
          <div className="col-start-1 row-start-1 py-4">
            <div className="mx-auto flex max-w-7xl justify-end items-center gap-8 px-4 sm:px-6 lg:px-8">
              <Menu as="div" className="relative inline-block">
                <div className="flex">
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
                  className="absolute right-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <button
                        key={option.name}
                        onClick={() => handleSortOptionClick(option.name)}
                        className={classNames(
                          option.current
                            ? "font-medium text-gray-900 "
                            : "text-gray-500",
                          "inline w-full px-4 py-2 text-sm data-[focus]:bg-gray-100 hover:bg-gray-100 text-left"
                        )}
                      >
                        {option.name}
                      </button>
                    ))}
                  </div>
                </MenuItems>
              </Menu>
            </div>
          </div>
        </Disclosure>
        <button
          type="button"
          title="View Mode"
          onClick={() => setToggleViewMode((prev) => !prev)}
          className="h-5 text-beige-125 hover:text-beige-100 w-1/12"
        >
          {toggleViewMode ? (
            <Squares2X2Icon title="grid" className="h-5 w-5" />
          ) : (
            <ListBulletIcon title="List" className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Product grid */}
      <section
        aria-labelledby="products-heading"
        className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8"
      >
        <h2 id="products-heading" className="sr-only">
          Products
        </h2>

        <div
          className={`-mx-px my-10 grid grid-cols-${
            toggleViewMode ? "1" : "1"
          } gap-x-8 gap-y-12  sm:mx-0 md:grid-cols-${
            toggleViewMode ? "1" : "2"
          } lg:grid-cols-${toggleViewMode ? "1" : "3"}`}
        >
          {items.map(
            (
              item: JSX.IntrinsicAttributes & ItemProps,
              index: Key | null | undefined
            ) => (
              <ItemCard key={index} {...item} toggleViewMode={toggleViewMode} />
            )
          )}
        </div>
      </section>
      <p className="text-beige-125 font-bold text-base text-center mx-auto hover:underline hover:underline-offset-4 my-10">
        View More &#8635;
      </p>

      {/* Pagination */}
      <nav
        aria-label="Pagination"
        className="mx-auto mt-6 max-w-7xl justify-between px-4 text-sm font-medium text-gray-700 sm:px-6 lg:px-8 hidden"
      >
        <div className="min-w-0 flex-1">
          <Link
            href="#"
            className="inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-indigo-600"
          >
            Previous
          </Link>
        </div>
        <div className="hidden space-x-2 sm:flex">
          {/* Current: "border-indigo-600 ring-1 ring-indigo-600", Default: "border-gray-300" */}
          <Link
            href="#"
            className="inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-indigo-600"
          >
            1
          </Link>
          <Link
            href="#"
            className="inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-indigo-600"
          >
            2
          </Link>
          <Link
            href="#"
            className="inline-flex h-10 items-center rounded-md border border-indigo-600 bg-white px-4 ring-1 ring-indigo-600 hover:bg-gray-100 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-indigo-600"
          >
            3
          </Link>
          <span className="inline-flex h-10 items-center px-1.5 text-gray-500">
            ...
          </span>
          <Link
            href="#"
            className="inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-indigo-600"
          >
            8
          </Link>
          <Link
            href="#"
            className="inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-indigo-600"
          >
            9
          </Link>
          <Link
            href="#"
            className="inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-indigo-600"
          >
            10
          </Link>
        </div>
        <div className="flex min-w-0 flex-1 justify-end">
          <Link
            href="#"
            className="inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-indigo-600"
          >
            Next
          </Link>
        </div>
      </nav>
    </main>
  );
};

export default CataloguePage;
