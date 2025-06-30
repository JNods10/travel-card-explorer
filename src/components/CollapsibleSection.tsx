
import { useState, ReactNode } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CollapsibleSectionProps {
  title: string;
  count: number;
  icon: ReactNode;
  accentColor: string;
  children: ReactNode;
}

const CollapsibleSection = ({ 
  title, 
  count, 
  icon, 
  accentColor, 
  children 
}: CollapsibleSectionProps) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="rounded-lg border border-gray-200 bg-white/50 backdrop-blur-sm overflow-hidden shadow-sm">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        variant="ghost"
        className="w-full p-4 flex items-center justify-between hover:bg-gray-50/80 rounded-none"
      >
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-full ${accentColor} text-white`}>
            {icon}
          </div>
          <div className="text-left">
            <h3 className="font-semibold text-gray-900">{title}</h3>
            <p className="text-sm text-gray-500">{count} places</p>
          </div>
        </div>
        
        <div className="transition-transform duration-200 ease-in-out">
          {isOpen ? (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronRight className="w-5 h-5 text-gray-500" />
          )}
        </div>
      </Button>
      
      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
        isOpen ? 'opacity-100 max-h-[calc(100vh-20rem)] overflow-y-auto' : 'max-h-0 opacity-0'
      }`}>
        <div className="p-4 pt-0 border-t border-gray-100">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CollapsibleSection;