"use client";

//import { signUpSchema } from '@/schemas/signUpSchema';
import React from "react";
import { signUpSchema, UserValidationSchemaType } from "@/schemas/signUpSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import RegisterHero from "../_components/RegisterHero";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserValidationSchemaType>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit: SubmitHandler<UserValidationSchemaType> = (data) => {
    console.log(data);
  };

  return (
    <>
      <RegisterHero />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid place-items-center gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-1 my-10">
          <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
            <div className="sm:col-span-3">
              <label
                htmlFor="full-name"
                className="block text-base-sm font-semibold leading-6 text-gray-900"
              >
                Full name
              </label>
              <div className="mt-2">
                <input
                  id="full-name"
                  name="full_name"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-beige-100 sm:text-base tracking-wider font-semibold sm:leading-6"
                />
              </div>
              {/* {errors.full_name && <p style={{ color: 'red' }}>{errors.full_name}</p>} */}
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="email"
                className="block text-base-sm font-semibold leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  {...register("email")}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-beige-100 sm:text-base tracking-wider font-semibold sm:leading-6"
                />
              </div>

              {errors.email && (
                <span className="text-[#de3232]">{errors.email?.message}</span>
              )}
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="tel-phone"
                className="block text-base-sm font-semibold leading-6 text-gray-900"
              >
                Telephone Number
              </label>
              <div className="mt-2">
                <input
                  id="tel-phone"
                  name="phone"
                  type="text"
                  autoComplete="tel-phone"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-beige-100 sm:text-base tracking-wider font-semibold sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-base-sm font-semibold leading-6 text-gray-900"
              >
                Country
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="text-base-sm sm:max-w-xs block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-beige-100 tracking-wider font-semibold sm:leading-6"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="address"
                className="block text-base-sm font-semibold leading-6 text-gray-900"
              >
                Address
              </label>
              <div className="mt-2">
                <input
                  name="address"
                  type="text"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-beige-100 sm:text-base tracking-wider font-semibold sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="user-name"
                className="block text-base-sm font-semibold leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  id="user-name"
                  type="text"
                  {...register("username")}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-beige-100 sm:text-base tracking-wider font-semibold sm:leading-6"
                />
              </div>
              {errors.username && (
                <span className="text-[#de3232]">
                  {errors.username?.message}
                </span>
              )}
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="password"
                className="block text-base-sm font-semibold leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  type="password"
                  {...register("password")}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-beige-100 sm:text-base tracking-wider font-semibold sm:leading-6"
                />
              </div>
              {errors.password && (
                <span className="text-[#de3232]">
                  {errors.password?.message}
                </span>
              )}
            </div>
            <div className="col-span-full">
              <label
                htmlFor="rcv-inv"
                className="block text-base-sm font-semibold leading-6 text-gray-900"
              >
                Please Select How you would like to receive invoices
              </label>
              <div className="flex">
                <div className="flex items-center me-4">
                  <input
                    id="inline-checkbox"
                    name="invoice_whhats_app"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-beige-100 bg-gray-100 border-gray-300 rounded focus:ring-beige-125 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="inline-checkbox"
                    className="ms-2 text-base-xs font-medium text-gray-900"
                  >
                    Whats App
                  </label>
                </div>
                <div className="flex items-center me-4">
                  <input
                    id="inline-2-checkbox"
                    name="invoice_email"
                    type="checkbox"
                    value="1"
                    className="w-4 h-4 text-beige-100 bg-gray-100 border-gray-300 rounded focus:ring-beige-125 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="inline-2-checkbox"
                    className="ms-2 text-base-xs font-medium text-gray-900"
                  >
                    {" "}
                    Email
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="my-6 flex gap-x-6 justify-center">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900 hover:bg-beige-50 px-5 py-2 rounded-md"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex justify-center rounded-md bg-beige-100 px-5 py-2 text-base tracking-wide font-semibold leading-6 text-white shadow-sm hover:bg-beige-125 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-beige-100"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
}
