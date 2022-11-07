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


function handleKeyClick(node, target) {
    const targetVal = target.current?.value;
    targetVal = "n";
    console.log(targetVal);
   /* switch (node) {
        case "Tab":
            node?.blur();
            break;
        case "Enter":
            // Enters a new line
            targetValue += "\n";
            Object.preventExtensions(targetValue);
            node?.blur();
            break;
        case "Space":
            targetValue += " ";
            Object.preventExtensions(targetValue);
            node?.blur();
            break;
        case "Backspace":
            targetValue = target.substring(
                0,
                target.length - 1
            );
            node?.blur();
            Object.preventExtensions(targetValue);
            break;
        default:
            targetValue += node?.value;
            break;
    }
    // Focus back to the textarea field after every action taken
    target.focus();
    */
}

export { keyClass, setIcons, handleKeyClick }