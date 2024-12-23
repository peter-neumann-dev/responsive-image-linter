// Required empty export to treat file as module
export {}

// Add custom property to Window type for TypeScript
declare global {
  interface Window {
    respImageLintCollectorRunning?: boolean
  }
}

/**
 * Injects and initializes the collector script in the webpage
 */
function initCollector(): void {
  // Exit early if collector is already running
  if (window.respImageLintCollectorRunning) {
    console.warn('RespImageLint collector already initialized!')
    return
  }

  window.respImageLintCollectorRunning = true
  console.log('RespImageLint collector initialized!')

  // Create and inject the collector script
  const script = document.createElement('script')
  script.src = chrome.runtime.getURL('collector.js')
  script.type = 'text/javascript'

  // Handle script injection errors
  script.onerror = () => {
    console.error('Failed to load collector script')
    window.respImageLintCollectorRunning = false
  }

  // Inject script and remove after loading
  const target = document.head || document.documentElement
  target.appendChild(script)
  script.onload = () => script.remove()
}

/**
 * Configures network request handling for the extension
 * // Removes security headers to allow iframe embedding and clears cache
 */
async function configureNetRequest(
  tabId: number,
  domain: string,
): Promise<void> {
  // Headers that need to be removed to allow iframe embedding
  const headersToRemove = [
    'X-Frame-Options',
    'Frame-Options',
    'Content-Security-Policy',
  ]

  // Create rule to remove security headers
  await chrome.declarativeNetRequest.updateSessionRules({
    removeRuleIds: [1],
    addRules: [
      {
        id: 1,
        action: {
          type: chrome.declarativeNetRequest.RuleActionType.MODIFY_HEADERS,
          responseHeaders: headersToRemove.map((header) => ({
            header,
            operation: chrome.declarativeNetRequest.HeaderOperation.REMOVE,
          })),
        },
        condition: {
          requestDomains: [domain],
          resourceTypes: [chrome.declarativeNetRequest.ResourceType.SUB_FRAME],
          tabIds: [tabId],
        },
      },
    ],
  })

  // Clear cache and service workers for the domain
  await chrome.browsingData.remove(
    { origins: [`https://${domain}`] },
    { cacheStorage: true, serviceWorkers: true },
  )
}

// Listen for extension icon clicks
chrome.action.onClicked.addListener(async (tab: chrome.tabs.Tab) => {
  // Validate tab URL exists
  if (!tab.url || !tab.id) {
    console.error('Invalid tab information')
    return
  }

  const domain = new URL(tab.url).hostname

  try {
    // Configure network requests and inject collector script
    await configureNetRequest(tab.id, domain)
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: initCollector,
    })

    console.log('Extension initialized successfully')
  } catch (error) {
    console.error('Extension initialization failed:', error)
  }
})
