"use client";

import {
  Cog6ToothIcon,
  DocumentCurrencyDollarIcon,
  HandRaisedIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const actions = [
  {
    title: "Account Settings",
    href: "/myDashboard/accountOp",
    icon: Cog6ToothIcon,
    iconForeground: "text-rose-700",
    iconBackground: "bg-rose-50",
  },
  {
    title: "My Bids",
    href: "/myDashboard/myBids",
    icon: HandRaisedIcon,
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50",
  },
  {
    title: "Invoices & Billing",
    href: "/myDashboard/invoice",
    icon: DocumentCurrencyDollarIcon,
    iconForeground: "text-sky-700",
    iconBackground: "bg-sky-50",
  },
  {
    title: "Watched Lots",
    href: "/myDashboard/watchedLots",
    icon: HeartIcon,
    iconForeground: "text-yellow-700",
    iconBackground: "bg-yellow-50",
  },
];

const user = {
  name: "Tom Cook",
  email: "tom@NavBar.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function myDashBoardPage() {
  // const [automaticTimezoneEnabled, setAutomaticTimezoneEnabled] =
  //   useState(true);

  return (
    <div className="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">
      <div>
        <div
          aria-hidden="true"
          className="flex w-full h-full justify-between items-center"
        >
          <div className="">
            <h2 className="text-h4 font-serif tracking-wide font-semibold leading-7 text-gray-900 mb-5">
              My Dashboard
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-500">
              Hello,{user.name}! Dive into your dashboard to track your bidding
              history, manage invoices, and stay updated on the latest auctions.
            </p>
          </div>
          <div className="mt-6 flex-grow lg:ml-6 lg:mt-0 lg:flex-shrink-0 lg:flex-grow-0">
            <div className="flex items-center">
              <div
                aria-hidden="true"
                className="inline-block h-28 w-28 flex-shrink-0 overflow-hidden rounded-full"
              >
                <Image
                width={0}
                height={0}
                sizes="100vw"
                  alt="image"
                  src={user.imageUrl}
                  className="h-full w-full rounded-full ml-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
        {actions.map((action, actionIdx) => (
          <div
            key={action.title}
            className={classNames(
              actionIdx === 0
                ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none"
                : "",
              actionIdx === 1 ? "sm:rounded-tr-lg" : "",
              actionIdx === actions.length - 2 ? "sm:rounded-bl-lg" : "",
              actionIdx === actions.length - 1
                ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
                : "",
              "group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
            )}
          >
            <div>
              <span
                className={classNames(
                  action.iconBackground,
                  action.iconForeground,
                  "inline-flex rounded-lg p-3 ring-4 ring-white"
                )}
              >
                <action.icon aria-hidden="true" className="h-6 w-6" />
              </span>
            </div>
            <div className="mt-8">
              <h3 className="text-base font-semibold leading-6 text-gray-900">
                <a href={action.href} className="focus:outline-none">
                  {/* Extend touch target to entire panel */}
                  <span aria-hidden="true" className="absolute inset-0" />
                  {action.title}
                </a>
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Doloribus dolores nostrum quia qui natus officia quod et
                dolorem. Sit repellendus qui ut at blanditiis et quo et
                molestiae.
              </p>
            </div>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
              </svg>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
