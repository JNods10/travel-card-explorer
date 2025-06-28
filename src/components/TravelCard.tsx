
import { Card } from "@/components/ui/card";
import LocationHeader from "./LocationHeader";
import CollapsibleSection from "./CollapsibleSection";
import PlaceCard from "./PlaceCard";
import { Utensils, Beer, Hotel } from "lucide-react";

interface Restaurant {
  name: string;
  rating: number;
  cuisine: string;
  website?: string;
}

interface Bar {
  name: string;
  rating: number;
  priceLevel: string;
  website?: string;
}

interface HotelType {
  name: string;
  rating: number;
  priceLevel: string;
  website?: string;
}

interface TravelCardData {
  id: string;
  location: string;
  caption: string;
  restaurants: Restaurant[];
  bars: Bar[];
  hotels: HotelType[];
}

interface TravelCardProps {
  data: TravelCardData;
}

const TravelCard = ({ data }: TravelCardProps) => {
  return (
    <div className="max-w-2xl mx-auto">
      <Card className="overflow-hidden shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
        <LocationHeader 
          location={data.location} 
          caption={data.caption}
          cardId={data.id}
        />
        
        <div className="p-6 space-y-4">
          <CollapsibleSection
            title="Restaurants"
            count={data.restaurants.length}
            icon={<Utensils className="w-5 h-5" />}
            accentColor="bg-orange-500"
          >
            <div className="space-y-3">
              {data.restaurants.map((restaurant, index) => (
                <PlaceCard
                  key={index}
                  name={restaurant.name}
                  rating={restaurant.rating}
                  subtitle={restaurant.cuisine}
                  website={restaurant.website}
                  type="restaurant"
                />
              ))}
            </div>
          </CollapsibleSection>

          <CollapsibleSection
            title="Bars & Nightlife"
            count={data.bars.length}
            icon={<Beer className="w-5 h-5" />}
            accentColor="bg-purple-500"
          >
            <div className="space-y-3">
              {data.bars.map((bar, index) => (
                <PlaceCard
                  key={index}
                  name={bar.name}
                  rating={bar.rating}
                  subtitle={bar.priceLevel}
                  website={bar.website}
                  type="bar"
                />
              ))}
            </div>
          </CollapsibleSection>

          <CollapsibleSection
            title="Hotels"
            count={data.hotels.length}
            icon={<Hotel className="w-5 h-5" />}
            accentColor="bg-blue-500"
          >
            <div className="space-y-3">
              {data.hotels.map((hotel, index) => (
                <PlaceCard
                  key={index}
                  name={hotel.name}
                  rating={hotel.rating}
                  subtitle={hotel.priceLevel}
                  website={hotel.website}
                  type="hotel"
                />
              ))}
            </div>
          </CollapsibleSection>
        </div>
      </Card>
    </div>
  );
};

export default TravelCard;
