import fs from 'fs/promises'
import path from 'path'
import { minify } from 'terser'
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

async function minifyScript(script: string) {
  try {
    const result = await minify(script, {
      mangle: true,
      compress: true,
    })
    return result.code
  } catch (error) {
    console.error('Error minifying script:', error)
    throw error
  }
}

async function updateCollectorFile() {
  const collectorPath = path.join(
    __dirname,
    '../',
    'src',
    'scripts',
    'collector.ts',
  )

  // Read the original file
  const fileContent = await fs.readFile(collectorPath, 'utf8')
  const lines = fileContent.split('\n')

  // Fetch and minify the external script
  const externalScript = await fetchCollectorScript()
  const minifiedScript = await minifyScript(externalScript)

  // Find the line containing "@ts-expect-error external script" and replace the next line
  let eslintDisableLine = -1
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('@ts-expect-error external script')) {
      eslintDisableLine = i
      break
    }
  }

  if (eslintDisableLine === -1) {
    throw new Error('Could not find eslint-disable marker in file')
  }

  // Replace the line after eslint-disable
  lines[eslintDisableLine + 1] = `  ${minifiedScript}`

  // Write the updated content back to the file
  await fs.writeFile(collectorPath, lines.join('\n'), 'utf8')

  console.log('Successfully updated collector.js')
}

updateCollectorFile().catch((error) => {
  console.error('Failed to update collector file:', error)
  process.exit(1)
})