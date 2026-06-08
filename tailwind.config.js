/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],

            theme: {
                extend: {
                    colors: {
                        /* Tons Escuros (Cinza Chumbo) */
                        base: '#0F0F11',      
                        surface: '#1A1A1D',   
                        surfaceLight: '#242428',
                        
                        /* Tons Claros Diluídos (Platina/Cinza Claro) */
                        lightBase: '#F4F4F5',  
                        lightSurface: '#E4E4E7', 
                        
                        /* Dourados */
                        gold: '#C5A880',      
                        goldDim: '#A38A66',
                        
                        /* Textos e Bordas */
                        textMain: '#F4F4F5',  
                        textMuted: '#A1A1AA', 
                        textDark: '#18181B',      
                        textDarkMuted: '#52525B', 
                        borderDark: '#27272A', 
                        borderLight: '#D4D4D8'    
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        serif: ['Playfair Display', 'serif'],
                    }
                }
            }
        }
