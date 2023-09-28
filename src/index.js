import * as Vue from 'vue/dist/vue.esm-bundler.js'

const Hello = {
    props: ['greeting'],
    template: `
    <p>{{ greeting }}!</p>
    `
}

const app = Vue.createApp({
    components: {
        Hello
    },

    template: `
      <button v-on:click="increment">Increment</button>
      <p>{{ count }}</p>

      <hello v-bind:greeting="'Hello'" />

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
          v-bind:class="getClass(number)"
      >
        <div>
          {{ number }}
        </div>
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
        getClass(number) {
            return this.isEven(number) ? 'blue' : 'red'
        },
        increment() {
            this.count += 1
        },
        isEven(number) {
            return number % 2 === 0
        }
    }
})
app.mount('#app')
