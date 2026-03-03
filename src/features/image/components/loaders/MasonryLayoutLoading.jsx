import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function MasonryLayoutLoading() {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4`">
      {[...Array(8)].map((album, i) => (
        <Card className="w-full max-w-xs gap-4 mb-4" key={i}>
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
