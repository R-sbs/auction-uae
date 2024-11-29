// types/item.ts

type Dimension = {
    weight: string;
    size: string;
  };
  
  type Photo = {
    url: string;
    alt_text: string;
  };
  
  type Details = {
    dimensions: Dimension;
    photos: Photo[];
    provenance: string;
    authentication: string;
  };
  
  type EstimatedValue = {
    usd: number;
    sar: number;
  };
  
  type AuctionDetails = {
    start_date: string;
    end_date: string;
    starting_bid: EstimatedValue;
    bid_increment: EstimatedValue;
    reserve_price: EstimatedValue;
    location: {
      city: string;
      state: string;
      country: string;
    };
    shipping_details: {
      domestic_shipping_cost: number;
      international_shipping_cost: string;
      insurance_required: boolean;
    };
    payment_methods: string[];
    terms_and_conditions: string;
    auction_status: string;
  };
  
  export interface Item {
    id: string;
    auction_id: string;
    name: string;
    short_description: string;
    long_description: string;
    category: string;
    condition: string;
    estimated_value: EstimatedValue;
    is_buy_now_available: boolean;
    buy_now_price: number | null;
    details: Details;
    auction_details: AuctionDetails;
    is_active: boolean;
    created_at: string;
    updated_at: string;
  }
  