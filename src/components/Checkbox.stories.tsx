import { Meta, StoryObj } from "@storybook/react";
import { Checkbox, CheckboxProps } from "./CheckBox";
import { Text } from "./Text";

export default {
  titulo: "Components/Checkbox",
  component: Checkbox,
  args: {},
  argTypes: {},
  decorators: [
    (Store) => {
      return (
        <div className="flex items-center gap-2">
          {Store()}
          <Text size="sm">Lembrar de mim por 30 dias</Text>
        </div>
      );
    },
  ],
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {};
