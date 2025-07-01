// src/types.ts

/**
 * Represents an individual activity within an itinerary.
 * Based on the Django Activity model.
 */
export interface Activity {
  id: string; // UUIDField
  description: string; // TextField, blank=True
  title: string; // CharField, max_length=255
  cost?: string | null; // CharField, max_length=255, null=True, blank=True
  link?: string | null; // URLField, blank=True, null=True
  location?: string | null; // CharField, max_length=255, null=True, blank=True
  dayNum?: number | null; // IntegerField, null=True, blank=True
  // itinerary: string; // Foreign Key to Itinerary (usually represented by ID in frontend)
  // created_at: string; // DateTimeField (auto_now_add=True) - often not directly used in UI display logic
}

/**
 * Represents a travel itinerary.
 * Based on the Django Itinerary model.
 */
export interface Itinerary {
  id: string; // UUIDField
  title: string; // CharField, max_length=255
  description: string; // TextField, blank=True
  start_date: string; // DateField - represented as string for API transfer
  end_date: string; // DateField - represented as string for API transfer
  location?: string | null; // CharField, max_length=255, null=True, blank=True
  activities: Activity[]; // A list of activities associated with this itinerary
  // user: string; // Foreign Key to SupabaseUser (usually represented by ID or not directly used in this view)
  // created_at: string; // DateTimeField (auto_now_add=True)
  // updated_at: string; // DateTimeField (auto_now=True)
}

/**
 * Props for the TravelCard component.
 * Based on the existing interface in TravelCardPage.tsx
 */
export interface TravelCardData {
  id: string;
  location: string;
  caption: string;
  restaurants: {
    name: string;
    rating: number;
    cuisine: string;
    website?: string;
  }[];
  bars: {
    name: string;
    rating: number;
    priceLevel: string;
    website?: string;
  }[];
  hotels: {
    name: string;
    rating: number;
    priceLevel: string;
    website?: string;
  }[];
}

/**
 * API response types for backend data
 */
export interface ApiActivity {
  id: string;
  title: string;
  description: string;
  cost?: string | null;
  link?: string | null;
  location?: string | null;
  dayNum?: number | null;
}

export interface ApiItineraryResponse {
  id?: string;
  itinerary_id: string;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  location?: string | null;
  activities_by_day: { [key: number]: ApiActivity[] };
  total_activities: number;
  created_at: string;
  updated_at: string;
  user: string;
}

/**
 * API response types for travel card data
 */
export interface ApiRestaurant {
  name: string;
  rating: number;
  cuisine: string;
  website?: string;
}

export interface ApiBar {
  name: string;
  rating: number;
  price_level: string;
  website?: string;
}

export interface ApiHotel {
  name: string;
  rating: number;
  price_level: string;
  website?: string;
}

export interface ApiTravelCardResponse {
  location: string;
  caption: string;
  places: {
    restaurants: ApiRestaurant[];
    bars: ApiBar[];
    hotels: ApiHotel[];
  };
}
