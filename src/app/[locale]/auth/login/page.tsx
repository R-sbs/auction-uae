"use client";

import React from "react";
import {
  signInSchema,
  SignInValidationSchemaType,
} from "@/schemas/signInSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import LoginHero from "../_components/LoginHero";
import Link from "next/link";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInValidationSchemaType>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit: SubmitHandler<SignInValidationSchemaType> = (data) => {
    console.log(data);
  };

  return (
    <>
      <LoginHero />
      <div className="flex flex-1 flex-col justify-center px-6 py-12 sm:pb-24 lg:px-12">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-h4 font-serif font-bold tracking-wide text-gray-900">
            Sign In to Your Account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-base-sm font-semibold leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  autoComplete="email"
                  {...register("identifier")}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-beige-100 sm:text-base tracking-wider font-semibold sm:leading-6"
                />
              </div>
              {errors.identifier && (
                <span className="text-[#de3232]">
                  {errors.identifier?.message}
                </span>
              )}
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-base-sm font-semibold leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <Link
                    href="#"
                    className="font-semibold text-beige-100 hover:text-beige-125"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-beige-100 sm:text-base tracking-wider font-semibold smbeige-100"
                />
              </div>
              {errors.password && (
                <span className="text-[#de3232]">
                  {errors.password?.message}
                </span>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-beige-100 px-3 py-3 text-base tracking-wide font-semibold leading-6 text-white shadow-sm hover:bg-beige-125 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-beige-100"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <Link
              href="/auth/register"
              className="font-semibold leading-6 text-beige-100 hover:text-beige-125"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
