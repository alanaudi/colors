import { default as copicColors } from './copic-358.json'

function parseColorName(colorName: string): string {
  const items = colorName.split(' ').map((name) => name.toLowerCase())
  const newName = items.join('-')
  return newName
}

function createTailwindColors(colors: CopicColor[]): object {
  const copicColorInCode = Object.assign(
    {},
    ...colors.map((item) => {
      return { [item.code.toLowerCase()]: item.hex }
    })
  )

  const copicColorInName = Object.assign(
    {},
    ...colors.map((item) => {
      return { [parseColorName(item.name.en)]: item.hex }
    })
  )

  return {
    copic: {
      ...copicColorInCode,
      ...copicColorInName,
    },
  }
}

const classNames = createTailwindColors(copicColors)

module.exports = classNames
