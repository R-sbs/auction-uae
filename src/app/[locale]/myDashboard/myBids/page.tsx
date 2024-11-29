import React from "react";
import {
  Bars4Icon,
  PencilIcon,
  Squares2X2Icon as Squares2X2IconMini,
  HeartIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import Image from "next/image";

const tabs = [
  { name: "My Bids", href: "/myDashboard/myBids", current: true },
  {
    name: "Upcoming Bids",
    href: "/myDashboard/myBids/upcoming",
    current: false,
  },
  { name: "Past Bids", href: "/myDashboard/myBids/past", current: false },
];

const files = [
  {
    name: "A dollar for your sadness",
    size: "$ 400",
    source:
      "https://images.unsplash.com/photo-1583916011819-e4b81836bb57?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    current: true,
  },

  // More files...
];

interface FileInformation {
  "Uploaded by": string;
  Created: string;
  "Last modified": string;
  Dimensions: string;
  Resolution: string;
}

// Define the main interface for the file object
interface CurrentFile {
  name: string;
  size: string;
  source: string;
  information: FileInformation;
}

// Create an instance of CurrentFile with the type annotation
const currentFile: CurrentFile = {
  name: "A dollar for your sadness",
  size: "$ 400",
  source:
    "https://images.unsplash.com/photo-1583916011819-e4b81836bb57?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  information: {
    "Uploaded by": "Marie Culver",
    Created: "June 8, 2020",
    "Last modified": "June 8, 2020",
    Dimensions: "4032 x 3024",
    Resolution: "72 x 72",
  },
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const myBidsPage: React.FC = () => {
  return (
    <div className="flex flex-1 items-stretch overflow-hidden">
      <main className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
          <div className="flex">
            <h1 className="flex-1 text-h4 font-serif tracking-wide font-semibold text-gray-900">
              My Bids
            </h1>
            <div className="ml-6 flex items-center rounded-lg bg-gray-100 p-0.5 sm:hidden">
              <button
                type="button"
                className="rounded-md p-1.5 text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <Bars4Icon aria-hidden="true" className="h-5 w-5" />
                <span className="sr-only">Use list view</span>
              </button>
              <button
                type="button"
                className="ml-0.5 rounded-md bg-white p-1.5 text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <Squares2X2IconMini aria-hidden="true" className="h-5 w-5" />
                <span className="sr-only">Use grid view</span>
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-3 sm:mt-2">
            <div className="sm:hidden">
              <label htmlFor="tabs" className="sr-only">
                Select a tab
              </label>
              {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
              <select
                id="tabs"
                name="tabs"
                defaultValue="Recently Viewed"
                className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              >
                <option>My Bids</option>
                <option>Upcoming Bids</option>
                <option>Past Bids</option>
              </select>
            </div>
            <div className="hidden sm:block">
              <div className="flex items-center border-b border-gray-200">
                <nav
                  aria-label="Tabs"
                  className="-mb-px flex flex-1 space-x-6 xl:space-x-8"
                >
                  {tabs.map((tab) => (
                    <Link
                      key={tab.name}
                      href={tab.href}
                      aria-current={tab.current ? "page" : undefined}
                      className={classNames(
                        tab.current
                          ? "border-indigo-500 text-indigo-600"
                          : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                        "whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium"
                      )}
                    >
                      {tab.name}
                    </Link>
                  ))}
                </nav>
                <div className="ml-6 hidden items-center rounded-lg bg-gray-100 p-0.5 sm:flex">
                  <button
                    type="button"
                    className="rounded-md p-1.5 text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  >
                    <Bars4Icon aria-hidden="true" className="h-5 w-5" />
                    <span className="sr-only">Use list view</span>
                  </button>
                  <button
                    type="button"
                    className="ml-0.5 rounded-md bg-white p-1.5 text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  >
                    <Squares2X2IconMini
                      aria-hidden="true"
                      className="h-5 w-5"
                    />
                    <span className="sr-only">Use grid view</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery */}
          <section aria-labelledby="gallery-heading" className="mt-8 pb-16">
            <h2 id="gallery-heading" className="sr-only">
              Recently viewed
            </h2>
            <ul
              role="list"
              className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
            >
              {files.map((file) => (
                <li key={file.name} className="relative">
                  <div
                    className={classNames(
                      file.current
                        ? "ring-2 ring-indigo-500 ring-offset-2"
                        : "focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100",
                      "group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100"
                    )}
                  >
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      alt="img"
                      src={file.source}
                      className={classNames(
                        file.current ? "" : "group-hover:opacity-75",
                        "pointer-events-none object-cover"
                      )}
                    />
                    <button
                      type="button"
                      className="absolute inset-0 focus:outline-none"
                    >
                      <span className="sr-only">
                        View details for {file.name}
                      </span>
                    </button>
                  </div>
                  <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
                    {file.name}
                  </p>
                  <p className="pointer-events-none block text-sm font-medium text-gray-500">
                    {file.size}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>

      {/* Details sidebar */}
      <aside className="hidden w-96 overflow-y-auto border-l border-gray-200 bg-white p-8 lg:block">
        <div className="space-y-6 pb-16">
          <div>
            <div className="aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg">
              <Image height={0} width={0} sizes="100vw" alt="" src={currentFile.source} className="object-cover" />
            </div>
            <div className="mt-4 flex items-start justify-between">
              <div>
                <h2 className="text-lg font-medium text-gray-900">
                  <span className="sr-only">Details for </span>
                  {currentFile.name}
                </h2>
                <p className="text-sm font-medium text-gray-500">
                  {currentFile.size}
                </p>
              </div>
              <button
                type="button"
                className="relative ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <span className="absolute -inset-1.5" />
                <HeartIcon aria-hidden="true" className="h-6 w-6" />
                <span className="sr-only">Favorite</span>
              </button>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Information</h3>
            <dl className="mt-2 divide-y divide-gray-200 border-b border-t border-gray-200">
              {Object.keys(currentFile.information).map((key) => (
                <div
                  key={key}
                  className="flex justify-between py-3 text-sm font-medium"
                >
                  <dt className="text-gray-500">{key}</dt>
                  <dd className="whitespace-nowrap text-gray-900">
                    {(currentFile.information as any)[key]}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Description</h3>
            <div className="mt-2 flex items-center justify-between">
              <p className="text-sm italic text-gray-500">
                Add a description to this bid item.
              </p>
              <button
                type="button"
                className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <span className="absolute -inset-1.5" />
                <PencilIcon aria-hidden="true" className="h-5 w-5" />
                <span className="sr-only">Add description</span>
              </button>
            </div>
          </div>

          <div className="flex gap-x-3">
            <button
              type="button"
              className="flex-1 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Download
            </button>
            <button
              type="button"
              className="flex-1 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Delete
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default myBidsPage;
