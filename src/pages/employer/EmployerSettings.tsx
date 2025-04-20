
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const EmployerSettings = () => {
  // Sample fields. In a real app, these would come from account state/api.
  const [company, setCompany] = useState("TechNova");
  const [email, setEmail] = useState("jennifer@technova.com");
  const [website, setWebsite] = useState("https://technova.com");

  // Demo handler
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Would send request in real app
    alert("Profile updated!");
  }

  return (
    <DashboardLayout title="Account Settings" type="employer">
      <div className="max-w-lg mx-auto bg-white rounded shadow p-8">
        <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>
        <p className="text-muted-foreground mb-6">
          Update your company and profile information here.
        </p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block font-medium mb-1" htmlFor="company">Company Name</label>
            <Input id="company" value={company} onChange={e => setCompany(e.target.value)} required />
          </div>
          <div>
            <label className="block font-medium mb-1" htmlFor="email">Email</label>
            <Input id="email" value={email} onChange={e => setEmail(e.target.value)} required type="email" />
          </div>
          <div>
            <label className="block font-medium mb-1" htmlFor="website">Website</label>
            <Input id="website" value={website} onChange={e => setWebsite(e.target.value)} type="url" />
          </div>
          <Button type="submit" className="w-full mt-2">Update Profile</Button>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default EmployerSettings;
