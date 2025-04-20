
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { useParams } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { mockJobs } from "@/data/mockJobs";

const EditJob = () => {
  const { jobId } = useParams();
  const job = mockJobs.find(j => j.id === jobId);

  if (!job) {
    return (
      <DashboardLayout title="Edit Job" type="employer">
        <div className="p-8 text-center text-red-500">Job not found.</div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout title="Edit Job" type="employer">
      <form className="space-y-4 max-w-lg mx-auto bg-white p-8 rounded shadow">
        <div>
          <label className="block font-medium mb-1" htmlFor="title">
            Job Title
          </label>
          <Input id="title" name="title" defaultValue={job.title} />
        </div>
        <div>
          <label className="block font-medium mb-1" htmlFor="location">
            Location
          </label>
          <Input id="location" name="location" defaultValue={job.location} />
        </div>
        <div>
          <label className="block font-medium mb-1" htmlFor="type">
            Type
          </label>
          <Input id="type" name="type" defaultValue={job.type} />
        </div>
        <Button type="submit" className="w-full mt-4">Save Changes</Button>
      </form>
    </DashboardLayout>
  );
};

export default EditJob;
