
'use client'

import { Suspense, lazy, useState, useEffect } from 'react'
const Spline = lazy(() => {
  return new Promise((resolve) => {
    // Add a small delay to ensure the import is properly initialized
    setTimeout(() => {
      import('@splinetool/react-spline')
        .then(module => resolve(module))
        .catch(err => {
          console.error('Failed to load Spline module:', err);
          // Return a fallback component when Spline fails to load
          resolve({ default: () => (
            <div className="w-full h-full flex items-center justify-center bg-black/40 rounded-lg">
              <p className="text-white text-opacity-70">3D scene unavailable</p>
            </div>
          )});
        });
    }, 100);
  });
});

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Reset error state when scene URL changes
    setHasError(false);
  }, [scene]);

  const handleError = () => {
    console.error('Error loading Spline scene:', scene);
    setHasError(true);
  };

  return (
    <Suspense 
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <span className="loader"></span>
        </div>
      }
    >
      {hasError ? (
        <div className="w-full h-full flex items-center justify-center bg-black/40 rounded-lg">
          <p className="text-white text-opacity-70">Не вдалося завантажити 3D модель</p>
        </div>
      ) : (
        <Spline
          scene={scene}
          className={className}
          onError={handleError}
        />
      )}
    </Suspense>
  )
}
