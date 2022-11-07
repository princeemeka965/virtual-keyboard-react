import React, { useRef } from "react";
import { keyClass, setIcons } from "../helpers/keysHelpers";

export default function KeyBoard(props) {
    const theme = props.theme;
    const btnRef = useRef([]);
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
        "slash",
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
        "Shift",
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
        "Shift",
        "Ctrl",
        "Windows",
        "Alt",
        "Space",
        "AltGr",
        "Ctrl",
        "Fn"
    ];

    const iconKeys = [
        "Backspace",
        "Enter",
        "Space",
        "Windows",
    ];

    const handleKeyClick = (node) => {
        switch (node.textContent) {
            case "Tab":
                node.blur();
                break;
            case "keyboard_return":
                // Enters a new line
                props.textValue("\n");
                node.blur();
                break;
            case "":
                props.textValue(" ");
                node.blur();
                break;
            case "backspace":
                props.textValue("del");
                node.blur();
                break;
            default:
                props.textValue(node.textContent);
                node.blur();
                break;
        }
    }

    return (
        <>
            {props.open ? (
                <div className='w-full flex' theme={theme}>
                    <div className="fixed left-0 bottom-0 w-full p-2 keyboard">
                        <div className="flex w-full justify-center">
                            <div style={{ maxWidth: '1098px', marginLeft: '-2%' }}>
                                <div className="text-center w-full grid gap-2" style={{ gridTemplateColumns: 'repeat(30, 1.875em)', gridTemplateRows: 'repeat(5, 45px)' }}>
                                    {keyElems.map((keys, index) =>
                                        <button
                                            className={`keyboard__key outline-none cursor-pointer inline-flex items-center justify-center ${keyClass(keys)}`}
                                            key={index}
                                            title={keys}
                                            ref={(el) => (btnRef.current[index] = el)}
                                            onClick={() => handleKeyClick(btnRef.current[index])}
                                        >
                                            {iconKeys.includes(keys) ? (
                                                <i
                                                    className={`${keys === 'Windows' ? 'fa fa-windows' : 'material-icons'}`}
                                                >
                                                    {keys !== "Windows" ? setIcons(keys) : ""}
                                                </i>
                                            ) : (
                                                keys === "slash" ?
                                                    <span>
                                                        \
                                                    </span>
                                                    :
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