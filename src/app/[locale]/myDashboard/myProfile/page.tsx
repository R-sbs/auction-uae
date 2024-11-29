"use client";

import Image from "next/image";

const user = {
  name: "Tom Cook",
  email: "tom@NavBar.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

export default function myDashBoardPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">
      <div className="pb-12">
        <div
          aria-hidden="true"
          className="flex w-full h-full justify-between items-center"
        >
          <div className="">
            <h2 className="text-h4 font-serif tracking-wide font-semibold leading-7 text-gray-900 mb-5">
              My Profile
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-500">
              Hello,{user.name}! Set your profile details, Address, language and
              Currency preferences here.
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
                  alt="userimage"
                  src={user.imageUrl}
                  className="h-full w-full rounded-full ml-2"
                />
              </div>
            </div>
          </div>
        </div>

        <dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
          <div className="pt-6 sm:flex">
            <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
              Full name
            </dt>
            <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
              <div className="text-gray-900">Tom Cook</div>
              <button
                type="button"
                className="font-semibold text-beige-100 hover:text-beige-125"
              >
                Update
              </button>
            </dd>
          </div>
          <div className="pt-6 sm:flex">
            <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
              Email address
            </dt>
            <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
              <div className="text-gray-900">tom.cook@example.com</div>
              <button
                type="button"
                className="font-semibold text-beige-100 hover:text-beige-125"
              >
                Update
              </button>
            </dd>
          </div>
          <div className="pt-6 sm:flex">
            <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
              Phone
            </dt>
            <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
              <div className="text-gray-900">99999999999</div>
              <button
                type="button"
                className="font-semibold text-beige-100 hover:text-beige-125"
              >
                Update
              </button>
            </dd>
          </div>
        </dl>
      </div>

      <div className="pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Address Information
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600 space-y-6 divide-y divide-gray-100 border-b border-gray-200 pb-4">
          Use a permanent address where you can receive mail.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ">
          <div className="sm:col-span-3">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {/* <div className="sm:col-span-3">
              <label htmlFor="Contact" className="block text-sm font-medium leading-6 text-gray-900">
                Contact Number
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div> */}

          <div className="col-span-5">
            <label
              htmlFor="street-address"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Street address
            </label>
            <div className="mt-2">
              <input
                id="street-address"
                name="street-address"
                type="text"
                autoComplete="street-address"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3 sm:col-start-1">
            <label
              htmlFor="city"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              City
            </label>
            <div className="mt-2">
              <input
                id="city"
                name="city"
                type="text"
                autoComplete="address-level2"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="postal-code"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              ZIP / Postal code
            </label>
            <div className="mt-2">
              <input
                id="postal-code"
                name="postal-code"
                type="text"
                autoComplete="postal-code"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="region"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              State / Province
            </label>
            <div className="mt-2">
              <input
                id="region"
                name="region"
                type="text"
                autoComplete="address-level1"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="country"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Country
            </label>
            <div className="mt-2">
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
              >
                <option>Kingdom of Saudi Arabia</option>
                <option>United States</option>
                <option>Canada</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mt-12 flex items-center justify-start gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900 rounded-md px-3 py-2 hover:bg-slate-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-beige-100 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-beige-125 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-beige-100"
          >
            Save
          </button>
        </div>
      </div>

      {/* <div>
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Bank accounts
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-500">
          Connect bank accounts to your account.
        </p>

        <ul
          role="list"
          className="mt-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6"
        >
          <li className="flex justify-between gap-x-6 py-6">
            <div className="font-medium text-gray-900">TD Canada Trust</div>
            <button
              type="button"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Update
            </button>
          </li>
          <li className="flex justify-between gap-x-6 py-6">
            <div className="font-medium text-gray-900">
              Royal Bank of Canada
            </div>
            <button
              type="button"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Update
            </button>
          </li>
        </ul>

        <div className="flex border-t border-gray-100 pt-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            <span aria-hidden="true">+</span> Add another bank
          </button>
        </div>
      </div>

      <div>
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Integrations
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-500">
          Connect applications to your account.
        </p>

        <ul
          role="list"
          className="mt-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6"
        >
          <li className="flex justify-between gap-x-6 py-6">
            <div className="font-medium text-gray-900">QuickBooks</div>
            <button
              type="button"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Update
            </button>
          </li>
        </ul>

        <div className="flex border-t border-gray-100 pt-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            <span aria-hidden="true">+</span> Add another application
          </button>
        </div>
      </div> */}

      <div>
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Language and dates
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-500">
          Choose what language and date format to use throughout your account.
        </p>

        <dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
          <div className="pt-6 sm:flex items-center">
            <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
              Language
            </dt>
            <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
              <div className="sm:col-span-3">
                <select
                  id="lang"
                  name="lang"
                  className="block w-full rounded-md border-0 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
                >
                  <option value="en">English</option>
                  <option value="ar">Arabic</option>
                </select>
              </div>

              <button
                type="button"
                className="font-semibold text-beige-100 hover:text-beige-125"
              >
                Update
              </button>
            </dd>
          </div>
          <div className="pt-6 sm:flex">
            <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
              Bidding Currency
            </dt>
            <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
              <div className="sm:col-span-3">
                <select
                  id="cur"
                  name="cur"
                  className="block w-full rounded-md border-0 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
                >
                  <option value="Dollars">Dollars - $</option>
                  <option value="Riyals">Riyals - SAR</option>
                </select>
              </div>
              <button
                type="button"
                className="font-semibold text-beige-100 hover:text-beige-125"
              >
                Update
              </button>
            </dd>
          </div>
          {/* <Field className="flex pt-6">
            <Label
              as="dt"
              passive
              className="flex-none pr-6 font-medium text-gray-900 sm:w-64"
            >
              Automatic timezone
            </Label>
            <dd className="flex flex-auto items-center justify-end">
              <Switch
                checked={automaticTimezoneEnabled}
                onChange={setAutomaticTimezoneEnabled}
                className="group flex w-8 cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 data-[checked]:bg-indigo-600"
              >
                <span
                  aria-hidden="true"
                  className="h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
                />
              </Switch>
            </dd>
          </Field> */}
        </dl>
      </div>
    </div>
  );
}
