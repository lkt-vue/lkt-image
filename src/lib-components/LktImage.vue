<script setup lang="ts">

// Props
import {computed} from "vue";
import {LktObject} from "lkt-ts-interfaces";

const props = withDefaults(defineProps<{
    src?: string,
    alt?: string,
    text?: string,
    class?: string,
    imageStyle?: string|LktObject,
}>(), {
    src: '',
    alt: '',
    text: '',
    class: '',
    imageStyle: ''
});

const computedClassName = computed(() => {
        return props.class;
    });

</script>

<template>
    <figure
        class="lkt-image"
        :class="computedClassName">
        <img :src="src" alt="alt" :style="imageStyle"/>

        <figcaption v-if="text" v-html="text"></figcaption>
    </figure>
</template>