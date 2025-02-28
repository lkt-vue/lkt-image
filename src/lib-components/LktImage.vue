<script setup lang="ts">
import {computed} from "vue";
import {getDefaultValues, Image, ImageConfig} from "lkt-vue-kernel";

const props = withDefaults(defineProps<ImageConfig>(), getDefaultValues(Image));

const computedClassName = computed(() => {
        return props.class;
    });

</script>

<template>
    <figure
        class="lkt-image"
        :class="computedClassName">
        <img :src="src" :alt="alt" :style="imageStyle"/>

        <figcaption v-if="text" v-html="text"/>
    </figure>
</template>