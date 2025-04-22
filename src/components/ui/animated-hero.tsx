
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => [
      "24/7 підтримка\nклієнтів", 
      "збільшення\nконверсії", 
      "зниження витрат"
    ],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((prev) =>
        prev === titles.length - 1 ? 0 : prev + 1
      );
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  const handleTelegramClick = (buttonType: string) => {
    console.log(`${buttonType} button clicked`);
    try {
      window.open("https://t.me/vitalii_2get", "_blank", "noopener,noreferrer");
    } catch (error) {
      console.error("Error opening Telegram link:", error);
    }
  };

  return (
    <div className="w-full text-white relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex gap-8 py-10 lg:py-20 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col">
            <h1 className="text-4xl md:text-6xl max-w-2xl tracking-tighter text-center font-russo heading-gradient">
              <span className="text-3xl md:text-4xl block mb-4 font-russo text-neutral-400 tracking-wide">
                АІ менеджер це:
              </span>
              <span className="relative flex w-full justify-center overflow-visible h-16 md:h-24">
                &nbsp;
                {titles.map((title, idx) => (
                  <motion.span
                    key={idx}
                    className="absolute font-semibold whitespace-nowrap font-russo heading-white text-4xl md:text-6xl text-center"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === idx
                        ? { y: 0, opacity: 1 }
                        : { y: titleNumber > idx ? -150 : 150, opacity: 0 }
                    }
                  >
                    {title.split('\n').map((line, lineIdx) => (
                      <div key={lineIdx} className="leading-tight">
                        {line}
                      </div>
                    ))}
                  </motion.span>
                ))}
              </span>
            </h1>
          </div>
          <div className="flex flex-col md:flex-row gap-3 w-full items-center justify-center">
            <ShimmerButton
              shimmerColor="#fff"
              background="rgba(0,0,0,1)"
              className="text-white dark:text-white font-russo w-full max-w-xs mb-3 md:mb-0 md:mr-3"
              onClick={() => handleTelegramClick("Написати нам")}
            >
              Написати нам <Phone className="w-4 h-4" />
            </ShimmerButton>
            <ShimmerButton
              shimmerColor="#000"
              background="#fff"
              className="text-black font-russo w-full max-w-xs"
              onClick={() => handleTelegramClick("Отримати демо")}
            >
              Отримати демо <ArrowRight className="w-4 h-4" />
            </ShimmerButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
