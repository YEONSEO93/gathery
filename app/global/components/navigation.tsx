import { Link } from "react-router";
import { Separator } from "~/global/components/ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { cn } from "~/lib/utils";

const menus = [
  {
    name: "Rent & Flatmate",
    to: "/rent-flatmate",
    items: [
      {
        name: "Find a Place",
        description: "Search for rental listings and shared housing",
        to: "/rent-flatmate/find",
      },
      {
        name: "Find a Flatmate",
        description: "Connect with students looking for flatmates",
        to: "/rent-flatmate/flatmates",
      },
      {
        name: "Post a Listing",
        description: "List your place or roommate request",
        to: "/rent-flatmate/post",
      },
    ],
  },
  {
    name: "Jobs",
    to: "/jobs",
    items: [
      {
        name: "Part-Time Jobs",
        description: "Find part-time work opportunities",
        to: "/jobs?type=part-time",
      },
      {
        name: "Internships",
        description: "Find internship opportunities",
        to: "/jobs?type=internship",
      },
      {
        name: "Post a Job",
        description: "Share job openings for students",
        to: "/jobs/post",
      },
    ],
  },
  {
    name: "Study Mate",
    to: "/study-mate",
    items: [
      {
        name: "Find a Study Buddy",
        description: "Connect with students for group study",
        to: "/study-mate/find",
      },
      {
        name: "Join a Study Group",
        description: "Browse and join existing study groups",
        to: "/study-mate/groups",
      },
      {
        name: "Create a Study Group",
        description: "Start a new study group",
        to: "/study-mate/create",
      },
    ],
  },
  {
    name: "Travel & Events",
    to: "/travel-events",
    items: [
      {
        name: "Student-Friendly Restaurants",
        description: "Discover affordable places to eat",
        to: "/travel-events/restaurants",
      },
      {
        name: "Travel Deals & Tips",
        description: "Find budget-friendly travel options",
        to: "/travel-events/travel",
      },
      {
        name: "Local Events",
        description: "Find upcoming student-friendly events",
        to: "/travel-events/events",
      },
      {
        name: "Share Your Experience",
        description: "Post your travel, food, and event recommendations",
        to: "/travel-events/share",
      },
    ],
  },
  {
    name: "Hello GPT",
    to: "/hello-gpt",
  },
];

export default function Navigation() {
  return (
    <nav className="flex px-20 h-16 items-center justify-between backdrop-blur fixed top-0 left-0 right-0 z-50 border-b bg-background/80 supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center">
        <Link to="/" className="font-bold tracking-tighter text-lg">
          Gathery 🐨
        </Link>
        <Separator orientation="vertical" className="h-6 mx-4" />
        <NavigationMenu>
          <NavigationMenuList>
            {menus.map((menu) => (
              <NavigationMenuItem key={menu.name}>
                {menu.items ? (
                  <>
                    <Link to={menu.to}>
                      <NavigationMenuTrigger>{menu.name}</NavigationMenuTrigger>
                    </Link>
                    <NavigationMenuContent>
                      <ul className="grid w-[600px] gap-3 p-4 grid-cols-2 md:w-[500px] lg:w-[600px]">
                        {menu.items?.map((item) => (
                          <NavigationMenuItem
                            key={item.name}
                            className={cn(
                              "select-none rounded-md transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                              item.to === "/products/promote" &&
                                "col-span-2 bg-primary/10 hover:bg-primary/20 focus:bg-primary/20",
                              item.to === "/jobs/submit" &&
                                "col-span-2 bg-primary/10 hover:bg-primary/20 focus:bg-primary/20"
                            )}
                          >
                            <NavigationMenuLink asChild>
                              <Link
                                className="block p-3 space-y-1 leading-none no-underline outline-none"
                                to={item.to}
                              >
                                <span className="text-sm font-medium leading-none text-foreground">
                                  {item.name}
                                </span>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {item.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </NavigationMenuItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link className={navigationMenuTriggerStyle()} to={menu.to}>
                    {menu.name}
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}