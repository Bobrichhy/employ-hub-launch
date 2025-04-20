
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Badge } from "@/components/ui/badge";

const applicants = [
  { id: "app1", name: "John Smith", job: "Frontend Developer", email: "john@email.com", date: "2 days ago", status: "Shortlisted" },
  { id: "app2", name: "Emily Johnson", job: "UI Designer", email: "emily@email.com", date: "4 days ago", status: "Interview" },
  { id: "app3", name: "Michael Brown", job: "Backend Engineer", email: "michael@email.com", date: "1 week ago", status: "Rejected" },
];

const statusMap: Record<string, string> = {
  "Shortlisted": "bg-green-100 text-green-700",
  "Interview": "bg-yellow-100 text-yellow-700",
  "Rejected": "bg-red-100 text-red-700",
};

const AllApplicants = () => {
  return (
    <DashboardLayout title="All Applicants" type="employer">
      <div className="space-y-4">
        {applicants.length === 0 ? (
          <p>No applicants found.</p>
        ) : (
          <ul>
            {applicants.map(applicant => (
              <li key={applicant.id} className="border-b py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="font-medium">{applicant.name} <span className="text-muted-foreground">({applicant.email})</span></div>
                  <div className="text-sm text-muted-foreground">
                    Applied for {applicant.job} • {applicant.date}
                  </div>
                </div>
                <div className="mt-2 sm:mt-0">
                  <span className={`px-2 py-1 rounded font-semibold text-xs ${statusMap[applicant.status] || "bg-gray-200 text-gray-700"}`}>
                    {applicant.status}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </DashboardLayout>
  );
};

export default AllApplicants;
