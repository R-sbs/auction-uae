"use client";
import React from "react";
import Category from "./Category";
import { StaticImageData } from "next/image";
import bankImg from "@/images/categories/banknotes.jpg";
import carsImg from "@/images/categories/cars.jpeg";
import coinsImg from "@/images/categories/coins.jpg";
import stampsImg from "@/images/categories/stamps.jpeg";
import documentsImg from "@/images/categories/documents.webp";
import swordsImg from "@/images/categories/swords.webp";
import artsImg from "@/images/categories/arts.jpg";

interface Cat {
  name: string;
  image?: StaticImageData;
  aspect: string;
}

const categoryAssets: Cat[] = [
  {
    name: "Bank Notes",
    image: bankImg,
    aspect: "sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2",
  },
  {
    name: "Cars",
    image: carsImg,
    aspect: "sm:aspect-none sm:relative sm:h-full",
  },
  {
    name: "Coins",
    image: coinsImg,
    aspect: "sm:aspect-none sm:relative sm:h-full",
  },
  {
    name: "Stamps",
    image: stampsImg,
    aspect: "sm:aspect-none sm:relative sm:h-full",
  },
  {
    name: "Documents",
    image: documentsImg,
    aspect: "sm:aspect-none sm:relative sm:h-full",
  },
  {
    name: "Sword & Weapons",
    image: swordsImg,
    aspect: "sm:aspect-none sm:relative sm:h-full",
  },
  {
    name: "Arts",
    image: artsImg,
    aspect: "sm:aspect-none sm:relative sm:h-full",
  },
];

const BrowseCatrgories: React.FC = () => {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <h2 className="text-h2 font-medium font-serif py-20 cursor-pointer">
            Browse All Categories
          </h2>
          {/* <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
              Browse all categories
              <span aria-hidden="true"> &rarr;</span>
            </a> */}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-4 sm:gap-x-6 lg:gap-8">
          {categoryAssets.map((category, index) => (
            <Category
              key={index}
              category={category.name}
              image={category.image}
              aspect={category.aspect}
            />
          ))}

          {/*<div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
            <img
              alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg"
              className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="flex items-end p-6 sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <a href="#">
                    <span className="absolute inset-0" />
                    Accessories
                  </a>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Shop now
                </p>
              </div>
            </div>
          </div>
          <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
            <img
              alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-02.jpg"
              className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="flex items-end p-6 sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <a href="#">
                    <span className="absolute inset-0" />
                    Workspace
                  </a>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Shop now
                </p>
              </div>
            </div>
          </div>

          <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
            <img
              alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-02.jpg"
              className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="flex items-end p-6 sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <a href="#">
                    <span className="absolute inset-0" />
                    Workspace
                  </a>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Shop now
                </p>
              </div>
            </div>
          </div>

          <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
            <img
              alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-02.jpg"
              className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="flex items-end p-6 sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <a href="#">
                    <span className="absolute inset-0" />
                    Workspace
                  </a>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Shop now
                </p>
              </div>
            </div>
          </div>

          <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
            <img
              alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-02.jpg"
              className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="flex items-end p-6 sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <a href="#">
                    <span className="absolute inset-0" />
                    Workspace
                  </a>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Shop now
                </p>
              </div>
            </div>
          </div>

          <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
            <img
              alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-02.jpg"
              className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="flex items-end p-6 sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <a href="#">
                    <span className="absolute inset-0" />
                    Workspace
                  </a>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Shop now
                </p>
              </div>
            </div>
          </div> */}
        </div>

        {/* <div className="mt-6 sm:hidden">
            <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
              Browse all categories
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div> */}
      </div>
    </div>
  );
};

export default BrowseCatrgories;
