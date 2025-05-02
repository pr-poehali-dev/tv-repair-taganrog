
import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideAd, LucideLoader2 } from "lucide-react";

interface AdvertisementProps {
  type?: "banner" | "sidebar" | "popup";
  placement?: string;
  adId?: string;
  className?: string;
}

export const Advertisement = ({
  type = "banner",
  placement = "main",
  adId = "default-ad",
  className = "",
}: AdvertisementProps) => {
  const adRef = useRef<HTMLDivElement>(null);
  const [adLoaded, setAdLoaded] = useState(false);
  const [adError, setAdError] = useState(false);

  useEffect(() => {
    // Имитация загрузки рекламы
    const loadAd = () => {
      console.log(`Loading advertisement: ${adId} at ${placement}`);
      
      // Имитация асинхронной загрузки рекламы
      const timeoutId = setTimeout(() => {
        if (Math.random() > 0.2) { // 80% шанс успешной загрузки
          setAdLoaded(true);
        } else {
          setAdError(true);
          console.error("Failed to load advertisement");
        }
      }, 1000);

      return () => clearTimeout(timeoutId);
    };

    loadAd();
  }, [adId, placement]);

  // Определение размеров на основе типа рекламы
  const getAdStyles = () => {
    switch (type) {
      case "banner":
        return "w-full h-[90px] md:h-[120px]";
      case "sidebar":
        return "w-full h-[300px]";
      case "popup":
        return "w-[300px] h-[250px]";
      default:
        return "w-full h-[90px]";
    }
  };

  return (
    <Card 
      className={`relative overflow-hidden ${getAdStyles()} ${className}`}
      ref={adRef}
    >
      {/* Метка рекламы */}
      <Badge 
        variant="outline" 
        className="absolute top-2 left-2 z-10 bg-background/80 text-xs"
      >
        <LucideAd className="mr-1 h-3 w-3" /> Реклама
      </Badge>
      
      {adLoaded ? (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-primary/10 to-secondary/10 animate-pulse">
          <div className="text-center p-4">
            <h3 className="font-medium text-primary">Рекламное объявление</h3>
            <p className="text-xs text-muted-foreground mt-1">ID: {adId}</p>
          </div>
        </div>
      ) : adError ? (
        <div className="w-full h-full flex items-center justify-center bg-muted/50">
          <p className="text-sm text-muted-foreground">Не удалось загрузить рекламу</p>
        </div>
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-muted/30 animate-pulse">
          <LucideLoader2 className="w-6 h-6 text-muted-foreground animate-spin" />
        </div>
      )}
    </Card>
  );
};

export default Advertisement;
