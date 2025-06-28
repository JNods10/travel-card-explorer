
import TravelCard from "@/components/TravelCard";

const Index = () => {
  // Mock data - replace with your actual data fetching logic
  const cardData = {
    id: "123",
    location: "Paris, France",
    caption: "A magical weekend exploring the City of Light! From cozy bistros to rooftop bars with stunning views.",
    restaurants: [
      {
        name: "Le Comptoir du Relais",
        rating: 4.5,
        cuisine: "French Bistro",
        website: "https://example.com"
      },
      {
        name: "L'As du Fallafel",
        rating: 4.7,
        cuisine: "Middle Eastern",
        website: "https://example.com"
      }
    ],
    bars: [
      {
        name: "Hemingway Bar",
        rating: 4.8,
        priceLevel: "$$$",
        website: "https://example.com"
      },
      {
        name: "Le Mary Celeste",
        rating: 4.6,
        priceLevel: "$$",
        website: "https://example.com"
      }
    ],
    hotels: [
      {
        name: "Hotel des Grands Boulevards",
        rating: 4.6,
        priceLevel: "$$$",
        website: "https://example.com"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <TravelCard data={cardData} />
      </div>
    </div>
  );
};

export default Index;
