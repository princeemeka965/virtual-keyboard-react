function keyClass(props) {
    switch (props) {
        case "Tab":
            return "keyboard__key--wide";
        case "Shift":
            return "keyboard__key--wide keyboard__key--activatable";
        case "Backspace":
            return "keyboard__key--wide";
        case "CapsLock":
            return "keyboard__key--wide keyboard__key--activatable";
        case "Enter":
            return "keyboard__key--wide";
        case "Space":
            return "keyboard__key--extra-wide";
        case "Close":
            return "keyboard__key--wide";
        default:
            return "";
    }
}

function setIcons(props) {
    switch (props) {
        case "Tab":
            return "keyboard_tab";
        case "Shift":
            return "arrow_upward";
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