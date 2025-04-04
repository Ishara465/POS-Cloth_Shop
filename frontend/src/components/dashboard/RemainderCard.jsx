import React from "react";

const RemainderCard = () => {
  const reminders = [
    "Check inventory levels",
    "Follow up with suppliers",
    "Update product catalog",
    "Review sales performance",
    "Prepare for seasonal sale",
  ];

  return (
    <div className="bg-[#383838] w-90 h-170 mr-6 p-4 rounded-lg">
      <div className="flex justify-between items-center mb-4 px-4">
        <h1 className="text-[#EEEEEE] text-xl font-bold mb-4">Reminders</h1>

        <button className="bg-[#FF7171] px-5 py-2  font-bold rounded-lg hover:bg-[#8A8A8A] transition duration-300 ease-in-out text-[#EEEEEE]">
          Add
        </button>
      </div>
      <div className="flex flex-col gap-4">
        {reminders.map((reminder, index) => (
          <div
            key={index}
            className="flex bg-[#232323] h-16 w-full rounded-lg items-center px-4"
          >
            <h1 className="text-[#EEEEEE] text-sm">{reminder}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RemainderCard;
