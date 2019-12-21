import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Avatar, Card, Button, Skeleton, Spin } from 'antd';
import './JobListItem.scss';
import InfiniteScroll from 'react-infinite-scroller';
import { jobListRequest } from 'store/actions';

interface IProps {
  list: [];
  loading: boolean;
  loadMore: () => void;
}
export const JobListItem: React.FC<IProps> = props => {
  let history = useHistory();
  const handleClick = (id: number) => {
    history.push('/job-detail'); // todo: when get id -> pass id
  };

  return (
    <div className="jobListItemOrg">
      <InfiniteScroll
        pageStart={0}
        loadMore={props.loadMore}
        hasMore={true || false}
        loader={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}>
            <Spin size="large" />
          </div>
        }>
        {props.list.map((item: any, index: number) => (
          <Card
            key={index}
            className="jobListItem__card"
            hoverable={true}
            onClick={() => handleClick(item.id)}>
            {/* {item && console.log(item.id)} */}
            <Skeleton loading={props.loading} avatar active>
              <div className="jobListItem">
                <div className="jobListItem__detail">
                  <Avatar
                    className="jobListItem__detail__avatar"
                    src={item.avatar}
                  />
                  <div className="jobListItem__detail__text">
                    <span className="jobListItem__detail__text__title">
                      {item.email}
                    </span>
                    <span>{item.name}</span>
                  </div>
                </div>
                <Button
                  className="jobListItem__button"
                  type="primary"
                  onClick={() => handleClick(item.id)}>
                  ارسال رزومه
                </Button>
              </div>
            </Skeleton>
          </Card>
        ))}
      </InfiniteScroll>
    </div>
  );
};
