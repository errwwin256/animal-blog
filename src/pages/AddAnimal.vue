<script setup>
import { ref } from "vue";
import { useAnimalStore } from "../stores/animalStore";
import { useRouter } from "vue-router";

const title = ref("");
const content = ref("");
const image = ref(null); // ✅ holds the base64 or URL
const store = useAnimalStore();
const router = useRouter();

function handleImageUpload(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    image.value = reader.result; // store base64
  };
  reader.readAsDataURL(file);
}

function addAnimal() {
  if (!title.value || !content.value) return;
  store.addPost(title.value, content.value, image.value);
  title.value = "";
  content.value = "";
  image.value = null;
  router.push("/"); // redirect to Home
}
</script>

<template>
  <div class="p-6 text-white max-w-3xl mx-auto">
    <h1 class="jungle-title text-4xl mb-6 text-yellow-400 drop-shadow-lg">
      ➕ Add Animal Post
    </h1>

    <div
      class="bg-green-800/90 rounded-2xl shadow-xl border border-green-700 p-6"
    >
      <!-- Title -->
      <label class="block mb-3">
        <span class="text-lg font-semibold text-yellow-300">Title</span>
        <input
          v-model="title"
          placeholder="Enter animal title..."
          class="w-full p-3 mt-1 text-black rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400"
        />
      </label>

      <!-- Content -->
      <label class="block mb-3">
        <span class="text-lg font-semibold text-yellow-300">Content</span>
        <textarea
          v-model="content"
          placeholder="Write something about the animal..."
          rows="5"
          class="w-full p-3 mt-1 text-black rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400"
        ></textarea>
      </label>

      <!-- Image Upload -->
      <label class="block mb-4">
        <span class="text-lg font-semibold text-yellow-300">Image</span>
        <input
          type="file"
          accept="image/*"
          @change="handleImageUpload"
          class="mt-2 block w-full text-sm text-yellow-200 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-yellow-500 file:text-black hover:file:bg-yellow-600"
        />
      </label>

      <!-- Preview -->
      <div v-if="image" class="mb-4">
        <p class="text-yellow-300 font-semibold mb-2">Preview:</p>
        <img :src="image" alt="Preview" class="rounded-lg shadow-lg max-h-60" />
      </div>

      <!-- Button -->
      <button
        @click="addAnimal"
        class="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold py-3 px-4 rounded-lg shadow-lg transition"
      >
        🐾 Add Post
      </button>
    </div>
  </div>
</template>
