import { exec } from 'child_process'
import { access, mkdir } from 'fs/promises'
import { join } from 'path'
import { promisify } from 'util'

const execAsync = promisify(exec)

async function createRelease() {
  const packageName = process.env.npm_package_name
  const packageVersion = process.env.npm_package_version
  const releaseDir = 'releases'
  const zipName = `${packageName}-v${packageVersion}.zip`
  const zipPath = join(releaseDir, zipName)

  // Create releases directory if it doesn't exist
  try {
    await access(releaseDir)
  } catch {
    await mkdir(releaseDir, { recursive: true })
  }

  // Create zip archive (cd into dist first to avoid including directory structure)
  try {
    await execAsync(`cd dist && zip -r "../${zipPath}" ./*`)
    console.log(`Created release archive: ${zipPath}`)
  } catch (error) {
    console.error('Failed to create zip archive:', error)
    process.exit(1)
  }
}

createRelease().catch(console.error)
