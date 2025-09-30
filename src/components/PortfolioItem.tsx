import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface PortfolioItemProps {
  id: number;
  title: string;
  category: string;
  image: string;
}

const PortfolioItem = ({ id, title, category, image }: PortfolioItemProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl">
      <div className="relative w-full h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
        <div className="text-white">
          <span className="text-sm text-indigo-300">{category}</span>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
      </div>
      <div className="absolute inset-0 bg-indigo-600/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <Button variant="secondary" className="flex items-center gap-2">
          View Project <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default PortfolioItem;