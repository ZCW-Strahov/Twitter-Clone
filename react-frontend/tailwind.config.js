/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#000',
        gray: '#6e767d',
        'trends-color': '#202327',
        blue: '#f01d1d',
        whitesmoke: '#eff3f4',
        gainsboro: '#d6d9db',
        gray1: '#0f1419',
        text: '#d9d9d9',
        'border-color': '#2f3336',
        tomato: '#ff4242',
        white: '#fff',
      },
      spacing: {},
      fontFamily: {
        lato: 'Lato',
      },
      borderRadius: {
        mini: '15px',
        '13xl': '32px',
        '21xl': '40px',
        '23xl': '42px',
        '15xl': '34px',
        '17xl': '36px',
        '45xl': '64px',
        '31xl': '50px',
        lg: '18px',
      },
    },
    fontSize: {
      smi: '13px',
      mini: '15px',
      sm: '14px',
      xl: '20px',
      base: '16px',
      lgi: '19px',
      '2xs': '11px',
      inherit: 'inherit',
    },
    screens: {
      lg: {
        max: '1200px',
      },
      mq1050: {
        raw: 'screen and (max-width: 1050px)',
      },
      mq750: {
        raw: 'screen and (max-width: 750px)',
      },
      mq450: {
        raw: 'screen and (max-width: 450px)',
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
