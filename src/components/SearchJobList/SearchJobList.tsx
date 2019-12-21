import React from 'react';
import { Input, Card } from 'antd';
import { Button } from 'components';
import { SearchBox } from 'models';
import './SearchJobList.scss';

export const SearchJobList: React.FC<SearchBox> = props => (
  <div className="searchList">
    <img
      className="searchList__logo"
      alt="پروفایل"
      src={require('../../assets/profile-logo.svg')}
    />
    <Card className="searchList__card">
      <span className="searchList__card__title">{props.title}</span>
      <Input
        id="text"
        type="text"
        placeholder="شغل یا شرکت مورد نظر را وارد نمایید"
      />
      <Button type="submit" className="searchList__card__button" name="جستجو" />
    </Card>
  </div>
);
