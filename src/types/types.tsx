
export interface Auction {
    id: string | string[];
    auction_id: string;
    title: string;
    description: string;
    start_date: string; // ISO 8601 format
    end_date: string;   // ISO 8601 format
    location: string;
    currency: string[];
    items: Item[];
    metadata: Metadata;
}

export interface Item {
    item_id: string;
    item_name: string;
    item_short_description: string;
    item_long_description: string;
    category: string;
    condition: string;
    estimated_value: EstimatedValue;
    is_buy_now_available: boolean;
    buy_now_price: BuyNowPrice | null;
    item_details: ItemDetails;
    auction_details: AuctionDetails | null;
}

export default interface ItemWithBoolean extends Item {
    toggleViewMode: boolean; 
}

interface EstimatedValue {
    usd: number;
    sar: number;
}

interface BuyNowPrice {
    usd: number;
    sar: number;
}

interface ItemDetails {
    dimensions: Dimensions;
    photos: string[];
    provenance: string;
    authentication: string;
}

interface Dimensions {
    weight?: string;
    dimensions: string;
}

interface AuctionDetails {
    start_date: string; // ISO 8601 format
    end_date: string;   // ISO 8601 format
    starting_bid: StartingBid;
    bid_increment: BidIncrement;
    reserve_price: ReservePrice;
    bids: Bid[];
    location: string;
    shipping_details: string;
    payment_methods: string[];
    terms_and_conditions: string;
}

interface StartingBid {
    usd: number;
    sar: number;
}

interface BidIncrement {
    usd: number;
    sar: number;
}

interface ReservePrice {
    usd: number;
    sar: number;
}

interface Bid {
    bid_id: string;
    bidder_id: string;
    bid_amount: BidAmount;
    bid_time: string; // ISO 8601 format
}

interface BidAmount {
    usd: number;
}

interface Metadata {
    total_items: number;
    highest_bid: HighestBid;
    total_bids: number;
    total_revenue: TotalRevenue;
}

interface HighestBid {
    usd: number;
    sar: number;
}

interface TotalRevenue {
    usd: number;
    sar: number;
}


