import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import TravelCard from "@/components/TravelCard";
import {
  TravelCardData,
  ApiTravelCardResponse,
  ApiRestaurant,
  ApiBar,
  ApiHotel,
} from "@/types"; // Import shared interfaces

const TravelCardPage: React.FC = () => {
  const { token } = useParams<{ token: string }>();
  const [cardData, setCardData] = useState<TravelCardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCard = async () => {
      try {
        const response = await axios.get(
          `https://travel-django-backend.onrender.com/api/card/by-token/${token}/`
        );
        const data: ApiTravelCardResponse = response.data;

        console.log(data);

        const transformed: TravelCardData = {
          id: token || "",
          location: data.location,
          caption: data.caption,
          restaurants: data.places.restaurants.map((r: ApiRestaurant) => ({
            name: r.name,
            rating: r.rating,
            cuisine: r.cuisine,
            website: r.website || "#",
          })),
          bars: data.places.bars.map((b: ApiBar) => ({
            name: b.name,
            rating: b.rating,
            priceLevel: b.price_level,
            website: b.website || "#",
          })),
          hotels: data.places.hotels.map((h: ApiHotel) => ({
            name: h.name,
            rating: h.rating,
            priceLevel: h.price_level,
            website: h.website || "#",
          })),
        };

        setCardData(transformed);
      } catch (err) {
        console.error("Error fetching travel card:", err);
        setCardData(null); // Clear any previous data if request fails
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchCard();
    }
  }, [token]);

  if (loading)
    return <p className="text-center mt-10 text-gray-500">Loading...</p>;
  if (!cardData)
    return (
      <p className="text-center mt-10 text-red-500">Travel card not found.</p>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <TravelCard data={cardData} />
      </div>
    </div>
  );
};

export default TravelCardPage;
