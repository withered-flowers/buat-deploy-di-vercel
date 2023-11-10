import { Outlet } from "react-router-dom";
import CustomFooter from "../components/CustomFooter";
import CustomHeader from "../components/CustomHeader";
import NavBar from "../components/NavBar";

const BaseLayout = () => {
  return (
    <section className="flex min-h-[100dvh] w-full flex-col items-center justify-center gap-4 p-4">
      <NavBar />
      <CustomHeader />
      {/* Bagian Content yang Berubah ubah */}
      <Outlet />
      <CustomFooter />
    </section>
  );
};

export default BaseLayout;
