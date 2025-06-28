import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const [showCalendar, setShowCalendar] = useState(false);
  const [showOutletDropdown, setShowOutletDropdown] = useState(false);
  const currentDate = new Date("2025-06-28T14:23:00+05:30"); // 02:23 PM IST, June 28, 2025
  const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const outlets = ["Outlet name", "Outlet 1", "Outlet 2", "Outlet 3"];

  const renderCalendar = () => {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const calendarDays = [];
    for (let i = 0; i < firstDay; i++) {
      calendarDays.push(<div key={`empty-${i}`} className="p-1"></div>);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday =
        day === currentDate.getDate() &&
        month === currentDate.getMonth() &&
        year === currentDate.getFullYear();
      calendarDays.push(
        <div
          key={day}
          className={`p-1 hover:bg-gray-100 rounded ${
            isToday ? "bg-blue-200" : ""
          }`}
        >
          {day}
        </div>
      );
    }

    return (
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <button className="text-gray-500 hover:text-gray-700">{`<`}</button>
          <span className="text-lg font-semibold">
            {currentDate.toLocaleString("default", {
              month: "long",
              year: "numeric",
            })}
          </span>
          <button className="text-gray-500 hover:text-gray-700">{">"}</button>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center">
          {days.map((day) => (
            <div key={day} className="font-semibold">
              {day}
            </div>
          ))}
          {calendarDays}
        </div>
      </div>
    );
  };

  const renderOutletDropdown = () => {
    return (
      <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
        {outlets.map((outlet, index) => (
          <div
            key={index}
            className="p-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => setShowOutletDropdown(false)}
          >
            {outlet}
          </div>
        ))}
      </div>
    );
  };
  return (
    <nav className="w-full flex flex-row  items-center z-50 border-b border-[#EBEBEB] bg-white p-[12px] pr-[24px]">
      <div className="flex items-center w-[188px]">
        <img
          src="../assets/logos/pet_pooja_task.svg"
          className="h-[32px] w-[85.74px] cursor-pointer"
          onClick={() => navigate("/")}
          alt="Home"
        />
      </div>

      <div className="pl-[24px] flex justify-between items-center flex-1">
        <div className="flex gap-1 items-center">
          <img
            src="../assets/icons/home.svg"
            onClick={() => navigate("/")}
            alt="Home"
            className="w-[16px] h-[16px]"
          />
          <span className="text-primary text-xs"> Home</span>
        </div>
        <div className="flex items-center gap-[12px] mt-4 md:mt-0">
          <div className=" hover:bg-gray-100 p-2 rounded cursor-pointer">
            <img src="/assets/icons/AutoReview.svg" alt="Auto Review" className="w-[16px] h-[16px]"/>
          </div>
          <div className=" hover:bg-gray-100 p-2 rounded cursor-pointer">
            <img src="/assets/icons/bell.svg" alt="notification" className="w-[16px] h-[16px]" />
          </div>
          <div className="relative">
            <button
              className="w-[141px] bg-[#F2F4F6] py-[8.5px] px-[16px] rounded-lg flex items-center border border-[#F2F4F6] hover:border-gray-300 justify-between"
              onClick={() => setShowCalendar(!showCalendar)}
            >
              <span className="text-xs text-primary">24-03-2001</span>
              <img
                src="/assets/icons/calendar-dotted.svg"
                alt="calendar"
                className="w-[13px] h-[13px]"
              />
            </button>
            {showCalendar && (
              <div className="absolute right-0 mt-2 w-64 bg-white border rounded-lg shadow-lg">
                {renderCalendar()}
              </div>
            )}
          </div>
          <div className="relative">
            <button
              className="w-[166px] bg-[#F2F4F6] py-[6.5px] px-[16px] rounded-lg flex items-center border border-[#F2F4F6] hover:border-gray-300 justify-between"
              onClick={() => setShowOutletDropdown(!showOutletDropdown)}
            >
              <div className="flex items-center">
                <img src="../assets/icons/building.svg" alt="outlet" className="w-[13px] h-[13px]" />
                <span className="ml-2 text-sm text-primary">Outlet name</span>
              </div>
              <img src="/assets/icons/chevron-down.svg" alt="outlet" />
            </button>
            {showOutletDropdown && renderOutletDropdown()}
          </div>

          <div className="border border-[#EBEBEB] h-[32px] rounded"></div>

          <button className="bg-[#008745] text-white rounded-lg px-[14px] py-[6px] hover:bg-green-700 transition text-xs font-medium flex gap-[4px] h-[32px] items-center">
            <img src="/assets/icons/plus.svg" alt="plus" /> Create
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
