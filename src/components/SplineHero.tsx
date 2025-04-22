
'use client'

import { SplineScene } from "@/components/ui/spline-scene";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { useEffect, useState } from "react";
 
export function SplineSceneBasic() {
  const [isSplineLoaded, setIsSplineLoaded] = useState(true);
  const [retryCount, setRetryCount] = useState(0);
  
  // Spline scene URL
  const sceneUrl = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";
  
  // Fallback when Spline fails to load after retries
  const handleSplineLoadError = () => {
    if (retryCount < 2) {
      setRetryCount(prev => prev + 1);
    } else {
      setIsSplineLoaded(false);
    }
  };
  
  useEffect(() => {
    // Reset load status when component mounts or retries
    setIsSplineLoaded(true);
  }, [retryCount]);

  return (
    <Card className="w-full h-screen bg-black/[0.96] relative overflow-hidden border-none rounded-none">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="flex h-full flex-col md:flex-row">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-playfair heading-gradient heading-shadow">
            AI Sales Manager & Consultant
          </h1>
          <p className="mt-4 text-neutral-300 max-w-lg font-sans">
            Забезпечте ефективну комунікації з потенційними та існуючими клієнтами через канали прямого спілкування (Інстаграм, Facebook, Telegram, Сайт тощо), конвертацію звернень у продажі та розвиток довгострокових відносин з клієнтами, а також зменшіть витрати на працівників.
          </p>
        </div>

        {/* Right content */}
        <div className="flex-1 relative md:h-auto h-[300px]">
          {isSplineLoaded ? (
            <SplineScene 
              scene={sceneUrl}
              className="w-full h-full"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-purple-900/30 to-blue-900/30 backdrop-blur-sm rounded-lg">
              <div className="text-center p-6">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-50 animate-pulse"></div>
                <p className="text-white text-lg font-bold mb-2">3D візуалізація недоступна</p>
                <p className="text-white/70 text-sm">Використовується альтернативний дизайн</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  )
}
