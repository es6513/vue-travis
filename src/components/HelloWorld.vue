<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>change word</h2>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
    <div>{{ dateTime }}</div>
    <div class="count">Count: {{ count }}</div>
    <button @click="increment">Add Input Number To Count</button>
    <button class="decrement" @click="decrement">
      Add Input Number To Count
    </button>

    <input class="myInput" v-model.number="step" />
    <div>Test Content221111222222</div>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      dateTime: dayjs(new Date()),
      count: 0,
      step: 0,
    };
  },
  methods: {
    increment() {
      this.count += this.step;
    },
    decrement() {
      this.count -= 1;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
