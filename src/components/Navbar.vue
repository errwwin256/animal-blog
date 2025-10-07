<template>
  <nav
    class="bg-green-900/95 backdrop-blur-md border-b border-green-700 shadow-lg"
  >
    <div class="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
      <!-- Logo -->
      <h1
        class="text-3xl font-logo text-yellow-400 drop-shadow-lg tracking-wide"
      >
        🐾 Jungle Blog
      </h1>

      <!-- Links -->
      <div class="space-x-6 text-lg font-links font-semibold">
        <RouterLink
          to="/"
          class="hover:text-yellow-400 transition duration-200"
          active-class="text-yellow-300 underline underline-offset-4"
        >
          Home
        </RouterLink>
        <RouterLink
          to="/add"
          class="hover:text-yellow-400 transition duration-200"
          active-class="text-yellow-300 underline underline-offset-4"
        >
          Add Animal
        </RouterLink>
        <RouterLink
          to="/about"
          class="hover:text-yellow-400 transition duration-200"
          active-class="text-yellow-300 underline underline-offset-4"
        >
          About
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<style>
/* Jungle Blog logo font */
.font-logo {
  font-family: "Pacifico", cursive;
}

/* Navbar links font */
.font-links {
  font-family: "Fredoka", sans-serif;
}
</style>
