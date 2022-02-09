/*global chrome*/
chrome.runtime.onInstalled.addListener(function () {
  chrome.action.disable()
  chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
    let rule = {
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {
            hostEquals: 'www.baidu.com',
          },
        }),
      ],
      actions: [
        chrome.declarativeContent.ShowAction
          ? new chrome.declarativeContent.ShowAction()
          : new chrome.declarativeContent.ShowPageAction(),
      ],
    };
    const rules = [rule];
    chrome.declarativeContent.onPageChanged.addRules(rules);
  });
});
