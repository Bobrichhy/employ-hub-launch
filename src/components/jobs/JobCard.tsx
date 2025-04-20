
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from "react-router-dom";

export interface JobData {
  id: string;
  title: string;
  company: string;
  location: string;
  salary?: string;
  type: string;
  posted: string;
  logo?: string;
  description: string;
}

interface JobCardProps {
  job: JobData;
  featured?: boolean;
}

const JobCard = ({ job, featured = false }: JobCardProps) => {
  return (
    <Card className={`overflow-hidden transition-all hover:shadow-md ${featured ? "border-brand-purple border-2" : ""}`}>
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden">
            {job.logo ? (
              <img src={job.logo} alt={`${job.company} logo`} className="w-full h-full object-cover" />
            ) : (
              <span className="text-lg font-bold text-gray-400">{job.company.charAt(0)}</span>
            )}
          </div>
          <div className="flex-grow min-w-0">
            <Link to={`/jobs/${job.id}`}>
              <h3 className="text-lg font-medium text-brand-blue hover:text-brand-blue-dark truncate">
                {job.title}
              </h3>
            </Link>
            <p className="text-sm text-gray-500">{job.company}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-blue-light text-brand-blue">
                {job.location}
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-purple-light text-brand-purple">
                {job.type}
              </span>
              {job.salary && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {job.salary}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-600 line-clamp-2">{job.description}</p>
        </div>
      </CardContent>
      <CardFooter className="bg-gray-50 px-6 py-3 flex justify-between items-center">
        <span className="text-xs text-gray-500">Posted {job.posted}</span>
        <Link to={`/jobs/${job.id}`}>
          <Button variant="outline" size="sm">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default JobCard;
