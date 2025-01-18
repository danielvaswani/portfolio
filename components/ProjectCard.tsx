import Link from "next/link";

interface ProjectCardProps {
  title: string;
  time: string;
  description: string[];
  printMargin?: boolean;
  link?: string;
}

export default function ProjectCard({
  title,
  time,
  description,
  printMargin = false,
  link,
}: ProjectCardProps) {
  return (
    <div className="mb-4">
      {printMargin && <div className="print:mt-10"></div>}
      {!!link ? (
        <Link href={link} target="_blank">
          <div className="flex items-center">
            <h3 className="text-base font-semibold">{title}</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-4 ml-2 visible print:invisible"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </div>
        </Link>
      ) : (
        <h3 className="text-base font-semibold">{title}</h3>
      )}

      <p className="text-xs text-gray-600 mb-1">{time}</p>
      {description.map((item) => (
        <p className="text-sm text-gray-700 ml-6">{"‣ " + item}</p>
      ))}
    </div>
  );
}
