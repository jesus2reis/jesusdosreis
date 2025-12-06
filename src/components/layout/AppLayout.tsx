import Sidebar from './Sidebar';
import AnimatedRoutes from './AnimatedRoutes';

const AppLayout = () => {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 lg:ml-0 pt-16 lg:pt-0 overflow-x-hidden">
        <AnimatedRoutes />
      </main>
    </div>
  );
};

export default AppLayout;
