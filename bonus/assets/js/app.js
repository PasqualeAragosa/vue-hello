const { createApp } = Vue

    createApp({
        data() {
        return {
            message: 'Hi I am Vue, Js framework for web Dev!',
            textColor: 'color',
            url: 'https://i.picsum.photos/id/83/200/300.jpg?grayscale&hmac=oKvr7XvXWNAfiGxcA2ZgRrdbM5GTHeLihTRUuaLYPSc'
        }
        },
        methods: {
            changeMessage() {
                this.message = 'Ciao sono Pasquale';
            }
        }
    }).mount('#app')