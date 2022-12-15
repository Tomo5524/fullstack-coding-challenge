import { ErrorMessageText } from "./style";

function ErrorMessageDisplay({ text }: { text: string }) {
  return <ErrorMessageText isVisible={text === ""}>{text}</ErrorMessageText>;
}

export default ErrorMessageDisplay;
