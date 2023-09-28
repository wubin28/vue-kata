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
      <button v-on:click="increment">Increment</button>
      <p>{{ count }}</p>


      <input
          type="checkbox"
          v-model="value"
          value="a"
      />
      <input
          type="checkbox"
          v-model="value"
          value="b"
      />

      {{ value }}

      <div class="red">{{ error }}</div>

      <div
          v-for="number in numbers"
      >
        <num v-bind:number="number" />
      </div>
    `,

    data() {
        return {
            count: 0,
            value: ['a'],
            numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        }
    },

    computed: {
        evenNumbers() {
            return this.numbers.filter(number => this.isEven(number))
        },
        error() {
            return this.value.length < 5 ? 'Must be greater than 4 characters' : ''
        }
    },

    methods: {
        increment() {
            this.count += 1
        },
    }
})
app.mount('#app')
