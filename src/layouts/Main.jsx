// react-router-dom imports
import { Outlet, useLoaderData } from "react-router-dom";

// assets imports
import wave from "../assets/wave.svg";

// components imports
import Nav from "../components/Nav";

//  helper functions
import { fetchData } from "../helpers";

// loader functions
export function mainLoader() {
  const userName = fetchData("userName");
  return { userName };
}

const Main = () => {
  const { userName } = useLoaderData();

  return (
    <div className="layout">
      <Nav userName={userName} />
      <main>
        <Outlet />
      </main>
      <img src={wave} alt="wave" />
    </div>
  );
};
export default Main;
