import { IconProps } from '@/assets/icons/types';

const MoreInfo = ({ width = 48, height = 48 }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 48 48"
      fill="none"
    >
      <rect width="47" height="47" x="0.5" y="0.5" fill="#fff" rx="23.5" />
      <rect
        width="47"
        height="47"
        x="0.5"
        y="0.5"
        stroke="#E4E6EB"
        strokeWidth="1"
        rx="23.5"
      />
      <circle
        cx="30.919"
        cy="23.998"
        r="1.75"
        fill="#121212"
        transform="rotate(90 30.919 23.998)"
      />
      <circle
        cx="24.502"
        cy="23.998"
        r="1.75"
        fill="#121212"
        transform="rotate(90 24.502 23.998)"
      />
      <path
        fill="#121212"
        d="M18.086 25.748a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5Z"
      />
    </svg>
  );
};

export default MoreInfo;
