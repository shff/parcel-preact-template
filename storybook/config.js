import { h } from "preact";
import { configure, storiesOf } from "@storybook/preact";
import { withOptions } from "@storybook/addon-options";
import { withKnobs, text } from "@storybook/addon-knobs";
import { checkA11y } from "@storybook/addon-a11y";
import { action } from "@storybook/addon-actions";

import Button from "../app/components/Button.jsx";

configure(function() {
  const stories = storiesOf("Preact", module)
    .addDecorator(withOptions({ addonPanelInRight: true }))
    .addDecorator(checkA11y)
    .addDecorator(withKnobs)
    .add("Button", () => <Button
      title={text("Title", "Click me")}
      onClick={action("click")} />);
}, module);
