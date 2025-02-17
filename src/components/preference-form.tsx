import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Typography } from "@/components/ui/typography";

interface PreferenceFormProps {
  onSubmit: (preferences: {
    roastLevel: number;
    intensity: number;
    sweetness: number;
  }) => void;
}

export function PreferenceForm({ onSubmit }: PreferenceFormProps) {
  const [preferences, setPreferences] = useState({
    roastLevel: 50,
    intensity: 50,
    sweetness: 50,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(preferences);
  };

  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle>Coffee Preferences</CardTitle>
        <CardDescription>
          Tell us your taste preferences and we'll find your perfect coffee match
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="grid gap-6">
          <div className="grid gap-2">
            <Typography.Small className="font-medium">
              Roast Level
            </Typography.Small>
            <Slider
              value={[preferences.roastLevel]}
              onValueChange={([value]) =>
                setPreferences((prev) => ({ ...prev, roastLevel: value }))
              }
              max={100}
              step={1}
            />
            <div className="flex justify-between">
              <Typography.Small className="text-muted-foreground">Light</Typography.Small>
              <Typography.Small className="text-muted-foreground">Dark</Typography.Small>
            </div>
          </div>

          <div className="grid gap-2">
            <Typography.Small className="font-medium">
              Intensity
            </Typography.Small>
            <Slider
              value={[preferences.intensity]}
              onValueChange={([value]) =>
                setPreferences((prev) => ({ ...prev, intensity: value }))
              }
              max={100}
              step={1}
            />
            <div className="flex justify-between">
              <Typography.Small className="text-muted-foreground">Mild</Typography.Small>
              <Typography.Small className="text-muted-foreground">Strong</Typography.Small>
            </div>
          </div>

          <div className="grid gap-2">
            <Typography.Small className="font-medium">
              Sweetness
            </Typography.Small>
            <Slider
              value={[preferences.sweetness]}
              onValueChange={([value]) =>
                setPreferences((prev) => ({ ...prev, sweetness: value }))
              }
              max={100}
              step={1}
            />
            <div className="flex justify-between">
              <Typography.Small className="text-muted-foreground">Less Sweet</Typography.Small>
              <Typography.Small className="text-muted-foreground">More Sweet</Typography.Small>
            </div>
          </div>

          <Button type="submit" className="w-full">
            Get Recommendations
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}