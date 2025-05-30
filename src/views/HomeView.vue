<template>
  <section class="content-style">
    <div class="display">
      <div
        v-for="item in storeBooks.bookdata"
        :id="book + item.id"
        :key="item.id"
        class="display-book-home each-book"
      >
        <div>
          <img
            @click="gotoDetail(item.id)"
            v-bind:src="'./src/components/images/' + item.image"
            v-bind:alt="item.title"
            class="img-display"
          />
        </div>
        <div class="book-info" @click="gotoDetail(item.id)">
          {{ item.title }} <br />
          by {{ item.author }}<br />
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

const storeBooks = useBookStore();

const gotoDetail = (id) => {
  router.push("/detail/" + id);
};
const book = "book";

onMounted(() => {
  storeBooks.fetchData();
  if (route.params.id) {
    setTimeout(() => {
      const elem = "book" + route.params.id;
      document.getElementById(elem).scrollIntoView();
    }, "500");
  }
});
</script>

<style scoped></style>
