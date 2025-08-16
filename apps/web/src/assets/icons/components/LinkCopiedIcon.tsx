import { IconProps } from '@/assets/icons/types';

const LinkCopiedIcon = ({ width = 20, height = 20 }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
    >
      <circle cx="10" cy="10" r="9" fill="#313133" />
      <path stroke="#FBFBFB" strokeLinecap="round" d="M6 9.923 9.048 13 14 8" />
    </svg>
  );
};

export default LinkCopiedIcon;
