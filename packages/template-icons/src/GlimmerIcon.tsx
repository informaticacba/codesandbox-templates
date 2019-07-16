import React from "react";
import { SVGIconProps } from "./types";

export const GlimmerIcon: React.FC<SVGIconProps> = ({
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
    <g clipPath="url(#Glimmer_Clip0)">
      <path
        d="M32.0003 16.0001C32.0003 24.8366 24.8368 32.0001 16.0003 32.0001C7.16368 32.0001 0.000301361 24.8366 0.000301361 16.0001C0.000301361 7.16359 7.16368 9.15527e-05 16.0003 9.15527e-05C24.8368 9.15527e-05 32.0003 7.16359 32.0003 16.0001Z"
        fill="#F8835A"
      />
      <path
        d="M9.82871 17.5461C9.47071 17.5461 9.11233 17.4124 8.83483 17.1435C8.26821 16.5945 8.25383 15.6901 8.80283 15.1235L18.4458 5.17114C18.9947 4.60452 19.8991 4.59014 20.4658 5.13914C21.0323 5.68814 21.0467 6.59264 20.4977 7.15927L10.8548 17.1116C10.5747 17.4008 10.2018 17.5461 9.82871 17.5461ZM16.1176 17.9257C15.7607 17.9257 15.4033 17.7925 15.1267 17.5245C14.5618 16.9771 14.5476 16.0755 15.095 15.5106L22.7108 7.65009C23.2582 7.08522 24.1597 7.07109 24.7247 7.61834C25.2896 8.16559 25.3038 9.06722 24.7566 9.63209L17.1406 17.4926C16.8612 17.7808 16.4896 17.9257 16.1176 17.9257ZM13.0312 27.8365C12.6731 27.8365 12.3148 27.7029 12.0373 27.4339C11.4707 26.885 11.4563 25.9805 12.0053 25.4139L25.3263 11.6652C25.8752 11.0987 26.7797 11.0844 27.3463 11.6334C27.9131 12.1824 27.9273 13.0867 27.3782 13.6535L14.0573 27.402C13.7772 27.6911 13.4043 27.8365 13.0312 27.8365ZM8.85129 25.4064C8.49317 25.4064 8.13492 25.2726 7.85742 25.0037C7.29079 24.4547 7.27642 23.5502 7.82542 22.9837L11.457 19.2355C12.0062 18.6689 12.9105 18.6545 13.4772 19.2035C14.0438 19.7526 14.058 20.657 13.509 21.2236L9.87742 24.9719C9.59729 25.261 9.22442 25.4064 8.85129 25.4064ZM5.95389 14.561C5.59577 14.561 5.23739 14.4272 4.95989 14.1583C4.39327 13.6093 4.37902 12.705 4.92802 12.1383L8.55964 8.3901C9.10877 7.82347 10.0131 7.80922 10.5798 8.35822C11.1464 8.90722 11.1606 9.81159 10.6116 10.3783L6.98002 14.1265C6.69977 14.4156 6.32702 14.561 5.95389 14.561ZM24.633 22.7228C24.275 22.7228 23.9167 22.5891 23.6392 22.3202C23.0725 21.7712 23.0582 20.8668 23.6072 20.3002L25.3264 18.5258C25.8753 17.9593 26.7798 17.9447 27.3464 18.494C27.913 19.043 27.9273 19.9473 27.3783 20.514L25.6592 22.2883C25.379 22.5775 25.0062 22.7228 24.633 22.7228ZM21.2854 26.2651C21.2854 27.0541 20.6458 27.6936 19.8568 27.6936C19.0679 27.6936 18.4283 27.0541 18.4283 26.2651C18.4283 25.4761 19.0679 24.8365 19.8568 24.8365C20.6458 24.8365 21.2854 25.4761 21.2854 26.2651ZM7.63261 19.8657C7.63261 20.6547 6.99298 21.2943 6.20398 21.2943C5.41498 21.2943 4.77548 20.6547 4.77548 19.8657C4.77548 19.0767 5.41498 18.4372 6.20398 18.4372C6.99298 18.4372 7.63261 19.0767 7.63261 19.8657ZM14.4181 5.84785C14.4181 6.63685 13.7785 7.27634 12.9896 7.27634C12.2006 7.27634 11.561 6.63685 11.561 5.84785C11.561 5.05885 12.2006 4.41922 12.9896 4.41922C13.7785 4.41922 14.4181 5.05885 14.4181 5.84785Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="Glimmer_Clip0">
        <rect width="32" height="32" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
