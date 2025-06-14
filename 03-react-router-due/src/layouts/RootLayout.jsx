import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <Header />
      <div className="outlet-container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
