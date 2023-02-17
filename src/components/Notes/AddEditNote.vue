<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div class="div card p-4 mb-4" :class="'has-background-${ bgColor }-dark'">
    <div class="field">
      <div class="control">
        <textarea
          v-model="modelValue"
          @input="$emit('update:modelValue', modelValue)"
          class="textarea"
          placeholder="Add a new note..."
          ref="textareaRef"
        />
      </div>
    </div>
    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons"></slot>
      </div>
    </div>
  </div>
</template>
<script setup>
/* import */
import { ref } from "vue";
/* props */

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  bgColor: {
    type: String,
    default: "succsess",
  },
});

/* emits */
const emit = defineEmits(["update:modelValue"]);

/* focus textarea*/
const textareaRef = ref(null);
const focusTextarea = () => {
  textareaRef.value.focus();
};
defineExpose({
  focusTextarea,
});
</script>
<style></style>
