
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { mockJobs } from "@/data/mockJobs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

const JobDetail = () => {
  const { id } = useParams<{ id: string }>();
  const job = mockJobs.find((job) => job.id === id);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Application submitted",
        description: "Your application has been successfully submitted.",
      });
    }, 1500);
  };

  if (!job) {
    return (
      <MainLayout>
        <div className="py-16 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Job Not Found</h1>
          <p className="text-gray-600 mb-8">
            The job you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/jobs">
            <Button>Browse All Jobs</Button>
          </Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white shadow rounded-lg overflow-hidden">
            {/* Job Header */}
            <div className="px-6 py-8 border-b">
              <div className="flex items-start">
                <div className="h-16 w-16 bg-gray-100 rounded-lg flex items-center justify-center mr-6 overflow-hidden">
                  {job.logo ? (
                    <img
                      src={job.logo}
                      alt={`${job.company} logo`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-2xl font-bold text-gray-400">
                      {job.company.charAt(0)}
                    </span>
                  )}
                </div>
                <div className="flex-1">
                  <h1 className="text-2xl font-bold text-gray-900">{job.title}</h1>
                  <div className="flex flex-wrap mt-2 gap-1">
                    <span className="text-gray-600">{job.company}</span>
                    <span className="text-gray-400 mx-2">•</span>
                    <span className="text-gray-600">{job.location}</span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-brand-blue-light text-brand-blue">
                      {job.type}
                    </span>
                    {job.salary && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        {job.salary}
                      </span>
                    )}
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                      Posted {job.posted}
                    </span>
                  </div>
                </div>
                <div className="ml-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>Apply Now</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[500px]">
                      <DialogHeader>
                        <DialogTitle>Apply for {job.title}</DialogTitle>
                        <DialogDescription>
                          Fill out this form to submit your application to {job.company}.
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleApply}>
                        <div className="grid gap-4 py-4">
                          <div className="grid gap-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" required />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" required />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="phone">Phone</Label>
                            <Input id="phone" type="tel" />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="resume">Resume</Label>
                            <Input id="resume" type="file" />
                            <p className="text-xs text-gray-500">
                              PDF, DOCX or TXT files only (Max 5MB)
                            </p>
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="cover">Cover Letter (Optional)</Label>
                            <Textarea id="cover" rows={4} />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Submitting..." : "Submit Application"}
                          </Button>
                        </DialogFooter>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>

            {/* Job Description */}
            <div className="px-6 py-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Job Description</h2>
              <div className="prose max-w-none">
                <p className="mb-4">{job.description}</p>
                <p className="mb-4">
                  We are seeking a talented and motivated {job.title} to join our team at {job.company}. This is an exciting opportunity to work on challenging projects and grow your career in a supportive environment.
                </p>
                <h3 className="text-lg font-semibold mt-6 mb-2">Responsibilities:</h3>
                <ul className="list-disc pl-5 mb-4">
                  <li>Design, develop, and maintain high-quality software solutions</li>
                  <li>Collaborate with cross-functional teams to define and implement new features</li>
                  <li>Write clean, efficient, and well-documented code</li>
                  <li>Participate in code reviews and provide constructive feedback</li>
                  <li>Troubleshoot and resolve complex technical issues</li>
                  <li>Stay up-to-date with industry trends and best practices</li>
                </ul>
                <h3 className="text-lg font-semibold mt-6 mb-2">Requirements:</h3>
                <ul className="list-disc pl-5 mb-4">
                  <li>Bachelor's degree in Computer Science or related field (or equivalent experience)</li>
                  <li>3+ years of professional experience in software development</li>
                  <li>Strong problem-solving skills and attention to detail</li>
                  <li>Excellent communication and teamwork abilities</li>
                  <li>Willingness to learn and adapt to new technologies</li>
                </ul>
                <h3 className="text-lg font-semibold mt-6 mb-2">Benefits:</h3>
                <ul className="list-disc pl-5 mb-4">
                  <li>Competitive salary and benefits package</li>
                  <li>Flexible work arrangements</li>
                  <li>Professional development opportunities</li>
                  <li>Collaborative and inclusive work environment</li>
                </ul>
              </div>
            </div>

            {/* Job Actions */}
            <div className="px-6 py-6 bg-gray-50 flex justify-between items-center">
              <Button variant="outline" asChild>
                <Link to="/jobs">Back to Jobs</Link>
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Apply Now</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle>Apply for {job.title}</DialogTitle>
                    <DialogDescription>
                      Fill out this form to submit your application to {job.company}.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleApply}>
                    <div className="grid gap-4 py-4">
                      <div className="grid gap-2">
                        <Label htmlFor="name-bottom">Full Name</Label>
                        <Input id="name-bottom" required />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="email-bottom">Email</Label>
                        <Input id="email-bottom" type="email" required />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="phone-bottom">Phone</Label>
                        <Input id="phone-bottom" type="tel" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="resume-bottom">Resume</Label>
                        <Input id="resume-bottom" type="file" />
                        <p className="text-xs text-gray-500">
                          PDF, DOCX or TXT files only (Max 5MB)
                        </p>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="cover-bottom">Cover Letter (Optional)</Label>
                        <Textarea id="cover-bottom" rows={4} />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Submit Application"}
                      </Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Similar Jobs */}
          <div className="mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Similar Jobs</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {mockJobs
                .filter((j) => j.id !== job.id)
                .slice(0, 3)
                .map((job) => (
                  <div key={job.id} className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-medium text-brand-blue">
                      <Link to={`/jobs/${job.id}`}>{job.title}</Link>
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">{job.company}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="text-xs text-gray-500">{job.location}</span>
                      <span className="text-xs text-gray-500">{job.type}</span>
                    </div>
                    <div className="mt-4">
                      <Link to={`/jobs/${job.id}`}>
                        <Button variant="outline" size="sm">
                          View Job
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default JobDetail;
