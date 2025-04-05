import React from "react";

const AddItems = ({ setIsModalOpen }) => {
  //   if (setIsModalOpen) return null;

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-[#232323]  flex items-center justify-center z-50 modal-backdrop ">
      <div className="bg-[#383838] rounded-lg p-6 w-96">
        <h2 className="text-xl text-[#EEEEEE] font-bold mb-4">
          Add New Product
        </h2>
        <form>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="mb-4">
              <div className="mb-4">
                <label className="block text-[#EEEEEE] text-sm font-bold mb-2">
                  Product Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7171] bg-[#23232323] text-[#EEEEEE]"
                />
              </div>

              <div className="mb-4">
                <label className="block text-[#EEEEEE] text-sm font-bold mb-2">
                  Category
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7171] bg-[#23232323] text-[#EEEEEE]"
                />
              </div>

              <div className="mb-4">
                <label className="block text-[#EEEEEE] text-sm font-bold mb-2">
                  Brand
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7171] bg-[#23232323] text-[#EEEEEE]"
                />
              </div>

              <div className="mb-4">
                <label className="block text-[#EEEEEE] text-sm font-bold mb-2">
                  Size
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7171] bg-[#23232323] text-[#EEEEEE]"
                />
              </div>
            </div>

            <div className="mb-4">
              <div className="mb-4">
                <label className="block text-[#EEEEEE] text-sm font-bold mb-2">
                  Color
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7171] bg-[#23232323] text-[#EEEEEE]"
                />
              </div>

              <div className="mb-4">
                <label className="block text-[#EEEEEE] text-sm font-bold mb-2">
                  Price
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7171] bg-[#23232323] text-[#EEEEEE]"
                />
              </div>

              <div className="mb-4">
                <label className="block text-[#EEEEEE] text-sm font-bold mb-2">
                  Stock Qty
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7171] bg-[#23232323] text-[#EEEEEE]"
                />
              </div>

              <div className="mb-4">
                <label className="block text-[#EEEEEE] text-sm font-bold mb-2">
                  Supply Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7171] bg-[#23232323] text-[#EEEEEE]"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              className="bg-green-500 text-white px-6 py-2 rounded-lg mr-2 hover:bg-green-600 "
            >
              Generate Barcode
            </button>
            <button
              type="button"
              onClick={handleCloseModal}
              className="bg-yellow-500 text-white px-4 py-2 rounded-lg mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#FF7171] text-white px-4 py-2 rounded-lg"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
