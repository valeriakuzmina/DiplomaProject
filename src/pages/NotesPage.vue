<template>
  <div>
    <input
      type="text"
      placeholder="Новая заметка"
      v-model="newNote"
      class="search-box"
    />
    <button @click="addNote" class="add-note">Add</button>
    <div class="container-for-notes">
      <div v-for="note in notes" :key="note.id" class="note">
        <p>{{ note.text }}</p>
        <img
          class="button-delete"
          src="/images/delete.png"
          @click="deleteNote(note.id)"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newNote: "", // Поле для ввода новой заметки
      notes: [], // Список заметок
      nextId: 1, // ID для новых заметок
    };
  },
  methods: {
    // Метод для добавления новой заметки
    addNote() {
      if (this.newNote.trim() === "") {
        // Игнорировать пустое значение
        return;
      }

      const newNoteObj = {
        id: this.nextId++,
        text: this.newNote,
      };

      // Добавляем новую заметку в список и сохраняем в localStorage
      this.notes.push(newNoteObj);
      this.saveNotesToLocalStorage();
      this.newNote = ""; // Очистить поле ввода после добавления
    },

    // Метод для удаления заметки
    deleteNote(id) {
      this.notes = this.notes.filter((note) => note.id !== id);
      this.saveNotesToLocalStorage(); // Обновить localStorage после удаления
    },

    // Сохранение заметок в localStorage
    saveNotesToLocalStorage() {
      localStorage.setItem("notes", JSON.stringify(this.notes));
    },

    // Загрузка заметок из localStorage при монтировании компонента
    loadNotesFromLocalStorage() {
      const savedNotes = JSON.parse(localStorage.getItem("notes"));
      if (savedNotes) {
        this.notes = savedNotes;
        // Обновляем nextId на основе последнего id в заметках
        if (savedNotes.length > 0) {
          this.nextId = savedNotes[savedNotes.length - 1].id + 1;
        }
      }
    },
  },
  mounted() {
    // Загружаем заметки из localStorage при загрузке компонента
    this.loadNotesFromLocalStorage();
  },
};
</script>

<style scoped>
@import "@/assets/style.css";
</style>
