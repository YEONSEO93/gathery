import { Link, type MetaFunction } from "react-router";
import { FlatmatesCard } from "~/features/flatmates/components/flatmates-card";
import { Button } from "../components/ui/button";
import { Card, CardHeader, CardTitle } from "../components/ui/card";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { StudymateCard } from "~/features/studymates/components/studymate-card";
export const meta: MetaFunction = () => {
  return [
    { title: "Home | Gathery" },
    { name: "description", content: "Welcome to Gathery" },
  ];
};

export default function HomePage() {
  return (
    <div className="px-20 space-y-40">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Flatmates
          </h2>
          <p className="text-xl font-light text-foreground">
            Find your flatmates
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/products/leaderboards">See all the flatemates &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 11 }).map((_, index) => (
          <FlatmatesCard
            key={`flatmate-${index}`}
            id={`flatmateId-${index}`}
            suburb="Flatmate Name"
            description="Flatemate Profile"
            commentsCount={20}
            viewsCount={100}
            votesCount={12}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Studymates
          </h2>
          <p className="text-xl font-light text-foreground">
            Find your studymates
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/community">See all the studymates &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 11 }).map((_, index) => (
          <StudymateCard
            id={`studymateId-${index}`}
            title="Looking for a Frondend developer! Join us!"
            author="Yeonseo"
            authorAvatarUrl="https://github.com/YEONSEO93.png"
            category="Group Project"
            postedAt="1 hours ago"
          />
        ))}
      </div>
    </div>
  );
}