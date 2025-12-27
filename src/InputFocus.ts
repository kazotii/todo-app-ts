import { useRef } from "react";

export function useInputFocus(){
    const inputRef = useRef<HTMLInputElement>(null);
    const focusInput = () => {
        inputRef.current?.focus();
    }
    return{
        inputRef, focusInput
    }
}