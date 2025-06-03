import Content from "../components/Content";
import Topbar from "../components/Topbar";

export default function HomePage() {
  return (
    <>
      <Topbar />
      <h1 className="text-center text-primary my-3">Exchange Rate App</h1>
      <Content />
    </>
  );
}
