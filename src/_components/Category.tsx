"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface catProp {
  category: any;
  image: any;
  aspect: any;
}

const Category: React.FC<catProp> = (props): JSX.Element => {
  return (
    <div
      className={`group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg ${props.aspect}`}
    >
      <Image
        alt={props.category}
        src={props.image}
        className="object-cover object-center group-hover:scale-110 transition-all duration-300 sm:absolute sm:inset-0 sm:h-full sm:w-full"
        width={300}
        height={300}
      />
      <div
        aria-hidden="true"
        className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
      />
      <div className="flex items-end p-6 sm:absolute sm:inset-0">
        <div>
          <h3 className="text-base-xl font-serif tracking-wide font-semibold text-white">
            <Link href="/categories">
              <span className="absolute inset-0" />
              {props.category}
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Category;
