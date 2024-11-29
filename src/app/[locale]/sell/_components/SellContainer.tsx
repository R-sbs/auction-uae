import SellForm from "./SellForm";
import SellHero from "./SellHero";

export default function SellContainer() {
  return (
    <div className="relative isolate bg-white">
      <SellHero />
      <div className="mx-auto max-w-7xl">
        <div className="px-6 pb-20 pt-24 sm:pt-32 lg:px-8 lg:py-20">
          <div className="mx-auto lg:mx-0 max-w-4xl">
            <h2 className="text-h3 font-serif font-bold tracking-wide text-gray-900 mb-5">
              Have an Item For Sale?
            </h2>
            <p className="mt-6 text-base-lg leading-8 text-gray-600">
              If you wish to sell an item to us for auction, please fill out the
              form below. Please also attach clear photos of the item(s) from
              multiple angles so that our team can properly inspect them.<br></br> <br></br> Once
              we have reviewed your item(s), we will contact you with a decision
              and keep you informed about the next stages of the sales process.
            </p>
            {/* <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
              {/* <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon
                    aria-hidden="true"
                    className="h-7 w-6 text-gray-400"
                  />
                </dt>
                <dd>
                  545 Mavis Island
                  <br />
                  Chicago, IL 99191
                </dd>
              </div> 
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon
                    aria-hidden="true"
                    className="h-7 w-6 text-gray-400"
                  />
                </dt>
                <dd>
                  <a
                    href="tel:+1 (555) 234-5678"
                    className="hover:text-gray-900"
                  >
                    +1 (555) 234-5678
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon
                    aria-hidden="true"
                    className="h-7 w-6 text-gray-400"
                  />
                </dt>
                <dd>
                  <a
                    href="mailto:info@alturathaljmeel.com"
                    className="hover:text-gray-900"
                  >
                    info@alturathaljmeel.com
                  </a>
                </dd>
              </div>
            </dl> */}
          </div>
        </div>
        <SellForm />
      </div>
    </div>
  );
}
