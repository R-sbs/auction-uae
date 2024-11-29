import Image from "next/image";
import logo from "/public/assets/images/mainLogo.svg";
import { BsInstagram, BsFacebook, BsYoutube, BsTwitterX } from "react-icons/bs";

const navigation = {
  products: [
    { name: 'Bags', href: '#' },
    { name: 'Tees', href: '#' },
    { name: 'Objects', href: '#' },
    { name: 'Home Goods', href: '#' },
    { name: 'Accessories', href: '#' },
  ],
  company: [
    { name: 'Who we are', href: '#' },
    { name: 'Sustainability', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Privacy', href: '#' },
  ],
  customerService: [
    { name: 'Contact', href: '#' },
    { name: 'Shipping', href: '#' },
    { name: 'Returns', href: '#' },
    { name: 'Warranty', href: '#' },
    { name: 'Secure Payments', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Find a store', href: '#' },
  ],
  legal: [
    { name: 'legal', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer aria-labelledby="footer-heading" className="footer">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32 border-b border-slate-200">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                Products
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.products.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white focus:text-beige-100 focus:outline-0 hover:underline"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white focus:text-beige-100 focus:outline-0 hover:underline"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                Customer Service
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.customerService.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white focus:text-beige-100 focus:outline-0 hover:underline"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Legal
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white  focus:text-beige-100 focus:outline-0 hover:underline"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
          </div>
          {/* Newsletter section */}
          <div className="mt-16 xl:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Sign up for our newsletter</h3>
                <p className="mt-6 text-sm text-gray-200">The latest deals and savings, sent to your inbox weekly.</p>
                <form className="mt-2 flex sm:max-w-md">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    type="text"
                    required
                    autoComplete="email"
                    className="w-full min-w-0 appearance-none rounded-md border border-gray-300 bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-beige-125 focus:outline-none focus:ring-1 focus:ring-beige-125"
                  />
                  <div className="ml-4 flex-shrink-0">
                    <button
                      type="submit"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-beige-100 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-beige-125 focus:outline-none focus:ring-2 focus:ring-beige-125 focus:ring-offset-2"
                    >
                      Sign up
                    </button>
                  </div>
                </form>
              </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto p-6 flex flex-row justify-between items-end">
        <div className="text-white text-base-xs leading-6 text-left flex-1">
          <p className="max-w-prose">
            Copyright © 2024 . All rights reserved. [Company] and
            the [Company logo] are registered and trademarks of [company].
          </p>
        </div>
        <div className="hidden sm:block sm:flex-1">
          <Image alt="Company name" src={logo} className="h-15 mx-auto" />
        </div>
        <div className="text-white text-base-xs leading-6 text-center flex gap-6 flex-1 justify-end items-end">
          <BsInstagram className="text-base" />
          <BsYoutube className="text-base" />
          <BsFacebook className="text-base" />
          <BsTwitterX className="text-base" />
        </div>
      </div>
    </footer>
  );
}
