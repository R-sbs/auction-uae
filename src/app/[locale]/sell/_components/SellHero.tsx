import Image from "next/image";

export default function SellHero() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <Image
        width={0}
        height={0}
        sizes="100vw"
        alt="iamgess"
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="font-serif text-h3 sm:text-h1 font-bold tracking-wide text-white">
          Sell with Us
        </h2>
      </div>
    </div>
  );
}
