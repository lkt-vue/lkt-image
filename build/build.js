import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, createElementVNode, createCommentVNode } from "vue";
const _hoisted_1 = ["src"];
const _hoisted_2 = ["innerHTML"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LktImage",
  props: {
    src: { default: "" },
    alt: { default: "" },
    text: { default: "" },
    class: { default: "" }
  },
  setup(__props) {
    const props = __props;
    const computedClassName = computed(() => {
      return props.class;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("figure", {
        class: normalizeClass(["lkt-image", computedClassName.value])
      }, [
        createElementVNode("img", {
          src: _ctx.src,
          alt: "alt"
        }, null, 8, _hoisted_1),
        _ctx.text ? (openBlock(), createElementBlock("figcaption", {
          key: 0,
          innerHTML: _ctx.text
        }, null, 8, _hoisted_2)) : createCommentVNode("", true)
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
