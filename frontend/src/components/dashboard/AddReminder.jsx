import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setReminder } from "../../redux/slices/reminderSlice";

const AddReminder = ({ setIsModalOpen }) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  const dispatch = useDispatch();

  const handleAddReminders = () => {
    dispatch(
      setReminder({
        name,
        status,
      })
    );
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-[#232323] flex items-center justify-center z-50 modal-backdrop">
      <div className="bg-[#383838] rounded-lg p-6 w-96 flex flex-col">
        <h2 className="text-xl text-[#EEEEEE] font-bold mb-4">Add Reminder</h2>
        <form>
          <div className=" gap-4 mb-4">
            <div className="mb-4">
              <label className="block text-[#EEEEEE] text-sm font-bold mb-2">
                Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7171] bg-[#232323] text-[#EEEEEE]"
              />
            </div>

            <div className="mb-4">
              <label className="block text-[#EEEEEE] text-sm font-bold mb-2">
                Status
              </label>
              <input
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                type="text"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7171] bg-[#232323] text-[#EEEEEE]"
              />
            </div>
          </div>

          <div className="flex justify-center gap-2 ">
            <button
              type="button"
              onClick={handleCloseModal}
              className="bg-[#232323] hover:bg-[#444444] hover:scale-105 transition-transform duration-300 text-white px-4 py-2 rounded-lg "
            >
              Cancel
            </button>
            <button
              onClick={handleAddReminders}
              className="bg-[#FF7171] hover:bg-[#FF4C4C] hover:scale-105 transition-transform duration-300 text-white px-4 py-2 rounded-lg w-50"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReminder;
