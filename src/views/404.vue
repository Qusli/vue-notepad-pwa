<script setup lang='ts'>
import { ROUTES } from '@/constants/routes.constants';
import { useI18n } from 'vue-i18n';

const { t } = useI18n()
</script>

<template>
    <section :class="$s.page">
        <h1>{{ t("404.title") }}</h1>
        <RouterLink :to="{ name: ROUTES.NOTE_LIST }">{{ t("404.go-to-note-list") }}</RouterLink>
    </section>
</template>

<style lang='scss' module='$s'>
.page {
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>