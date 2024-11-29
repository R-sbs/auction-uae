import React from "react";
import "/styles/globals.css";
import {
  QuestionMarkCircleIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline";

const accountPage = () => {
  return (
    <>
      <div className="mb-20 divide-y divide-gray-100 border-b border-gray-200">
        <h2 className="text-h4 font-serif tracking-wide font-semibold leading-7 text-gray-900 mb-5">
          Account Settings
        </h2>
      </div>

      {/* Payment Details */}

      <div className="mb-20 space-y-6 sm:px-6 lg:col-span-9 lg:px-0">
        <section aria-labelledby="payment-details-heading">
          <form action="#" method="POST">
            <div className="shadow sm:overflow-hidden sm:rounded-md">
              <div className="bg-gray-50 px-4 py-6 sm:p-16">
                <div>
                  <h2
                    id="payment-details-heading"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Payment details
                  </h2>
                  <p className="mt-1 text-sm text-gray-500">
                    Update your billing information. Please note that updating
                    your location could affect your tax rates.
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-4 gap-6">
                  <div className="col-span-4 sm:col-span-2">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Card Holder&apos;s Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      autoComplete="cc-given-name"
                      className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
                    />
                  </div>

                  <div className="col-span-4 sm:col-span-2">
                    <label
                      htmlFor="card-number"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      <CreditCardIcon className="size-6 inline text-beige-125 mr-2" />
                      Card Number
                    </label>
                    <input
                      type="text"
                      inputMode="numeric"
                      autoComplete="cc-family-name"
                      className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
                    />
                  </div>

                  <div className="col-span-4 sm:col-span-2">
                    <label
                      htmlFor="email-address"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <input
                      id="email-address"
                      name="email-address"
                      type="text"
                      autoComplete="email"
                      className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
                    />
                  </div>

                  <div className="col-span-4 sm:col-span-1">
                    <label
                      htmlFor="expiration-date"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Expration date
                    </label>
                    <input
                      id="expiration-date"
                      name="expiration-date"
                      type="text"
                      placeholder="MM / YY"
                      autoComplete="cc-exp"
                      className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
                    />
                  </div>

                  <div className="col-span-4 sm:col-span-1">
                    <label
                      htmlFor="security-code"
                      className="flex items-center text-sm font-medium leading-6 text-gray-900"
                    >
                      <span>Security code</span>
                      <QuestionMarkCircleIcon
                        aria-hidden="true"
                        className="ml-1 h-5 w-5 flex-shrink-0 text-gray-300"
                        title="CVV"
                      />
                    </label>
                    <input
                      id="security-code"
                      name="security-code"
                      type="text"
                      autoComplete="cc-csc"
                      className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
                    />
                  </div>

                  <div className="col-span-4 sm:col-span-2">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Country
                    </label>
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="mt-2 block w-full rounded-md border-0 bg-white px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>

                  <div className="col-span-4 sm:col-span-2">
                    <label
                      htmlFor="postal-code"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      ZIP / Postal code
                    </label>
                    <input
                      id="postal-code"
                      name="postal-code"
                      type="text"
                      autoComplete="postal-code"
                      className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md bg-beige-100  px-3 py-2 text-base font-semibold text-white shadow-sm hover:bg-beige-125 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>

      {/* Change Password */}

      <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8 bg-gray-50 mb-20 shadow sm:overflow-hidden sm:rounded-md">
        <div>
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Change password
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-500">
            Update your password associated with your account.
          </p>
        </div>

        <form className="md:col-span-2">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
            <div className="col-span-full">
              <label
                htmlFor="current-password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Current password
              </label>
              <div className="mt-2">
                <input
                  id="current-password"
                  name="current_password"
                  type="password"
                  autoComplete="current-password"
                  className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="new-password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                New password
              </label>
              <div className="mt-2">
                <input
                  id="new-password"
                  name="new_password"
                  type="password"
                  autoComplete="new-password"
                  className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Confirm password
              </label>
              <div className="mt-2">
                <input
                  id="confirm-password"
                  name="confirm_password"
                  type="password"
                  autoComplete="new-password"
                  className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              className="inline-flex justify-center rounded-md bg-beige-100 px-3 py-2 text-base font-semibold text-white shadow-sm hover:bg-beige-125 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default accountPage;
