import React, { useEffect } from 'react';
import { SearchJobList, JobListItem } from 'components';
import { Input, Spin } from 'antd';
import './JobListPage.scss';
import { useDispatch, useSelector } from 'react-redux';
import { jobListRequest, jobListSearch } from 'store/actions';
import { JOB_LIST_SUCCESS } from 'store/actionTypes';

export const JobListPage: React.FC = () => {
  //
  const { Search } = Input;
  const dataList = useSelector((state: any) => state.jobList.dataList);
  const loading = useSelector((state: any) => state.jobList.status);
  const dispatch = useDispatch();

  useEffect(() => {
    getJobList();
  }, []);

  function getJobList() {
    dispatch(jobListRequest('mahdi', 2, 10));
  }

  return (
    <div className="jobList">
      <div className="jobList__header">
        <div className="container">
          <div className="jobList__header--input">
            <Search
              placeholder="جستجو"
              onSearch={value => console.log(value)}
            />
          </div>
          <div className="jobList__header__logo">
            <img
              style={{ height: 30 }}
              alt="پروفایل"
              src={require('../../assets/profile-logo.svg')}
            />
          </div>
        </div>
      </div>
      <div className="jobList__list">
        <div className="container">
          <JobListItem
            list={dataList}
            loading={loading !== JOB_LIST_SUCCESS ? true : false}
            loadMore={getJobList}
          />
        </div>
      </div>
    </div>
  );
};
