import React from "react";

const Cards = () => {
  return (
    <div className="overflow-x-auto flex gap-[24px] whitespace-nowrap scrollbar-hide">
      <div className="border border-[#EBEBEB] rounded-xl p-[16px] inline-block">
        <div className="flex gap-[12px] items-center mb-[12px]">
          <div className="bg-[#008745] rounded-lg p-[6px]">
            <img
              src="../assets/images/auto-review.svg"
              className="h-[20px] w-[20px] cursor-pointer"
              alt="auto-review"
            />
          </div>
          <span className="text-sm font-semibold text-primary">
            22 Ai Review
          </span>
        </div>
        <div className="flex gap-[8px]">
          <div className="flex gap-[4px] items-center">
            <div className="text-[#979797] text-xs">Manually Approve</div>
            <div className="w-[20px] h-[20px] rounded-full bg-[#FFF0E5] text-[#D92D20] text-xs text-center pt-[1px]">
              2
            </div>
          </div>
          <div className="flex gap-[4px] items-center">
            <div className="text-[#979797] text-xs">Completed</div>
            <div className="w-[20px] h-[20px] rounded-full bg-[#ECFDF3] text-[#039855] text-xs text-center pt-[1px]">
              10
            </div>
          </div>
          <div className="flex gap-[4px] items-center">
            <div className="text-[#979797] text-xs">Rejected by Ai</div>
            <div className="w-[20px] h-[20px] rounded-full bg-[#FFF8E5] text-[#D9A541] text-xs text-center pt-[1px]">
              10
            </div>
          </div>
        </div>
      </div>
      <div className="border border-[#EBEBEB] rounded-xl p-[16px] inline-block">
        <div className="flex gap-[12px] items-center mb-[12px]">
          <div className="bg-[#D8E6FB] rounded-lg p-[6px]">
            <img
              src="../assets/images/task.svg"
              className="h-[20px] w-[20px] cursor-pointer"
              alt="task"
            />
          </div>
          <span className="text-sm font-semibold text-primary">22 Tasks</span>
        </div>
        <div className="flex gap-[8px]">
          <div className="flex gap-[4px] items-center">
            <div className="text-[#979797] text-xs">Ongoing</div>
            <div className="w-[20px] h-[20px] rounded-full bg-[#FFF8E5] text-[#D9A541] text-xs text-center pt-[1px]">
              10
            </div>
          </div>
          <div className="flex gap-[4px] items-center">
            <div className="text-[#979797] text-xs">Overdue</div>
            <div className="w-[20px] h-[20px] rounded-full bg-[#FFF0E5] text-[#D92D20] text-xs text-center pt-[1px]">
              2
            </div>
          </div>
          <div className="flex gap-[4px] items-center">
            <div className="text-[#979797] text-xs">Completed</div>
            <div className="w-[20px] h-[20px] rounded-full bg-[#ECFDF3] text-[#039855] text-xs text-center pt-[1px]">
              10
            </div>
          </div>
          <div className="flex gap-[4px] items-center">
            <div className="text-[#979797] text-xs">Scheduled</div>
            <div className="w-[20px] h-[20px] rounded-full bg-[#F7EDFF] text-[#7955A3] text-xs text-center pt-[1px]">
              10
            </div>
          </div>
        </div>
      </div>
      <div className="border border-[#EBEBEB] rounded-xl p-[16px] inline-block">
        <div className="flex gap-[12px] items-center mb-[12px]">
          <div className="bg-[#F8EEE6] rounded-lg p-[6px]">
            <img
              src="../assets/images/alert-circle.svg"
              className="h-[20px] w-[20px] cursor-pointer"
              alt="alert-circle"
            />
          </div>
          <span className="text-sm font-semibold text-primary">22 Issues</span>
        </div>
        <div className="flex gap-[8px]">
          <div className="flex gap-[4px] items-center">
            <div className="text-[#979797] text-xs">Ignored</div>
            <div className="w-[20px] h-[20px] rounded-full bg-[#FFF0E5] text-[#D92D20] text-xs text-center pt-[1px]">
              2
            </div>
          </div>
          <div className="flex gap-[4px] items-center">
            <div className="text-[#979797] text-xs">Resolved</div>
            <div className="w-[20px] h-[20px] rounded-full bg-[#ECFDF3] text-[#039855] text-xs text-center pt-[1px]">
              10
            </div>
          </div>
          <div className="flex gap-[4px] items-center">
            <div className="text-[#979797] text-xs">Open</div>
            <div className="w-[20px] h-[20px] rounded-full bg-[#FFF8E5] text-[#D9A541] text-xs text-center pt-[1px]">
              10
            </div>
          </div>
        </div>
      </div>
      <div className="border border-[#EBEBEB] rounded-xl p-[16px] inline-block">
        <div className="flex gap-[12px] items-center mb-[12px]">
          <div className="bg-[#F7EDFF] rounded-lg p-[6px]">
            <img
              src="../assets/images/forms.svg"
              className="h-[20px] w-[20px] cursor-pointer"
              alt="forms"
            />
          </div>
          <span className="text-sm font-semibold text-primary">20 Forms</span>
        </div>
        <div className="flex gap-[8px]">
          <div className="flex gap-[4px] items-center">
            <div className="text-[#979797] text-xs">Open Responses</div>
            <div className="w-[20px] h-[20px] rounded-full bg-[#F7EDFF] text-[#7955A3] text-xs text-center pt-[1px]">
              2
            </div>
          </div>
          <div className="flex gap-[4px] items-center">
            <div className="text-[#979797] text-xs">Submitted Responses </div>
            <div className="w-[20px] h-[20px] rounded-full bg-[#ECFDF3] text-[#039855] text-xs text-center pt-[1px]">
              10
            </div>
          </div>
          <div className="flex gap-[4px] items-center">
            <div className="text-[#979797] text-xs">Ongoing Tasks</div>
            <div className="w-[20px] h-[20px] rounded-full bg-[#FFF8E5] text-[#D9A541] text-xs text-center pt-[1px]">
              10
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
