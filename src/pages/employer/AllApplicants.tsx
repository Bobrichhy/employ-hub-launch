
import DashboardLayout from "@/components/dashboard/DashboardLayout";

const applicants = [
  { id: "app1", name: "John Smith", job: "Frontend Developer", date: "2 days ago" },
  { id: "app2", name: "Emily Johnson", job: "UI Designer", date: "4 days ago" },
  { id: "app3", name: "Michael Brown", job: "Backend Engineer", date: "1 week ago" },
];

const AllApplicants = () => {
  return (
    <DashboardLayout title="All Applicants" type="employer">
      <div className="space-y-4">
        {applicants.length === 0 ? (
          <p>No applicants found.</p>
        ) : (
          <ul>
            {applicants.map(applicant => (
              <li key={applicant.id} className="border-b py-3">
                <div className="font-medium">{applicant.name}</div>
                <div className="text-sm text-muted-foreground">
                  Applied for {applicant.job} • {applicant.date}
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
