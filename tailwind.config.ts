import type { Config } from 'tailwindcss'

const {colors : defaultColors } = require("tailwindcss/defaultTheme")

const colors = {
  ...defaultColors,
  ...{
    "custom" : {
      "100" : "hsl(10, 79%, 65%)",
      "200" : "hsl(186, 34%, 60%)",
      "300" : "hsl(25, 47%, 15%)",
      "400" : "hsl(28, 10%, 53%)",
      "500" : "hsl(27, 66%, 92%)",
      "600" : "hsl(33, 100%, 98%)"
    }
  } 
}

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors : colors,
    },
  },
  plugins: [],
}
export default config
