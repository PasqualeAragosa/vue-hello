const { createApp } = Vue

    createApp({
        data() {
        return {
            message: 'Hi I am Vue, Js framework for web Dev!',
            textColor: 'color',
            image: 'random_image'
        }
        },
        methods: {
            changeMessage() {
                this.message = 'Ciao sono Pasquale';
            }
        }
    }).mount('#app')