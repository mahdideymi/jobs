import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Layout, Button, Pagination, Icon } from 'antd';

import { JobCard, JobCreateModal } from 'components';
import { fetchJobs, deleteJob } from 'store/actions';

import 'layouts/EmployerLayout/style.scss';
import './style.scss';

const { Header, Content } = Layout;

const numEachPage = 7;

export const EmployerJobsPage: React.FC = () => {
  const jobs = useSelector((state: any) => state.jobs);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [jobId, setJobId] = useState(-1);

  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(numEachPage);

  useEffect(() => {
    dispatch(fetchJobs());
  }, []);

  let job = jobs.data.find((item: any) => item.id === jobId);

  function onPageChange(pageNumber: number) {
    setMinValue((pageNumber - 1) * numEachPage);
    setMaxValue(pageNumber * numEachPage);
  }

  function handleEdit(id: number) {
    document.body.classList.add('modal-open');
    setModalTitle('ویرایش');
    setJobId(id);
    setVisible(true);
  }

  function handleAdd() {
    document.body.classList.add('modal-open');
    setModalTitle('ایجاد موقعیت شغلی');
    setJobId(-1);
    setVisible(true);
  }

  return (
    <>
      <Header className='employer-layout__header employer-jobs-page__header'>
        <Button type='primary' onClick={() => handleAdd()}>
          <Icon className='employer-jobs-page__icon' type='plus' />
          ایجاد موقعیت شغلی
        </Button>
      </Header>
      <Content className='employer-layout__content'>
        <h1 className='employer-jobs-page__title'>موقعیت های شغلی</h1>
        {jobs.data.slice(minValue, maxValue).map((job: any) => (
          <JobCard
            key={job.id}
            id={job.id}
            title={job.title}
            numOfCandidates={job.numOfCandidates}
            handleDelete={() => dispatch(deleteJob(job.id))}
            handleEdit={() => handleEdit(job.id)}
          />
        ))}
        <Pagination
          className='employer-jobs-page__pagination'
          defaultCurrent={1}
          defaultPageSize={numEachPage}
          total={jobs.data.length}
          // hideOnSinglePage={true}
          onChange={onPageChange}
        />
      </Content>

      <JobCreateModal
        job={job}
        modalTitle={modalTitle}
        isVisible={visible}
        hideModal={() => {
          setVisible(false);
        }}
      />
    </>
  );
};
