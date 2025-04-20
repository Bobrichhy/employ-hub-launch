
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const PostJob = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [salary, setSalary] = useState("");
  const [description, setDescription] = useState("");
  const [postingStatus, setPostingStatus] = useState<null | string>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Example validation
    if (!title || !location || !type) {
      setPostingStatus("Please fill in all required fields.");
      return;
    }
    // Would send POST to server in real app
    setPostingStatus("Job posted successfully!");
    setTitle(""); setLocation(""); setType(""); setSalary(""); setDescription("");
  }

  return (
    <DashboardLayout title="Post a Job" type="employer">
      <form className="space-y-4 max-w-lg mx-auto bg-white p-8 rounded shadow" onSubmit={handleSubmit}>
        <div>
          <label className="block font-medium mb-1" htmlFor="title">
            Job Title <span className="text-red-500">*</span>
          </label>
          <Input id="title" name="title" value={title} onChange={e => setTitle(e.target.value)} required />
        </div>
        <div>
          <label className="block font-medium mb-1" htmlFor="location">
            Location <span className="text-red-500">*</span>
          </label>
          <Input id="location" name="location" value={location} onChange={e => setLocation(e.target.value)} required />
        </div>
        <div>
          <label className="block font-medium mb-1" htmlFor="type">
            Type <span className="text-red-500">*</span>
          </label>
          <Input id="type" name="type" placeholder="Full-time, Part-time, etc." value={type} onChange={e => setType(e.target.value)} required />
        </div>
        <div>
          <label className="block font-medium mb-1" htmlFor="salary">
            Salary Range
          </label>
          <Input id="salary" name="salary" placeholder="e.g. $60,000 - $90,000" value={salary} onChange={e => setSalary(e.target.value)} />
        </div>
        <div>
          <label className="block font-medium mb-1" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="w-full border rounded px-3 py-2"
            rows={4}
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>
        <Button type="submit" className="w-full mt-4">Post Job</Button>
        {postingStatus && (
          <p className="mt-2 text-center text-sm text-green-600">{postingStatus}</p>
        )}
      </form>
    </DashboardLayout>
  );
};

export default PostJob;
