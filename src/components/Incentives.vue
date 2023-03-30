<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<template>
  <div class="bg-gray-50">
    <div class="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
      <div class="mx-auto max-w-2xl px-4 lg:max-w-none">
        <div class="grid grid-cols-1 items-center gap-y-10 gap-x-16 lg:grid-cols-2">
          <div>
            <h2 class="text-4xl font-bold tracking-tight text-gray-900">Nos preocupamos por nuestros abuelitos y por nuestros clientes</h2>
            <p class="mt-4 text-gray-500">Sabemos lo importante que es para usted contar con la mejor atención para sus seres queridos, por eso queremos brindarle una oportunidad única de experimentar nuestros servicios a un precio asequible. ¡No pierda la oportunidad de brindarles la mejor calidad de vida a sus seres queridos en Residencia Los Ángeles!</p>
          </div>
          <div class="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg bg-gray-100">
            <img src="@/assets/frase.png" alt="" class="object-cover object-center" />
          </div>
        </div>
        <div class="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
          <div v-for="incentive in incentives" :key="incentive.name" class="sm:flex lg:block">
            <div class="sm:flex-shrink-0">
              <Icon :icon="incentive.icon" class="h-10 w-10 text-gray-400" aria-hidden="true" />
            </div>
            <div class="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
              <h3 class="text-xl font-medium text-gray-900">{{ incentive.name }}</h3>
              <p class="mt-2 text-sm text-gray-500">{{ incentive.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue'
export default {
  name: 'Incentives',
  components: {
      Icon
  },
  setup() {
      const incentives = [
        {
          name: 'Peluquería',
          icon: 'mdi:scissors',
          description: "En Residencia Los Ángeles contamos con una peluquera profesional para brindar servicios de corte de cabello, peinados y arreglo de barba para nuestros abuelitos.",
        },
        {
          name: 'Servicios médicos',
          icon: 'material-symbols:medical-information-outline',
          description: "Contamos con un equipo de profesionales médicos altamente capacitados para atender todas las necesidades médicas de nuestros abuelitos. Ofrecemos servicios de enfermería y especialidades como podología, kinesiología y fonoaudiología.",
        },
        {
          name: 'Huerto orgánico',
          icon: 'tabler:seeding',
          description:
            "En Residencia Los Ángeles fomentamos un estilo de vida saludable y sostenible. Contamos con un huerto orgánico en el que nuestros abuelitos pueden participar en la siembra y cosecha de diferentes verduras y frutas de temporada.",
        },
        {
          name: 'Talleres cognitivos',
          icon: 'mdi:brain-freeze-outline',
          description:
            "Ofrecemos una variedad de talleres cognitivos diseñados para mantener la mente activa y mejorar la memoria y el pensamiento lógico. Algunos de nuestros talleres incluyen juegos de mesa, ejercicios de memoria y charlas educativas.",
        },
      ]

      return {
          incentives,
      }
  }
}
</script>