import { useState } from "react";
import QRCode from "react-qr-code";

function QrCodeGenerator() {
  const [input, setInput] = useState("");
  const [qrCode, setQrCode] = useState("");

  const handleClick = (e) => {
    e.preventDefault()
    if (input.trim().length > 0) {
      setQrCode(input);
      setInput("");
    } else {
        alert("Please fill the input box");
        setQrCode("")
    }
  };

  return (
    <div>
      <form className="flex gap-2 flex-col p-5">
        <h1 className="p-2 font-bold text-lg">QR Code Generator</h1>

        <input
          className="p-2 border rounded"
          type="text"
          value={input}
          placeholder="Enter text"
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          onClick={handleClick}
          className="bg-blue-600 text-white px-3 py-1 rounded"
        >
          Generate QR
        </button>
      </form>

      {qrCode && qrCode.length > 0 && (
        <div className="py-2 flex justify-center">
          <QRCode value={qrCode} size={300} bgColor="#fff" />
        </div>
      )}
    </div>
  );
}

export default QrCodeGenerator;
