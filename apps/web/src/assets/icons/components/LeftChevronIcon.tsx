import { IconProps } from '@/assets/icons/types';

const LeftChevronIcon = ({ width = 24, height = 24 }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="currentColor"
    >
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M16.707 19.707a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 1 1 1.414 1.414L10.414 12l6.293 6.293a1 1 0 0 1 0 1.414Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default LeftChevronIcon;
