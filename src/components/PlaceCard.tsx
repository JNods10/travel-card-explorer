
import { Button } from "@/components/ui/button";
import { Star, ExternalLink } from "lucide-react";

interface PlaceCardProps {
  name: string;
  rating: number;
  subtitle: string;
  website?: string;
  type: 'restaurant' | 'bar' | 'hotel';
}

const PlaceCard = ({ name, rating, subtitle, website, type }: PlaceCardProps) => {
  const handleVisitWebsite = () => {
    if (website) {
      window.open(website, '_blank');
    }
  };

  const getTypeColor = () => {
    switch (type) {
      case 'restaurant':
        return 'text-orange-600 bg-orange-50';
      case 'bar':
        return 'text-purple-600 bg-purple-50';
      case 'hotel':
        return 'text-blue-600 bg-blue-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="group p-4 bg-white rounded-lg border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-200">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-2">
            <h4 className="font-semibold text-gray-900 group-hover:text-gray-700">
              {name}
            </h4>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm font-medium text-gray-700">
                {rating.toFixed(1)}
              </span>
            </div>
          </div>
          
          <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getTypeColor()}`}>
            {subtitle}
          </div>
        </div>
        
        {website && (
          <Button
            onClick={handleVisitWebsite}
            variant="ghost"
            size="sm"
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-4"
          >
            <ExternalLink className="w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default PlaceCard;
