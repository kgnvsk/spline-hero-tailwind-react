
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["24/7 підтримка клієнтів", "збільшення конверсії", "зниження витрат"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full text-white relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex gap-8 py-10 lg:py-20 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col">
            <h1 className="text-4xl md:text-6xl max-w-2xl tracking-tighter text-center font-playfair heading-gradient heading-shadow">
              <span className="text-3xl md:text-4xl block mb-4 font-playfair">АІ менеджер це:</span>
              <span className="relative flex w-full justify-center overflow-visible h-16 md:h-24">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold whitespace-nowrap font-playfair"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>
          </div>
          <div className="flex flex-row gap-3">
            {/* Чёрная кнопка слева */}
            <ShimmerButton
              shimmerColor="#fff"
              background="rgba(0,0,0,1)"
              className="text-white dark:text-white"
            >
              Написати нам <PhoneCall className="w-4 h-4" />
            </ShimmerButton>
            {/* Белая кнопка справа */}
            <ShimmerButton
              shimmerColor="#000"
              background="#fff"
              className="text-black"
            >
              Отримати демо <MoveRight className="w-4 h-4" />
            </ShimmerButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
