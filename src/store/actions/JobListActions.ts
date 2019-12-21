import {
  JOB_LIST_FAILED,
  JOB_LIST_REQUEST,
  JOB_LIST_SUCCESS,
  JOB_LIST_SEARCH,
} from 'store/actionTypes';
import { IDataList } from 'models';

export function jobListRequest(jobTitle: string, from: number, limit: number) {
  return {
    type: JOB_LIST_REQUEST,
    jobTitle,
    from,
    limit,
  };
}

export function jobListError(status: string) {
  return {
    type: JOB_LIST_FAILED,
    status,
  };
}

export function jobListSuccess(status: string, dataList: any) {
  console.log('dataList', dataList);

  return {
    type: JOB_LIST_SUCCESS,
    status,
    dataList,
  };
}

export function jobListSearch(search: string) {
  return {
    type: JOB_LIST_SEARCH,
    status: JOB_LIST_SEARCH,
    search,
  };
}
