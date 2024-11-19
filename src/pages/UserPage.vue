<template>
  <div>
    <div class="user-page-croll">
      <div class="visible-container" v-if="isVisible">
        <p class="change">Сохранено!</p>
      </div>
      <div class="visible-container-false" v-if="isMiss">
        <p class="change">Заполните поля!</p>
      </div>
      <p class="page-name">Profile</p>
      <div class="container-for-user">
        <div class="image-container">
          <img src="/images/user.jpg" alt="" />
        </div>
        <p class="name-user">{{ name }} {{ surname }}</p>
        <p class="surname-user">{{ mail }}</p>
      </div>
      <div class="category-user">
        <p class="settings link" @click="clickSubmit">Настройки</p>
        <div class="container-settings" v-if="!flagSetting">
          <label for="name" class="change-name">Имя</label> <br />
          <input
            type="text"
            id="name"
            v-model="newName"
            placeholder="введите новое имя"
          />
          <br />
          <label for="surname" class="change-name">Фамилия</label> <br />
          <input
            type="text"
            id="mail"
            v-model="newSurname"
            placeholder="введите новую фамилию"
          />
          <br />
          <label for="mail" class="change-name">Почта</label> <br />
          <input
            type="mail"
            id="surname"
            v-model="newMail"
            placeholder="введите почту"
          />
          <br />
          <button type="submit" class="btn-submit" @click="updateProfile">
            Сохранить
          </button>
        </div>
        <router-link to="/favorite" class="favorite link">Избранное</router-link>
        <a href="" class="notes link">Заметки</a>
      </div>

      <button class="exit">Выход</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserPage.vue",
  components: {},
  data() {
    return {
      name: "Катерина",
      surname: "Рудская",
      mail: "katerina23@gmail.com",
      newName: "",
      newSurname: "",
      newMail: "",
      flagSetting: true,
      isVisible: false,
      isMiss: false,
    };
  },
  methods: {
    clickSubmit() {
      this.flagSetting = !this.flagSetting;
    },

    updateProfile() {
      // Проверка: если все поля пусты, ничего не делаем
      if (!this.newName && !this.newSurname && !this.newMail) {
        this.isMiss = !this.isMiss;
        setTimeout(() => {
          this.isMiss = !this.isMiss;
        }, 2000);
        // Останавливаем выполнение функции
      } else {
        this.isVisible = !this.isVisible;
      }

      if (this.newName) {
        this.name = this.newName;
      }

      if (this.newSurname) {
        this.surname = this.newSurname;
      }

      if (this.newMail) {
        this.mail = this.newMail;
      }

      setTimeout(() => {
        this.flagSetting = !this.flagSetting;
      }, 1000);

      // setTimeout(() => {
      //   this.isVisible = !this.isVisible;
      // }, 2000);
    },
  },
};
</script>

<style scoped>
@import "@/assets/style.css";

.image-container {
  width: 100px; /* Ширина контейнера */
  height: 100px; /* Высота контейнера */
  border-radius: 50%; /* Делает контейнер круглым */
  overflow: hidden; /* Обрезает содержимое */
  display: inline-block; /* Для корректного отображения */
  margin-top: 20px;
}

.image-container img {
  width: 100%; /* Заполняет весь контейнер по ширине */
  height: 100%; /* Заполняет весь контейнер по высоте */
  object-fit: cover; /* Обрезает изображение, сохраняя пропорции */
  object-position: center; /* Центрирование изображения */
  display: block;
}
</style>
