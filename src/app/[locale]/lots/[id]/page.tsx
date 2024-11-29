"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import BidForm from "../_components/BidForm";
import { Item } from "@/types/items";
import Link from "next/link";
import Image from "next/image";

const product = {
  name: "Vintage Pocket Watch",
  price: "$140",
  rating: 4,
  images: [
    {
      id: 1,
      name: "Angled view",
      src: "https://images.pexels.com/photos/8545671/pexels-photo-8545671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    {
      id: 2,
      name: "side view",
      src: "https://images.pexels.com/photos/10288915/pexels-photo-10288915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    {
      id: 3,
      name: "view",
      src: "https://images.pexels.com/photos/10443218/pexels-photo-10443218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    // More images...
  ],
  colors: [
    {
      name: "Washed Black",
      bgColor: "bg-gray-700",
      selectedColor: "ring-gray-700",
    },
    { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
    {
      name: "Washed Gray",
      bgColor: "bg-gray-500",
      selectedColor: "ring-gray-500",
    },
  ],
  description: `
    <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
  `,
  details: [
    {
      name: "Provenance",
      items: [
        "Multiple strap configurations",
        "Spacious interior with top zip",
        "Leather handle and tabs",
        "Interior dividers",
        "Stainless strap loops",
        "Double stitched construction",
        "Water-resistant",
      ],
    },
    {
      name: "Note",
      items: [
        "Multiple strap configurations",
        "Spacious interior with top zip",
        "Leather handle and tabs",
        "Interior dividers",
        "Stainless strap loops",
        "Double stitched construction",
        "Water-resistant",
      ],
    },
    {
      name: "Terms & Services",
      items: [
        "Multiple strap configurations",
        "Spacious interior with top zip",
        "Leather handle and tabs",
        "Interior dividers",
        "Stainless strap loops",
        "Double stitched construction",
        "Water-resistant",
      ],
    },

    // More sections...
  ],
};

// function classNames(...classes: string[]) {
//   return classes.filter(Boolean).join(" ");
// }

// Function to get matching lots
function getMatchingLots(currentId: string, lots: Item[]) {
  const currentPrefix = currentId.substring(0, 3); // Extract initial 3 digits from the current ID
  return lots
    .filter((lot: { id: string }) => lot.id.startsWith(currentPrefix)) // Filter lots with matching prefix
    .map((lot: { id: any }) => lot.id); // Extract just the IDs
}

// Function to get the next lot ID
function getNextLotId(currentId: string, siblingIds: string | any[]) {
  const currentIndex = siblingIds.indexOf(currentId);

  console.log("Current ID:", currentId);
  console.log("Matching IDs:", siblingIds);
  console.log("Index of Current ID:", currentIndex);

  if (currentIndex === -1) {
    console.error("Current ID not found in sibling IDs");
    return null;
  }
  const nextIndex = (currentIndex + 1) % siblingIds.length; // Wrap around
  return siblingIds[nextIndex];
}

const LotPage = () => {
  const [lot, setLot] = useState<any>(null);
  const [siblingIds, setSiblingIds] = useState<string[]>(["id", "id2"]);
  const [nextLotId, setNextLotId] = useState<string>();
  const { id } = useParams();

  useEffect(() => {
    async function fetchLot() {
      if (!id) return;

      try {
        const res = await fetch(
          "https://gist.githubusercontent.com/R-sbs/1f3c7fb03b379b7e0cb40c97ea69ccef/raw/9df4f242c33573e99890ec2d55783774227ed4e0/new-items.json"
        );
        const data: Item[] = await res.json();

        // Find the current lot
        const currentLot = data.find((lot) => lot.id === id);
        if (!currentLot) {
          console.error("Current lot not found");
          return;
        }
        setLot(currentLot);

        // Get matching IDs and set state
        const matchingIds = getMatchingLots(currentLot.id, data);
        setSiblingIds(matchingIds);

        // Get the next lot ID and set state
        const nextLot = getNextLotId(currentLot.id, matchingIds);
        setNextLotId(nextLot);
      } catch (error) {
        console.error("Error fetching lot data:", error);
      }
    }

    fetchLot();
  }, [id]);

  if (!lot && !nextLotId)
    return <p className="grid place-content-center h-screen">Loading...</p>;

  return (
    <main className="mx-auto max-w-7xl sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-none">
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
            Live{" "}
            <span className="text-gray-500 text-base-sm mt-auto ml-2 font-mono">
              Ends in 3 Days
            </span>
          </div>
          <div className="text-h6 hover:underline cursor-pointer font-mono hover:underline-offset-2">
            <Link href={`/lots/${nextLotId}`} passHref>
              Next Lot &rarr;
            </Link>
            <ul className="hidden">
              {siblingIds.map((id) => (
                <li key={id}>
                  <Link href={`/lots/${id}`}>Lot {id}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Product */}
        <div className="lg:grid lg: grid-cols-[65%_35%] lg:items-start lg:gap-x-8 p-5 gap-20">
          {/* Image gallery */}
          <div className="flex flex-col gap-10">
            <TabGroup className="pb-8 flex flex-col-reverse gap-6  border-b">
              {/* Image selector */}
              <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                <TabList className="grid grid-cols-4 gap-6 place-content-center">
                  {product.images.map((image) => (
                    <Tab
                      key={image.id}
                      className="group relative flex h-20 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                    >
                      <span className="sr-only">{image.name}</span>
                      <span className="absolute inset-0 overflow-hidden rounded-md">
                        <Image
                          width={0}
                          height={0}
                          sizes="100vw"
                          alt=""
                          src={image.src}
                          className="h-full w-full object-cover object-center"
                        />
                      </span>
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 rounded-md ring-2 ring-transparent ring-offset-2 group-data-[selected]:ring-beige-500"
                      />
                    </Tab>
                  ))}
                </TabList>
              </div>

              <TabPanels className=" max-h-[90%]  w-full border-b-gray-200">
                {product.images.map((image) => (
                  <TabPanel key={image.id}>
                    <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                      alt={image.alt}
                      src={image.src}
                      className="h-full w-full object-cover object-center sm:rounded-lg "
                    />
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 ">
              <p className="text-xs uppercase mb-2   text-gray-600">
                top title - Author or auction title
              </p>
              <h1 className="text-3xl font-bold font-serif tracking-wide text-gray-900">
                {product.name} - Lot Page id : {id}
              </h1>

              <div className="mt-3">
                <h2 className="sr-only">Product information</h2>
              </div>

              <div className="mt-8">
                <h3 className="sr-only">Description</h3>
                <p className="text-xs font-semibold tracking-wide text-gray-900 mb-4 uppercase">
                  Description
                </p>
                <div
                  dangerouslySetInnerHTML={{ __html: product.description }}
                  className="space-y-6 text-base text-gray-700"
                />
              </div>
              <section aria-labelledby="details-heading" className="mt-12">
                <h2 id="details-heading" className="sr-only">
                  Additional details
                </h2>

                <div className="divide-y divide-gray-200 border-b">
                  {product.details.map((detail) => (
                    <Disclosure key={detail.name} as="div">
                      <h3>
                        <DisclosureButton className="group relative flex w-full items-center justify-between py-6 text-left">
                          <span className="text-xs font-semibold text-gray-900 group-data-[open]:text-beige-600 uppercase">
                            {detail.name}
                          </span>
                          <span className="ml-6 flex items-center">
                            <PlusIcon
                              aria-hidden="true"
                              className="block h-4 w-4 text-gray-400 group-hover:text-gray-500 group-data-[open]:hidden"
                            />
                            <MinusIcon
                              aria-hidden="true"
                              className="hidden h-4 w-4 text-beige-100 group-hover:text-beige-125 group-data-[open]:block"
                            />
                          </span>
                        </DisclosureButton>
                      </h3>
                      <DisclosurePanel className="prose prose-sm pb-6">
                        <ul role="list">
                          {detail.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </DisclosurePanel>
                    </Disclosure>
                  ))}
                </div>
              </section>
            </div>
          </div>

          {/* Product info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0 lg:sticky lg:top-7">
            <BidForm lot={lot} />
          </div>
        </div>
      </div>
    </main>

    // <div className="container mx-auto p-4">
    //   <h1 className="text-3xl font-bold mb-6">{lot.title}</h1>
    //   <img src={lot.image} alt={lot.title} className="w-full h-64 object-cover rounded-lg mb-4" />
    //   <p className="text-gray-700 mb-4">{lot.description}</p>
    //   <p className="text-gray-800 font-semibold">Current Bid: ${lot.currentBid}</p>
    //   <p className="text-gray-600">Reserve Price: ${lot.reservePrice}</p>
    //   <p className={`mt-2 px-2 py-1 rounded-lg text-white ${lot.status === 'Live' ? 'bg-green-500' : 'bg-gray-500'}`}>
    //     {lot.status}
    //   </p>
    // </div>
  );
};

export default LotPage;
