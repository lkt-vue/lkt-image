import { defineComponent, mergeDefaults, useSlots, computed, createElementBlock, openBlock, normalizeClass, createElementVNode, createCommentVNode, normalizeStyle, unref, renderSlot } from "vue";
import { getDefaultValues, Image } from "lkt-vue-kernel";
const _hoisted_1 = ["src", "alt"];
const _hoisted_2 = { key: 0 };
const _hoisted_3 = ["innerHTML"];
const _hoisted_4 = {
  key: 2,
  class: "lkt-overlay"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LktImage",
  props: /* @__PURE__ */ mergeDefaults({
    src: {},
    alt: {},
    text: {},
    class: {},
    imageStyle: {}
  }, getDefaultValues(Image)),
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const computedClassName = computed(() => {
      return props.class;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("figure", {
        class: normalizeClass(["lkt-image", computedClassName.value])
      }, [
        createElementVNode("img", {
          src: _ctx.src,
          alt: _ctx.alt,
          style: normalizeStyle(_ctx.imageStyle)
        }, null, 12, _hoisted_1),
        unref(slots).text ? (openBlock(), createElementBlock("figcaption", _hoisted_2, [
          renderSlot(_ctx.$slots, "text")
        ])) : _ctx.text ? (openBlock(), createElementBlock("figcaption", {
          key: 1,
          innerHTML: _ctx.text
        }, null, 8, _hoisted_3)) : createCommentVNode("", true),
        unref(slots).overlay ? (openBlock(), createElementBlock("div", _hoisted_4, [
          renderSlot(_ctx.$slots, "overlay")
        ])) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const LktImage = {
  install: (app) => {
    if (app.component("lkt-image") === void 0) app.component("lkt-image", _sfc_main);
  }
};
export {
  LktImage as default
};
