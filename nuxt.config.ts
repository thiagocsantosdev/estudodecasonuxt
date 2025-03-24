import Aura from '@primeuix/themes/aura';

export default defineNuxtConfig({

    modules: [
        '@primevue/nuxt-module'
    ],
    primevue: {
   
        options: {
          
            theme: {
                preset: Aura,
                options: {
                  darkModeSelector: 'none',
              }
            }
        }
    },
    devServer: {
        host: '0.0.0.0', // Permite acesso pela rede
        port: 3000
      }

})