import setup from "./setup.js";
import listen from "./listen.js";

const init = () => {
  // make side panel open on action click
  chrome.sidePanel
    .setPanelBehavior({ openPanelOnActionClick: true })
    .catch((error) => console.error(error));

  setup();
  listen();
};

init();
