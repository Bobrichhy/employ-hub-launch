
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { useParams } from "react-router-dom";
import { mockJobs } from "@/data/mockJobs";

const JobApplicants = () => {
  const { jobId } = useParams();
  const job = mockJobs.find(j => j.id === jobId);

  // In a real app, you'd fetch applicants for this job
  const applicants = [
    { id: "app1", name: "John Smith", email: "john@email.com" },
    { id: "app2", name: "Emily Johnson", email: "emily@email.com" },
  ];

  if (!job) {
    return (
      <DashboardLayout title="Applicants" type="employer">
        <div className="p-8 text-center text-red-500">Job not found.</div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout title={`Applicants: ${job.title}`} type="employer">
      <div className="space-y-4">
        {applicants.length === 0 ? (
          <p>No applicants yet for this job.</p>
        ) : (
          <ul>
            {applicants.map(applicant => (
              <li key={applicant.id} className="border-b py-3">
                <span className="font-medium">{applicant.name}</span> - <span className="text-muted-foreground">{applicant.email}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </DashboardLayout>
  );
};

export default JobApplicants;
