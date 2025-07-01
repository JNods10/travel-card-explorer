import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Briefcase, CalendarCheck, DollarSign, ExternalLink, MapPinIcon, Tag } from "lucide-react"; // Using Briefcase for generic activity, CalendarCheck for day number

// Interface for Activity (can be shared)
interface Activity {
  id: string;
  description: string;
  title: string;
  cost?: string | null;
  link?: string | null;
  location?: string | null;
  dayNum?: number | null;
}

interface ActivityCardProps {
  activity: Activity;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => {
  return (
    <Card className="bg-white/70 backdrop-blur-sm shadow-lg border-gray-200 hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg text-slate-800 flex items-center">
            <Briefcase className="w-5 h-5 mr-2 text-indigo-500" /> 
            {activity.title}
          </CardTitle>
          {activity.dayNum && (
            <div className="flex items-center text-sm text-gray-500 bg-indigo-50 px-2 py-1 rounded-full">
              <CalendarCheck className="w-4 h-4 mr-1 text-indigo-400" />
              Day {activity.dayNum}
            </div>
          )}
        </div>
        {activity.description && (
          <CardDescription className="pt-1 text-sm text-gray-600 whitespace-pre-line">
            {activity.description}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="text-sm text-gray-700 space-y-2 pt-0">
        {activity.location && (
          <div className="flex items-center">
            <MapPinIcon className="w-4 h-4 mr-2 text-red-500" />
            <span>{activity.location}</span>
          </div>
        )}
        {activity.cost && (
          <div className="flex items-center">
            <DollarSign className="w-4 h-4 mr-2 text-green-500" />
            <span>{activity.cost}</span>
          </div>
        )}
        {activity.link && (
          <div className="flex items-center">
            <ExternalLink className="w-4 h-4 mr-2 text-blue-500" />
            <a 
              href={activity.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline hover:text-blue-700"
            >
              More Info / Book
            </a>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ActivityCard;
