<template>
  <div>
    <div class="scroll-container">
      <div class="scroll-content">
        <button @click="filterCards('')" class="category all">Все</button>
        <button @click="filterCards('cat')" class="category cat">Кошки</button>
        <button @click="filterCards('dog')" class="category dog">Собаки</button>
        <button @click="filterCards('rodents')" class="category rodents">
          Грызуны
        </button>
        <button @click="filterCards('fish')" class="category fish">
          Рыбки
        </button>
      </div>
    </div>
    <div class="blog-filter-card">
      <div
        class="blog-details-cards"
        v-for="card in filteredCards"
        :key="card.id"
      >
        <img :src="card.imgsrc" alt="" class="blog-details-card-img" />
        <div class="blog-details-card-description">
          <p class="blog-description-date">{{ card.name }}</p>
          <p class="blog-details-description-text">{{ card.article }}</p>
          <svg
            @click="toggleFavorite(card)"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="12"
            height="12"
            class="like"
          >
            <path
              :fill="isFavorite(card.id) ? 'red' : 'none'"
              stroke="gray"
              stroke-width="2"
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </svg>

          <!-- <img :src="card.like" class="like" /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "FilterComponent.vue",
  data() {
    return {
      cards: [
        {
          id: 1,
          teg: "dog",
          imgsrc: "./images/4.jpg",
          name: "Австралийская овчарка",
          article:
            "Эту собаку часто сравнивают с бордер-колли. Они крепкие и мускулистые...",
          like: "./images/like.png",
        },
        {
          id: 2,
          teg: "dog",
          imgsrc: "./images/5.jpeg",
          name: "Австралийский терьер",
          article:
            "Австралийские терьеры отличаются от других терьеров более длинной шеей и спиной...",
          like: "./images/like.png",
        },
        {
          id: 3,
          teg: "dog",
          imgsrc: "./images/6.jpg",
          name: "Аляскинский маламут",
          article:
            "Маламут — это крупная порода, похожая на волка. При этом у нее есть общие черты со шпицем...",
          like: "./images/like.png",
        },
        {
          id: 4,
          teg: "dog",
          imgsrc: "./images/7.jpg",
          name: "Алабай",
          article:
            "Алабай, или среднеазиатская овчарка — крупная пастушья порода...",
          like: "./images/like.png",
        },
        {
          id: 5,
          teg: "dog",
          imgsrc: "./images/8.jpg",
          name: "Американский булли",
          article:
            "Американский булли — крепкая, приземистая собака атлетического телосложения...",
          like: "./images/like.png",
        },
        {
          id: 6,
          teg: "dog",
          imgsrc: "./images/9.jpg",
          name: "Американский спаниель",
          article:
            "Шерсть бывает разных цветов с различными комбинациями оттенков и отметинами...",
          like: "./images/like.png",
        },
        {
          id: 7,
          teg: "dog",
          imgsrc: "./images/10.jpg",
          name: "Анатолийская овчарка",
          article:
            "Анатолийская овчарка — это гигантская мощная собака, телосложение мастифа...",
          like: "./images/like.png",
        },
        {
          id: 8,
          teg: "dog",
          imgsrc: "./images/11.jpg",
          name: "Английский сеттер",
          article:
            "Эта крупная и элегантная порода имеет симметричное и крепкое телосложение...",
          like: "./images/like.png",
        },
        {
          id: 9,
          teg: "dog",
          imgsrc: "./images/12.jpg",
          name: "Афганская борзая",
          article: "Афганская борзая выглядит благородно....",
          like: "./images/like.png",
        },
        {
          id: 10,
          teg: "dog",
          imgsrc: "./images/13.jpg",
          name: "Бассет-хаунд",
          article: "Короткая гладкая шерсть может быть любых окрасов....",
          like: "./images/like.png",
        },
        {
          id: 11,
          teg: "cat",
          imgsrc: "./images/14.jpg",
          name: "Абиссинская кошка",
          article:
            "Элегантные кошки средних размеров с сильными грациозными телами...",
          like: "./images/like.png",
        },
        {
          id: 12,
          teg: "cat",
          imgsrc: "./images/15.jpg",
          name: "Австралийский мист",
          article:
            "Порода короткошерстных кошек среднего размера с большими выразительными глазами...",
          like: "./images/like.png",
        },
        {
          id: 13,
          teg: "cat",
          imgsrc: "./images/16.jpg",
          name: "Азиатская кошка",
          article:
            "Азиатские кошки отличаются длинным мускулистым телом среднего размера и хвостом...",
          like: "./images/like.png",
        },
        {
          id: 14,
          teg: "cat",
          imgsrc: "./images/17.png",
          name: "Американский керл",
          article: "Необычная порода кошек с завернутыми ушами появилась...",
          like: "./images/like.png",
        },
        {
          id: 15,
          teg: "cat",
          imgsrc: "./images/18.jpg",
          name: "Балийская кошка",
          article: "Красивая, элегантная порода среднего размера...",
          like: "./images/like.png",
        },
        {
          id: 16,
          teg: "cat",
          imgsrc: "./images/19.jpg",
          name: "Бенгальская кошка",
          article:
            "Порода унаследовала впечатляющий экстерьер от своих диких предков...",
          like: "./images/like.png",
        },
        {
          id: 17,
          teg: "cat",
          imgsrc: "./images/20.jpg",
          name: "Бирманская",
          article:
            "Довольно большая кошка плотного телосложения с короткими ногами...",
          like: "./images/like.png",
        },
        {
          id: 18,
          teg: "cat",
          imgsrc: "./images/21.jpg",
          name: "Бомбейская кошка",
          article:
            "Кошки среднего телосложения, с блестящей, угольно-черной шерстью...",
          like: "./images/like.png",
        },
        {
          id: 19,
          teg: "cat",
          imgsrc: "./images/22.jpg",
          name: "Британская короткошерстная",
          article: "Крупная порода, имеющая массивное...",
          like: "./images/like.png",
        },
        {
          id: 20,
          teg: "cat",
          imgsrc: "./images/23.jpg",
          name: "Бурманская кошка",
          article:
            "Средних размеров, с круглой головой и элегантным, но в то же время мускулистым телом...",
          like: "./images/like.png",
        },

        {
          id: 21,
          teg: "rodents",
          imgsrc: "./images/24.jpg",
          name: "Ангорский кролик",
          article:
            "Ангорская – одна из наиболее популярных декоративных пород кроликов...",
          like: "./images/like.png",
        },
        {
          id: 22,
          teg: "rodents",
          imgsrc: "./images/25.jpg",
          name: "Ангорский хомяк",
          article: "Пушистые хомячки золотистого окраса...",
          like: "./images/like.png",
        },
        {
          id: 23,
          teg: "rodents",
          imgsrc: "./images/26.jpg",
          name: "Голландский вислоухий кролик",
          article: "Общительные, ласковые и очень дружелюбные кролики. ...",
          like: "./images/like.png",
        },
        {
          id: 24,
          teg: "rodents",
          imgsrc: "./images/27.jpg",
          name: "Дегу(белка)",
          article:
            "Они общительны, очень умны и прекрасно поддаются обучению...",
          like: "./images/like.png",
        },
        {
          id: 25,
          teg: "rodents",
          imgsrc: "./images/28.jpg",
          name: "Джунгарский хомяк",
          article:
            "Джунгарские хомячки легко узнаются по темной продольной полоске на спине...",
          like: "./images/like.png",
        },
        {
          id: 26,
          teg: "rodents",
          imgsrc: "./images/29.jpg",
          name: "Карликовый кролик",
          article:
            "Одни из самых красивых и популярных декоративных кроликов...",
          like: "./images/like.png",
        },
        {
          id: 27,
          teg: "fish",
          imgsrc: "./images/30.jpg",
          name: "Петушок",
          article:
            "Эта великолепная рыбка способна выжить без подачи кислорода...",
          like: "./images/like.png",
        },
        {
          id: 28,
          teg: "fish",
          imgsrc: "./images/31.jpg",
          name: "Скалярия",
          article:
            "Их отличает уплощенное, практически треугольное тело с сильно вытянутыми плавниками...",
          like: "./images/like.png",
        },
        {
          id: 29,
          teg: "fish",
          imgsrc: "./images/32.jpg",
          name: "Барбусы",
          article:
            " Порой создается впечатление, что игры друг с другом прекращаются с выключением света...",
          like: "./images/like.png",
        },
        {
          id: 30,
          teg: "fish",
          imgsrc: "./images/33.jpg",
          name: "Данио",
          article:
            "Данио – суетливые непоседы, которые отлично заполнят верхнюю часть аквариума...",
          like: "./images/like.png",
        },
        {
          id: 31,
          teg: "fish",
          imgsrc: "./images/34.jpg",
          name: "Анциструс",
          article:
            "Они интересны и своей необычной формой тела, и плотными пластинами...",
          like: "./images/like.png",
        },
        {
          id: 32,
          teg: "fish",
          imgsrc: "./images/35.jpg",
          name: "Тернеция",
          article:
            "Отличительная особенность тернеций – плавник образует привлекательную «юбку»...",
          like: "./images/like.png",
        },
        {
          id: 33,
          teg: "fish",
          imgsrc: "./images/36.jpg",
          name: "Гуппи",
          article:
            "Гуппи, без сомнения, лучшая рыбка для начинающих аквариумистов...",
          like: "./images/like.png",
        },
        {
          id: 34,
          teg: "fish",
          imgsrc: "./images/37.jpg",
          name: "Акары",
          article:
            "Но это настоящие гиганты, ведь они способны вырастать до 30 см в длину...",
          like: "./images/like.png",
        },
        {
          id: 35,
          teg: "fish",
          imgsrc: "./images/38.jpg",
          name: "Рыба-попугай",
          article: " Рыбки имеют забавное укороченное бочкообразное тело...",
          like: "./images/like.png",
        },
        {
          id: 36,
          teg: "fish",
          imgsrc: "./images/39.jpg",
          name: "Коридорас",
          article: "Коридорасы – миролюбивые и очень забавные сомики...",
          like: "./images/like.png",
        },
      ],
      selectedTeg: null,
    };
  },
  computed: {
    filteredCards() {
      if (!this.selectedTeg) {
        return this.cards; // Верните все карточки, если фильтр не выбран
      }
      return this.cards.filter((card) => card.teg === this.selectedTeg);
    },
    ...mapGetters(["isFavorite"]),
  },

  methods: {
    filterCards(teg) {
      this.selectedTeg = teg;
    },
    ...mapActions(["toggleFavorite"]),
  },
};
</script>

<style scoped>
@import "@/assets/style.css";
</style>
