/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
"use client";

import {
  CalendarDaysIcon,
  CreditCardIcon,
  FaceFrownIcon,
  FaceSmileIcon,
  FireIcon,
  HandThumbUpIcon,
  HeartIcon,
  UserCircleIcon,
  XMarkIcon as XMarkIconMini,
} from "@heroicons/react/20/solid";

// const navigation = [
//   { name: "Home", href: "#" },
//   { name: "Invoices", href: "#" },
//   { name: "Clients", href: "#" },
//   { name: "Expenses", href: "#" },
// ];
// const invoice = {
//   subTotal: "$8,800.00",
//   tax: "$1,760.00",
//   total: "$10,560.00",
//   items: [
//     {
//       id: 1,
//       title: "Logo redesign",
//       description: "New logo and digital asset playbook.",
//       hours: "20.0",
//       rate: "$100.00",
//       price: "$2,000.00",
//     },
//     {
//       id: 2,
//       title: "Website redesign",
//       description: "Design and program new company website.",
//       hours: "52.0",
//       rate: "$100.00",
//       price: "$5,200.00",
//     },
//     {
//       id: 3,
//       title: "Business cards",
//       description: 'Design and production of 3.5" x 2.0" business cards.',
//       hours: "12.0",
//       rate: "$100.00",
//       price: "$1,200.00",
//     },
//     {
//       id: 4,
//       title: "T-shirt design",
//       description: "Three t-shirt design concepts.",
//       hours: "4.0",
//       rate: "$100.00",
//       price: "$400.00",
//     },
//   ],
// };
// const activity = [
//   {
//     id: 1,
//     type: "created",
//     person: { name: "Chelsea Hagon" },
//     date: "7d ago",
//     dateTime: "2023-01-23T10:32",
//   },
//   {
//     id: 2,
//     type: "edited",
//     person: { name: "Chelsea Hagon" },
//     date: "6d ago",
//     dateTime: "2023-01-23T11:03",
//   },
//   {
//     id: 3,
//     type: "sent",
//     person: { name: "Chelsea Hagon" },
//     date: "6d ago",
//     dateTime: "2023-01-23T11:24",
//   },
//   {
//     id: 4,
//     type: "commented",
//     person: {
//       name: "Chelsea Hagon",
//       imageUrl:
//         "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//     },
//     comment:
//       "Called client, they reassured me the invoice would be paid by the 25th.",
//     date: "3d ago",
//     dateTime: "2023-01-23T15:56",
//   },
//   {
//     id: 5,
//     type: "viewed",
//     person: { name: "Alex Curren" },
//     date: "2d ago",
//     dateTime: "2023-01-24T09:12",
//   },
//   {
//     id: 6,
//     type: "paid",
//     person: { name: "Alex Curren" },
//     date: "1d ago",
//     dateTime: "2023-01-24T09:20",
//   },
// ];
// const moods = [
//   {
//     name: "Excited",
//     value: "excited",
//     icon: FireIcon,
//     iconColor: "text-white",
//     bgColor: "bg-red-500",
//   },
//   {
//     name: "Loved",
//     value: "loved",
//     icon: HeartIcon,
//     iconColor: "text-white",
//     bgColor: "bg-pink-400",
//   },
//   {
//     name: "Happy",
//     value: "happy",
//     icon: FaceSmileIcon,
//     iconColor: "text-white",
//     bgColor: "bg-green-400",
//   },
//   {
//     name: "Sad",
//     value: "sad",
//     icon: FaceFrownIcon,
//     iconColor: "text-white",
//     bgColor: "bg-yellow-400",
//   },
//   {
//     name: "Thumbsy",
//     value: "thumbsy",
//     icon: HandThumbUpIcon,
//     iconColor: "text-white",
//     bgColor: "bg-blue-500",
//   },
//   {
//     name: "I feel nothing",
//     value: null,
//     icon: XMarkIconMini,
//     iconColor: "text-gray-400",
//     bgColor: "bg-transparent",
//   },
// ];

// // function classNames(...classes: string[]) {
// //   return classes.filter(Boolean).join(" ");
// }

