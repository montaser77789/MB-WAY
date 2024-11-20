import { InputHTMLAttributes, Ref, forwardRef } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  style?: React.CSSProperties;
}

const Input = forwardRef(
  ({ className = "", style, ...rest }: IProps, ref: Ref<HTMLInputElement>) => {
    return (
      <input
        ref={ref}
        style={style}
        className={`bg-[white] border border-gray_maincolor text-sm font-bold box-border  rounded-lg border-solid outline-none ${className}`}
        {...rest}
      />
    );
  }
);

export default Input;
