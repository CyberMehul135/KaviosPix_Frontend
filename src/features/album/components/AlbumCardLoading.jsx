import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function AlbumCardLoading() {
  return (
    <div className="grid gap-3 grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
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
