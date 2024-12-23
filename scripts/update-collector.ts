import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

async function fetchCollectorScript() {
  const response = await fetch(
    'https://ausi.github.io/respimagelint/collector.js',
  )
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }
  return await response.text()
}

async function updateCollectorFile() {
  const collectorPath = path.join(__dirname, '../', 'public', 'collector.js')

  // Fetch the external script
  const externalScript = await fetchCollectorScript()

  // Write the script to the public folder
  await fs.writeFile(collectorPath, externalScript, 'utf8')

  console.log('Successfully updated collector.js')
}

updateCollectorFile().catch((error) => {
  console.error('Failed to update collector file:', error)
  process.exit(1)
})
