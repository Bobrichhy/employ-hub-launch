
import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import JobCard from "@/components/jobs/JobCard";
import JobSearch from "@/components/jobs/JobSearch";
import { mockJobs } from "@/data/mockJobs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useLocation } from "react-router-dom";

const Jobs = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialQuery = queryParams.get("q") || "";
  const initialLocation = queryParams.get("location") || "";

  const [searchParams, setSearchParams] = useState({
    query: initialQuery,
    location: initialLocation,
  });
  
  const [filters, setFilters] = useState({
    jobTypes: [] as string[],
    salary: [0, 200] as [number, number],
    remote: false,
    experience: [] as string[],
  });

  // In a real app, we would filter based on the search parameters
  // For now, we'll just return all mock jobs
  const filteredJobs = mockJobs;

  const handleJobTypeChange = (type: string) => {
    setFilters((prev) => {
      const jobTypes = prev.jobTypes.includes(type)
        ? prev.jobTypes.filter((t) => t !== type)
        : [...prev.jobTypes, type];
      return { ...prev, jobTypes };
    });
  };

  const handleExperienceChange = (level: string) => {
    setFilters((prev) => {
      const experience = prev.experience.includes(level)
        ? prev.experience.filter((e) => e !== level)
        : [...prev.experience, level];
      return { ...prev, experience };
    });
  };

  return (
    <MainLayout>
      <div className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Find Jobs</h1>
          <div className="bg-white p-4 rounded-lg shadow mb-8">
            <JobSearch />
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters */}
            <div className="w-full lg:w-1/4">
              <div className="bg-white p-4 rounded-lg shadow sticky top-20">
                <h2 className="font-semibold text-lg mb-4">Filters</h2>

                <div className="mb-6">
                  <h3 className="font-medium mb-2">Job Type</h3>
                  <div className="space-y-2">
                    {["Full-time", "Part-time", "Contract", "Internship"].map(
                      (type) => (
                        <div key={type} className="flex items-center">
                          <Checkbox
                            id={`job-type-${type}`}
                            checked={filters.jobTypes.includes(type)}
                            onCheckedChange={() => handleJobTypeChange(type)}
                          />
                          <Label
                            htmlFor={`job-type-${type}`}
                            className="ml-2 text-sm"
                          >
                            {type}
                          </Label>
                        </div>
                      )
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-medium mb-2">Salary Range (K)</h3>
                  <div className="px-2">
                    <Slider
                      defaultValue={[0, 200]}
                      max={200}
                      step={10}
                      value={filters.salary}
                      onValueChange={(value) =>
                        setFilters({ ...filters, salary: value as [number, number] })
                      }
                    />
                    <div className="flex justify-between mt-2 text-sm text-gray-600">
                      <span>${filters.salary[0]}K</span>
                      <span>${filters.salary[1]}K+</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center">
                    <Checkbox
                      id="remote"
                      checked={filters.remote}
                      onCheckedChange={(checked) =>
                        setFilters({ ...filters, remote: checked as boolean })
                      }
                    />
                    <Label htmlFor="remote" className="ml-2 text-sm">
                      Remote Only
                    </Label>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-medium mb-2">Experience Level</h3>
                  <div className="space-y-2">
                    {["Entry", "Mid", "Senior", "Executive"].map((level) => (
                      <div key={level} className="flex items-center">
                        <Checkbox
                          id={`experience-${level}`}
                          checked={filters.experience.includes(level)}
                          onCheckedChange={() => handleExperienceChange(level)}
                        />
                        <Label
                          htmlFor={`experience-${level}`}
                          className="ml-2 text-sm"
                        >
                          {level}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() =>
                    setFilters({
                      jobTypes: [],
                      salary: [0, 200],
                      remote: false,
                      experience: [],
                    })
                  }
                >
                  Clear Filters
                </Button>
              </div>
            </div>

            {/* Job Listings */}
            <div className="w-full lg:w-3/4">
              <div className="bg-white p-4 rounded-lg shadow mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Showing {filteredJobs.length} jobs</span>
                  <div className="flex items-center">
                    <Label htmlFor="sort" className="mr-2 text-sm">
                      Sort by:
                    </Label>
                    <select
                      id="sort"
                      className="text-sm border rounded-md py-1 px-2"
                      defaultValue="newest"
                    >
                      <option value="newest">Newest</option>
                      <option value="relevant">Most Relevant</option>
                      <option value="salary-high">Salary (High to Low)</option>
                      <option value="salary-low">Salary (Low to High)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {filteredJobs.length === 0 ? (
                  <div className="bg-white p-8 rounded-lg shadow text-center">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      No jobs found
                    </h3>
                    <p className="text-gray-600">
                      Try adjusting your search or filters to find more results.
                    </p>
                  </div>
                ) : (
                  filteredJobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Jobs;
