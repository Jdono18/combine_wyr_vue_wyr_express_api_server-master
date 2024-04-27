<script setup>
import { ref, watch} from 'vue'

defineProps({ // defines properties to pass to the parent component App.vue
  question: String,
  answer1: String,
  answer2: String
})

const emit = defineEmits([ //defines events emitted
    'answer-selected'
])

const choice = ref(null)

// function choiceMade() {
//   // emit event to tell parent that user has made choice.
//   // console.log(choice.value)
//   emit('answer-selected', choice.value)
// }

watch(choice, () => {
  emit('answer-selected', choice.value)  // emit event that watches the choice.value
})
</script>

<template>
  <div id="wyr">
  <h2> Make your choice! </h2>

  <p> {{ question }} </p> <br>

  <div>
  <input id='triangle-house' v-model="choice" v-bind:value="answer1" type="radio">  <!-- binds choice variable to userinput using v-model.  -->
  <label for="triangle-house">  {{ answer1 }} </label>  <!-- displays answer2 ref (reactive data)  -->

  <!-- this value attribute is the HTML value, for what data an input stores -->
  <input id='circle-house' v-model="choice" v-bind:value="answer2" type="radio">  <!-- binds choice variable to userinput using v-model.  -->
  <label for="circle-house"> {{ answer2 }} </label> <br>  <!-- displays answer2 ref (reactive data)  -->
  </div>

  </div>
</template>

<style scoped>
#wyr{
  background-color: #AFB3F7;
  color: #171A21;
  font-family: "Californian FB";
  font-weight: bold;
  font-size: 22px;
  border-radius: 5px;
  padding: 10px;
}

</style>
