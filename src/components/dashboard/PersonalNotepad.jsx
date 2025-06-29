import React from "react";

const PersonalNotepad = () => {
  return (
    <div className="border border-[#EBEBEB] rounded-xl w-[100%] md:w-[50%]">
      <div className="p-[12px]">
        <div className="flex justify-between items-center mb-[4px]">
          <h2 className="text-sm font-semibold text-primary">
            Personal Notepad
          </h2>
          <div className="flex gap-[12px] items-center">
            <img
              src="/assets/icons/share.svg"
              alt="share"
              className="min-h-[20px]  min-w-[20px] hover:bg-gray-100 rounded-lg object-cover p-[5px]"
            />
            <img
              src="/assets/icons/dots.svg"
              alt="dots"
              className="p-[10px] hover:bg-gray-100 rounded-lg min-h-[10px] min-w-[10px]"
            />
          </div>
        </div>
      </div>
      <div className="border-b border-[#EBEBEB]"></div>
      <div className="p-[16px]">
        <div className="">
          <div className="p-[12px]">
            <div className="flex ">
              <input
                type="radio"
                name="notepadOption"
                id="makeShift"
                className="w-[20px] h-[20px] text-primary "
              />
              <label
                htmlFor="makeShift"
                className="ml-2 text-xs text-primary font-medium"
              >
                Make shift & assign
              </label>
            </div>
            <p className="ml-7 text-xs text-[#646464]">
              Assign individuals to specific shifts based on availability and
              role requirements
            </p>
          </div>
          <div className="p-[12px]">
            <div className="flex ">
              <input
                type="radio"
                name="notepadOption"
                id="makeShift"
                className="w-[20px] h-[20px] text-primary "
              />
              <label
                htmlFor="makeShift"
                className="ml-2 text-xs text-primary font-medium"
              >
                Menu correction
              </label>
            </div>
            <p className="ml-7 text-xs text-[#646464]">
              Update the menu to show the dishes and their ingredients clearly.
              Point out any new cooking methods or dietary options.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalNotepad;
