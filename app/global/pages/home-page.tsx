import type { MetaFunction } from "react-router";
import { FlatmatesCard } from "~/features/flatmates/components/flatmates-card";

export const meta: MetaFunction = () => {
  return [
    { title: "Home | Gathery" },
    { name: "description", content: "Welcome to Gathery" },
  ];
};

export default function HomePage() {
  return (
    <div className="px-20">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Rent & Flatmates
          </h2>
          <p className="text-xl font-light text-foreground">
            Find the perfect flatmate or place for your next move.
          </p>
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
          <FlatmatesCard
            id={`flatmateId-${index}`}
            suburb="Suburb"
            description="Flatmate Description"
            commentsCount={2}
            viewsCount={100}
            votesCount={20}
          />
        ))}
      </div>
    </div>
  );
}