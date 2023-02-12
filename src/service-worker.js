import { initCollector } from './scripts/collector'

/**
 * Run the collector script when the extension is clicked
 * @param {chrome.tabs.Tab} tab The current tab the user is on
 */
chrome.action.onClicked.addListener((tab) => {
  // Inject the collector script into the current tab
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: initCollector,
  }).then(() => console.log('Script injected'))
})
