import type { InjectionKey } from "vue";

export interface ButtonGroupContext {
  size?: "small" | "medium" | "large";
}

export const buttonGroupContextKey: InjectionKey<ButtonGroupContext> = Symbol(
  "buttonGroupContextKey"
);

export const BLACK_LIST = [
  "theme",
  "size",
  "htmlType",
  "block",
  "disabled",
  "loading",
  "className",
  "outline",
  "round",
  "prefix",
  "href",
  "target",
  "kong",
];
