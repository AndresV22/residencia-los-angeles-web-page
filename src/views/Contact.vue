<template>
    <section>
        <Header></Header>
    </section>

    <section>
        <div class="relative isolate bg-white">
            <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
            <div class="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:py-48 lg:px-8">
                <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                <div class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
                    <svg class="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
                    <defs>
                        <pattern id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527" width="200" height="200" x="100%" y="-1" patternUnits="userSpaceOnUse">
                        <path d="M130 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" stroke-width="0" fill="white" />
                    <svg x="100%" y="-1" class="overflow-visible fill-gray-50">
                        <path d="M-470.5 0h201v201h-201Z" stroke-width="0" />
                    </svg>
                    <rect width="100%" height="100%" stroke-width="0" fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
                    </svg>
                </div>
                <h2 class="text-3xl font-bold tracking-tight text-gray-900">Contáctanos</h2>
                <p class="mt-6 text-lg leading-8 text-gray-600">Atenderemos con gusto tus dudas e inquietudes.</p>
                <dl class="mt-10 space-y-4 text-base leading-7 text-gray-600">
                    <div class="flex gap-x-4">
                    <dt class="flex-none">
                        <span class="sr-only">Dirección</span>
                        <BuildingOffice2Icon class="h-7 w-6 text-gray-400" aria-hidden="true" />
                    </dt>
                    <dd>Avenida Carrascal 2681,<br />Quinta Normal</dd>
                    </div>
                    <div class="flex gap-x-4">
                    <dt class="flex-none">
                        <span class="sr-only">Teléfono</span>
                        <PhoneIcon class="h-7 w-6 text-gray-400" aria-hidden="true" />
                    </dt>
                    <dd><a class="hover:text-gray-900" href="tel:+56993095568">+569 9309 5568</a></dd>
                    </div>
                    <div class="flex gap-x-4">
                    <dt class="flex-none">
                        <span class="sr-only">Email</span>
                        <EnvelopeIcon class="h-7 w-6 text-gray-400" aria-hidden="true" />
                    </dt>
                    <dd><a class="hover:text-gray-900" href="mailto:eroa.ey@gmail.com">eroa.ey@gmail.com</a></dd>
                    </div>
                </dl>
                <p class="mt-10 text-lg leading-8 text-gray-600">Síguenos en nuestras redes:</p>
                <dl class="mt-10 space-y-4 text-base leading-7 text-gray-600">
                    <div class="flex gap-x-4">
                    <dt class="flex-none">
                        <span class="sr-only">Instagram</span>
                        <Icon icon="mdi:instagram" class="h-7 w-6 text-gray-400" aria-hidden="true" />
                    </dt>
                    <dd><a class="hover:text-gray-900" href="https://www.instagram.com/losangeles.residenciaa/">Instagram</a></dd>
                    </div>
                    <div class="flex gap-x-4">
                    <dt class="flex-none">
                        <span class="sr-only">Facebook</span>
                        <Icon icon="mdi:facebook" class="h-7 w-6 text-gray-400" aria-hidden="true" />
                    </dt>
                    <dd><a class="hover:text-gray-900" href="https://www.facebook.com/profile.php?id=100089353174560">Facebook</a></dd>
                    </div>
                </dl>
                </div>
            </div>
            <form ref="contactform" @submit.prevent="onSubmit" class="px-6 pb-24 pt-20 sm:pb-32 lg:py-48 lg:px-8">
                <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                <div class="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
                    <div>
                    <label for="firstName" class="block text-sm font-semibold leading-6 text-gray-900">Nombre</label>
                    <div class="mt-2.5">
                        <input required v-model="form.firstName" type="text" name="firstName" id="firstName" autocomplete="given-name" class="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-laGreenLight sm:text-sm sm:leading-6" />
                    </div>
                    </div>
                    <div>
                    <label for="lastName" class="block text-sm font-semibold leading-6 text-gray-900">Apellido</label>
                    <div class="mt-2.5">
                        <input type="text" v-model="form.lastName" name="lastName" id="lastName" autocomplete="family-name" class="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-laGreenLight sm:text-sm sm:leading-6" />
                    </div>
                    </div>
                    <div class="sm:col-span-2">
                    <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email</label>
                    <div class="mt-2.5">
                        <input required v-model="form.email" type="email" name="email" id="email" autocomplete="email" class="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-laGreenLight sm:text-sm sm:leading-6" />
                    </div>
                    </div>
                    <div class="sm:col-span-2">
                    <label for="phone" class="block text-sm font-semibold leading-6 text-gray-900">N° celular</label>
                    <div class="mt-2.5">
                        <input type="tel" v-model="form.phone" name="phone" id="phone" autocomplete="tel" class="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-laGreenLight sm:text-sm sm:leading-6" />
                    </div>
                    </div>
                    <div class="sm:col-span-2">
                    <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Mensaje</label>
                    <div class="mt-2.5">
                        <textarea required v-model="form.message" name="message" id="message" rows="4" class="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-laGreenLight sm:text-sm sm:leading-6" />
                    </div>
                    </div>
                </div>
                <div class="mt-8 flex justify-end">
                    <button type="submit" class="rounded-md bg-laGreen px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-laGreenLight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-laGreenLight">Enviar mensaje</button>
                </div>
                </div>
            </form>
            </div>
        </div>
    </section>
    
    <section>
        <Footer></Footer>
    </section>
</template>
<script>
    import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/vue/24/outline'
    import Header from '@/components/Header.vue'
    import Footer from '@/components/Footer.vue'
    import Hero from '@/components/Hero.vue'
    import Testimonials from '@/components/Testimonials.vue'
    import emailjs from 'emailjs-com'
    import { reactive } from 'vue'
    import { Icon } from '@iconify/vue'
    
    export default {
        name: 'Contact',
        components: {
            Header,
            Footer,
            Hero,
            Testimonials,
            BuildingOffice2Icon,
            EnvelopeIcon,
            PhoneIcon,
            Icon
        },
        mounted() {
            emailjs.init('59QH7487ZAcWXO0r5');
            
            // enlaza manualmente la función onSubmit al componente
            this.onSubmit = this.onSubmit.bind(this);
        },
        setup() {
            const form = reactive({
                firstName: "",
                lastName: "",
                phone: "",
                message: "",
                email: ''
            })

            const onSubmit = async (e) => {
                if(form.email != '' && form.firstName != '') {
                    console.log("Enviando...")
                    try {
                        await emailjs.sendForm('service_nz0zzdr', 'template_3xmbafu', e.target,
                        '59QH7487ZAcWXO0r5')
                        console.log("Enviado.")
                        form.firstName = ''
                        form.lastName = ''
                        form.phone = ''
                        form.message = ''
                        form.email = ''
                    } catch (error) {
                        console.log({ error })
                    }
                } else {
                    console.log("Faltan datos.")
                    return
                }
            }

            return {
                form,
                onSubmit
            }
        }
    }
</script>