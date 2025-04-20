
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { mockJobs } from "@/data/mockJobs";
import { mockEmployers } from "@/data/mockUsers";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const EmployerDashboard = () => {
  // In a real app, we would fetch the employer data based on authentication
  const employer = mockEmployers[0];
  
  // Get jobs for this employer
  const employerJobs = mockJobs.filter(job => 
    employer.jobs.includes(job.id)
  );
  
  const activeJobs = employerJobs.length;
  const totalApplicants = 24; // This would be calculated in a real app
  const viewsThisWeek = 186; // This would be calculated in a real app
  
  // Recent applicants would be fetched in a real app
  const recentApplicants = [
    { id: "app1", name: "John Smith", job: employerJobs[0], date: "2 days ago" },
    { id: "app2", name: "Emily Johnson", job: employerJobs[0], date: "3 days ago" },
    { id: "app3", name: "Michael Brown", job: employerJobs[1], date: "1 week ago" },
  ];

  return (
    <DashboardLayout title="Dashboard" type="employer">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Jobs
            </CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeJobs}</div>
            <p className="text-xs text-muted-foreground">
              +2 since last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Applicants
            </CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalApplicants}</div>
            <p className="text-xs text-muted-foreground">
              +8 since last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Job Views</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{viewsThisWeek}</div>
            <p className="text-xs text-muted-foreground">
              +35 from last week
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Conversion Rate
            </CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12.9%</div>
            <p className="text-xs text-muted-foreground">
              +2.1% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-4">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Active Job Postings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {employerJobs.length === 0 ? (
                <div className="text-center py-4">
                  <p className="text-muted-foreground mb-4">
                    You haven't posted any jobs yet.
                  </p>
                  <Button asChild>
                    <Link to="/employer/post-job">Post Your First Job</Link>
                  </Button>
                </div>
              ) : (
                employerJobs.map((job) => (
                  <div
                    key={job.id}
                    className="flex items-center justify-between border-b pb-4"
                  >
                    <div>
                      <Link to={`/jobs/${job.id}`}>
                        <p className="font-medium hover:text-brand-blue">{job.title}</p>
                      </Link>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>{job.location}</span>
                        <span>•</span>
                        <span>{job.type}</span>
                        <span>•</span>
                        <span>Posted {job.posted}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link to={`/employer/jobs/${job.id}/edit`}>Edit</Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <Link to={`/employer/jobs/${job.id}/applicants`}>
                          View Applicants
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {employerJobs.length > 0 && (
              <div className="flex justify-center mt-4">
                <Button variant="outline" asChild>
                  <Link to="/employer/jobs">View All Jobs</Link>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Recent Applicants</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentApplicants.map((applicant) => (
                <div
                  key={applicant.id}
                  className="flex items-center justify-between border-b pb-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                      <span className="text-gray-500 font-medium">
                        {applicant.name[0]}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium">{applicant.name}</p>
                      <p className="text-sm text-muted-foreground">
                        Applied to {applicant.job.title}
                      </p>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {applicant.date}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-4">
              <Button variant="outline" asChild>
                <Link to="/employer/applicants">View All Applicants</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default EmployerDashboard;
