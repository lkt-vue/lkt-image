import { ImageConfig } from "lkt-vue-kernel";
declare const slots: Readonly<{
    [name: string]: import("vue").Slot<any> | undefined;
}>;
declare const computedClassName: import("vue").ComputedRef<string>;
declare const __VLS_ctx: InstanceType<__VLS_PickNotAny<typeof __VLS_self, new () => {}>>;
declare var __VLS_1: {}, __VLS_3: {};
type __VLS_Slots = __VLS_PrettifyGlobal<__VLS_OmitStringIndex<typeof __VLS_ctx.$slots> & {
    text?: (props: typeof __VLS_1) => any;
} & {
    overlay?: (props: typeof __VLS_3) => any;
}>;
declare const __VLS_self: import("vue").DefineComponent<ImageConfig, {
    slots: typeof slots;
    computedClassName: typeof computedClassName;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ImageConfig> & Readonly<{}>, {
    text: string;
    class: string;
    alt: string;
    src: string;
    imageStyle: string | import("lkt-vue-kernel").LktObject;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_component: import("vue").DefineComponent<ImageConfig, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ImageConfig> & Readonly<{}>, {
    text: string;
    class: string;
    alt: string;
    src: string;
    imageStyle: string | import("lkt-vue-kernel").LktObject;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
