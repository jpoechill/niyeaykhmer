import LeftSideBar from "@/app/components/LeftSideBar";
import RightSideBar from "@/app/components/RightSideBar";
import GetCreds from "@/app/getcreds/getCreds"
import Body from "./Body"

export default function App() {
  return (
    <main className="h-full scroll-smooth">
      <div className="group/all flex bg-white h-full justify-between w-full lg:w-[calc(100%-300px)]">
        <GetCreds />
        <LeftSideBar></LeftSideBar>
        <Body />
      </div >
    </main >
  );
}
