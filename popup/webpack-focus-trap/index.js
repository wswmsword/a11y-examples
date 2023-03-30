import * as focusTrap from "focus-trap";
import "./index.css";

const dialog = document.getElementById("dialog");
const openButton = document.getElementById("open");
const closeButton = document.getElementById("close");

const trap = focusTrap.createFocusTrap("#dialog", {
  checkCanFocusTrap(trapContainers) {
    return new Promise(resolve => setTimeout(resolve, 0));
  },
  onActivate() {
    dialog.classList.add("openedDialog");
    dialog.classList.remove("closedDialog");
  },
  onDeactivate() {
    dialog.classList.remove("openedDialog");
    dialog.classList.add("closedDialog");
  },
});
openButton.addEventListener("click", trap.activate);
closeButton.addEventListener("click", trap.deactivate);