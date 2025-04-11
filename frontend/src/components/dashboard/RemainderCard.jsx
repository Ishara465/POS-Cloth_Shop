import React, { useState } from "react";
import AddReminder from "./AddReminder";
import { useSelector } from "react-redux";

const RemainderCard = () => {
  const reminder = useSelector((state) => state.reminder);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-[#383838] w-90 h-170 mr-6 p-4 rounded-lg">
      <div className="flex justify-between items-center mb-4 px-4">
        <h1 className="text-[#EEEEEE] text-xl font-bold mb-4">Reminders</h1>

        <button
          className="bg-[#FF7171] px-5 py-2  font-bold rounded-lg hover:bg-[#8A8A8A] transition duration-300 ease-in-out text-[#EEEEEE]"
          onClick={handleOpenModal}
        >
          Add
        </button>
      </div>
      <div className="flex flex-col gap-4">
        {reminder.map((reminder) => (
          <div
            key={reminder.id}
            className="flex bg-[#232323] h-16 w-full rounded-lg items-center px-4"
          >
            <h1 className="text-[#EEEEEE] text-sm">{reminder.name}</h1>
          </div>
        ))}
      </div>
      {isModalOpen && <AddReminder setIsModalOpen={setIsModalOpen} />}
    </div>
  );
};

export default RemainderCard;
