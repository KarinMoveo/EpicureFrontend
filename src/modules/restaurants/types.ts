export type selectedCategoryType = 'All' | 'New' | 'Most Popular' | 'Open Now' | 'Map View' | null;


export interface CartItem {
	orderItemId: string;
	orderItemImage: string;
	orderItemName: string;
	orderItemAmount: number;
	orderItemPrice: number;
	orderItemSide: string;
	orderItemChanges: string;
	restaurantName: string;
}