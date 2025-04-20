
import DashboardLayout from "@/components/dashboard/DashboardLayout";

const EmployerSettings = () => {
  return (
    <DashboardLayout title="Account Settings" type="employer">
      <div className="max-w-lg mx-auto bg-white rounded shadow p-8">
        <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>
        <p className="text-muted-foreground mb-6">
          Update your company and profile information here.
        </p>
        {/* Settings form goes here */}
        <div className="text-sm text-muted-foreground">This is a placeholder for employer account settings.</div>
      </div>
    </DashboardLayout>
  );
};

export default EmployerSettings;
