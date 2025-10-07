<template>
  <div class="min-h-screen bg-green-900">
    <!-- Navbar -->
    <nav class="bg-green-800 p-4 text-white shadow-lg">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <!-- Logo -->
        <RouterLink to="/" class="text-2xl font-bold text-yellow-400">
          🐾 Animal Blog
        </RouterLink>

        <!-- Desktop Links -->
        <div class="hidden md:flex gap-6">
          <RouterLink to="/" class="hover:text-yellow-400">Home</RouterLink>
          <RouterLink to="/add" class="hover:text-yellow-400"
            >Add Animal</RouterLink
          >
          <RouterLink to="/about" class="hover:text-yellow-400"
            >About</RouterLink
          >
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="isOpen = !isOpen"
          class="md:hidden p-2 rounded-lg hover:bg-green-700 focus:outline-none"
        >
          <!-- Hamburger Icon -->
          <svg
            v-if="!isOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <!-- Close Icon -->
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu Dropdown with Animation -->
      <transition name="slide-fade">
        <div
          v-if="isOpen"
          class="md:hidden mt-4 flex flex-col gap-3 px-4 pb-4 bg-green-700/90 rounded-lg shadow-lg"
        >
          <RouterLink
            @click="isOpen = false"
            to="/"
            class="hover:text-yellow-400"
            >Home</RouterLink
          >
          <RouterLink
            @click="isOpen = false"
            to="/add"
            class="hover:text-yellow-400"
            >Add Animal</RouterLink
          >
          <RouterLink
            @click="isOpen = false"
            to="/about"
            class="hover:text-yellow-400"
            >About</RouterLink
          >
        </div>
      </transition>
    </nav>

    <!-- Page Content -->
    <main class="p-6">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);
</script>

<style>
/* Transition for mobile menu */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.2s ease-in;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
