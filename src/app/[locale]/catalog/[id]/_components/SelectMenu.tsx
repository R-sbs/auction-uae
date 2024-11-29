"use client";

import { useState } from "react";
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";

type TSelectMenu = {
  title: string;
  description: string;
  current: boolean;
};

interface SelectMenuProps {
  selectedOption: (title: string) => void;
}

export default function SelectMenu({ selectedOption }: SelectMenuProps) {
  const [listingsOptions, setListingsOptions] = useState([
    {
      title: "All Items",
      description: "View all available items that you can buy or bid on",
      current: true,
    },
    {
      title: "Buy Now",
      description: "Show items that are available for immediate purchase",
      current: false,
    },
    {
      title: "Auction Only",
      description:
        "Show items that are available only for bidding in auctions.",
      current: false,
    },
  ]);
  const [selected, setSelected] = useState(listingsOptions[0]);

  const handleChange = (e: TSelectMenu): void => {
    setSelected(e);
    selectedOption(e.title);
  };

  return (
    <Listbox value={selected} onChange={handleChange}>
      <Label className="sr-only">Change Buy/Bid status</Label>
      <div className="relative ml-auto">
        <div className="inline-flex divide-x divide-white rounded-md shadow-sm">
          <div className="inline-flex items-center gap-x-1.5 rounded-l-md bg-beige-100 px-5 py-3 text-white">
            <CheckIcon aria-hidden="true" className="-ml-0.5 h-5 w-5" />
            <p className="text-sm font-semibold">{selected.title}</p>
          </div>
          <ListboxButton className="inline-flex items-center rounded-l-none rounded-r-md bg-beige-100 p-2 hover:bg-beige-125 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-gray-50">
            <span className="sr-only">Change published status</span>
            <ChevronDownIcon
              aria-hidden="true"
              className="h-5 w-5 text-white"
            />
          </ListboxButton>
        </div>

        <ListboxOptions
          transition
          className="absolute right-0 z-10 mt-2 w-72 origin-top-right divide-y divide-gray-200 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in"
        >
          {listingsOptions.map((option) => (
            <ListboxOption
              key={option.title}
              value={option}
              className="group cursor-default select-none p-4 text-sm text-gray-900 data-[focus]:bg-beige-100 data-[focus]:text-white"
            >
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <p className="font-normal group-data-[selected]:font-semibold">
                    {option.title}
                  </p>
                  <span className="text-beige-125 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                    <CheckIcon aria-hidden="true" className="h-5 w-5" />
                  </span>
                </div>
                <p className="mt-2 text-gray-900 group-data-[focus]:text-white">
                  {option.description}
                </p>
              </div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
}
