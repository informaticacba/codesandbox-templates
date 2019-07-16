import React from "react";
import { SVGIconProps } from "./types";

export const QuasarIcon: React.FC<SVGIconProps> = ({
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
    <g clipPath="url(#Quasar_Clip0)">
      <path
        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16345 24.8366 0 16 0C7.16345 0 0 7.16345 0 16C0 24.8366 7.16345 32 16 32Z"
        fill="white"
      />
      <path
        d="M18.6188 16C18.6188 17.4462 17.4476 18.6174 16.0014 18.6174C14.5552 18.6174 13.384 17.4448 13.384 16C13.384 14.5538 14.5566 13.3826 16.0014 13.3826C17.4462 13.3826 18.6188 14.5538 18.6188 16Z"
        fill="#263238"
      />
      <path
        d="M27.6202 9.29016C27.0511 8.31138 26.3596 7.40821 25.5637 6.60264L22.538 8.34987C21.595 7.5443 20.5227 6.92707 19.379 6.51878C18.3452 7.5663 17.5245 8.73616 16.9334 10.0077C20.3014 9.77817 23.7807 10.9975 27.0099 13.5214L28.9138 12.4217C28.6169 11.3274 28.1825 10.2758 27.6202 9.29016Z"
        fill="#1976D2"
      />
      <path
        d="M27.6203 22.7085C28.1839 21.7256 28.621 20.6753 28.9207 19.5838L25.895 17.8366C26.1218 16.6172 26.1191 15.38 25.9005 14.1854C24.4777 13.8142 23.0535 13.6878 21.6555 13.8129C23.5388 16.6159 24.222 20.2382 23.6515 24.2963L25.5555 25.396C26.3555 24.5891 27.0498 23.6873 27.6203 22.7085Z"
        fill="#42A5F5"
      />
      <path
        d="M16.0014 29.417C17.1341 29.4142 18.2614 29.2671 19.357 28.9798V25.4853C20.5268 25.0716 21.5964 24.4516 22.5229 23.6653C22.1325 22.2466 21.5304 20.9516 20.7234 19.8024C19.2374 22.8336 16.4427 25.2379 12.643 26.7734V28.9729C13.7386 29.263 14.8673 29.4115 16.0014 29.417Z"
        fill="#1976D2"
      />
      <path
        d="M4.38113 22.7099C4.95026 23.6886 5.64172 24.5918 6.43766 25.3974L9.46336 23.6501C10.4064 24.4557 11.4787 25.0729 12.6224 25.4812C13.6562 24.4337 14.4768 23.2639 15.068 21.9923C11.7 22.2218 8.22064 21.0025 4.9915 18.4786L3.08755 19.5783C3.38448 20.6726 3.81889 21.7242 4.38113 22.7099Z"
        fill="#42A5F5"
      />
      <path
        d="M4.37976 9.29152C3.81614 10.2744 3.37899 11.3247 3.0793 12.4162L6.105 14.1634C5.87817 15.3828 5.88092 16.62 6.0995 17.8146C7.5223 18.1858 8.94648 18.3122 10.3445 18.1871C8.46121 15.3841 7.77799 11.7618 8.34848 7.70375L6.44454 6.604C5.64585 7.40957 4.95163 8.31274 4.37976 9.29152Z"
        fill="#1976D2"
      />
      <path
        d="M16 2.58304C14.8673 2.58579 13.74 2.73288 12.6444 3.02019V6.51465C11.4745 6.92843 10.405 7.54841 9.47848 8.33474C9.86889 9.75341 10.471 11.0484 11.2779 12.1976C12.764 9.16642 15.5587 6.76209 19.3584 5.22656V3.02706C18.2627 2.737 17.1341 2.58854 16 2.58304Z"
        fill="#42A5F5"
      />
    </g>
    <defs>
      <clipPath id="Quasar_Clip0">
        <rect width="32" height="32" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
