let onState = false;

// Called when the user clicks on the browser action
chrome.action.onClicked.addListener(function (tab) {
  // Send a message to the active tab
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var activeTab = tabs[0];

    onState = !onState;

    // first set badge color
    chrome.action.setBadgeBackgroundColor({ color: '#013220' }, () => {});

    // then set badge text to "on" or clear it
    chrome.action.setBadgeText({
      tabId: activeTab.id,
      text: onState ? 'on' : '',
    });

    // send event to browser for extension to catch
    chrome.tabs.sendMessage(activeTab.id, {
      message: 'clicked_browser_action',
    });
  });
});
