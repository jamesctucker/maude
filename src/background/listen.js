const listen = () => {
  chrome.contextMenus.onClicked.addListener((data) => {
    if (data.menuItemId === "generateAltText") {
      chrome.runtime.sendMessage({
        name: "generateAltText",
        data: { value: data.srcUrl },
      });
    }

    if (data.menuItemId === "generateMetaTitle") {
      chrome.runtime.sendMessage({
        name: "generateMetaTitle",
        data: { value: data.selectionText },
      });
    }

    if (data.menuItemId === "generateMetaDescription") {
      chrome.runtime.sendMessage({
        name: "generateMetaDescription",
        data: { value: data.selectionText },
      });
    }

    if (data.menuItemId === "summarize") {
      chrome.runtime.sendMessage({
        name: "summarize",
        data: { value: data.selectionText },
      });
    }

    if (data.menuItemId === "rephrase") {
      chrome.runtime.sendMessage({
        name: "rephrase",
        data: { value: data.selectionText },
      });
    }

    if (data.menuItemId === "fixSpellingAndGrammar") {
      chrome.runtime.sendMessage({
        name: "fixSpellingAndGrammar",
        data: { value: data.selectionText },
      });
    }

    if (data.menuItemId === "improveClarity") {
      chrome.runtime.sendMessage({
        name: "improveClarity",
        data: { value: data.selectionText },
      });
    }

    if (data.menuItemId === "continueWriting") {
      chrome.runtime.sendMessage({
        name: "continueWriting",
        data: { value: data.selectionText },
      });
    }
  });
};

export default listen;
