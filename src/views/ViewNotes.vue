<template>
  <div class="notes">
    <div class="div card has-background-succes p-4 mb-4">
      <div class="field">
        <div class="control">
          <textarea
            v-model="newNote"
            class="textarea"
            placeholder="Add a new note..."
            ref="newNoteRef"
          ></textarea>
        </div>
      </div>
      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            @click="storeNotes.addNote"
            :disabled="!newNote"
            class="button is-link has-background-success"
          >
            Add New
          </button>
        </div>
      </div>
      <Note
        v-for="note in storeNotes.notes"
        :key="note.id"
        :note="note"
        @deleteClicked="deleteNote"
      />
    </div>
  </div>
</template>
<script setup>
/* imports */
import { ref } from "vue";
import Note from "@/components/Notes/NoTe.vue";
import { useStoreNotes } from "@/stores/storeNotes";
/*store*/
const storeNotes = useStoreNotes();
/* notes*/
const newNote = ref("");
const newNoteRef = ref(null);

const addNote = () => {
  storeNotes.addNote(newNote.value);
  newNote.value = "";
  newNoteRef.value.focus();
};
/* deleteNote*/
const deleteNote = (idToDelete) => {
  notes.value = notes.value.filter((note) => {
    return note.id !== idToDelete;
  });
};
</script>
