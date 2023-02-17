<template>
  <div class="edit-note">
    <AddEditNote
      v-model="noteContent"
      ref="addEditNoteRef"
      bgColor="grey"
      placeholder="Edit note"
    >
      <template #buttons>
        <button
          class="button is-link has-background-grey"
          :disabled="!noteContent"
        >
          Save Note
        </button>
      </template>
    </AddEditNote>
  </div>
</template>
<script setup>
/* import */
import { ref } from "vue";
import AddEditNote from "@/components/Notes/AddEditNote.vue";

/* note */
const noteContent = ref("");
</script>
