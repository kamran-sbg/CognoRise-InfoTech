import React, { useEffect, useState } from "react";
// import "./Calcu.css"; // Keep this if you have other styles; otherwise, you can remove it.

export const About = () => {
  const [data, setData] = useState("");

  const getValue = (event) => {
    setData(data.concat(event.target.value));
  };

  const calculation = () => {
    try {
      setData(eval(data).toString());
    } catch (error) {
      setData("Error");
    }
  };

  const handleKeyPress = (event) => {
    const key = event.key;
    if (!isNaN(key) || ['+', '-', '*', '/', '(', ')', '%'].includes(key)) {
      setData((prev) => prev + key);
    } else if (key === 'Enter') {
      calculation();
    } else if (key === 'Backspace') {
      setData(data.slice(0, -1));
    } else if (key === 'Escape') {
      setData("");
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [data]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-500">
      <div className="bg-white shadow-md rounded-lg p-4 w-80">
        <h1 className="text-lg font-bold text-center text-blue-600 mb-4">Calculator</h1>
        <input
          type="text"
          placeholder="0"
          value={data}
          readOnly
          className="w-full h-12 bg-gray-200 text-right text-xl rounded-md mb-4 p-2 border border-gray-300"
        />
        <div className="grid grid-cols-4 gap-2">
          <button onClick={getValue} value="(" className="btn"> ( </button>
          <button onClick={getValue} value=")" className="btn"> ) </button>
          <button onClick={getValue} value="%" className="btn"> % </button>
          <button onClick={() => setData("")} className="btn"> AC </button>

          <button onClick={getValue} value="7" className="btn"> 7 </button>
          <button onClick={getValue} value="8" className="btn"> 8 </button>
          <button onClick={getValue} value="9" className="btn"> 9 </button>
          <button onClick={getValue} value="*" className="btn"> × </button>

          <button onClick={getValue} value="4" className="btn"> 4 </button>
          <button onClick={getValue} value="5" className="btn"> 5 </button>
          <button onClick={getValue} value="6" className="btn"> 6 </button>
          <button onClick={getValue} value="-" className="btn"> − </button>

          <button onClick={getValue} value="1" className="btn"> 1 </button>
          <button onClick={getValue} value="2" className="btn"> 2 </button>
          <button onClick={getValue} value="3" className="btn"> 3 </button>
          <button onClick={getValue} value="+" className="btn"> + </button>

          <button onClick={getValue} value="0" className="btn col-span-2"> 0 </button>
          <button onClick={() => setData(data.slice(0, -1))} className="btn"> ← </button>
          <button onClick={calculation} className="btn"> = </button>
          <button onClick={getValue} value="/" className="btn"> ÷ </button>
        </div>
      </div>
    </div>
  );
};

// Tailwind CSS Button Styles
const btnStyle = "flex items-center justify-center h-12 text-xl font-semibold text-white bg-blue-500 rounded-md transition duration-200 hover:bg-blue-600 focus:outline-none";

const btn = ({ children, ...props }) => (
  <button className={btnStyle} {...props}>
    {children}
  </button>
);
