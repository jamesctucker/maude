const setup = () => {
  chrome.runtime.onInstalled.addListener(() => {
    setupContextMenu();
  });

  function setupContextMenu() {
    chrome.contextMenus.create({
      id: "generateAltText",
      title: "Generate alt text",
      contexts: ["image"],
    });

    chrome.contextMenus.create({
      id: "generateBulkAltText",
      title: "Generate bulk alt text",
      contexts: ["page"],
    });

    chrome.contextMenus.create({
      id: "generateMetaTitle",
      title: "Generate meta title",
      contexts: ["selection"],
    });

    chrome.contextMenus.create({
      id: "generateMetaDescription",
      title: "Generate meta description",
      contexts: ["selection"],
    });

    chrome.contextMenus.create({
      id: "summarize",
      title: "Summarize",
      contexts: ["selection"],
    });

    //   rephrase
    chrome.contextMenus.create({
      id: "rephrase",
      title: "Rephrase",
      contexts: ["selection"],
    });

    chrome.contextMenus.create({
      id: "fixSpellingAndGrammar",
      title: "Fix spelling and grammar",
      contexts: ["selection"],
    });

    chrome.contextMenus.create({
      id: "improveClarity",
      title: "Improve clarity",
      contexts: ["selection"],
    });

    chrome.contextMenus.create({
      id: "continueWriting",
      title: "Continue writing",
      contexts: ["selection"],
    });
  }
};

export default setup;
