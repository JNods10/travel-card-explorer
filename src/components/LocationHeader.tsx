
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

interface LocationHeaderProps {
  location: string;
  caption: string;
  cardId: string;
}

const LocationHeader = ({ location, caption, cardId }: LocationHeaderProps) => {
  const handleViewOnMap = () => {
    // Replace with your map integration logic
    console.log(`View card ${cardId} on map`);
  };

  return (
    <div className="relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-300 to-white opacity-90" />

      
      {/* Content */}
      <div className="relative p-8 text-black">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-2">
            <MapPin className="w-6 h-6 text-black/90" />
            <h1 className="text-2xl font-bold">{location}</h1>
          </div>
          <Button
            onClick={handleViewOnMap}
            variant="secondary"
            size="sm"
            className="bg-black/20 hover:bg-black/30 text-black border-black/30 backdrop-blur-sm"
          >
            <MapPin className="w-4 h-4 mr-2" />
            View on Map
          </Button>
        </div>
        
        <p className="text-black/90 text-lg leading-relaxed">
          {caption}
        </p>
      </div>
    </div>
  );
};

export default LocationHeader;
