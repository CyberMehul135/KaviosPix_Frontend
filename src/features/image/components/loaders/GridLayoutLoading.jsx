import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function GridLayoutLoading() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {[...Array(8)].map((album, i) => (
        <Card className="w-full max-w-xs gap-4" key={i}>
          <CardContent>
            <Skeleton className="aspect-video w-full" />
          </CardContent>
          <CardHeader>
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-4 w-2/2" />
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
