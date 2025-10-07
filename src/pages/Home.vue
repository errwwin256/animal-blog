<script setup>
import { ref } from "vue";
import { useAnimalStore } from "../stores/animalStore";

const store = useAnimalStore();

// Editing state
const editingId = ref(null);
const editTitle = ref("");
const editContent = ref("");
const editImage = ref(null);

// Delete state
const deleteId = ref(null);

function startEdit(post) {
  editingId.value = post.id;
  editTitle.value = post.title;
  editContent.value = post.content;
  editImage.value = post.image;
}

function handleImageUpload(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    editImage.value = reader.result;
  };
  reader.readAsDataURL(file);
}

function saveEdit(id) {
  store.updatePost(id, editTitle.value, editContent.value, editImage.value);
  editingId.value = null;
}

function cancelEdit() {
  editingId.value = null;
}

function confirmDelete(id) {
  deleteId.value = id;
}

function deletePost() {
  store.deletePost(deleteId.value);
  deleteId.value = null;
}
</script>

<template>
  <div class="p-4 sm:p-6 text-white max-w-6xl mx-auto">
    <h1
      class="text-3xl sm:text-4xl font-bold mb-6 text-yellow-400 text-center sm:text-left"
    >
      🐆 Jungle Animal Posts
    </h1>

    <!-- Responsive grid -->
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="post in store.posts"
        :key="post.id"
        class="bg-green-800 rounded-xl shadow-lg overflow-hidden border border-green-700"
      >
        <!-- Editing mode -->
        <div v-if="editingId === post.id" class="p-4">
          <input
            v-model="editTitle"
            placeholder="Title"
            class="w-full mb-2 p-2 text-black rounded text-sm sm:text-base"
          />
          <textarea
            v-model="editContent"
            rows="3"
            placeholder="Content"
            class="w-full mb-2 p-2 text-black rounded text-sm sm:text-base"
          ></textarea>

          <!-- Image upload -->
          <input
            type="file"
            accept="image/*"
            @change="handleImageUpload"
            class="mb-2 block w-full text-xs sm:text-sm text-yellow-200 file:mr-2 sm:file:mr-4 file:py-1 sm:file:py-2 file:px-2 sm:file:px-4 file:rounded-lg file:border-0 file:text-xs sm:file:text-sm file:font-semibold file:bg-yellow-500 file:text-black hover:file:bg-yellow-600"
          />

          <img
            v-if="editImage"
            :src="editImage"
            class="mb-2 rounded-lg max-h-40 w-full object-cover"
          />

          <!-- Buttons stack on mobile -->
          <div class="flex flex-col sm:flex-row gap-2">
            <button
              @click="saveEdit(post.id)"
              class="flex-1 bg-yellow-500 text-black px-3 py-2 rounded"
            >
              💾 Save
            </button>
            <button
              @click="cancelEdit"
              class="flex-1 bg-gray-500 px-3 py-2 rounded"
            >
              ❌ Cancel
            </button>
          </div>
        </div>

        <!-- Normal view -->
        <div v-else>
          <img
            v-if="post.image"
            :src="post.image"
            alt="Animal Image"
            class="w-full h-40 sm:h-48 object-cover"
          />
          <div class="p-4">
            <h2 class="text-xl sm:text-2xl font-bold text-yellow-300 mb-2">
              {{ post.title }}
            </h2>
            <p class="text-gray-200 text-sm sm:text-base">{{ post.content }}</p>

            <!-- Buttons -->
            <div class="flex flex-col sm:flex-row gap-2 mt-4">
              <button
                @click="startEdit(post)"
                class="flex-1 bg-yellow-500 text-black px-3 py-2 rounded hover:bg-yellow-600"
              >
                ✏️ Edit
              </button>
              <button
                @click="confirmDelete(post.id)"
                class="flex-1 bg-red-500 px-3 py-2 rounded hover:bg-red-600"
              >
                🗑️ Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Confirmation Modal -->
    <div
      v-if="deleteId"
      class="fixed inset-0 flex items-center justify-center bg-black/60 z-50 p-4"
    >
      <div
        class="bg-green-900 p-6 rounded-xl shadow-xl text-center w-full max-w-sm"
      >
        <h2 class="text-xl sm:text-2xl font-bold text-yellow-400 mb-4">
          ⚠️ Confirm Delete
        </h2>
        <p class="text-gray-200 mb-6 text-sm sm:text-base">
          Are you sure you want to delete this post?
        </p>

        <div class="flex flex-col sm:flex-row gap-3">
          <button
            @click="deletePost"
            class="flex-1 bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white font-bold"
          >
            Yes, Delete
          </button>
          <button
            @click="deleteId = null"
            class="flex-1 bg-gray-500 hover:bg-gray-600 px-4 py-2 rounded text-white font-bold"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
