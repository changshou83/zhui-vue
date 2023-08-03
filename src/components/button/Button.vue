<script lang="ts" setup>
import { computed, ref, useSlots } from "vue";
import { omit } from "@/utils/omit";
import { useNamespace } from "@/hooks/use-namespace";
import { BLACK_LIST } from "./constants";

export interface Props {
  href?: string;
  target?: string;
  nativeType?: "button" | "submit" | "reset";
  size?: "small" | "medium" | "large";
  type?: "default" | "primary" | "success" | "warning" | "info" | "danger";
  disabled?: boolean;
  loading?: boolean;
  round?: boolean;
  block?: boolean;
  onClick?: (e: MouseEvent) => void;
  tag?: "button" | "a";
  buttonStyle: Record<string, string>;
  autoInsertSpace: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  className: "",
  size: "medium",
  type: "default",
  disabled: false,
  loading: false,
  round: false,
  block: false,
  tag: "button",
  autoInsertSpace: true,
});
const {
  href,
  target,
  size,
  disabled,
  loading,
  round,
  block,
  nativeType,
  type,
} = props;
const nodeProps = ref(
  omit(
    {
      ...props,
      ...(href || target
        ? disabled
          ? {}
          : { href, target }
        : nativeType
        ? { type: nativeType }
        : {}),
    },
    BLACK_LIST
  )
);

const ns = useNamespace("button");
const classes = ref([
  ns.b(),
  ns.m(size),
  ns.m(type),
  ns.is("disabled", disabled),
  ns.is("round", round),
  ns.is("block", block),
  ns.is("loading", loading),
]);

const emit = defineEmits({
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
});

const handleClick = (evt: MouseEvent) => {
  if (!disabled) emit("click", evt);
};

const slots = useSlots();
const autoInsertSpace = computed(() => props.autoInsertSpace ?? false);
const shouldAddSpace = computed(() => {
  const defaultSlot = slots.default?.();
  if (autoInsertSpace.value && defaultSlot?.length === 1) {
    const slot = defaultSlot[0];
    if (slot?.type === Text) {
      const text = slot.children as string;
      const isTwoCNChar = /^\p{Unified_Ideograph}{2}$/u;
      return isTwoCNChar.test(text.trim());
    }
  }
  return false;
});
</script>

<template>
  <component
    :is="tag"
    v-bind="nodeProps"
    :class="classes"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <span
      v-if="$slots.default"
      :class="{ [ns.em('text', 'expand')]: shouldAddSpace }"
    >
      <slot />
    </span>
  </component>
</template>

<style scoped>
@import "./index.css";
</style>
