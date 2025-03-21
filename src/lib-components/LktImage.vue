<script setup lang="ts">
import {computed, useSlots} from "vue";
import {getDefaultValues, Image, ImageConfig} from "lkt-vue-kernel";

const props = withDefaults(defineProps<ImageConfig>(), getDefaultValues(Image));

const slots = useSlots();

const computedClassName = computed(() => {
    return props.class;
});

</script>

<template>
    <figure
        class="lkt-image"
        :class="computedClassName">
        <img :src="src" :alt="alt" :style="imageStyle"/>

        <figcaption v-if="slots.text">
            <slot name="text"/>
        </figcaption>
        <figcaption v-else-if="text" v-html="text"/>

        <div class="lkt-overlay" v-if="slots.overlay">
            <slot name="overlay"/>
        </div>
    </figure>
</template>