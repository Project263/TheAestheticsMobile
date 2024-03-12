import { TextComponent } from "./Text";
import { Title } from "./Title";

export type TypographyProps = {
  Text: typeof TextComponent;
  Title: typeof Title;
};

const Typography = () => {};
Typography.Text = TextComponent;
Typography.Title = Title;

export default Typography;
