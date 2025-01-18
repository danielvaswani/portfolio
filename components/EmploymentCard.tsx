interface EmploymentCardProps {
  title: string;
  company: string;
  location: string;
  time: string;
  description: string[];
}

export default function EmploymentCard({
  title,
  company,
  location,
  time,
  description,
}: EmploymentCardProps) {
  return (
    <div className="mb-4">
      <h3 className="text-base font-semibold">
        {title}, {company}, {location}
      </h3>
      <p className="text-xs text-gray-600 mb-1">{time}</p>
      {description.map((item) => (
        <p className="text-sm text-gray-700 ml-6">{"‣ " + item}</p>
      ))}
    </div>
  );
}
