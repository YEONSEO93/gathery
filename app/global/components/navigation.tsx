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
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  BarChart3Icon,
  BellIcon,
  LogOutIcon,
  MessageCircleIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react";


const menus = [
  {
    name: "Rent & Flatmates",
    to: "/rent-flatmates",
    items: [
      {
        name: "Find a Place",
        description: "Search for rental listings and shared housing",
        to: "/rent-flatmates/find",
      },
      {
        name: "Find a Flatmate",
        description: "Connect with students looking for flatmates",
        to: "/rent-flatmates/flatmates",
      },
      {
        name: "Post a Listing",
        description: "List your place or roommate request",
        to: "/rent-flatmates/post",
      },
    ],
  },
  {
    name: "Study Mates",
    to: "/study-mates",
    items: [
      {
        name: "Find a Study Buddy",
        description: "Connect with students for group study",
        to: "/study-mates/find",
      },
      {
        name: "Join a Study Group",
        description: "Browse and join existing study groups",
        to: "/study-mates/groups",
      },
      {
        name: "Create a Study Group",
        description: "Start a new study group",
        to: "/study-mates/create",
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
    name: "Travel & Events",
    to: "/travel-events",
    items: [
      {
        name: "Trip Mates",
        description: "Find and connect with travel buddies",
        to: "/travel-events/trip-mates",
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

export default function Navigation({ isLoggedIn, hasNotifications, hasMessages }: {isLoggedIn: boolean, hasNotifications: boolean, hasMessages: boolean}) {
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
                              item.to === "/rent-flatmate/post" &&
                                "col-span-2 bg-primary/10 hover:bg-primary/20 focus:bg-primary/20",
                              item.to === "/jobs/post" &&
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
      {isLoggedIn ? (
        <div className="flex items-center gap-4">
          <Button size="icon" variant="ghost" asChild className="relative">
            <Link to="/my/notifications">
              <BellIcon className="size-4" />
              {hasNotifications && (
                <div className="absolute top-1.5 right-1.5 size-2 bg-primary rounded-full" />
              )}
            </Link>
          </Button>
          <Button size="icon" variant="ghost" asChild className="relative">
            <Link to="/my/messages">
              <MessageCircleIcon className="size-4" />
              {hasMessages && (
                <div className="absolute top-1.5 right-1.5 size-2 bg-primary rounded-full" />
              )}
            </Link>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar>
                <AvatarImage src="https://github.com/YEONSEO93.png" />
                <AvatarFallback>img</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel className="flex flex-col">
                <span className="font-medium">User Name</span>
                <span className="text-xs text-muted-foreground">@username</span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link to="/my/dashboard">
                    <BarChart3Icon className="size-4 mr-2" />
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link to="/my/profile">
                    <UserIcon className="size-4 mr-2" />
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link to="/my/settings">
                    <SettingsIcon className="size-4 mr-2" />
                    Settings
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild className="cursor-pointer">
                <Link to="/auth/logout">
                  <LogOutIcon className="size-4 mr-2" />
                  Logout
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <Button asChild variant="secondary">
            <Link to="/auth/login">Login</Link>
          </Button>
          <Button asChild>
            <Link to="/auth/join">Join</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}