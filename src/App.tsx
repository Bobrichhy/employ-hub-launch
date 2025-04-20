
// Import other modules the same
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs"; // general jobs listing page
import JobDetail from "./pages/JobDetail";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import EmployerDashboard from "./pages/employer/EmployerDashboard";
import EmployeeDashboard from "./pages/employee/EmployeeDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import NotFound from "./pages/NotFound";
// Rename employer jobs import alias to EmployerJobs to avoid name conflict
import EmployerJobs from "./pages/employer/Jobs";
import PostJob from "./pages/employer/PostJob";
import EditJob from "./pages/employer/EditJob";
import JobApplicants from "./pages/employer/JobApplicants";
import AllApplicants from "./pages/employer/AllApplicants";
import EmployerSettings from "./pages/employer/EmployerSettings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/:id" element={<JobDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          {/* Employer Routes */}
          <Route path="/employer/dashboard" element={<EmployerDashboard />} />
          {/* Updated to use EmployerJobs */}
          <Route path="/employer/jobs" element={<EmployerJobs />} />
          <Route path="/employer/post-job" element={<PostJob />} />
          <Route path="/employer/jobs/:jobId/edit" element={<EditJob />} />
          <Route path="/employer/jobs/:jobId/applicants" element={<JobApplicants />} />
          <Route path="/employer/applicants" element={<AllApplicants />} />
          <Route path="/employer/settings" element={<EmployerSettings />} />
          
          {/* Employee Routes */}
          <Route path="/employee/dashboard" element={<EmployeeDashboard />} />
          
          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