export default function invoicePage() {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const [selected, setSelected] = useState(moods[5]);

  return (
    <>
      <div className="mb-20 divide-y divide-gray-100 border-b border-gray-200">
        <h2 className="text-h4 font-serif tracking-wide font-semibold leading-7 text-gray-900 mb-5">
          Invoice and Billing
        </h2>
      </div>
      

      {/* Invoice & Summary */}
      <div className="flex justify-between gap-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 border-[1px] rounded-md bg-slate-50">
        <dl className="mt-6 grid grid-cols-1 text-sm leading-6 sm:grid-cols-2">
          <div className="sm:pr-4">
            <dt className="inline text-gray-500">Issued on</dt>{" "}
            <dd className="inline text-gray-700">
              <time dateTime="2023-23-01">January 23, 2023</time>
            </dd>
          </div>
          <div className="mt-2 sm:mt-0 sm:pl-4">
            <dt className="inline text-gray-500">Due on</dt>{" "}
            <dd className="inline text-gray-700">
              <time dateTime="2023-31-01">January 31, 2023</time>
            </dd>
          </div>
          <div className="mt-6 border-t border-gray-900/5 pt-6 sm:pr-4">
            <dt className="font-semibold text-gray-900">From</dt>
            <dd className="mt-2 text-gray-500">
              <span className="font-medium text-gray-900">Acme, Inc.</span>
              <br />
              7363 Cynthia Pass
              <br />
              Toronto, ON N3Y 4H8
            </dd>
          </div>
          <div className="mt-8 sm:mt-6 sm:border-t sm:border-gray-900/5 sm:pl-4 sm:pt-6">
            <dt className="font-semibold text-gray-900">To</dt>
            <dd className="mt-2 text-gray-500">
              <span className="font-medium text-gray-900">Tuple, Inc</span>
              <br />
              886 Walter Street
              <br />
              New York, NY 12345
            </dd>
          </div>
        </dl>
        <div className="lg:col-start-3 lg:row-end-1 max-w-80">
          <h2 className="sr-only">Summary</h2>
          <div className="rounded-lg bg-white shadow-sm ring-1 ring-gray-900/5">
            <dl className="flex flex-wrap">
              <div className="flex-auto pl-6 pt-6">
                <dt className="text-sm font-semibold leading-6 text-gray-900">
                  Amount
                </dt>
                <dd className="mt-1 text-base font-semibold leading-6 text-gray-900">
                  $10,560.00
                </dd>
              </div>
              <div className="flex-none self-end px-6 pt-4">
                <dt className="sr-only">Status</dt>
                <dd className="rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-600 ring-1 ring-inset ring-green-600/20">
                  Paid
                </dd>
              </div>
              <div className="mt-6 flex w-full flex-none gap-x-4 border-t border-gray-900/5 px-6 pt-6">
                <dt className="flex-none">
                  <span className="sr-only">Client</span>
                  <UserCircleIcon
                    aria-hidden="true"
                    className="h-6 w-5 text-gray-400"
                  />
                </dt>
                <dd className="text-sm font-medium leading-6 text-gray-900">
                  Alex Curren
                </dd>
              </div>
              <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
                <dt className="flex-none">
                  <span className="sr-only">Due date</span>
                  <CalendarDaysIcon
                    aria-hidden="true"
                    className="h-6 w-5 text-gray-400"
                  />
                </dt>
                <dd className="text-sm leading-6 text-gray-500">
                  <time dateTime="2023-01-31">January 31, 2023</time>
                </dd>
              </div>
              <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
                <dt className="flex-none">
                  <span className="sr-only">Status</span>
                  <CreditCardIcon
                    aria-hidden="true"
                    className="h-6 w-5 text-gray-400"
                  />
                </dt>
                <dd className="text-sm leading-6 text-gray-500">
                  Paid with MasterCard
                </dd>
              </div>
            </dl>
            <div className="mt-6 border-t border-gray-900/5 px-6 py-6">
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Download receipt <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 border-[1px] rounded-md bg-slate-50 my-8">
        <dl className="mt-6 grid grid-cols-1 text-sm leading-6 sm:grid-cols-2">
          <div className="sm:pr-4">
            <dt className="inline text-gray-500">Issued on</dt>{" "}
            <dd className="inline text-gray-700">
              <time dateTime="2023-23-01">January 23, 2023</time>
            </dd>
          </div>
          <div className="mt-2 sm:mt-0 sm:pl-4">
            <dt className="inline text-gray-500">Due on</dt>{" "}
            <dd className="inline text-gray-700">
              <time dateTime="2023-31-01">January 31, 2023</time>
            </dd>
          </div>
          <div className="mt-6 border-t border-gray-900/5 pt-6 sm:pr-4">
            <dt className="font-semibold text-gray-900">From</dt>
            <dd className="mt-2 text-gray-500">
              <span className="font-medium text-gray-900">Acme, Inc.</span>
              <br />
              7363 Cynthia Pass
              <br />
              Toronto, ON N3Y 4H8
            </dd>
          </div>
          <div className="mt-8 sm:mt-6 sm:border-t sm:border-gray-900/5 sm:pl-4 sm:pt-6">
            <dt className="font-semibold text-gray-900">To</dt>
            <dd className="mt-2 text-gray-500">
              <span className="font-medium text-gray-900">Tuple, Inc</span>
              <br />
              886 Walter Street
              <br />
              New York, NY 12345
            </dd>
          </div>
        </dl>
        <div className="lg:col-start-3 lg:row-end-1 max-w-80">
          <h2 className="sr-only">Summary</h2>
          <div className="rounded-lg bg-white shadow-sm ring-1 ring-gray-900/5">
            <dl className="flex flex-wrap">
              <div className="flex-auto pl-6 pt-6">
                <dt className="text-sm font-semibold leading-6 text-gray-900">
                  Amount
                </dt>
                <dd className="mt-1 text-base font-semibold leading-6 text-gray-900">
                  $10,560.00
                </dd>
              </div>
              <div className="flex-none self-end px-6 pt-4">
                <dt className="sr-only">Status</dt>
                <dd className="rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-600 ring-1 ring-inset ring-green-600/20">
                  Paid
                </dd>
              </div>
              <div className="mt-6 flex w-full flex-none gap-x-4 border-t border-gray-900/5 px-6 pt-6">
                <dt className="flex-none">
                  <span className="sr-only">Client</span>
                  <UserCircleIcon
                    aria-hidden="true"
                    className="h-6 w-5 text-gray-400"
                  />
                </dt>
                <dd className="text-sm font-medium leading-6 text-gray-900">
                  Alex Curren
                </dd>
              </div>
              <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
                <dt className="flex-none">
                  <span className="sr-only">Due date</span>
                  <CalendarDaysIcon
                    aria-hidden="true"
                    className="h-6 w-5 text-gray-400"
                  />
                </dt>
                <dd className="text-sm leading-6 text-gray-500">
                  <time dateTime="2023-01-31">January 31, 2023</time>
                </dd>
              </div>
              <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
                <dt className="flex-none">
                  <span className="sr-only">Status</span>
                  <CreditCardIcon
                    aria-hidden="true"
                    className="h-6 w-5 text-gray-400"
                  />
                </dt>
                <dd className="text-sm leading-6 text-gray-500">
                  Paid with MasterCard
                </dd>
              </div>
            </dl>
            <div className="mt-6 border-t border-gray-900/5 px-6 py-6">
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Download receipt <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 border-[1px] rounded-md bg-slate-50">
        <dl className="mt-6 grid grid-cols-1 text-sm leading-6 sm:grid-cols-2">
          <div className="sm:pr-4">
            <dt className="inline text-gray-500">Issued on</dt>{" "}
            <dd className="inline text-gray-700">
              <time dateTime="2023-23-01">January 23, 2023</time>
            </dd>
          </div>
          <div className="mt-2 sm:mt-0 sm:pl-4">
            <dt className="inline text-gray-500">Due on</dt>{" "}
            <dd className="inline text-gray-700">
              <time dateTime="2023-31-01">January 31, 2023</time>
            </dd>
          </div>
          <div className="mt-6 border-t border-gray-900/5 pt-6 sm:pr-4">
            <dt className="font-semibold text-gray-900">From</dt>
            <dd className="mt-2 text-gray-500">
              <span className="font-medium text-gray-900">Acme, Inc.</span>
              <br />
              7363 Cynthia Pass
              <br />
              Toronto, ON N3Y 4H8
            </dd>
          </div>
          <div className="mt-8 sm:mt-6 sm:border-t sm:border-gray-900/5 sm:pl-4 sm:pt-6">
            <dt className="font-semibold text-gray-900">To</dt>
            <dd className="mt-2 text-gray-500">
              <span className="font-medium text-gray-900">Tuple, Inc</span>
              <br />
              886 Walter Street
              <br />
              New York, NY 12345
            </dd>
          </div>
        </dl>
        <div className="lg:col-start-3 lg:row-end-1 max-w-80">
          <h2 className="sr-only">Summary</h2>
          <div className="rounded-lg bg-white shadow-sm ring-1 ring-gray-900/5">
            <dl className="flex flex-wrap">
              <div className="flex-auto pl-6 pt-6">
                <dt className="text-sm font-semibold leading-6 text-gray-900">
                  Amount
                </dt>
                <dd className="mt-1 text-base font-semibold leading-6 text-gray-900">
                  $10,560.00
                </dd>
              </div>
              <div className="flex-none self-end px-6 pt-4">
                <dt className="sr-only">Status</dt>
                <dd className="rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-600 ring-1 ring-inset ring-green-600/20">
                  Paid
                </dd>
              </div>
              <div className="mt-6 flex w-full flex-none gap-x-4 border-t border-gray-900/5 px-6 pt-6">
                <dt className="flex-none">
                  <span className="sr-only">Client</span>
                  <UserCircleIcon
                    aria-hidden="true"
                    className="h-6 w-5 text-gray-400"
                  />
                </dt>
                <dd className="text-sm font-medium leading-6 text-gray-900">
                  Alex Curren
                </dd>
              </div>
              <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
                <dt className="flex-none">
                  <span className="sr-only">Due date</span>
                  <CalendarDaysIcon
                    aria-hidden="true"
                    className="h-6 w-5 text-gray-400"
                  />
                </dt>
                <dd className="text-sm leading-6 text-gray-500">
                  <time dateTime="2023-01-31">January 31, 2023</time>
                </dd>
              </div>
              <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
                <dt className="flex-none">
                  <span className="sr-only">Status</span>
                  <CreditCardIcon
                    aria-hidden="true"
                    className="h-6 w-5 text-gray-400"
                  />
                </dt>
                <dd className="text-sm leading-6 text-gray-500">
                  Paid with MasterCard
                </dd>
              </div>
            </dl>
            <div className="mt-6 border-t border-gray-900/5 px-6 py-6">
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Download receipt <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
