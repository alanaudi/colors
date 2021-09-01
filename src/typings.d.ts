// TODO: Pantone color system
/** Color system of famous design brands */
type ColorSystem = 'Copic' | 'Pantone'

/** Interface of user input options */
interface Config {
  colorSet: 'Copic Sketch' | 'Copic Classic' | 'Copic Ciao'
}

interface ColorName {
  en: string
  jp: string
  zh: string
}

interface CopicColor {
  //    Copic Color System Code
  //
  //    [Family][Saturation][Intensity]
  //
  //    Family: 16 ─── Achromatic
  //                │     ├── A          (black and white)
  //                │     └── C, N, T, W (4 kind of gray)
  //                └── Chromatic Wheel
  //                      ├── F          (fluorescent)
  //                      ├── B          (blue)
  //                      ├── BG         (blue green)
  //                      ├── G          (green)
  //                      ├── YG         (yellow green)
  //                      ├── Y          (yellow)
  //                      ├── YR         (yellow red)
  //                      ├── R          (red)
  //                      ├── RV         (red violet)
  //                      ├── V          (violet)
  //                      └── BV         (blue violet)
  //    Saturation (Blending Group): 10 levels -> [0-9]
  //    Intensity: 12 levels -> 000, 00, [0-9]

  /** Copic color system code, e.g. BV02 */
  code: string
  /** Copic color system name, e.g. Lapis Lazuli  */
  name: ColorName
  /** Corresponding hex color code, e.g. #3886C4 */
  hex: string
  /** if color in Copic Classic 214 colors */
  inClassic: boolean
  /** if color in Copic Ciao 180 colors */
  inCiao: boolean
}

declare module '*.json' {
  const value: any
  export default value
}
