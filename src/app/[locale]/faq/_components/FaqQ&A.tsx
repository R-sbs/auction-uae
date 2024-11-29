import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "Q: How can I contact customer support?",
    answer:
      "A: You can reach our customer support team by emailing us at [email@example.com], calling us at [phone number], or using the contact form on our [Contact Us] page. Our team is available [mention support hours].",
  },
  {
    question: "Q: How do I create an account?",
    answer:
      "A: To create an account, click on the 'Sign Up' button at the top right corner of the homepage, fill in the required details, and follow the instructions. You will receive a confirmation email once your account is successfully created.",
  },
  {
    question: "Q: What payment methods do you accept?",
    answer:
      "A: We accept various payment methods, including [list payment methods, e.g., credit/debit cards, PayPal, etc.]. All transactions are secure and encrypted.",
  },
  {
    question: "Q: I forgot my password. How can I reset it?",
    answer:
      "A: If you forgot your password, click on the 'Forgot Password' link on the login page. Enter your registered email address, and we will send you a link to reset your password.",
  },
  {
    question: "Q: What is buyers premium?",
    answer:
      "A: To report a bug or technical issue, please contact us via [email@example.com] or use the contact form on our [Contact Us] page. Provide as much detail as possible, including screenshots if applicable, so we can resolve the issue promptly.",
  },

  // More questions...
];

export default function Faq() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-32 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-h4 font-serif font-bold tracking-wide text-gray-900">
            Have A Question? We Have The Answers.
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure key={faq.question} as="div" className="pt-6">
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                    <span className="text-h6 font-serif font-semibold tracking-wide">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusIcon
                        aria-hidden="true"
                        className="h-6 w-6 group-data-[open]:hidden"
                      />
                      <MinusIcon
                        aria-hidden="true"
                        className="h-6 w-6 [.group:not([data-open])_&]:hidden"
                      />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base leading-7 text-gray-600">
                    {faq.answer}
                  </p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
