import { IconProps } from '@/assets/icons/types';

const LinkCopyIcon = ({ width = 48, height = 48 }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 48 48"
      fill="none"
    >
      <rect width="48" height="48" fill="#E4E6EB" rx="24" />
      <path
        stroke="#121212"
        strokeLinecap="round"
        strokeWidth="2"
        d="m24.5 29.834-1.75 1.75a4.125 4.125 0 0 1-5.833-5.834l3.5-3.5a4.126 4.126 0 0 1 5.833 0"
      />
      <path
        stroke="#121212"
        strokeLinecap="round"
        strokeWidth="2"
        d="m24.5 18.167 1.75-1.75a4.125 4.125 0 0 1 5.833 5.833l-3.5 3.5a4.125 4.125 0 0 1-5.833 0"
      />
    </svg>
  );
};

export default LinkCopyIcon;
