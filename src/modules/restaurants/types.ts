export type selectedCategoryType = 'Everything' | 'New' | 'Most Popular' | 'Open Now' | 'Map View' | null;

export type MealType = 'Breakfast' | 'Lunch' | 'Dinner';

export interface CartItem {
	orderItemRestaurantName: string;
	orderItemId: string;
	orderItemImage: string;
	orderItemName: string;
	orderItemAmount: number;
	orderItemPrice: number;
	orderItemSide: string;
	orderItemChanges: string;
}