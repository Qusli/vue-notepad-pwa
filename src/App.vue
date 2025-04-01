<script setup lang="ts">
import { onMounted } from 'vue';
import { useNotesStore } from './stores/notes.store';

const notesStore = useNotesStore();

onMounted(() => {
  notesStore.init()
})
</script>

<template>
  <div :class="$s.wrapper">
    <RouterView />
  </div>
</template>

<style lang="scss" module="$s">
.wrapper {}
</style>
