import { initCollector } from './scripts/collector'

/**
 * Override the headers of the current tab
 *
 * @param tabId The ID of the current tab
 * @param domain The domain of the current tab
 */
async function configureNetRequest(tabId, domain) {
  const domains = [domain]
  // Define headers that to be removed from the response
  const headers = [
    'X-Frame-Options',
    'Frame-Options',
    'Content-Security-Policy',
  ]

  // Configure the declarativeNetRequest rules to remove the headers
  await chrome.declarativeNetRequest.updateSessionRules({
    removeRuleIds: [1],
    addRules: [
      {
        id: 1,
        action: {
          type: 'modifyHeaders',
          responseHeaders: headers.map((h) => ({
            header: h,
            operation: 'remove',
          })),
        },
        condition: {
          requestDomains: domains,
          resourceTypes: ['sub_frame'],
          tabIds: [tabId],
        },
      },
    ],
  })

  // Clear the browser cache and service workers
  await chrome.browsingData.remove(
    {
      origins: domains.map((d) => `https://${d}`),
    },
    {
      cacheStorage: true,
      serviceWorkers: true,
    },
  )
}

/**
 * Run the collector script when the extension icon is clicked
 * @param {chrome.tabs.Tab} tab The current tab the user is on
 */
chrome.action.onClicked.addListener(async (tab) => {
  const domain = new URL(tab.url).hostname

  // Invoke configureNetRequest to override the headers in the current tab
  await configureNetRequest(tab.id, domain)

  // Inject the collector script into the current tab
  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: initCollector,
  })

  console.log('Script injected')
})
