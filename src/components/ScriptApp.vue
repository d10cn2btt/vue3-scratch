<template>
    <h3>ScriptApp</h3>
    <h2>{{ name }}</h2>
    <h2>{{ name_in_setup }}</h2>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'ScriptApp',
    data: () => ({
        name: 'btt',
    }),
    setup() {
        let name_in_setup = 'btt wth setup';

        return { name_in_setup };
    }
})
</script>
