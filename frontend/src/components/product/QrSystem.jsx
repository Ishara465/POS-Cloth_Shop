import React, { useState } from "react";
// import { QRCode } from "qrcode.react";

const QrSystem = () => {
  const [inputValue, setInputValue] = useState("");
  const [qrValue, setQrValue] = useState("");

  const handleGenerateQr = () => {
    setQrValue(inputValue);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-[#232323] p-6 rounded-lg w-full max-w-md mx-auto">
      <h1 className="text-[#EEEEEE] text-2xl font-bold mb-6">
        QR Code Generator
      </h1>
      {/* Input Field */}
      <input
        type="text"
        placeholder="Enter text to generate QR"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="w-full px-4 py-2 mb-4 text-[#232323] rounded-lg outline-none"
      />
      {/* Generate Button */}
      <button
        onClick={handleGenerateQr}
        className="bg-[#FF7171] text-white px-6 py-2 rounded-lg hover:bg-[#FF4C4C] transition-all duration-300"
      >
        Generate QR Code
      </button>
      {/* QR Code Display */}
      {qrValue && (
        <div className="mt-6 bg-white p-4 rounded-lg">
          <QRCode value={qrValue} size={150} />
        </div>
      )}
    </div>
  );
};

export default QrSystem;
