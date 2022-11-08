import React, { useState, useRef } from "react";
import KeyBoard from "./components/keyboard";

export default function App() {
  const textareaRef = useRef(null);

  const [showKeyBoard, setValues] = useState(false);
  const [theme, setTheme] = useState("dark--theme");
  const [textareaVal, setTextAreaValue] = useState("");

  const displayKeyBoard = () => {
    setValues(!showKeyBoard);
  };

  const setKeyBoardTheme = (value) => {
    const themeVal = value === "dark--theme" ? "light--theme" : "dark--theme";
    setTheme(themeVal);
  };

  const updateTextarea = (value) => {
    if (value === "del") {
      setTextAreaValue(textareaVal.substring(0, textareaVal.length - 1));
    } else {
      setTextAreaValue(textareaVal + value);
    }
  };

  return (
    <>
      <div className="w-full flex justify-center p-3">
        <h1 className="text-5xl font-black">Virtual KeyBoard</h1>
      </div>

      <div className="flex w-full h-full flex-col justify-center p-10">
        <div className="w-full flex">
          <textarea
            className="use-keyboard-input w-1/3 h-40 border inset-11"
            style={{ margin: "0 auto" }}
            onClick={() => displayKeyBoard()}
            ref={textareaRef}
            onChange={(e) => setTextAreaValue(e.target.value)}
            value={textareaVal}
          ></textarea>
        </div>

        <div className="w-full flex justify-center">
          {showKeyBoard ? (
            <button
              className="p-2 my-10 text-base rounded-md btn"
              theme={theme}
              onClick={() => setKeyBoardTheme(theme)}
            >
              {theme === "light--theme"
                ? "Switch to Dark Mode"
                : "Switch to Light Mode"}
            </button>
          ) : (
            ""
          )}
        </div>

        <KeyBoard
          open={showKeyBoard}
          theme={theme}
          textValue={updateTextarea}
        />
      </div>
    </>
  );
}
