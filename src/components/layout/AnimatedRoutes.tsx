import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Suspense, lazy } from 'react';
import Index from '@/pages/Index';
import NotFound from '@/pages/NotFound';

const About = lazy(() => import('@/pages/About'));
const Contact = lazy(() => import('@/pages/Contact'));
const ProjectDetail = lazy(() => import('@/pages/ProjectDetail'));

const pageVariants = {
  initial: {
    opacity: 0,
    x: 100,
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: -50,
  },
};

const pageTransition = {
  type: 'tween' as const,
  ease: 'anticipate' as const,
  duration: 0.4,
};

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <span className="text-muted-foreground">Cargando...</span>
  </div>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="min-h-screen"
      >
        <Routes location={location}>
          <Route path="/" element={<Index />} />
          <Route
            path="/about"
            element={
              <Suspense fallback={<LoadingFallback />}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<LoadingFallback />}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="/project/:slug"
            element={
              <Suspense fallback={<LoadingFallback />}>
                <ProjectDetail />
              </Suspense>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
