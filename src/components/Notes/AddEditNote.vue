<template>
  <div class="div card has-background-succes p-4 mb-4">
    <div class="field">
      <div class="control">
        <textarea
          v-model="modelValue"
          @input="$emit('update:modelValue', modelValue)"
          class="textarea"
          placeholder="Add a new note..."
          ref="newNoteRef"
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
/* props */

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});

/* emits */
const emit = defineEmits(["update:modelValue"]);

/* focus textarea*/
const focusTextarea = () => {
  console.log("focusTextarea");
};
defineExpose({
  focusTextarea,
});
</script>
<style></style>
