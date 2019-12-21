import {
  JOB_DETAIL_REQUSET,
  JOB_DETAIL_FAILED,
  JOB_DETAIL_SUCCESS,
} from 'store/actionTypes';

import { IJobDetail } from 'models';

export function jobDetailRequest() {
  return {
    type: JOB_DETAIL_REQUSET,
  };
}

export function jobDetailSuccess(status: string, jobDetail: IJobDetail) {
  return {
    type: JOB_DETAIL_SUCCESS,
    status,
    jobDetail,
  };
}

export function jobDetailFailed(status: string) {
  return {
    type: JOB_DETAIL_FAILED,
    status,
  };
}
