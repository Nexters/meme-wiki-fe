import { IconProps } from '@/assets/icons/types';

const MemeDesignPenIcon = ({ width = 24, height = 24 }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M6 3v7M2.5 6.5h7M7.5 21h5l10-10-5-5-10 10v5Z"
      />
      <path stroke="currentColor" strokeWidth="2" d="m14.5 9 5 5" />
    </svg>
  );
};

export default MemeDesignPenIcon;
