import { useRef } from "react";
import { useCallback } from "react";

export function useInputFocus(){
  const inputRef = useRef<HTMLInputElement>(null);
  const focusInput = useCallback(() => {
    inputRef.current?.focus();
  }, []);
  return{
    inputRef,
    focusInput,
  };
}