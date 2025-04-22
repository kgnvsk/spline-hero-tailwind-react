
'use client'

import { SplineScene } from "@/components/ui/spline-scene";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
 
export function SplineSceneBasic() {
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
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}

