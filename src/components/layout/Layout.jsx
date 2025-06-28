import { Outlet } from "react-router-dom";
import { useMinimizeContext } from "../../context/LayoutContext";
import useDeviceDetect from "../../helpers/screens";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Layout = () => {
  const { minimize, setMinimize } = useMinimizeContext();
  const [visibleMinimizeBtn, setVisibleMinimizeBtn] = useState(true);
  const { isMobile } = useDeviceDetect();

  return (
    <div className="flex flex-col h-screen w-full">
      <Header />
      <div className="md:flex flex-1 w-full lg:overflow-hidden">
        {!isMobile && (
          <div
            className="relative h-full overflow-visible flex border border-t-0 bg-[#FCFCFC]"
            onMouseEnter={() => setVisibleMinimizeBtn(true)}
            onMouseLeave={() => setVisibleMinimizeBtn(false)}
          >
            <div
              className={`
              ${
                minimize ? "min-w-[57px] w-[57px]" : "w-[200px]"
              } transition-all duration-500 ease-in-out
              overflow-y-auto
              [&::-webkit-scrollbar]:hidden
              [-ms-overflow-style:'none']
              [scrollbar-width:none]
            `}
            >
              <Sidebar />
            </div>
            {!isMobile && visibleMinimizeBtn && (
              <div
                className="absolute cursor-pointer -right-3 top-[16px] h-[25px] w-[25px] rounded-2xl border bg-white border-gray-200 flex items-center justify-center z-40 transition-all duration-500 ease-in-out"
                style={{
                  left: "100%",
                  transform: "translateX(-50%)",
                }}
                onClick={() => {
                  setMinimize(!minimize);
                }}
              >
                <div>
                  {!minimize && (
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-5"
                    >
                      <path d="M13.293 6.293L7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z" />
                    </svg>
                  )}
                  {minimize && (
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-5"
                    >
                      <path d="M10.707 17.707L16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" />
                    </svg>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
        <div
          className={`${
            minimize ? "w-full" : "w-[calc(100% - 312px)], w-full"
          } bg-[#FCFCFC] md:overflow-y-auto h-full md:h-[calc(100vh - 96px)]`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
