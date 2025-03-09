import { Link } from "react-router";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/global/components/ui/card";
import { Avatar, AvatarImage } from "~/global/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { Button } from "~/global/components/ui/button";

interface StudymateCardProps {
  id: string;
  title: string;
  author: string;
  authorAvatarUrl: string;
  category: string;
  postedAt: string;
}

export function StudymateCard({
  id,
  title,
  author,
  authorAvatarUrl,
  category,
  postedAt,
}: StudymateCardProps) {
  return (
    <Link to={`/studymates/${id}`}>
      <Card className="bg-transparent hover:bg-card/50 transition-colors">
        <CardHeader className="flex flex-row items-center gap-2">
          <Avatar className="size-14">
            <AvatarFallback>{author[0]}</AvatarFallback>
            {authorAvatarUrl && <AvatarImage src={authorAvatarUrl} />}
          </Avatar>
          <div className="space-y-2">
            <CardTitle>{title}</CardTitle>
            <div className="flex gap-2 text-sm leading-tight text-muted-foreground">
              <span>
                {author} on {category}
              </span>
              <span>·</span>
              <span>{postedAt}</span>
            </div>
          </div>
        </CardHeader>
        <CardFooter className="flex justify-end">
          <Button variant="link" asChild>
            <Link to={`/studymates/${id}`}>Reply &rarr;</Link>
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}