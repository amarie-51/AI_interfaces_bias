import { ImageWithFallback } from './figma/ImageWithFallback';
import { Quote } from 'lucide-react';

interface StudentStoryCardProps {
  name: string;
  image: string;
  quote: string;
  year: string;
  major?: string;
}

export function StudentStoryCard({ name, image, quote, year, major = 'Computer Science' }: StudentStoryCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="aspect-square overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <Quote className="text-blue-600 mb-3" size={32} />
        <p className="text-gray-700 mb-4 italic">"{quote}"</p>
        <div className="border-t pt-4">
          <p className="text-gray-900">{name}</p>
          <p className="text-sm text-gray-600">{year} • {major}</p>
        </div>
      </div>
    </div>
  );
}
