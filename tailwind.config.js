module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      screens: {
        // '2xl': '1280px', // Fixed 1280px for 2xl and larger
        xl: '98vw',
        lg: '98vw',
        md: '98vw',
      },
      center: true,
    },
    extend: {
      colors: {
        white: '#ffffff',
        accent: '#51CBDD',
        dark: '#394858',
        orange: '#FFD600',
        'light-dark': '#4F5D6B',
        'body-secondary': '#F1F2F3',
        'brand-blue': '#1890FF',
      },
    },
  },
  plugins: [],
};
