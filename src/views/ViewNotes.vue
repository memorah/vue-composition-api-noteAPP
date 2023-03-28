<template>
  <div class="notes">
    <AddEditNote
      v-model="newNote"
      ref="addEditNoteRef"
      placeholder="Add a new note"
    >
      <template #buttons>
        <button
          @click="addNote"
          :disabled="!newNote"
          class="button is-link has-background-success"
        >
          Add Notes
        </button>
      </template>
    </AddEditNote>
  </div>
  <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />
</template>
<script setup>
/* imports */
import { ref } from "vue";
import Note from "@/components/Notes/NoTe.vue";
import AddEditNote from "@/components/Notes/AddEditNote.vue";
import { useStoreNotes } from "@/stores/storeNotes";
/*store*/
const storeNotes = useStoreNotes();
/* notes*/
const newNote = ref("");
const addEditNoteRef = ref(null);
const addNote = () => {
  storeNotes.addNote(newNote.value);
  newNote.value = "";
  addEditNoteRef.value.focusTextarea();
};
</script>
