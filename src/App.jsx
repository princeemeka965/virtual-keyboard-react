import React, { useState } from "react";
import KeyBoard from "./components/keyboard";

export default function App() {

    const [showKeyBoard, setValues] = useState(false);

    const displayKeyBoard = () => {
        setValues(!showKeyBoard);
    }

    return (
        <>
            <div className="w-full flex justify-center p-3">
                <h1 className="text-5xl font-black">Virtual KeyBoard</h1>
            </div>

            <div className="flex w-full h-full flex-col justify-center p-10">
                <div className="w-full flex">
                    <textarea
                        className="use-keyboard-input w-1/3 h-40 border inset-11"
                        style={{ margin: '0 auto' }}
                        onClick={() => displayKeyBoard()}
                    ></textarea>
                </div>

                <KeyBoard open={ showKeyBoard } />
            </div>
        </>
    )
}
