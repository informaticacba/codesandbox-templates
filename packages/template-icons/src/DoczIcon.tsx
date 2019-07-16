import React from "react";
import { SVGIconProps } from "./types";

export const DoczIcon: React.FC<SVGIconProps> = ({
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
      d="M10.8331 5.90909H30.1488C30.1326 4.36669 28.9595 3.26447 27.5141 3.26447H8.19835C9.6438 3.26447 10.8169 4.36669 10.8331 5.90909Z"
      fill="#E2D9C5"
    />
    <path
      d="M24.8688 5.87615C24.8688 4.43374 26.0486 3.26447 27.5041 3.26447H8.1891C6.7336 3.26447 5.55373 4.43374 5.55373 5.87615V27.3306H22.2334C23.6889 27.3306 24.8688 26.1613 24.8688 24.7189V5.87615Z"
      fill="#F2EBDA"
    />
    <path
      d="M24.4436 3.2654C22.984 3.2654 21.8008 4.44268 21.8008 5.89497V24.8669C21.8008 26.3191 20.6175 27.4964 19.1579 27.4964H22.3669C23.8265 27.4964 25.0098 26.3191 25.0098 24.8669V5.89497C25.0098 4.44268 26.193 3.2654 27.6526 3.2654H24.4436Z"
      fill="#E2D9C5"
    />
    <path
      d="M19.6658 24.7103H0.296005C0.312242 26.3352 1.48859 27.4964 2.9381 27.4964H22.3079C20.8583 27.4963 19.6821 26.3352 19.6658 24.7103Z"
      fill="#E2D9C5"
    />
    <path
      d="M18.2479 19.9256C18.783 18.2708 19.2641 16.5807 20.4008 15.2897C22.8837 12.47 27.8609 11.6416 31.4711 11.7341C30.3415 12.662 29.3568 13.6005 28.2157 14.829C26.9363 16.2063 24.1449 18.0391 22.8015 18.4501C20.7093 19.0903 19.7413 19.1973 18.2479 19.9256Z"
      fill="#DDA064"
    />
    <path
      d="M18.2479 19.9256C18.783 18.2696 27.8609 11.6357 31.4711 11.7282C30.3415 12.6568 29.3568 13.596 28.2157 14.8254C26.9363 16.2037 24.1449 18.0378 22.8015 18.4491C20.7093 19.0897 19.7413 19.1967 18.2479 19.9256Z"
      fill="#B57947"
    />
    <path
      d="M23.0083 7.89256C23.0083 7.67341 22.7998 7.49586 22.5427 7.49586H12.6309C12.3737 7.49586 12.1653 7.67347 12.1653 7.89256C12.1653 8.11165 12.3737 8.28925 12.6309 8.28925H22.5426C22.7997 8.28925 23.0083 8.11165 23.0083 7.89256Z"
      fill="#1F2D3D"
    />
    <path
      d="M8.42619 8.28925H10.0862C10.3581 8.28925 10.5785 8.11165 10.5785 7.89256C10.5785 7.67347 10.3581 7.49586 10.0862 7.49586H8.42619C8.15429 7.49586 7.93388 7.67347 7.93388 7.89256C7.93388 8.11165 8.15423 8.28925 8.42619 8.28925Z"
      fill="#1F2D3D"
    />
    <path
      d="M8.40085 21.7769C8.14294 21.7769 7.93388 21.9545 7.93388 22.1735C7.93388 22.3927 8.14294 22.5702 8.40085 22.5702H13.2851C13.543 22.5702 13.7521 22.3926 13.7521 22.1735C13.7521 21.9544 13.543 21.7769 13.2851 21.7769H8.40085Z"
      fill="#1F2D3D"
    />
    <path
      d="M15.8678 17.9422C15.8678 17.723 15.6545 17.5455 15.3914 17.5455H8.41021C8.14714 17.5455 7.93388 17.7231 7.93388 17.9422C7.93388 18.1613 8.14714 18.3388 8.41021 18.3388H15.3914C15.6545 18.3388 15.8678 18.1612 15.8678 17.9422Z"
      fill="#1F2D3D"
    />
    <path
      d="M19.3058 13.1818C19.3058 12.9627 19.0918 12.7851 18.8278 12.7851H8.41188C8.14788 12.7851 7.93388 12.9627 7.93388 13.1818C7.93388 13.4009 8.14788 13.5785 8.41188 13.5785H18.8278C19.0918 13.5786 19.3058 13.401 19.3058 13.1818Z"
      fill="#1F2D3D"
    />
    <path
      d="M24.9682 19.0931C24.7116 19.0931 24.5035 19.3037 24.5035 19.5636V25.2649C24.5035 26.4684 23.5365 27.4474 22.3479 27.4474H22.2894C21.074 27.4474 20.1476 26.4392 20.1345 25.1023C20.1319 24.8442 19.9246 24.6364 19.6698 24.6364H6.22791V6.12356C6.22791 4.92002 7.19494 3.94099 8.38352 3.94099H25.3836C25.3699 3.95509 25.3571 3.96989 25.3437 3.9843C25.3275 4.0018 25.3111 4.0191 25.2952 4.0369C25.2784 4.05577 25.2623 4.07514 25.246 4.09445C25.2303 4.11295 25.2145 4.13125 25.1993 4.15012C25.1835 4.16968 25.1684 4.18974 25.153 4.20968C25.1382 4.22899 25.1232 4.24811 25.1088 4.26779C25.094 4.28798 25.0799 4.3086 25.0656 4.32917C25.0516 4.34935 25.0373 4.36941 25.0237 4.38991C25.01 4.41066 24.9969 4.43185 24.9838 4.45298C24.9706 4.47398 24.9572 4.49479 24.9445 4.51611C24.9317 4.53755 24.9197 4.55943 24.9075 4.58118C24.8953 4.60281 24.8828 4.62431 24.8711 4.64632C24.8594 4.66832 24.8485 4.69083 24.8373 4.71321C24.8261 4.73553 24.8145 4.75766 24.8039 4.78022C24.7932 4.80292 24.7833 4.82605 24.7731 4.849C24.763 4.87188 24.7525 4.89457 24.7429 4.9177C24.7332 4.94109 24.7244 4.96491 24.7152 4.98854C24.7062 5.01187 24.6968 5.035 24.6883 5.05857C24.6796 5.08277 24.6719 5.10741 24.6638 5.13192C24.656 5.15549 24.6477 5.17881 24.6404 5.20263C24.6327 5.22771 24.6261 5.25322 24.6191 5.27861C24.6125 5.30231 24.6054 5.32582 24.5994 5.34977C24.5927 5.3761 24.5872 5.4028 24.5812 5.42939C24.5759 5.45277 24.5701 5.47603 24.5654 5.4996C24.5598 5.52724 24.5554 5.55521 24.5506 5.5831C24.5466 5.60617 24.542 5.62899 24.5386 5.65219C24.5341 5.68197 24.5309 5.71212 24.5272 5.74215C24.5246 5.76384 24.5214 5.78528 24.5192 5.8071C24.5158 5.8407 24.5138 5.87468 24.5115 5.90859C24.5103 5.92721 24.5083 5.9457 24.5074 5.96439C24.5048 6.01711 24.5034 6.07021 24.5034 6.12362V6.28154V10.2996C24.5034 10.5595 24.7114 10.7701 24.9681 10.7701C25.2247 10.7701 25.4328 10.5594 25.4328 10.2996V6.75203H30.213C30.3371 6.75203 30.456 6.70182 30.5432 6.61261C30.6305 6.52334 30.679 6.40247 30.6777 6.2769C30.6593 4.40872 29.3334 3 27.5884 3H8.38333C6.6822 3 5.29827 4.40126 5.29827 6.12362V24.6364H0.464657C0.340636 24.6364 0.221691 24.6866 0.134449 24.7758C0.047145 24.8651 -0.00127475 24.986 2.55278e-05 25.1115C0.0183532 26.9797 1.34432 28.3884 3.08434 28.3884H22.2894H22.3479C24.049 28.3884 25.433 26.9872 25.433 25.2648V19.5635C25.433 19.3037 25.2249 19.0931 24.9682 19.0931ZM25.4566 5.80114C25.4587 5.78678 25.4613 5.77255 25.4637 5.75832C25.4671 5.73826 25.4705 5.7182 25.4744 5.69826C25.4774 5.68309 25.4807 5.66805 25.484 5.653C25.4881 5.63432 25.4922 5.6157 25.4967 5.59721C25.5006 5.58166 25.5047 5.56618 25.5088 5.55075C25.5136 5.53314 25.5185 5.51552 25.5236 5.49809C25.5283 5.4823 25.5332 5.46662 25.5382 5.45101C25.5435 5.43434 25.5491 5.41779 25.5548 5.40124C25.5604 5.38525 25.566 5.36927 25.572 5.35347C25.5778 5.33786 25.5839 5.32243 25.5901 5.30695C25.5966 5.29065 25.6031 5.27441 25.6101 5.2583C25.6162 5.24395 25.6227 5.22978 25.6291 5.21561C25.6367 5.19887 25.6443 5.18201 25.6523 5.16552C25.6582 5.15323 25.6646 5.1412 25.6708 5.12903C25.68 5.11098 25.689 5.09293 25.6987 5.07518C25.7024 5.06829 25.7065 5.06164 25.7102 5.05481C25.7532 4.97789 25.8003 4.90366 25.8518 4.83288C25.8523 4.83219 25.8527 4.83157 25.8532 4.83088C25.8698 4.80818 25.887 4.78593 25.9044 4.76386C25.9071 4.76035 25.9098 4.75678 25.9126 4.75327C25.9296 4.73195 25.9472 4.71108 25.965 4.69045C25.9683 4.68663 25.9715 4.68274 25.9749 4.67892C25.993 4.65823 26.0115 4.63798 26.0304 4.61798C26.0335 4.61472 26.0365 4.6114 26.0396 4.60814C26.0592 4.5877 26.0791 4.56758 26.0995 4.54789C26.1017 4.5457 26.104 4.5435 26.1063 4.54125C26.1278 4.52069 26.1495 4.5005 26.1718 4.48081C26.1726 4.48012 26.1734 4.4795 26.1741 4.47881C26.4587 4.22786 26.8089 4.05088 27.1954 3.97804C27.1956 3.97797 27.1958 3.97797 27.196 3.97791C27.2277 3.97195 27.2596 3.96669 27.2917 3.96217C27.2937 3.96192 27.2956 3.96167 27.2975 3.96142C27.3282 3.95716 27.359 3.95352 27.39 3.95058C27.3947 3.95014 27.3995 3.94989 27.4043 3.94951C27.4327 3.947 27.4612 3.94487 27.4899 3.94349C27.5065 3.94274 27.5232 3.94262 27.5399 3.94218C27.5579 3.94174 27.5758 3.94092 27.5938 3.94092C28.6603 3.94092 29.5043 4.71735 29.704 5.81092H25.4557C25.4559 5.80772 25.4562 5.8044 25.4566 5.80114ZM3.08428 27.4474C2.0178 27.4474 1.1738 26.671 0.974117 25.5774H5.76315H19.2375C19.2438 25.6262 19.2513 25.6744 19.2595 25.7223C19.2622 25.7383 19.2656 25.754 19.2686 25.77C19.2744 25.8017 19.2803 25.8333 19.287 25.8646C19.291 25.8833 19.2955 25.9017 19.2997 25.9203C19.3061 25.9484 19.3126 25.9766 19.3198 26.0044C19.3247 26.0239 19.3301 26.0432 19.3354 26.0625C19.3426 26.0889 19.3499 26.1153 19.3577 26.1415C19.3635 26.1611 19.3697 26.1806 19.3759 26.2C19.3839 26.2255 19.3923 26.2508 19.4009 26.2759C19.4075 26.2953 19.4142 26.3146 19.4212 26.3338C19.4303 26.3588 19.4396 26.3835 19.4492 26.408C19.4565 26.4267 19.4638 26.4454 19.4713 26.4639C19.4816 26.4888 19.4922 26.5134 19.5029 26.5379C19.5106 26.5555 19.5182 26.5732 19.5262 26.5907C19.538 26.6164 19.5503 26.6417 19.5627 26.6669C19.5703 26.6826 19.5777 26.6984 19.5856 26.714C19.6007 26.7436 19.6165 26.7728 19.6324 26.8019C19.6382 26.8125 19.6437 26.8232 19.6496 26.8337C19.6717 26.8731 19.6945 26.9118 19.7181 26.9499C19.7236 26.9588 19.7295 26.9674 19.7351 26.9762C19.7535 27.0054 19.7721 27.0343 19.7914 27.0627C19.8003 27.0758 19.8096 27.0885 19.8186 27.1015C19.8352 27.1252 19.8518 27.1488 19.869 27.172C19.8794 27.1859 19.89 27.1994 19.9005 27.2132C19.9171 27.2348 19.9338 27.2564 19.9509 27.2774C19.9622 27.2913 19.9736 27.3049 19.9851 27.3186C20.0022 27.3391 20.0195 27.3592 20.0371 27.3792C20.0489 27.3926 20.0609 27.4058 20.073 27.419C20.0816 27.4284 20.0899 27.4382 20.0986 27.4474H3.08428Z"
      fill="#1F2D3D"
    />
    <path
      d="M31.9996 11.6717C31.9995 11.6663 31.9994 11.6608 31.9992 11.6553C31.9973 11.6111 31.9893 11.5685 31.9758 11.5282C31.9752 11.5262 31.975 11.5241 31.9743 11.5222C31.9737 11.5205 31.9727 11.519 31.9722 11.5174C31.9647 11.4968 31.9561 11.4768 31.946 11.4576C31.9448 11.4552 31.9433 11.453 31.9421 11.4507C31.9327 11.4337 31.9224 11.4175 31.9111 11.4019C31.9087 11.3986 31.9064 11.3952 31.9039 11.3919C31.8915 11.3756 31.878 11.3602 31.8635 11.3457C31.8604 11.3425 31.857 11.3395 31.8538 11.3365C31.8402 11.3235 31.8258 11.3112 31.8106 11.2999C31.8086 11.2984 31.8067 11.2967 31.8046 11.2952C31.7876 11.2829 31.7696 11.272 31.7509 11.262C31.7473 11.26 31.7437 11.2583 31.7401 11.2564C31.7211 11.2469 31.7016 11.2382 31.6812 11.2313C31.6811 11.2312 31.681 11.2311 31.6809 11.2311C31.6606 11.2243 31.6396 11.2191 31.6182 11.2149C31.6134 11.2139 31.6087 11.2131 31.6039 11.2124C31.5825 11.2088 31.5608 11.2062 31.5385 11.2057C27.5744 11.1039 22.4054 12.0506 19.7921 15.0104C18.6484 16.3058 18.1206 17.9491 17.6103 19.5383C17.5686 19.6684 17.5268 19.7984 17.4847 19.9282C17.483 19.9337 17.4813 19.9392 17.4797 19.9448L16.679 22.7661C16.6081 23.0159 16.7548 23.2756 17.0066 23.346C17.0495 23.358 17.0928 23.3636 17.1353 23.3636C17.3421 23.3636 17.5323 23.2281 17.5911 23.0208L18.3337 20.4041C19.2415 19.982 19.9725 19.7846 20.9599 19.5182C21.4721 19.3799 22.0526 19.2234 22.7551 19.009C24.2739 18.5455 27.1875 16.6066 28.5284 15.1669C29.7011 13.9077 30.688 12.9719 31.828 12.038C31.8293 12.0369 31.8303 12.0356 31.8317 12.0345C31.8483 12.0205 31.864 12.0057 31.8786 11.9896C31.8795 11.9886 31.8804 11.9877 31.8813 11.9867C31.8956 11.9707 31.9086 11.9534 31.9207 11.9353C31.9229 11.932 31.925 11.9287 31.9272 11.9253C31.9499 11.8894 31.9678 11.8504 31.9802 11.8088C31.9814 11.8049 31.9825 11.801 31.9836 11.797C31.9891 11.7766 31.9936 11.7558 31.9964 11.7344C31.9965 11.7335 31.9965 11.7327 31.9965 11.7318C31.9983 11.7173 31.9996 11.7025 32 11.6876C32.0001 11.6822 31.9996 11.677 31.9996 11.6717ZM20.5049 15.6298C21.6076 14.3808 23.2978 13.4393 25.5285 12.8316C26.128 12.6683 26.7615 12.5327 27.4144 12.4258C25.7554 13.224 24.1691 14.2237 23.2827 14.8112C21.8521 15.7594 20.3078 16.9096 19.1674 17.9325C19.5048 17.0844 19.9128 16.3004 20.5049 15.6298ZM27.8325 14.5289C26.5275 15.9301 23.7089 17.7344 22.4766 18.1103C21.7889 18.3201 21.2164 18.4747 20.7112 18.611C20.2541 18.7343 19.8383 18.8467 19.4271 18.9762C19.6111 18.8014 19.8267 18.6054 20.0809 18.3854C21.1039 17.5001 22.4279 16.5084 23.809 15.593C26.2003 14.0081 28.3643 12.8955 29.952 12.4132C29.2625 13.0433 28.5843 13.7217 27.8325 14.5289Z"
      fill="#1F2D3D"
    />
  </svg>
);
