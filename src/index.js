import * as Vue from 'vue/dist/vue.esm-bundler.js'

const app = Vue.createApp({
    template: `
        <button v-on:click="increment">Increment</button>
        <p>{{ count }}</p>
        
        <div 
            v-for="number in numbers"
            v-bind:class="isEven(number) ? 'blue' : 'red'"
        >
          <div> 
            {{ number }} 
          </div>
        </div>
    `,

    data() {
        return {
            count: 0,
            numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        }
    },

    computed: {
        evenNumbers() {
            return this.numbers.filter(number => this.isEven(number))
        }
    },

    methods: {
        increment() {
            this.count += 1
        },
        isEven(number) {
            return number % 2 === 0
        }
    }
})
app.mount('#app')
