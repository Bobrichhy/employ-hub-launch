
import MainLayout from "@/components/layout/MainLayout";
import JobSearch from "@/components/jobs/JobSearch";
import JobCard from "@/components/jobs/JobCard";
import { featuredJobs } from "@/data/mockJobs";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-blue to-brand-purple-dark py-20 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Find Your Dream Job Today
          </h1>
          <p className="text-lg sm:text-xl mb-8 opacity-90">
            Connect with top employers and discover opportunities that match your skills and career goals.
          </p>
          <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg">
            <JobSearch />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6 text-center">
                <dt className="text-sm font-medium text-gray-500 truncate">
                  Active Job Listings
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-brand-blue">
                  1,000+
                </dd>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6 text-center">
                <dt className="text-sm font-medium text-gray-500 truncate">
                  Companies Hiring
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-brand-blue">
                  250+
                </dd>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6 text-center">
                <dt className="text-sm font-medium text-gray-500 truncate">
                  Successful Placements
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-brand-blue">
                  10,000+
                </dd>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Featured Jobs</h2>
            <p className="mt-4 text-lg text-gray-600">
              Discover opportunities from top employers across industries
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredJobs.map((job) => (
              <JobCard key={job.id} job={job} featured={true} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/jobs">
              <Button size="lg">
                View All Jobs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
            <p className="mt-4 text-lg text-gray-600">
              Simple steps to find your next opportunity
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="w-12 h-12 bg-brand-purple-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-brand-purple font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Create Your Profile</h3>
              <p className="text-gray-600">Sign up and build your professional profile to showcase your skills and experience.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="w-12 h-12 bg-brand-purple-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-brand-purple font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Find Relevant Jobs</h3>
              <p className="text-gray-600">Search and filter through thousands of openings to find the perfect match.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="w-12 h-12 bg-brand-purple-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-brand-purple font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Apply & Connect</h3>
              <p className="text-gray-600">Submit applications with just a few clicks and connect directly with employers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-brand-blue rounded-2xl overflow-hidden shadow-xl">
          <div className="px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className="block">Ready to find your next role?</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-white opacity-90">
                Sign up today and start applying to jobs that match your skills and career goals.
              </p>
            </div>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 gap-4">
              <Link to="/signup?type=employee">
                <Button variant="secondary" size="lg">
                  Sign Up as Job Seeker
                </Button>
              </Link>
              <Link to="/signup?type=employer">
                <Button variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white/10">
                  Sign Up as Employer
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;
