import { Outlet } from "react-router-dom";
import { Header, Footer } from "../components";

const PublicLayout = () => {
  return (
    <div className="w-full mx-auto h-full flex flex-col">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default PublicLayout;
