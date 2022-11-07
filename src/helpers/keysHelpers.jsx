function keyClass(props) {
    switch (props) {
        case "Tab":
            return "col-span-3";
        case "slash":
            return "col-span-3";
        case "Shift":
            return "col-span-5";
        case "Backspace":
            return "col-span-4";
        case "CapsLock":
            return "col-span-4";
        case "Enter":
            return "col-span-4";
        case "Space":
            return "col-span-16 col-span-2";
        case "Ctrl":
            return "col-span-3";
        default:
            return "col-span-2";
    }
}

function setIcons(props) {
    switch (props) {
        case "Tab":
            return "keyboard_tab";
        case "Backspace":
            return "backspace";
        case "CapsLock":
            return "lock";
        case "Enter":
            return "keyboard_return";
        case "Space Bar":
            return "space_bar";
        case "Close":
            return "close";
        default:
            return "";
    }
}

export { keyClass, setIcons }