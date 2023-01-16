import { defineStore } from "pinia";

export const useStoreNotes = defineStore("storeNotes", {
  state: () => {
    return {
      notes: [
        {
          id: "id1",
          content: "lorem ipsum note one",
        },
        {
          id: "id2",
          content: "22222222lorem ipsum note two",
        },
      ],
    };
  },
});
