
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const PostJob = () => {
  return (
    <DashboardLayout title="Post a Job" type="employer">
      <form className="space-y-4 max-w-lg mx-auto bg-white p-8 rounded shadow">
        <div>
          <label className="block font-medium mb-1" htmlFor="title">
            Job Title
          </label>
          <Input id="title" name="title" required />
        </div>
        <div>
          <label className="block font-medium mb-1" htmlFor="location">
            Location
          </label>
          <Input id="location" name="location" required />
        </div>
        <div>
          <label className="block font-medium mb-1" htmlFor="type">
            Type
          </label>
          <Input id="type" name="type" placeholder="Full-time, Part-time, etc." required />
        </div>
        {/* You can add more fields as needed */}
        <Button type="submit" className="w-full mt-4">Post Job</Button>
      </form>
    </DashboardLayout>
  );
};

export default PostJob;
