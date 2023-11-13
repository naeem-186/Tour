/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto'],
      },
      colors: {
        'header-clr': "#F4F8F9",
        'hover-a-clr': "#03C0C1",
        'signup-btn': '#028787',
        'bg-city-name': 'rgba(13, 18, 14, 0.20)',
        'search-box': "rgba(3, 192, 193, 0.06)",
        'EEE': '#EEE',
        'FFF': '#FFF',
        'F5F5F5': '#F5F5F5',
        '929595': '#929595',
        '028787': '#028787',
        '03C0C1': '#03C0C1',
        'hunza': "rgba(13, 18, 14, 0.20)"

      },
      spacing: {
        '10': "10px",
        '20': '20px',
        '30': '30px',
        '50': '50px',
        '80px': '80px',
        '87': '87px',
        '120': '120px',
        '137': '137px',
        '155': '155px',
        '171': '171px',
        '324': '324px',
        '338': '338px',
        '380': '380',
        '480': '480px',
      },
      fontSize: {
        ab: '42px',
        cd: '20px',
        ef: '44px',
      }
    },
  },
  plugins: [],
}