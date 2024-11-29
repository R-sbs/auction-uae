"use client";

import React, { ReactNode, useState } from "react";
import {
  UserCircleIcon,
  HomeIcon,
  HeartIcon,
  Cog6ToothIcon,
  CalendarIcon,
  ClockIcon,
  DocumentTextIcon,
  HandRaisedIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";

import { usePathname } from "@/navigation";
import Link from "next/link";

type Props = {
  children: ReactNode;
};

type ItemsProps = {
  name: string;
  href: string;
  icon: JSX.Element;
  current: boolean;
  subMenu?: boolean;
  subMenuItems?: ItemsProps[];
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Layout({ children }: Props) {
  const pathname = usePathname();
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const handleSubMenuToggle = (name: string) => {
    setOpenSubMenu(openSubMenu === name ? null : name);
  };

  const secondaryNavigation = [
    {
      name: "Dashboard",
      href: "/myDashboard",
      icon: HomeIcon,
      current: pathname.endsWith("myDashboard"),
    },
    {
      name: "Profile",
      href: "/myDashboard/myProfile",
      icon: UserCircleIcon,
      current: pathname.includes("myProfile"),
    },
    {
      name: "Watched Lots",
      href: "/myDashboard/watchedLots",
      icon: HeartIcon,
      current: pathname.includes("watchedLots"),
    },
    {
      name: "Account Settings",
      href: "/myDashboard/accountOp",
      icon: Cog6ToothIcon,
      current: pathname.includes("accountOp"),
    },
    // { name: "Payment", href: "#", icon: CreditCardIcon, current: false },
    // { name: "Addresses", href: "#", icon: BellIcon, current: false },
    {
      name: "My Bids",
      href: "/myDashboard/myBids",
      icon: HandRaisedIcon,
      current: pathname.includes("myBids"),
      subMenu: true,
      subMenuItems: [
        {
          name: "Past Auctions",
          href: "/myDashboard/myBids/past",
          icon: CalendarIcon,
          current: pathname.endsWith("past"),
        },
        {
          name: "Upcoming auctions",
          href: "/myDashboard/myBids/upcoming",
          icon: ClockIcon,
          current: pathname.endsWith("upcoming"),
        },
      ],
    },
    {
      name: "Terms & Conditions",
      href: "/myDashboard/terms",
      icon: DocumentTextIcon,
      current: pathname.includes("terms"),
    },
  ];

  return (
    <div className="mx-auto max-w-7xl lg:flex lg:gap-x-16 lg:pr-8 bg-white">
      <h1 className="sr-only">My Dashboard</h1>
      <aside className="flex bg-white overflow-x-auto border-b border-gray-900/5 py-4 px-4 lg:block lg:w-64 lg:flex-none lg:border-0 lg:py-16">
        <nav className="flex-none px-4 sm:px-6 lg:px-0">
          <ul
            role="list"
            className="flex gap-x-3 gap-y-1 whitespace-nowrap lg:flex-col"
          >
            {secondaryNavigation.map((item) => (
              <li
                key={item.name}
                className={classNames(item.current ? "active" : "")}
              >
                <Link
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-beige-100 text-white"
                      : "text-gray-700 hover:bg-indigo-50",
                    "group flex gap-x-3 rounded-md py-2 pl-2 pr-3 text-sm font-semibold leading-6"
                  )}
                >
                  <item.icon
                    aria-hidden="true"
                    className={classNames(
                      item.current
                        ? "text-white "
                        : "text-beige-125 group-hover:text-beige-100",
                      "h-6 w-6 shrink-0"
                    )}
                  />
                  <span className="name">{item.name}</span>
                  {item.subMenu && (
                    <button
                      onClick={() => handleSubMenuToggle(item.name)}
                      className="w-full"
                    >
                      {openSubMenu === item.name ? (
                        <ChevronDownIcon className="size-4" />
                      ) : (
                        <ChevronUpIcon className="size-4" />
                      )}
                    </button>
                  )}
                </Link>
                {item.subMenu &&
                  openSubMenu === item.name &&
                  item.subMenuItems && (
                    <ul className="submenu">
                      {item.subMenuItems.map((subItem) => (
                        <li
                          key={subItem.name}
                          className={classNames(
                            subItem.current ? "active" : ""
                          )}
                        >
                          <Link
                            href={subItem.href}
                            className={classNames(
                              subItem.current
                                ? "font-bold text-gray-700"
                                : "text-gray-700 hover:bg-indigo-50",
                              "group flex gap-x-3 rounded-md py-2 pl-2 pr-3 text-xs leading-6 items-center"
                            )}
                          >
                            <subItem.icon
                              aria-hidden="true"
                              className={classNames(
                                subItem.current
                                  ? "text-beige-125"
                                  : "text-gray-400 group-hover:text-beige-100",
                                "h-4 w-4 shrink-0 ml-4"
                              )}
                            />
                            <span className="name">{subItem.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className="px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-16">
        {children}
      </main>
    </div>
  );
}
