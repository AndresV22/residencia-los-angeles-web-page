<template>
  <div class="overflow-hidden bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl md:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
        <div class="px-6 lg:px-0 lg:pt-4 lg:pr-4">
          <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
            <h2 class="text-base font-semibold leading-7 text-laGreen">Características de la residencia</h2>
            <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">¿Qué ofrecemos?</p>
            <p class="mt-6 text-lg leading-8 text-gray-600">Nos enorgullece contar con un equipo de profesionales altamente capacitados en diversas áreas, desde cuidados médicos y terapias hasta talleres recreativos y servicios de belleza. Además, nuestras instalaciones están diseñadas para ofrecer un ambiente cálido y acogedor, donde nuestros abuelitos pueden sentirse como en casa.</p>
            <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
              <div v-for="feature in features" :key="feature.name" class="relative pl-9">
                <dt class="inline font-semibold text-gray-900">
                  <Icon :icon="feature.icon" class="h-5 w-5 absolute top-1 left-1 text-laGreen" aria-hidden="true" />
                  {{ feature.name }}
                </dt>
                {{ ' ' }}
                <dd class="inline">{{ feature.description }}</dd>
              </div>
            </dl>
          </div>
        </div>
        <div class="motion-safe:animate-fadeOut sm:px-6 lg:px-0">
          <div class="relative isolate overflow-hidden bg-laGreen px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pt-16 sm:pl-16 sm:pr-0 lg:mx-0 lg:max-w-none">
            <div class="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white" aria-hidden="true" />
            <div class="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
              <img src="@/assets/kine.jpeg" alt="Product screenshot" width="2432" height="1442" class="-mb-12 w-[57rem] max-w-none rounded-tl-xl bg-gray-800 ring-1 ring-white/10" />
            </div>
            <div class="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue'

export default {
  name: 'features',
  components: {
      Icon
  },
  setup() {
    const features = [
      {
        name: 'Servicios médicos',
        icon: 'material-symbols:medical-information-outline',
        description: "Contamos servicios médicos como enfermería, kinesiología, medicina general, nutricionista, podología y fonoaudiología.",
      },
      {
        name: 'Peluquería',
        icon: 'mdi:scissors',
        description: "Nuestra peluquera profesional se encarga de mantener el estilo de nuestros abuelitos.",
      },
      {
        name: 'Talleres cognitivos',
        icon: 'mdi:brain-freeze-outline',
        description:
          "Ofrecemos talleres cognitivos para estimular la memoria y la concentración de nuestros abuelitos. Además, contamos con un espacio de juegos para que puedan divertirse y pasar un buen rato.",
      },
      {
        name: 'Huerto orgánico',
        icon: 'tabler:seeding',
        description:
          "Fomentamos un estilo de vida saludable y sostenible. Contamos con un huerto orgánico en el que nuestros abuelitos pueden participar en la siembra y cosecha de diferentes verduras y frutas de temporada.",
      },
      {
        name: 'Comodidad',
        icon: 'mdi:sofa',
        description:
          "Nuestras habitaciones son amplias y cuentan con camas individuales, calefacción y ventilación natural.",
      }
    ]

    return {
        features,
      }
  }
}
</script>