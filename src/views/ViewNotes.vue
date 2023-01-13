<template>
  <div class="notes">
    <div class="div card has-background-succes p-4 mb-4">
      <div class="field">
        <div class="control">
          <textarea class="textarea" placeholder="Add a new note..."></textarea>
        </div>
      </div>
      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button class="button is-link has-background-success">Add New</button>
        </div>
      </div>
    </div>
    <div v-for="note in notes" :key="note.id" class="card mb-4">
      <div class="card-content">
        <div class="content">
          {{ note.content }}
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a>
      </footer>
    </div>
  </div>
</template>
<script setup>
/* imports */
import { ref } from "vue";
/* notes*/
const newNote = ref("");
const notes = ref([
  {
    id: "id1",
    content: "lorem ipsum note one",
  },
  {
    id: "id2",
    content: "22222222lorem ipsum note two",
  },
]);
</script>
