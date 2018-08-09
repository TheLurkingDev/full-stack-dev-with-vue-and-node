<template>
  <v-layout row wrap>
    <v-flex xs12>
      <div>{{ message }}</div>
    </v-flex>
    <v-flex xs12>
      <v-btn color="primary" v-on:click="reply">Reply</v-btn>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data () {
    return {
      message: 'Hello there! How are you?'
    };
  },
  methods: {
    reply () {
      this.message = 'I am doing great, thank you!';
    }
  }
}
</script>
