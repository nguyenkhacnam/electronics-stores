/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '1500': '1500px',
      },
      padding: {
        'xl-px': '30px',
        '15': '15px',
      },
      margin: {
        'xl-auto': 'auto',
      },
      colors: {
        'primary': '#ff5252',
        'btn-text-color': '#ffffff',
        'bg-white': '#fed700',
        'text': '#fff',
        'home': '#f9f9f9'
      },
      borderRadius: {
        'btn-radius': '5px'
      },
      fontSize: {
        'btn-font-size': '14px',
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
        '12': '12px'
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
      },
      transitionDelay: {
        'delay-100': '100ms'
      },
    },
  },
  plugins: [],
}