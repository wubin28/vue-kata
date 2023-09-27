import * as Vue from 'vue/dist/vue.esm-bundler.js'

const app = Vue.createApp({
    template: `
        <button v-on:click="increment(5)">Increment</button>
        <p>{{ count }}</p>
    `,

    data() {
        return {
            count: 0
        }
    },

    methods: {
        increment(initialValue = 1) {
            this.count += initialValue
        }
    }
})
app.mount('#app')
