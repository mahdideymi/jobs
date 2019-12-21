import React, { FC } from 'react';

import { Tooltip, Avatar, Comment } from 'antd';
import moment from 'moment';

const authorStyle: object = {
  fontSize: 16,
  fontWeight: 'bold',
  color: '#4a4a4a'
};

export const EmployerComment: FC = () => {
  const actions = [
    <span key="comment-edit">ویرایش</span>,
    <span key="comment-delete">حذف</span>
  ];

  return (
    <Comment
      actions={actions}
      author={<span style={authorStyle}>حمیدرضا ناطقی</span>}
      avatar={
        <Avatar
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          alt="Han Solo"
        />
      }
      style={{ backgroundColor: '#f2f2f2', padding: 10, paddingBottom: 0, marginBottom: 12 }}
      content={
        <p style={{ paddingTop: 12, color: '#4a4a4a' }}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
      }
      datetime={
        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
          <span style={{ color: '#979797' }}>لحظاتی پیش</span>
        </Tooltip>
      }
    />
  );
};