export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0F1929',
          'navy-light': '#1a2a45',
          'navy-lighter': '#2a3f5f',
          gold: '#d4a574',
          'gold-dark': '#b8860b',
          'gold-light': '#e6c999',
          white: '#ffffff',
          'light-gray': '#f5f5f5',
          'gray': '#e0e0e0',
          'dark-gray': '#757575'
        }
      },
      boxShadow: {
        glow: '0 8px 16px rgba(212, 165, 116, 0.15)',
        card: '0 4px 12px rgba(0, 0, 0, 0.15)'
      },
      fontFamily: {
        display: ['Montserrat', 'sans-serif'],
        body: ['Arial', 'sans-serif']
      }
    }
  },
  plugins: []
};
