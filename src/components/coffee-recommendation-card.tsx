import { Coffee } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

interface CoffeeRecommendationProps {
  title: string;
  description: string;
  roastLevel: string;
  origin: string;
  onTryNow?: () => void;
}

export function CoffeeRecommendationCard({
  title,
  description,
  roastLevel,
  origin,
  onTryNow,
}: CoffeeRecommendationProps) {
  return (
    <Card className="w-full transition-all hover:shadow-lg">
      <CardHeader>
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-primary/10 p-3">
            <Coffee className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Typography.P>{description}</Typography.P>
        
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <Typography.Small className="text-muted-foreground">
              Roast Level
            </Typography.Small>
            <Typography.Small className="font-medium">{roastLevel}</Typography.Small>
          </div>
          
          <div className="flex items-center justify-between">
            <Typography.Small className="text-muted-foreground">
              Origin
            </Typography.Small>
            <Typography.Small className="font-medium">{origin}</Typography.Small>
          </div>
        </div>

        <Button 
          className="w-full"
          onClick={onTryNow}
        >
          Try Now
        </Button>
      </CardContent>
    </Card>
  );
}