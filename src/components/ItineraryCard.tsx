import React from 'react';
import { Card } from "@/components/ui/card";
import LocationHeader from "./LocationHeader"; // Reusing LocationHeader
import CollapsibleSection from "./CollapsibleSection"; // Reusing CollapsibleSection
import ActivityCard from "./ActivityCard";
import { CalendarDays, Info, MapPin, ListChecks } from "lucide-react"; // Added relevant icons

// Interfaces (can be moved to a shared types file later if needed)
interface Activity {
  id: string;
  description: string;
  title: string;
  cost?: string | null;
  link?: string | null;
  location?: string | null;
  dayNum?: number | null;
}

interface Itinerary {
  id: string;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  location?: string | null;
  activities: Activity[];
}

interface ItineraryCardProps {
  data: Itinerary;
}

const ItineraryCard: React.FC<ItineraryCardProps> = ({ data }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="max-w-3xl mx-auto"> {/* Increased max-width for potentially more content */}
      <Card className="overflow-hidden shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
        <LocationHeader     
          location={data.location || "Itinerary Location"} 
          caption={data.title} // Using itinerary title as the main caption here
          cardId={data.id} // LocationHeader might expect cardId for other functionalities, can be adapted
        />
        
        <div className="p-6 space-y-6">
          {/* Itinerary Details Section */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-700 flex items-center">
                <CalendarDays className="w-5 h-5 mr-2 text-blue-500" />
                Dates
              </h3>
              <p className="text-gray-600 ml-7">
                {formatDate(data.start_date)} - {formatDate(data.end_date)}
              </p>
            </div>

            {data.description && (
              <div>
                <h3 className="text-lg font-semibold text-gray-700 flex items-center">
                  <Info className="w-5 h-5 mr-2 text-green-500" />
                  Description
                </h3>
                <p className="text-gray-600 ml-7 whitespace-pre-line">{data.description}</p>
              </div>
            )}

            {data.location && ( // Display location if available and not just in header
              <div>
                <h3 className="text-lg font-semibold text-gray-700 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-red-500" />
                  Location
                </h3>
                <p className="text-gray-600 ml-7">{data.location}</p>
              </div>
            )}
          </div>

          {/* Activities Section */}
          <CollapsibleSection
            title="Activities"
            count={data.activities.length}
            icon={<ListChecks className="w-5 h-5" />} // Using ListChecks for activities
            accentColor="bg-teal-500" // Teal accent for activities
          >
            <div className="space-y-4 pt-3">
              {data.activities.length > 0 ? (
                data.activities.map((activity) => (
                  <ActivityCard key={activity.id} activity={activity} />
                ))
              ) : (
                <p className="text-gray-500 text-sm">No activities planned for this itinerary yet.</p>
              )}
            </div>
          </CollapsibleSection>
        </div>
      </Card>
    </div>
  );
};

export default ItineraryCard;
