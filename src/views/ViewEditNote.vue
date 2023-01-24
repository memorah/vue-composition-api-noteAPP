<template>
  <div class="edit-note">
    <h1>Edit Note with an id of: {{ $route.params.id }}</h1>
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
            @click="addNote"
            :disabled="!newNote"
            class="button is-link has-background-success"
          >
            Add Notes
          </button>
        </div>
      </div>
      <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />
    </div>
  </div>
</template>
<script setup></script>
