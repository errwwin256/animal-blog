import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useAnimalStore = defineStore("animalStore", () => {
  // Load posts from localStorage
  const savedPosts = JSON.parse(localStorage.getItem("animalPosts") || "[]");

  const posts = ref(
    savedPosts.length
      ? savedPosts
      : [
          {
            id: 1,
            title: "🦁 Lion in the Jungle",
            content: "The lion is the king...",
            image: null,
          },
          {
            id: 2,
            title: "🐒 Monkey Tricks",
            content: "Monkeys are playful...",
            image: null,
          },
        ]
  );

  // ✅ Add post (with optional image)
  function addPost(title, content, image = null) {
    posts.value.push({
      id: Date.now(),
      title,
      content,
      image,
    });
  }

  // ✅ Delete post
  function deletePost(id) {
    posts.value = posts.value.filter((p) => p.id !== id);
  }

  // ✅ Update post (title, content, and image if provided)
  function updatePost(id, newTitle, newContent, newImage = null) {
    const post = posts.value.find((p) => p.id === id);
    if (post) {
      post.title = newTitle;
      post.content = newContent;
      if (newImage !== null) {
        post.image = newImage;
      }
    }
  }

  // Auto-save to localStorage whenever posts change
  watch(
    posts,
    (newPosts) => {
      localStorage.setItem("animalPosts", JSON.stringify(newPosts));
    },
    { deep: true }
  );

  return { posts, addPost, deletePost, updatePost };
});
