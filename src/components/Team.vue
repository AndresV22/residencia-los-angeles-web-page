<template>
  <div class="bg-white py-32">
    <div class="mx-auto max-w-7xl px-6 text-center lg:px-8">
      <div class="mx-auto max-w-2xl">
        <h2 class="text-3xl font-bold tracking-tight text-laBlue sm:text-4xl">¡Conoce a nuestro equipo!</h2>
        <p class="mt-4 text-lg leading-8 text-laBlue">Tenemos a las mejores profesionales, listas para atender las necesidades de nuestros abuelitos.</p>
      </div>
      <ul role="list" class="motion-safe:animate-fadeOut mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <li v-for="person in people" :key="person.name">
          <img class="mx-auto h-56 w-56 rounded-full" :src="person.imageUrl" alt="" />
          <h3 class="mt-6 text-base font-semibold leading-7 tracking-tight text-laBlue">{{ person.name }}</h3>
          <p class="text-sm leading-6 text-laBlue">{{ person.role }}</p>
          <ul role="list" class="mt-6 flex justify-center gap-x-6">
            <li>
              <a v-if="person.linkedinUrl != ''" :href="person.linkedinUrl" class="text-gray-400 hover:text-gray-500">
                <span class="sr-only">LinkedIn</span>
                <svg class="h-5 w-5" aria-hidden="true" fill="#454863" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                </svg>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import erika from '@/assets/erika.jpeg'
import varinia from '@/assets/varinia.jpeg'
import nubia from '@/assets/nubia.jpeg'
import catalina from '@/assets/catalina.jpeg'
import vale from '@/assets/vale.jpeg'
import paulina from '@/assets/paulina.jpeg'
import jeannett from '@/assets/jeannette.jpeg'
import katherine from '@/assets/katherine.jpeg'
import andrea from '@/assets/andrea.jpg'

const people = [
  {
    name: 'Erika Roa',
    role: 'Directora',
    imageUrl: erika,
    linkedinUrl: 'https://www.linkedin.com/in/erika-roa-eyzaguirre-11523b18/',
  },
  {
    name: 'Valeria Zúñiga',
    role: 'Talleres recreativos',
    imageUrl: vale,
    linkedinUrl: 'https://www.linkedin.com/in/valeria-zu%C3%B1iga-65040a250/',
  },
  {
    name: 'Paulina Villalobos',
    role: 'Nutricionista',
    imageUrl: paulina,
    linkedinUrl: '',
  },
  {
    name: 'Varinia Salazar',
    role: 'Peluquera',
    imageUrl: varinia,
    linkedinUrl: '',
  },
  {
    name: 'Nubia Fuentes',
    role: 'Asistente de día',
    imageUrl: nubia,
    linkedinUrl: '',
  },
  {
    name: 'Catalina Torres',
    role: 'Kinesióloga',
    imageUrl: catalina,
    linkedinUrl: '',
  },
  {
    name: 'Jeannette Guajardo',
    role: 'Podología',
    imageUrl: jeannett,
    linkedinUrl: '',
  },
  {
    name: 'Katherine Acuña',
    role: 'Fonoaudiología',
    imageUrl: katherine,
    linkedinUrl: '',
  },
  {
    name: 'Andrea Chávez',
    role: 'Médico tratante',
    imageUrl: andrea,
    linkedinUrl: '',
  },
]
</script>