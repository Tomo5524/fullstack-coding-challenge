import { useState } from "react";

export default function useErrorMessage() {
  const [errorMessage, setErrorMessage] = useState<string>("");

  return { errorMessage, setErrorMessage };
}
