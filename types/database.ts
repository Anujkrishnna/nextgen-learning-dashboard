// types/database.ts
export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  rating: number;
  image_url: string;
  icon_name: string; // Naya judda
  progress: number;   // Naya judda
  created_at: string;
}
