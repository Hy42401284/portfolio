/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: { extend: { colors: { navy: '#1a365d', blue: '#2b6cb0', mist: '#f7fafc' }, fontSize: { base: '18px', lg: '20px', xl: '22px', '2xl': '26px', '3xl': '32px', '4xl': '40px' } } },
  plugins: [],
}