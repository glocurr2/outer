<template>
  <section class="content-style">
    <div class="book-detail">
      <div v-for="item in storeBooks.book" :key="item.id" class="display-book">
        <button
          @click="goBack()"
          type="button"
          class="btn btn-outline-primary btn-sm back-button"
        >
          <fa icon="square-caret-left" /> &nbsp; BACK
        </button>

        <h1 class="item-title">{{ item.title }}</h1>
        <div style="clear: both"></div>
        <div class="flex-container">
          <div>
            <img
              v-bind:src="'../src/components/images/' + item.image"
              v-bind:alt="item.title"
              class="img-display"
            />
          </div>
          <div v-if="item.author_image" class="author-image">
            <img
              v-bind:src="'../src/components/images/' + item.author_image"
              v-bind:alt="item.author"
              class="item-image"
            />
          </div>
        </div>
        <div style="clear: both"></div>
        <div class="item-description">
          {{ item.description }}
        </div>
        <div class="mt-4">
          <button
            @click="allBooks()"
            type="button"
            class="btn btn-outline-primary all-button"
          >
            <fa icon="book" /> &nbsp; ALL BOOKS
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useBookStore } from "@/stores/books";

const route = useRoute();
const router = useRouter();

const bookroute = route.params.id;

const storeBooks = useBookStore();

const goBack = () => {
  router.push("/" + bookroute);
};
const allBooks = () => {
  router.push("/");
};

onMounted(() => {
  storeBooks.fetchSingle(route.params.id);
});
</script>

<style scoped>
.all-button {
  background-color: #4b296f;
  color: #fff;
  border-color: #fff;
}
.back-button {
  color: #fff;
  border-color: #fff;
  background-color: #4b296f;
  float: right;
  margin-top: 5px;
  margin-bottom: 20px;
  padding-top: 3px;
  padding-bottom: 3px;
}
</style>
