"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Lot = {
  id: string;
  name: string;
  description: string;
  estimated_value: { usd: number; sar: number };
  auction_details: {
    end_date: string;
    starting_bid: { usd: number; sar: number };
    bid_increment: { usd: number; sar: number };
  };
};

type User = {
  id: string;
  isAuthenticated: boolean;
};

const BidForm = ({ lot }: { lot: Lot }) => {
  const [user, setUser] = useState<User | null>(null); // Simulate user authentication state
  const [bidAmount, setBidAmount] = useState<number>(
    lot.auction_details.starting_bid.usd
  );

  const router = useRouter();

  useEffect(() => {
    // Replace with actual authentication logic to get the user
    const checkAuthentication = async () => {
      // Simulate a fetch call to check if the user is authenticated
      const fetchedUser = { id: "123", isAuthenticated: false }; // Replace with actual logic
      setUser(fetchedUser);
    };
    checkAuthentication();
  }, []);

  const handleBidSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user?.isAuthenticated) {
      router.push("/login"); // Redirect to login page if not logged in
      return;
    }
    // Logic for submitting a bid
    console.log("Bid submitted:", bidAmount);
  };

  const increaseBid = () => {
    setBidAmount(bidAmount + lot.auction_details.bid_increment.usd);
  };

  const handleRegister = () => {
    router.push("/auth/register"); // Redirect to register page if not logged in
  };

  function isoDateToLocale(d: string | undefined, locale = "us-EN") {
    if (!d) return;

    const date = new Date(d);

    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short", // 'long', 'short', or 'narrow'
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true, // Use 12-hour clock format (true) or 24-hour (false)
    };

    const localDateString = date.toLocaleString(locale, options);

    return localDateString;
  }

  return (
    <div className="bid-form p-4">
      <p className="text-xs uppercase mb-2   text-gray-600">
        top title - Author or auction title
      </p>
      <h2 className="text-h4 font-serif  font-bold tracking-wide text-gray-900 mb-6">
        {" "}
        {lot.name}
      </h2>
      <p className="mb-4 border-b py-2 text-base-sm text-gray-900 tracking-wide">
        Estimated Value &nbsp; ${lot.estimated_value.usd} USD
      </p>
      <p className="mb-4 border-b py-2 text-base-sm text-gray-900 tracking-wide">
        Bidding Ends on &nbsp; {isoDateToLocale(lot.auction_details.end_date)}
      </p>

      {user && user.isAuthenticated ? (
        <>
          <p className="mb-4 border-b py-2 text-base-sm text-gray-900 tracking-wide">
            Current Bid &nbsp; ${lot.estimated_value.usd} USD &nbsp; &nbsp; (5
            Bids){" "}
            <Link
              href="#"
              className="text-xs underline text-gray-500 hover:text-gray-800"
            >
              View Bid History
            </Link>
          </p>
          <form onSubmit={handleBidSubmit} className="mb-4">
            <label className="block mb-2 text-lg font-semibold">Your Bid</label>
            <div className="flex items-center mb-4">
              <input
                type="number"
                value={bidAmount}
                min={lot.auction_details.starting_bid.usd}
                onChange={(e) => setBidAmount(Number(e.target.value))}
                className="border-gray-700 p-2 focus:border-black rounded-lg w-1/3"
                required
              />
              <button
                type="button"
                onClick={increaseBid}
                className="ml-4 px-4 py-2 bg-transparent border text-base-sm font-medium text-black hover:bg-beige-50 rounded-md"
              >
                Increase by ${lot.auction_details.bid_increment.usd}
              </button>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-beige-100 hover:bg-beige-125 text-white rounded-md font-semibold"
            >
              Submit Bid
            </button>
          </form>
        </>
      ) : (
        <div>
          <p className="text-red-600 text-xs mb-4">
            You must register to place a bid.
          </p>
          <button
            onClick={handleRegister}
            className="w-full px-4 py-2 bg-beige-100 hover-bg-beige-125 text-white rounded-lg font-semibold hover:bg-beige-125"
          >
            Register to Bid
          </button>
        </div>
      )}
    </div>
  );
};

export default BidForm;
