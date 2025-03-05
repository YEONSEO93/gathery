import { Link } from "react-router";
import { Separator } from "~/global/components/ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

const menus = [
  {
    name: "Rent & Flatmate",
    to: "/rent-roommate",
    items: [
      {
        name: "Find a Place",
        description: "Search for rental listings and shared housing",
        to: "/rent-roommate/find",
      },
      {
        name: "Find a Flatmate",
        description: "Connect with students looking for flatmates",
        to: "/rent-roommate/flatmates",
      },
      {
        name: "Post a Listing",
        description: "List your place or roommate request",
        to: "/rent-roommate/post",
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
    name: "Travel & Restaurant",
    to: "/travel-restaurant",
    items: [
      {
        name: "Student-Friendly Restaurants",
        description: "Discover affordable places to eat",
        to: "/travel-restaurant/restaurants",
      },
      {
        name: "Travel Deals & Tips",
        description: "Find budget-friendly travel options",
        to: "/travel-restaurant/travel",
      },
      {
        name: "Share Your Experience",
        description: "Post your travel and food recommendations",
        to: "/travel-restaurant/share",
      },
    ],
  },
];



export default function Navigation() {
  return (
    <nav className="flex px-20 h-16 items-center justify-between backdrop-blur fixed top-0 left-0 right-0 z-50 bg-background/50">
      <div className="flex items-center">
        <Link to="/" className="font-bold tracking-tighter text-lg">
          Gathery 🐨
        </Link>
        <Separator orientation="vertical" className="h-6 mx-4" />
        <NavigationMenu>
          <NavigationMenuList>
            {menus.map((menu) => (
              <NavigationMenuItem key={menu.name}>
                <NavigationMenuTrigger>{menu.name}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  {menu.items?.map((item) => (
                    <NavigationMenuItem key={item.name}>
                      <Link to={item.to}>{item.name}</Link>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}