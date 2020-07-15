<template>
  <div class="home-page">
      <div class="hero">
        <div class="text-container flex column justify-center align-center">
          <h1 class="tc-header">Create a Website You’re Proud Of, Simply.</h1>
          <button @click.stop="$router.push('/editor')" class="start-btn">
             Build your website
          </button>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'home-page',
}


</script>
