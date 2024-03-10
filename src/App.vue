<script setup>
import Card from "@/components/Card.vue";
import {useFetch} from "@/composables/fetch.js";
import Search from "@/components/Search.vue";
import { onMounted, ref, watchEffect} from "vue";

//get Data
const postsURL = 'https://jsonplaceholder.typicode.com/posts?_limit=10';
const usersURL = 'https://jsonplaceholder.typicode.com/users?_limit=10';

const posts = ref([]);
const users = ref([]);

const searchString = ref('');
const postsWithAuthor = ref([]);

watchEffect(() => {
  postsWithAuthor.value = posts.value
    .map((item, index) => ({
    ...item,
    author: users.value[index].name,
    }))
    .filter(post =>
      post.author.toLowerCase().includes(searchString.value.toLowerCase())
    );
});

onMounted(async () => {
  [posts.value, users.value] = await Promise.all([useFetch(postsURL), useFetch(usersURL)]);
})
</script>

<template>
  <div class="container">
    <h1 class="text-center pt-5">Vue + Bootstrap test</h1>
    <Search v-model="searchString"/>
    <div class="row mt-5 gap-4">
      <Card v-for="(post) in postsWithAuthor" :title="post.title" :text="post.body" :author="post.author"/>
    </div>
  </div>
</template>

<style lang="scss">
body  {
  background-color: var(--bs-light) !important;
}
</style>
