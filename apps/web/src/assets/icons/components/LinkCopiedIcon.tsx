import { IconProps } from '@/assets/icons/types';

const LinkCopiedIcon = ({ width = 20, height = 20 }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
    >
      <circle cx="10" cy="10" r="9" fill="currentColor" fillOpacity="0.1" />
      <circle cx="10" cy="10" r="9" fill="currentColor" />
      <path stroke="#FBFBFB" strokeLinecap="round" d="M6 9.923 9.048 13 14 8" />
    </svg>
  );
};

export default LinkCopiedIcon;
