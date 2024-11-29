"use client";

import { FC, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import BuyItem from "./_components/BuyItem";
import AuctionItem from "./_components/AuctionItem";
import Item from "@/types/types";
import Spinner from "@/_components/Spinner";

// const faqs = [
//   {
//     question: "What makes the 1965 Fender Stratocaster a vintage item?",
//     answer:
//       "The 1965 Fender Stratocaster is considered vintage due to its production year, which places it in the category of guitars that are over 50 years old. Fender Stratocasters from the mid-1960s are highly sought after by collectors and musicians for their unique tonal qualities and historical significance. Key vintage features of the 1965 model include its original pickups, neck profile, and the 'L' series serial number that marks its place in Fender's production history.",
//   },
//   {
//     question:
//       " Are there any notable modifications or repairs on this particular 1965 Stratocaster?",
//     answer:
//       "This auction item is described as being in its original condition with no major modifications. However, minor adjustments or wear consistent with its age may be present. We have provided detailed photographs and a description of any cosmetic wear, such as scratches or dings, and if any parts have been replaced or repaired, this information will be clearly disclosed in the auction listing. For potential buyers seeking more detailed information, we recommend reviewing the full condition report and reaching out to us with any specific questions.",
//   },
//   {
//     question: "Does the auction include the original case and accessories?",
//     answer:
//       "Yes, the auction includes the original Fender case that came with the 1965 Stratocaster, which adds to the guitar's value and authenticity. Along with the case, any original accessories such as the tremolo arm, hangtags, and owner's manual, if available, will be included. The auction listing will specify the condition of these items and any additional documentation provided with the guitar.",
//   },
//   // More FAQs...
// ];

// function classNames(...classes: string[]) {
//   return classes.filter(Boolean).join(" ");
// }

interface ItemComponentProps {
  item: Item;
}

const ItemPage: FC<ItemComponentProps> = () => {
  const { id } = useParams();
  const [relatedProducts, setRelatedProducts] = useState<Item[]>([]);
  const [item, setItem] = useState<Item | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true); 

      try {
        const response = await fetch(
          "https://gist.githubusercontent.com/R-sbs/38ba54ab513a9ca2efe5c9c10a7a5b84/raw/006fd9fce6918cb2dc58364a09ade76a734e98bb/items.json"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const items: Item[] = await response.json();

        setRelatedProducts(items.slice(0, 4));

        const [foundItem] = items.filter((item) => item.item_id === id);

        setItem(foundItem);
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
        } else {
          console.log("An unknown error occurred");
        }
      }finally {
        setLoading(false); // Set loading false when fetching completes
      }
    };

    getData();
  }, [id]);

  if (loading) {
    return (
      <Spinner loading={loading}/>
    ); // Optional: Display a loading indicator or placeholder
  }

  return (
    <>
      <div className="bg-white">
        <main className="mx-auto px-4 pb-24 pt-14 sm:px-6 sm:pb-32 sm:pt-16 lg:max-w-7xl lg:px-8">
          {item ? (
            item.is_buy_now_available ? (
              <BuyItem {...item} />
            ) : (
              <AuctionItem {...item} />
            )
          ) : (
            <p>Loading...</p> // Optional: Provide loading or error UI
          )}

          {/* Related products */}
          <div className="mx-auto mt-24 max-w-2xl sm:mt-32 lg:max-w-none">
            <div className="flex items-center justify-between space-x-4">
              <h2 className="text-base-xl font-medium text-gray-900">
                You Might Also Like
              </h2>
              <Link
                href="/catalog"
                className="whitespace-nowrap text-sm tracking-wide font-semibold text-beige-100 hover:text-beige-125"
              >
                View all
                <span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
              {relatedProducts.map((item) => (
                <div
                  key={item.item_id}
                  className="group relative border border-gray-200 rounded-lg p-4"
                >
                  <div className="h-3/4 w-full overflow-hidden rounded-lg bg-gray-100">
                    <Image
                      alt={item.item_name}
                      src={item.item_details.photos[0]}
                      className="aspect-1 object-cover object-center"
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900">
                    <h3>
                      <Link href={`/catalog/${item.item_id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {item.item_name}
                      </Link>
                    </h3>
                  </div>
                  <div className="w-full flex flex-row justiy-end items-center">
                    <p className="mt-1 text-sm text-gray-500 ml-auto ">
                      ${item.estimated_value.usd}
                    </p>
                    {/* <div className="rounded-md px-4 py-2 text-center text-sm font-medium text-beige-125">
                      View Product &raar;
                    </div> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default ItemPage;
