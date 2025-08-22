// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        neonBlue: '#00f9ff',
        neonPink: '#ff00f9',
        neonGreen: '#00ff99',
        neonYellow: '#ffff00',
      },
      keyframes: {
        'spin-reverse': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(255,255,255,0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(0,255,255,0.8)' },
        },
      },
      animation: {
        'spin-slow': 'spin 2s linear infinite',
        'spin-reverse': 'spin-reverse 1.5s linear infinite',
        glow: 'glow 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
