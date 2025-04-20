
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface DashboardHeaderProps {
  type: "employer" | "employee" | "admin";
}

const DashboardHeader = ({ type }: DashboardHeaderProps) => {
  // This would come from auth context in a real app
  const user = {
    name: type === "employer" ? "Jennifer Chen" : type === "employee" ? "David Park" : "Admin User",
    email: type === "employer" ? "jennifer@technova.com" : type === "employee" ? "david@example.com" : "admin@employhub.com",
    image: "",
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-6">
      <Link to="/" className="flex items-center gap-2 font-semibold">
        <span className="text-xl font-bold text-brand-blue">EmployHub</span>
      </Link>

      <div className="ml-auto flex items-center gap-4">
        {type === "employer" && (
          <Button variant="outline" size="sm" asChild>
            <Link to="/employer/post-job">Post a Job</Link>
          </Button>
        )}
        {type === "employee" && (
          <Button variant="outline" size="sm" asChild>
            <Link to="/jobs">Find Jobs</Link>
          </Button>
        )}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="relative h-8 w-8 rounded-full"
            >
              <Avatar className="h-8 w-8">
                <AvatarImage src={user.image} alt={user.name} />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">{user.name}</p>
                <p className="text-xs leading-none text-muted-foreground">
                  {user.email}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link to={`/${type}/settings`}>
                Settings
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/">
                Sign out
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default DashboardHeader;
