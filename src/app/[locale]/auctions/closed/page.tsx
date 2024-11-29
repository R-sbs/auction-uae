'use client';

import { useEffect, useState } from 'react';
import LotCard from '../_components/LotCard';

const ClosedAuctions = () => {
  const [auctions, setAuctions] = useState<any[]>([]);

  useEffect(() => {
    async function fetchAuctions() {
      const res = await fetch('/api/auctions');
      const data = await res.json();
      const closed = data.auctions.filter((auction: any) => new Date(auction.endTime) <= new Date());
      setAuctions(closed);
    }
    fetchAuctions();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Closed Auctions</h1>
      {auctions.map(auction => (
        <LotCard key={auction.id} item={auction} />
      ))}
    </div>
  );
};

export default ClosedAuctions;
