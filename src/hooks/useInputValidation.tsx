import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";

type ValidInputChecker = (input: string) => boolean;

export default function useInputValidation(checker: ValidInputChecker) {
  const [input, setInput] = useState("");
  const [isValidInput, setIsValidInput] = useState("default");

  const isInputStarted = useRef(false);

  const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const checkIsValidInput = useCallback(
    (input: string) => {
      if (checker(input)) {
        setIsValidInput("true");
      } else {
        setIsValidInput("false");
      }
    },
    [checker]
  );

  useEffect(() => {
    const keyboardTimer = setTimeout(() => {
      if (!isInputStarted.current) {
        isInputStarted.current = true;
      } else {
        checkIsValidInput(input);
      }
    }, 500);

    return () => {
      clearTimeout(keyboardTimer);
    };
  }, [input, checkIsValidInput]);

  return {
    input,
    isValidInput,
    isInputStarted,
    inputChangeHandler,
  };
}