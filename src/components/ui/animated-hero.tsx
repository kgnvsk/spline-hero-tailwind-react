
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { useIsMobile } from "@/hooks/use-mobile";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const isMobile = useIsMobile();
  
  const titles = useMemo(
    () => [
      "Мислить, як людина", 
      "Діє, як машина", 
      "Продає, як профі"
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

  const scrollToDemo = () => {
    const element = document.getElementById('demo-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderTitle = (title: string) => {
    if (isMobile) {
      return title.split('\n').length > 1 
        ? title.split('\n').map((line, lineIdx) => (
            <div key={lineIdx} className="leading-tight">
              {line}
            </div>
          ))
        : title.includes(' ') 
          ? title.split(' ').map((word, idx, arr) => (
              idx === Math.floor(arr.length / 2) ? (
                <React.Fragment key={idx}>
                  {arr.slice(0, idx).join(' ')}<br />{arr.slice(idx).join(' ')}
                </React.Fragment>
              ) : null
            )).filter(Boolean)
          : title;
    }
    return title;
  };

  return (
    <div className="w-full text-white relative z-10 pt-20">
      <div className="container mx-auto px-4">
        <div className="flex gap-8 py-10 lg:py-20 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col text-center max-w-4xl">
            <div className="relative flex w-full justify-center overflow-visible h-16 md:h-20 mb-8">
              {titles.map((title, idx) => (
                <motion.span
                  key={idx}
                  className="absolute font-semibold whitespace-nowrap font-russo heading-white text-2xl md:text-3xl text-center"
                  initial={{ opacity: 0, y: "-100" }}
                  transition={{ type: "spring", stiffness: 50 }}
                  animate={
                    titleNumber === idx
                      ? { y: 0, opacity: 1 }
                      : { y: titleNumber > idx ? -150 : 150, opacity: 0 }
                  }
                >
                  {renderTitle(title)}
                </motion.span>
              ))}
            </div>
            <p className="text-xl md:text-2xl text-white mb-8 font-russo font-bold">
              Підніміть рівень <span className="heading-gradient">продажів</span> і знизьте <span className="heading-gradient">витрати</span> завдяки впровадженню AI-продавця, який не просто відповідає — а <span className="heading-gradient">продає</span>!
            </p>
          </div>
          <div className="flex flex-col gap-3 w-full items-center justify-center">
            <ShimmerButton
              shimmerColor="#fff"
              background="rgba(0,0,0,1)"
              className="text-white dark:text-white font-russo w-full max-w-xs"
              onClick={() => handleTelegramClick("Написати нам")}
            >
              Написати нам <Phone className="w-4 h-4" />
            </ShimmerButton>
            <ShimmerButton
              shimmerColor="#000"
              background="#fff"
              className="text-black font-russo w-full max-w-xs"
              onClick={scrollToDemo}
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
