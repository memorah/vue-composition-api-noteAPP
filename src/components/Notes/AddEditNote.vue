<template>
  <div class="div card has-background-succes p-4 mb-4">
    <div class="field">
      <div class="control">
        <textarea
          class="textarea"
          placeholder="Add a new note..."
          ref="newNoteRef"
        ></textarea>
      </div>
    </div>
    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons"></slot>
      </div>
    </div>
  </div>
</template>

<style></style>
