import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ItineraryCard from "@/components/ItineraryCard";
import {
  Itinerary,
  Activity,
  ApiItineraryResponse,
  ApiActivity,
} from "@/types"; // Import shared interfaces

const ItineraryPage: React.FC = () => {
  const { token } = useParams<{ token: string }>();
  const [itineraryData, setItineraryData] = useState<Itinerary | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItinerary = async () => {
      try {
        // Fetch itinerary data using the token parameter
        const response = await axios.get(
          `https://travel-django-backend.onrender.com/api/itinerary/by-token/${token}/`
        );
        const data: ApiItineraryResponse = response.data;

        console.log(data);

        // Transform the API response to match the Itinerary interface
        // Convert activities_by_day object to flat array
        const activitiesArray: Activity[] = [];
        Object.entries(data.activities_by_day).forEach(
          ([dayNum, activities]) => {
            activities.forEach((act: ApiActivity) => {
              activitiesArray.push({
                id: act.id,
                title: act.title,
                description: act.description,
                cost: act.cost,
                link: act.link,
                location: act.location,
                dayNum: parseInt(dayNum),
              });
            });
          }
        );

        const transformed: Itinerary = {
          id: data.itinerary_id || token || "",
          title: data.title,
          description: data.description,
          start_date: data.start_date,
          end_date: data.end_date,
          location: data.location,
          activities: activitiesArray,
        };

        setItineraryData(transformed);
      } catch (err) {
        console.error("Error fetching itinerary data:", err);
        setItineraryData(null);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchItinerary();
    }
  }, [token]);

  if (loading)
    return (
      <p className="text-center mt-10 text-gray-500">Loading Itinerary...</p>
    );
  if (!itineraryData)
    return (
      <p className="text-center mt-10 text-red-500">Itinerary not found.</p>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50">
      {" "}
      {/* Adjusted gradient */}
      <div className="container mx-auto px-4 py-8">
        <ItineraryCard data={itineraryData} />
      </div>
    </div>
  );
};

export default ItineraryPage;
