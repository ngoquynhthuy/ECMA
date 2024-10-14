/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        '200': '12.5rem',
        '248': '15.5rem',
        '444': '27.75rem',
        '479': '29.938rem',
        '626px': '626px',
        '857px': '857px',
        '1792px': '1792px',
      },
      height: {
        '20px': '20px',
        '40px': '40px',
        '100px': '100px',
        '444': '27.75rem',
      },
      padding: {
        '5px': '5px',
        '10px': '10px',
        '12px': '12px',
        '16px': '16px',
        '21px': '21px',
        '40px': '40px',
        '44px': '44px',
        '100px': '100px',
        '123px': '123px',
        '269px': '269px',
        '626px': '626px',
        '1792px': '1792px',
      },
      margin: {
        '5px': '5px',
        '10px': '10px',
        '12px': '12px',
        '14px': '14px',
        '16px': '16px',
        '21px': '21px',
        '40px': '40px',
        '44px': '44px',
        '100px': '100px',
        '123px': '123px',
        '269px': '269px',
        '285px': '285px',
        '626px': '626px',
        '1792px': '1792px',
      },
      colors: {
        'regal-blue': '#1A94FF',
        'regal-find': '#0D5CB6',
        'regal-nav': '#F5F5FA',
        'regal-xam': '#EEEEEE',
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a"}
        // 'regal-xanh': '#00AB56',
      },
    },
    fontFamily: {
      'body': [
    'Inter', 
    'ui-sans-serif', 
    'system-ui', 
    '-apple-system', 
    'system-ui', 
    'Segoe UI', 
    'Roboto', 
    'Helvetica Neue', 
    'Arial', 
    'Noto Sans', 
    'sans-serif', 
    'Apple Color Emoji', 
    'Segoe UI Emoji', 
    'Segoe UI Symbol', 
    'Noto Color Emoji'
  ],
      'sans': [
    'Inter', 
    'ui-sans-serif', 
    'system-ui', 
    '-apple-system', 
    'system-ui', 
    'Segoe UI', 
    'Roboto', 
    'Helvetica Neue', 
    'Arial', 
    'Noto Sans', 
    'sans-serif', 
    'Apple Color Emoji', 
    'Segoe UI Emoji', 
    'Segoe UI Symbol', 
    'Noto Color Emoji'
  ]
    }

  },
  plugins: [],
}