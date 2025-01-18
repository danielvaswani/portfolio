interface EducationCardProps {
  degree: string;
  institution: string;
  location: string;
  time: string;
}

export default function EducationCard({ degree, institution, location, time }: EducationCardProps) {
  return (
    <div className="mb-4">
      <h3 className="text-base font-semibold">{degree}, {institution}, {location}</h3>
      <p className="text-xs text-gray-600">{time}</p>
    </div>
  );
}

