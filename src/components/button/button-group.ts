import type { ExtractPropTypes } from "vue";

export const buttonGroupProps = {
  /**
   * @description control the size of buttons in this button-group
   */
  size: {
    type: String,
    required: false,
  },
  /**
   * @description control the type of buttons in this button-group
   */
  type: {
    type: String,
    required: false,
  },
} as const;
export type ButtonGroupProps = ExtractPropTypes<typeof buttonGroupProps>;
