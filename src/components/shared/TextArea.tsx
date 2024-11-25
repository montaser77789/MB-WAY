import { TextareaHTMLAttributes } from "react";

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    clasName ?: string
}

const Textarea = ({ className = "", ...rest }: IProps) => {
  return (
    <textarea
    className={`bg-[white] border border-gray_maincolor px-2 text-sm font-bold box-border  rounded-lg border-solid outline-none ${className}`}
    rows={6}
      {...rest}
    />
  );
};

export default Textarea;