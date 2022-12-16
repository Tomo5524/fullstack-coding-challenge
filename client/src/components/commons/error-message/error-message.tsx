import { ErrorMessageText } from "./style";

function ErrorMessageDisplay({ text }: { text: string }) {
  return (
    <ErrorMessageText isVisible={text === ""} data-testid="error-message">
      {text}
    </ErrorMessageText>
  );
}

export default ErrorMessageDisplay;
