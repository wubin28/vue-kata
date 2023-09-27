import * as Vue from 'vue/dist/vue.esm-bundler.js'

const app = Vue.createApp({
    template: `
        <h1>Hello {{ message }}</h1>
    `,

    data() {
        return {
            message: 'Vue 3!'
        }
    }
})
app.mount('#app')
