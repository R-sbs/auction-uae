"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

import logo from "/public/assets/images/mainLogo.svg";
import { useState } from "react";
import { usePathname } from "next/navigation";
import LocaleSwitcher from "./LocaleSwitcher";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon } from "lucide-react";

const user = {
  name: "Tom Cook",
  email: "tom@NavBar.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const userNavigation = [
  { name: "My Profile", href: "/myDashboard/myProfile" },
  { name: "My Dashboard", href: "/myDashboard" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const userLogged = true;

  const pathname = usePathname();
  const locale = usePathname()?.split("/")[1];

  const t = useTranslations("nav");

  const navigation = [
    {
      name: t("item_1"),
      href: "/",
      current: pathname === "/" || pathname === `/${locale}`,
      hasSubMenu: false,
    },

    {
      name: t("item_2"),
      href: "/about",
      current: pathname === `${"/" + locale + "/about"}`,
      hasSubMenu: true,
      subMenu: [
        { name: "About Us", href: `/${locale}/about` },
        { name: "FAQ", href: `/${locale}/faq` },
        { name: "How To Sell/Bid", href: `/${locale}/howTo` },
      ],
    },
    {
      name: t("item_6"),
      href: `/${locale}/catalog`,
      current: pathname === `${"/" + locale + "/catalog"}`,
      hasSubMenu: false,
    },

    {
      name: t("item_7"),
      href: `/${locale}/auctions`,
      current: pathname === `${"/" + locale + "/auctions"}`,
      hasSubMenu: true,
      subMenu: [
        // { name: "Live Auctions", href: `/${locale}/auctions/live` },
        { name: "Upcoming Auctions", href: `/${locale}/auctions/upcoming` },
        { name: "Closed Auctions", href: `/${locale}/auctions/closed` },
        { name: "Auction Results", href: `/${locale}/auctions/results` },
      ],
    },
    {
      name: t("item_4"),
      href: `/${locale}/sell`,
      current: pathname === `${"/" + locale + "/sell"}`,
      hasSubMenu: false,
    },
    {
      name: t("item_5"),
      href: `/${locale}/contact`,
      current: pathname === `${"/" + locale + "/contact"}`,
      hasSubMenu: false,
    },
  ];

  const [openMenu, setOpenMenu] = useState(null); // To track which menu is open

  const handleMenuClick = (menuName: any) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  const handleSubMenuItemClick = () => {
    setOpenMenu(null); // Close the menu when a submenu item is clicked
  };

  

  return (
    <Disclosure as="nav" className="bg-beige-100 w-full relative">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-20 justify-between">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
              <Image alt="Your Company" src={logo} className="h-12 w-auto" />
            </div>
            <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4 md:gap-4">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  <button
                    onClick={() => handleMenuClick(item.name)}
                    aria-expanded={openMenu === item.name}
                    className="inline-flex items-center"
                  >
                    <Link
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className={classNames(
                        item.current
                          ? "border-b-2 border-white"
                          : "hover:border-white hover:border-b-2 transition-all duration-150",
                        "px-1 py-2 text-base-sm font-medium tracking-wide text-white menu-focus"
                      )}
                    >
                      {item.name}
                    </Link>
                    {item.hasSubMenu && (
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="h-4 w-4 text-white align-middle ml-1"
                      />
                    )}
                  </button>
                  {item.hasSubMenu && openMenu === item.name && (
                    <ul className="absolute left-2/3 top-4 z-10 mt-5 w-44 shrink rounded-xl bg-white p-1 text-[12px] font-medium leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5">
                      {/* @ts-ignore */}
                      {item.subMenu.map((subItem) => (
                        <li key={subItem.name}>
                          <Link
                            href={subItem.href}
                            onClick={handleSubMenuItemClick}
                            className="block px-4 py-2 hover:text-beige-125"
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="flex-shrink-0">
              <LocaleSwitcher />
            </div>

            {!userLogged ? (
              <Button
                asChild
                className="group uppercase py-0"
                variant="default"
              >
                <Link href="/auth/login">
                  {t("login_btn")}
                  <span className="text-white transition-all duration-200 ml-2 group-hover:origin-center group-hover:translate-x-1">
                    &rarr;
                  </span>{" "}
                </Link>
              </Button>
            ) : (
              <div className="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center">
                <button
                  type="button"
                  className="relative rounded-md hover:bg-beige-125 p-1 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon aria-hidden="true" className="h-6 w-6" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton className="relative flex rounded-full bg-beige-125 text-sm focus:outline-none ring-2 ring-beige-125 focus:ring-2 hover:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <Image
                        alt=""
                        src={user.imageUrl}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="h-8 w-8 rounded-full"
                      />
                    </MenuButton>
                  </div>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    {userNavigation.map((item) => (
                      <MenuItem key={item.name}>
                        <Link
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                        >
                          {item.name}
                        </Link>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
                <div className="flow-root">
                  <Link
                    title="cart"
                    href="/cart"
                    className="group ml-4 border-l-slate-100 flex items-center relative"
                  >
                    <ShoppingBagIcon
                      aria-hidden="true"
                      className="h-8 w-8 text-white hover:bg-beige-125 p-1 rounded-md"
                    />
                    <span className="absolute top-0 right-0 transform translate-x-1 -translate-y-1 bg-white text-black text-base-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                      1
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            )}
            <div className="flex items-center md:hidden transition-all">
              {/* Mobile menu button */}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-beige-125 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all delay-500">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block h-7 w-7 group-data-[open]:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden h-6 w-6 group-data-[open]:block"
                />
              </DisclosureButton>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="md:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-beige-125 text-white font-semibold"
                  : "text-gray-100 hover:bg-beige-125 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
        <div className="border-t border-gray-50 pb-3 pt-4">
          <div className="flex items-center px-5 sm:px-6">
            <div className="flex-shrink-0">
              <Image
              width={0}
              height={0}
              sizes="100vw"
                alt="image"
                src={user.imageUrl}
                className="h-10 w-10 rounded-full border-2"
              />
            </div>
            <div className="ml-3">
              <div className="text-base font-medium text-white">
                {user.name}
              </div>
              <div className="text-sm font-medium text-gray-100">
                {user.email}
              </div>
            </div>
            <button
              type="button"
              className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-3 space-y-1 px-2 sm:px-3">
            {userNavigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-100 hover:bg-beige-125 hover:text-white"
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
