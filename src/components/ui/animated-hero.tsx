
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["цілодобова підтримка клієнтів", "збільшення конверсії", "зниження витрат"],
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
    <div className="w-full bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col text-center">
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-3xl tracking-tighter font-bold">
              <span className="block">This is something</span>
              <span className="block text-white">smart</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300 mt-4">
              Managing a small business today is already tough. Avoid further complications by ditching outdated, tedious trade methods. Our goal is to streamline SMB trade, making it easier and faster than ever.
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-black text-white border-white hover:bg-white hover:text-black"
            >
              Jump on a call <PhoneCall className="w-4 h-4 ml-2" />
            </Button>
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-gray-200"
            >
              Sign up here <MoveRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };

