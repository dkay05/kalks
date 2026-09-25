import { Container, Skeleton } from "@/components/ui";

export default function Loading() {
  return (
    <Container className="section-y space-y-4">
      <Skeleton className="h-10 w-2/3 max-w-md" />
      <Skeleton className="h-5 w-full max-w-2xl" />
      <Skeleton className="h-64 w-full" />
    </Container>
  );
}
