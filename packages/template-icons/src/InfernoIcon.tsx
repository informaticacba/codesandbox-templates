import React from "react";
import { SVGIconProps } from "./types";

export const InfernoIcon: React.FC<SVGIconProps> = ({
  scale = 1,
  width = 32,
  height = 32,
  ...props
}) => (
  <svg
    width={scale * width}
    height={scale * height}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.5137 7.06576L10.0969 7.33199C6.66097 9.49476 4.85072 12.5722 4.80922 16.5128C4.75597 21.552 8.4456 25.9356 13.5492 27.0633C20.1374 28.519 26.6574 23.9227 27.1874 17.4491C27.6065 12.3287 24.0091 7.72862 18.9332 6.1386C18.1679 5.31731 17.4729 2.55701 18.6825 1.29974C23.6709 2.36657 27.4107 4.81794 29.822 8.7661C35.0943 17.3988 30.3546 28.6516 20.34 31.3394C11.0372 33.8361 1.62459 27.9341 0.233337 18.7321C-1.31054 10.152 4.98434 2.51899 13.8657 1.23622C11.7939 3.03965 10.6852 5.51629 10.5137 7.06576Z"
      fill="#494949"
    />
    <path
      d="M22.448 14.371C23.1652 13.0848 23.1327 11.7394 22.7255 10.3782C22.6254 10.0434 22.417 9.46913 22.2764 9.09367C24.6742 10.7991 26.722 14.8996 25.6811 18.9747C24.7169 22.7503 20.9569 25.7914 17.0781 26.1431C12.0832 26.5958 8.19947 23.7152 6.7376 20.2132C5.17884 16.4797 6.4271 11.8878 9.1061 9.6017C7.79522 12.1417 8.20097 14.1581 8.7366 14.9105C9.33197 15.7469 10.2798 16.1806 11.205 15.9329C12.1776 15.6726 12.9236 14.8351 12.9067 13.7675C12.8955 13.0546 12.7634 12.2506 12.4712 11.6083C10.7379 7.79754 12.1827 4.36079 14.9786 1.99399C15.7901 1.30695 16.7337 0.6477 17.9347 0C16.615 1.80343 16.3907 4.00073 17.3936 6.04548C17.9815 7.15971 18.7349 8.32338 19.3995 9.39839C20.5941 11.3305 21.3267 13.3171 21.0095 15.6218C21.006 15.6473 21.9597 15.2661 22.448 14.371Z"
      fill="#FB3239"
    />
  </svg>
);
