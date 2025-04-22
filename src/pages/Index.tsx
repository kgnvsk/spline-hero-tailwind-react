import { SplineSceneBasic } from "@/components/SplineHero";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 bg-gray-900">
      <div className="w-full max-w-6xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white text-center">
          3D Interactive Hero Section
        </h1>
        <p className="text-gray-300 mb-8 text-center max-w-2xl mx-auto">
          Powerful 3D scenes with Spline and React. Interact with the scene by moving your cursor over it.
        </p>
        
        <SplineSceneBasic />
        
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            Created with @splinetool/react-spline - For more information, visit <a href="https://spline.design/" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">spline.design</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
