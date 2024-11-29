"use client";

import React from "react";
import { ArrowUpIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import { sellSchema, sellPageValidationSchemaType } from '@/schemas/sellPageSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';

const SellForm = () => {
  let isEditing = true;

  	const { register, handleSubmit,
      formState: { errors, isSubmitting, isSubmitSuccessful  } } = useForm<sellPageValidationSchemaType>({
        defaultValues: {},
		resolver: zodResolver(sellSchema),
	});

	const onSubmit: SubmitHandler<sellPageValidationSchemaType> = (data) => {
		console.log(data);
	}

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="px-6 pb-24 pt-5 sm:pb-32 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="Full-name"
              className="block text-base-sm font-semibold leading-6 text-gray-900"
            >
              Full name
            </label>
            <div className="mt-2.5">
              <input
                id="full-name"
                {...register('full_name')}
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-beige-100 sm:text-base tracking-wider font-semibold sm:leading-6"
              />
            </div>
			{errors.full_name && (
				<span className='text-[#de3232]'>{errors.full_name?.message}</span>
			)}
          </div>

          <div className="sm:col-span-1">
            <label
              htmlFor="email"
              className="block text-base-sm font-semibold leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                {...register('email')}
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-beige-100 sm:text-base tracking-wider font-semibold sm:leading-6"
              />
            </div>
			{
				errors.email && (
					<span className='text-[#de3232]'>{errors.email?.message}</span>
				)
			}
          </div>
          <div className="sm:col-span-1">
            <label
              htmlFor="phone-number"
              className="block text-base-sm font-semibold leading-6 text-gray-900"
            >
              Phone number
            </label>
            <div className="mt-2.5">
              <input
                id="phone-number"
                {...register('phone_number')}
                type="tel"
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-beige-100 sm:text-base tracking-wider font-semibold sm:leading-6"
              />
            </div>
			{
				errors.phone_number && (
					<span className='text-[#de3232]'>{errors.phone_number?.message}</span>
				)
			}
          </div>
          <div>
            <label
              htmlFor="item-type"
              className="block text-base-sm font-semibold leading-6 text-gray-900"
            >
              Item-type
            </label>
            <div className="mt-3">
            <select
              id="item-type"
              {...register('item_type')}
              defaultValue=""
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-beige-100 sm:text-base tracking-wider font-semibold sm:leading-6"
            >
              <option>Bank Notes</option>
              <option>Coins</option>
              <option>Cars</option>
              <option>Arts</option>
              <option>Swords & Weapons</option>
              <option>Documents</option>
              <option>Stamps</option>
            </select>
            </div>
			{
				errors.item_type && (
					<span className='text-[#de3232]'>{errors.item_type?.message}</span>
				)
			}
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-base-sm font-semibold leading-6 text-gray-900"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
               {...register('message')}
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-beige-100 sm:text-base tracking-wider font-semibold sm:leading-6"
                defaultValue={""}
              />
            </div>
			{
				errors.message && (
					<span className='text-[#de3232]'>{errors.message?.message}</span>
				)
			}
          </div>
        </div>
        <div className="mt-8">
          <label
            htmlFor="imageUpload"
            className="block text-base-sm font-semibold leading-6 text-gray-900"
          >
            Please attach photos of the items you wish to sell using the button
            below.
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <ArrowUpIcon
                aria-hidden="true"
                className="h-5 w-5 text-gray-400"
              />
            </div>
            <input
				id="image"
				{...register("sell_image")}
				type="file"
              
              className="file:font-bold pl-10  file:bg-gray-100 file:border-0 file:me-4 file:py-3 file:px-4 hover:file:bg-gray-50 block w-full rounded-md border-0 px-3.5 py-2 text-gray-700  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-beige-100 sm:text-base tracking-wider font-semibold sm:leading-6"
            />
            
          </div>
		  	{
				errors.sell_image && (
					<span className='text-[#de3232]'>{errors.sell_image?.message?.toString()}</span>
				)
			}
          
        </div>
        <div className="mt-8 flex justify-end pr-4">
          <button
            disabled={isSubmitting}
            type="submit"
            className="rounded-md bg-beige-100 px-6 tracking-wide py-3 text-center text-base font-semibold text-white shadow-sm hover:bg-beige-125 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-beige-100"
          >
            {isSubmitting ? (
              <span className="text-[12px]">Loading...</span>
            ) : isSubmitSuccessful ? (
              <>
                {"Message Sent"}{" "}
                <CheckCircleIcon className="inline size-6 text-white" />
              </>
            ) : isEditing && (
              "Send"
            )}
          </button>
          {errors.root && (
            <div className="text-sm text-red-500">{errors.root.message}</div>
          )}
        </div>
      </div>
    </form>
  );
};

export default SellForm;
