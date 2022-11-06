import React from "react";
import { keyClass, setIcons } from "../helpers/keysHelpers";

export default function KeyBoard(props) {
    const keyElems = [
        "~",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0",
        "-",
        "=",
        "Backspace",
        "Tab",
        "q",
        "w",
        "e",
        "r",
        "t",
        "y",
        "u",
        "i",
        "o",
        "p",
        "[",
        "]",
        "#",
        "CapsLock",
        "a",
        "s",
        "d",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l",
        ";",
        "'",
        "Enter",
        "Close",
        "z",
        "x",
        "c",
        "v",
        "b",
        "n",
        "m",
        ",",
        ".",
        "/",
        "?",
        "Shift",
        "Ctrl",
        "Windows",
        "Space",
        "Alt",
        "Ctrl",
    ];

    const iconKeys = [
        "Backspace",
        "CapsLock",
        "Tab",
        "Enter",
        "Close",
        "Shift",
        "Space",
        "Windows",
    ];

    return (
        <>
            {props.open ? (
                <div className='w-full flex'>
                    <div className="fixed left-0 bottom-0 w-full p-2 keyboard">
                        <div className="flex w-full justify-center">
                            <div className="w-3/5">
                                <div className="text-center">
                                    {keyElems.map((keys, index) =>
                                        <button
                                            className={`keyboard__key text-white outline-none cursor-pointer inline-flex items-center justify-center ${keyClass(keys)}`}
                                            key={index}
                                            title={keys}
                                        >
                                            {iconKeys.includes(keys) ? (
                                                <i
                                                    className={`${keys === 'Windows' ? 'fa fa-windows' : 'material-icons'}`}
                                                >
                                                    {keys !== "Windows" ? setIcons(keys) : ""}
                                                </i>
                                            ) : (
                                                <span>
                                                    {keys}
                                                </span>
                                            )
                                            }
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                ''
            )
            }
        </>
    )

}