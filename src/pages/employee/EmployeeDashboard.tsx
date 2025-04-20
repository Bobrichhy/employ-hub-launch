
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { mockJobs } from "@/data/mockJobs";
import { mockEmployees } from "@/data/mockUsers";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const EmployeeDashboard = () => {
  // In a real app, we would fetch the employee data based on authentication
  const employee = mockEmployees[0];
  
  // Get jobs this employee has applied to
  const appliedJobs = mockJobs.filter(job => 
    employee.applications.includes(job.id)
  );
  
  // Recommended jobs based on employee skills
  const recommendedJobs = mockJobs
    .filter(job => !employee.applications.includes(job.id))
    .slice(0, 3);
  
  const totalApplications = appliedJobs.length;
  const profileCompleteness = 85; // This would be calculated in a real app
  
  return (
    <DashboardLayout title="Dashboard" type="employee">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Applications
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
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalApplications}</div>
            <p className="text-xs text-muted-foreground">
              {totalApplications > 0 ? "+1 this week" : "No applications yet"}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Profile Completeness
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
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{profileCompleteness}%</div>
            <div className="mt-2 h-2 w-full bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-brand-blue rounded-full"
                style={{ width: `${profileCompleteness}%` }}
              ></div>
            </div>
            {profileCompleteness < 100 && (
              <Link
                to="/employee/profile"
                className="text-xs text-brand-blue hover:underline mt-1 inline-block"
              >
                Complete your profile
              </Link>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Saved Jobs
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
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">
              Save jobs you're interested in
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Profile Views
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
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              +3 from last week
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-4">
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Your Applications</CardTitle>
          </CardHeader>
          <CardContent>
            {appliedJobs.length === 0 ? (
              <div className="text-center py-4">
                <p className="text-muted-foreground mb-4">
                  You haven't applied to any jobs yet.
                </p>
                <Button asChild>
                  <Link to="/jobs">Browse Jobs</Link>
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {appliedJobs.map((job) => (
                  <div
                    key={job.id}
                    className="flex items-center justify-between border-b pb-4"
                  >
                    <div>
                      <Link to={`/jobs/${job.id}`}>
                        <p className="font-medium hover:text-brand-blue">{job.title}</p>
                      </Link>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>{job.company}</span>
                        <span>•</span>
                        <span>{job.location}</span>
                      </div>
                    </div>
                    <Badge>Applied</Badge>
                  </div>
                ))}

                <div className="flex justify-center mt-4">
                  <Button variant="outline" asChild>
                    <Link to="/employee/applications">View All Applications</Link>
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Recommended Jobs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recommendedJobs.map((job) => (
                <div
                  key={job.id}
                  className="flex items-center justify-between border-b pb-4"
                >
                  <div>
                    <Link to={`/jobs/${job.id}`}>
                      <p className="font-medium hover:text-brand-blue">{job.title}</p>
                    </Link>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{job.company}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                      <span>•</span>
                      <span>{job.type}</span>
                    </div>
                    {job.salary && (
                      <p className="text-sm text-green-600 mt-1">{job.salary}</p>
                    )}
                  </div>
                  <Button size="sm" asChild>
                    <Link to={`/jobs/${job.id}`}>View</Link>
                  </Button>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-4">
              <Button variant="outline" asChild>
                <Link to="/jobs">Browse All Jobs</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Skills & Experience</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h3 className="font-semibold mb-2">Your Skills</h3>
              <div className="flex flex-wrap gap-2">
                {employee.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
              <div className="mt-4">
                <Link
                  to="/employee/profile"
                  className="text-sm text-brand-blue hover:underline"
                >
                  Update your skills
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Latest Experience</h3>
              {employee.experience[0] && (
                <div>
                  <p className="font-medium">{employee.experience[0].title}</p>
                  <p className="text-sm text-muted-foreground">
                    {employee.experience[0].company}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {employee.experience[0].startDate} -{" "}
                    {employee.experience[0].endDate || "Present"}
                  </p>
                </div>
              )}
              <div className="mt-4">
                <Link
                  to="/employee/profile"
                  className="text-sm text-brand-blue hover:underline"
                >
                  Update your experience
                </Link>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default EmployeeDashboard;
