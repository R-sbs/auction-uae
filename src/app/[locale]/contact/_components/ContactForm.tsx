"use client";

import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { zodResolver } from "@hookform/resolvers/zod";

import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  firstName: z.string().min(1, { message: "Type your First Name" }),
  lastName: z.string().min(1, { message: "Type your Last Name" }).optional(),
  email: z.string().email(),
  phone: z.number().min(8).nullable().optional(),
  messageText: z.string().min(10, { message: "Type your message" }),
});

let isEditing = true;

type FormFields = z.infer<typeof schema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful, isDirty },
  } = useForm<FormFields>({
    defaultValues: {},
    resolver: zodResolver(schema),
  });

  

  

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
    } catch (error) {
      setError("root", {
        message: "Something went wrong, Please Submit Again",
      });
    } finally {
      reset();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-base-sm font-semibold leading-6 text-gray-900"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                {...register("firstName")}
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-beige-100 sm:text-base tracking-wider font-semibold sm:leading-6"
              />
              {errors.firstName && (
                <div className="text-sm text-red-500">
                  {errors.firstName.message}
                </div>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-base-sm font-semibold leading-6 text-gray-900"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                {...register("lastName")}
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-beige-100 sm:text-base tracking-wider font-semibold sm:leading-6"
              />
              {errors.lastName && (
                <div className="text-sm text-red-500">
                  {errors.lastName.message}
                </div>
              )}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-base-sm font-semibold leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                {...register("email")}
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-beige-100 sm:text-base tracking-wider font-semibold sm:leading-6"
              />
              {errors.email && (
                <div className="text-sm text-red-500">
                  {errors.email.message}
                </div>
              )}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-base-sm font-semibold leading-6 text-gray-900"
            >
              Phone number
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                {...register("phone", { valueAsNumber: true })}
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-beige-100 sm:text-base tracking-wider sm:leading-6"
              />
              {errors.phone && (
                <div className="text-sm text-red-500">
                  {errors.phone.message}
                </div>
              )}
            </div>
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
                {...register("messageText")}
                rows={4}
                placeholder="Type your message/Request/ Query here"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-beige-100 sm:leading-6 sm:text-base tracking-wider"
                defaultValue={""}
              />
              {errors.messageText && (
                <div className="text-sm text-red-400 mt-1">
                  {errors.messageText.message}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-end">
          <button
            disabled={isSubmitting}
            type="submit"
            className="rounded-md bg-beige-100 px-3.5 py-2.5 text-center text-base font-semibold text-white shadow-sm hover:bg-beige-125 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-beige-100"
          >
            {isSubmitting ? (
              <span className="text-[12px]">Loading...</span>
            ) : isSubmitSuccessful ? (
              <>
                {"Message Sent"}{" "}
                <CheckCircleIcon className="inline size-6 text-white" />
              </>
            ) : isEditing && (
              "Send Message"
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

export default ContactForm;
