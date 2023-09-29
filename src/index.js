import * as Vue from 'vue/dist/vue.esm-bundler.js'

const Num = {
    props: ['number'],
    template: `
      <div
          v-bind:class="getClass(number)"
      >
        {{ number }}
      </div>
    `,

    methods: {
        getClass(number) {
            return this.isEven(number) ? 'blue' : 'red'
        },
        isEven(number) {
            return number % 2 === 0
        }
    }
}

const app = Vue.createApp({
    components: {
        Num
    },

    template: `
      
      <num
          v-for="number in numbers"
          v-bind:number="number"
      />
    `,

    data() {
        return {
            numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        }
    },

    computed: {
        evenNumbers() {
            return this.numbers.filter(number => this.isEven(number))
        },
    },

    methods: {
    }
})
app.mount('#app')
