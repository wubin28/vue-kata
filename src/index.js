import * as Vue from 'vue/dist/vue.esm-bundler.js'

const Num = {
    props: ['number'],
    template: `
      <button
          v-bind:class="getClass(number)"
          v-on:click="click"
      >
        {{ number }}
      </button>
    `,

    methods: {
        click() {
            this.$emit('chosen', this.number)
        },
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
          v-on:chosen="addNumber"
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
        addNumber(number) {
            console.log('number', number)
        }
    }
})
app.mount('#app')
