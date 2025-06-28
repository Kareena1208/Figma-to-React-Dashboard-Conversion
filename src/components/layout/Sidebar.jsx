import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { sidebarData } from "../../config/sidebarData";
import { useMinimizeContext } from "../../context/LayoutContext";

const Sidebar = () => {
  const navigate = useNavigate();
  const { minimize } = useMinimizeContext();

  return (
    <div className="relative flex flex-col justify-between  h-full bg-white p-[12px]">
      {/* Menu Items */}
      <ul className="space-y-1">
        {sidebarData.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.route}
              className={({ isActive }) =>
                `flex items-center cursor-pointer p-[8px] gap-[8px] rounded-lg ${
                  isActive ? "bg-[#EBF7ED] text-[#008745]" : "hover:bg-gray-100"
                }`
              }
              onClick={(e) => {
                e.preventDefault();
                navigate(item.route);
              }}
            >
              {({ isActive }) => (
                <>
                  <div>
                    <img
                      src={isActive ? item.activeIcon : item.icon}
                      alt={item.label}
                      className="w-[16px] h-[16px] "
                    />{" "}
                  </div>
                  {!minimize && (
                    <span
                      className={`text-xs ${
                        isActive ? "text-[#008745]" : "text-primary"
                      }`}
                    >
                      {item.label}
                    </span>
                  )}
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* User Profile and Badge */}
      <div
        className={`${
          minimize ? "" : "p-[8px]"
        } flex flex-col items-start rounded-lg bg-[#F7F8FA]`}
      >
        <a href="/profile" className="flex items-center gap-[8px] ">
          <button
            className={`${
              minimize ? "w-[30px] h-[30px]" : "w-[40px] h-[40px]"
            } bg-[#008745] rounded-full flex text-sm items-center justify-center text-white font-medium leading-[22px]`}
          >
            A
          </button>
          {!minimize && (
            <div>
              <div className="text-[14px] text-primary">Ajay</div>
              <div className="text-[12px] text-[#979797] capitalize">
                Manager
              </div>
            </div>
          )}
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
