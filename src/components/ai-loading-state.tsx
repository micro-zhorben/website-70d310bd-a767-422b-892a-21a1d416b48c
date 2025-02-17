import { Coffee } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";

export function AiLoadingState() {
  return (
    <Card className="w-full max-w-lg">
      <CardContent className="grid place-items-center gap-4 p-6">
        <div className="animate-pulse">
          <Coffee className="h-12 w-12 text-primary" />
        </div>
        <div className="text-center">
          <Typography.H3>Brewing Your Perfect Match</Typography.H3>
          <Typography.P className="text-muted-foreground">
            Our AI is analyzing your preferences to find the ideal coffee for you...
          </Typography.P>
        </div>
        <div className="h-2 w-full max-w-[200px] animate-pulse rounded-full bg-primary/20" />
      </CardContent>
    </Card>
  );
}