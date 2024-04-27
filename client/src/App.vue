<script setup>

import WouldYouRather from './components/WouldYouRather.vue'  // imports child WouldYouRather.vue
import { ref, onMounted } from 'vue'  // onMounted provides hook into component, allows app.vue to call onMounted function when page first loaded into user browser
import wyrService from './services/wyrService'

const wyrQuestion = ref('')  // variable holding Question ref
const wyrAnswer1 = ref('')  // variable holding answer1 ref
const wyrAnswer2 = ref('')  // variable holding answer2 ref

// Will store the user's answer
const userSelection = ref('')

onMounted( () => {
  wyrService.getRandomWYR().then( (wyrData) => {
    // Expect wyrData to be something like:
    // {"question":"Play any musical instrument or speak any language?",
    // "answer1":"Play any musical instrument",
    // "answer2":"Speak any language"}
    wyrQuestion.value = wyrData.question
    wyrAnswer1.value = wyrData.answer1
    wyrAnswer2.value = wyrData.answer2
  })
})
function updateUserSelection(userChoice){  // function that takes userChoice parameter and sets userSelection.value to template String listed
  userSelection.value = `Thanks! You chose ${userChoice}`
}

</script>

<template>
  <div id="app-component">

    <h1> Would You Rather? </h1>

  <!-- Connects the properties between parent and child apps listed below -->
    <WouldYouRather
        v-bind:question="wyrQuestion"
        v-bind:answer1="wyrAnswer1"
        v-bind:answer2="wyrAnswer2"
        v-on:answer-selected="updateUserSelection"

    ></WouldYouRather>

    <h2> {{ userSelection }} </h2>  <!-- displays userSelection ref value as an H2 -->
  </div>
</template>

<style scoped>

#app-component{
  font-family: "Fira Code Light";
  font-size: 20px;
  border-radius: 25px;
  padding: 30px;
  background-color: #92BCEA;
  color: #171A21;
}
h2{
  background-color: #7A93AC;
  border-radius: 15px 50px 30px;
  font-size: 40px;
}


</style>
