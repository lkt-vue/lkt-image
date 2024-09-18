<script setup lang="ts">

// Props
import {computed} from "vue";

const props = withDefaults(defineProps<{
    src?: string,
    alt?: string,
    text?: string,
    class?: string,
}>(), {
    src: '',
    alt: '',
    text: '',
    class: '',
});

const computedClassName = computed(() => {
        return props.class;
    });

</script>

<template>
    <figure
        class="lkt-image"
        :class="computedClassName">
        <img :src="src" alt="alt"/>

        <figcaption v-if="text" v-html="text"></figcaption>
    </figure>
</template>