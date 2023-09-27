import * as Vue from 'vue/dist/vue.esm-bundler.js'

const app = Vue.createApp({
    template: `
        <button v-on:click="increment">Increment</button>
        <p>{{ count }}</p>
        
        <div v-for="number in numbers">
          <div> {{ number }} </div>
        </div>
        
        <div v-if="isEven()">Even</div>
        <div v-else>Odd</div>
    `,

    data() {
        return {
            count: 0,
            numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        }
    },

    methods: {
        increment() {
            this.count += 1
        },
        isEven() {
            return this.count % 2 === 0
        }
    }
})
app.mount('#app')
