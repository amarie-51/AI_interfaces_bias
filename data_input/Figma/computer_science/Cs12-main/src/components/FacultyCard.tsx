import { ImageWithFallback } from './figma/ImageWithFallback';
import { Mail, GraduationCap } from 'lucide-react';

interface FacultyCardProps {
  name: string;
  title: string;
  image: string;
  bio: string;
  email?: string;
  specialization?: string;
}

export function FacultyCard({ name, title, image, bio, email, specialization }: FacultyCardProps) {
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
        <h3 className="text-gray-900 mb-1">{name}</h3>
        <p className="text-blue-600 mb-3">{title}</p>
        {specialization && (
          <div className="flex items-center text-sm text-gray-600 mb-3">
            <GraduationCap size={16} className="mr-2" />
            <span>{specialization}</span>
          </div>
        )}
        <p className="text-sm text-gray-700 mb-4">{bio}</p>
        {email && (
          <a
            href={`mailto:${email}`}
            className="flex items-center text-sm text-blue-600 hover:text-blue-700 transition-colors"
          >
            <Mail size={16} className="mr-2" />
            {email}
          </a>
        )}
      </div>
    </div>
  );
}
