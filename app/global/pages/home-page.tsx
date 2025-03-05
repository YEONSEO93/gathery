import { Button } from "~/global/components/ui/button";

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to Gathery 🐨</h1>
      <p className="text-xl mb-10">
        Gathery is a platform for students to find friends, study partners, and more.
      </p>
      <div className="flex gap-4">
        <Button variant="default">Get Started</Button>
        <Button variant="outline">Learn More</Button>
      </div>
    </main>
  );
}