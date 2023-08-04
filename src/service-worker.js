import { initCollector } from './scripts/collector'

async function configureNetRequest(tabId, domain) {
  const domains = [domain];
  const headers = [
    "X-Frame-Options",
    "Frame-Options",
    "Content-Security-Policy",
  ];

  await chrome.declarativeNetRequest.updateSessionRules({
    removeRuleIds: [1],
    addRules: [
      {
        id: 1,
        action: {
          type: "modifyHeaders",
          responseHeaders: headers.map((h) => ({
            header: h,
            operation: "remove",
          })),
        },
        condition: {
          requestDomains: domains,
          resourceTypes: ["sub_frame"],
          tabIds: [tabId],
        },
      },
    ],
  });

  await chrome.browsingData.remove(
    {
      origins: domains.map((d) => `https://${d}`),
    },
    {
      cacheStorage: true,
      serviceWorkers: true,
    }
  );
}

/**
 * Run the collector script when the extension is clicked
 * @param {chrome.tabs.Tab} tab The current tab the user is on
 */
chrome.action.onClicked.addListener(async (tab) => {
  const domain = new URL(tab.url).hostname;

  // Remove response headers that block iframes
  await configureNetRequest(tab.id, domain);

  // Inject the collector script into the current tab
  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: initCollector,
  }).then(() => console.log('Script injected'))
})
