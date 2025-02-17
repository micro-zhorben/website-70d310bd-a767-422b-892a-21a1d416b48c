import { useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { Typography } from "@/components/ui/typography";
import { PreferenceForm } from "@/components/preference-form";
import { AiLoadingState } from "@/components/ai-loading-state";
import { CoffeeRecommendationCard } from "@/components/coffee-recommendation-card";
import { Coffee } from "lucide-react";

export function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<{
    title: string;
    description: string;
    roastLevel: string;
    origin: string;
  } | null>(null);

  const handlePreferenceSubmit = async (preferences: {
    roastLevel: number;
    intensity: number;
    sweetness: number;
  }) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Mock recommendation based on preferences
    const mockRecommendation = {
      title: "Ethiopian Yirgacheffe",
      description: "A bright and complex coffee with floral notes and citrus undertones. Perfect for those who enjoy a lighter, more nuanced cup.",
      roastLevel: "Light-Medium",
      origin: "Ethiopia",
    };

    setRecommendation(mockRecommendation);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-background p-6">
      {/* Header */}
      <header className="mb-12">
        <nav className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Coffee className="h-6 w-6 text-primary" />
            <Typography.Large>CoffeeAI</Typography.Large>
          </div>
          <ModeToggle />
        </nav>
        <div className="mx-auto max-w-2xl text-center">
          <Typography.H1 className="mb-4">
            Find Your Perfect Coffee Match
          </Typography.H1>
          <Typography.Lead>
            Tell us your preferences, and our AI will recommend the perfect coffee for you.
            Experience a personalized journey to your ideal cup.
          </Typography.Lead>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto grid max-w-4xl gap-8">
        {!recommendation && !isLoading && (
          <div className="grid place-items-center">
            <PreferenceForm onSubmit={handlePreferenceSubmit} />
          </div>
        )}

        {isLoading && (
          <div className="grid place-items-center">
            <AiLoadingState />
          </div>
        )}

        {recommendation && !isLoading && (
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <Typography.H2>Your Perfect Match</Typography.H2>
              <Typography.P>
                Based on your preferences, we've found a coffee that we think you'll love.
                This recommendation takes into account your desired roast level, intensity,
                and sweetness preferences.
              </Typography.P>
            </div>
            <CoffeeRecommendationCard
              title={recommendation.title}
              description={recommendation.description}
              roastLevel={recommendation.roastLevel}
              origin={recommendation.origin}
              onTryNow={() => {
                // Handle the "Try Now" action
                console.log("Try Now clicked");
              }}
            />
          </div>
        )}
      </main>
    </div>
  );
}