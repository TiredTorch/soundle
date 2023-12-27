import { FC, InputHTMLAttributes } from "react";

export type TextAreaComponentProps = FC<InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    error?: string;
    inputClassname?: string;
}>