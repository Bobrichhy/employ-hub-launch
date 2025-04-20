
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { mockEmployers } from "@/data/mockUsers";
import { mockJobs } from "@/data/mockJobs";

const Jobs = () => {
  // Simulate fetching the current employer and their jobs
  const employer = mockEmployers[0];
  const jobs = mockJobs.filter(job => employer.jobs.includes(job.id));

  return (
    <DashboardLayout title="My Jobs" type="employer">
      <div className="flex justify-between mb-6">
        <h2 className="text-xl font-semibold">Job Listings</h2>
        <Button asChild>
          <Link to="/employer/post-job">Post New Job</Link>
        </Button>
      </div>
      {jobs.length === 0 ? (
        <p className="text-muted-foreground">You haven't posted any jobs yet.</p>
      ) : (
        <div className="space-y-4">
          {jobs.map(job => (
            <div
              key={job.id}
              className="flex justify-between items-center border-b pb-4"
            >
              <div>
                <Link to={`/jobs/${job.id}`}>
                  <span className="font-medium hover:text-brand-blue">{job.title}</span>
                </Link>
                <div className="text-sm text-muted-foreground">{job.location} • {job.type}</div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <Link to={`/employer/jobs/${job.id}/edit`}>Edit</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link to={`/employer/jobs/${job.id}/applicants`}>Applicants</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </DashboardLayout>
  );
};

export default Jobs;
