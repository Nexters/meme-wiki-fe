import { AxiosError } from 'axios';

type APIErrorResponse = {
  status: number;
  error: string;
  code: string;
  reason: string[];
};

type ErrorCodeType = {
  [key: string]: { status: string; message: string };
};

const ERROR_CODE: ErrorCodeType = {
  // 백엔드 정의 에러 필요

  // axios 에러
  ERR_NETWORK: {
    status: '네트워크 에러',
    message:
      '서버가 응답하지 않습니다. \n프로그램을 재시작하거나 관리자에게 연락하세요.',
  },
  ECONNABORTED: {
    status: '요청 시간 초과',
    message: '요청 시간을 초과했습니다.',
  },

  // 알 수 없는 에러
  UNKNOWN: { status: 'ERROR', message: '알 수 없는 오류가 발생했습니다.' },
} as const;

export const getAPIErrorInfo = (error: AxiosError<APIErrorResponse>) => {
  const serverErrorCode = error.response?.data?.code ?? '';
  const axiosErrorCode = error.code ?? '';

  if (serverErrorCode in ERROR_CODE) {
    return ERROR_CODE[serverErrorCode as keyof typeof ERROR_CODE];
  } else if (axiosErrorCode in ERROR_CODE) {
    return ERROR_CODE[axiosErrorCode as keyof typeof ERROR_CODE];
  } else return ERROR_CODE.UNKNOWN;
};
