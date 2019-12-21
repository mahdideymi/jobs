import React from 'react';
import { useHistory } from 'react-router-dom';
import { Icon, Menu, Dropdown, Button, Card, Modal } from 'antd';

import './style.scss';

const { Item } = Menu;
const { confirm } = Modal;

function showDeleteConfirm(handleDelete: () => {}) {
  confirm({
    title: 'آیا از آرشیو این موقعیت شغلی اطمینان دارید؟',
    okText: 'بلی',
    okType: 'danger',
    cancelText: 'خیر',
    maskClosable: true,
    onOk() {
      handleDelete();
    },
    onCancel() {},
  });
}

interface IProps {
  id: number;
  title: string;
  numOfCandidates: number;
  handleEdit: () => void;
  handleDelete: () => {};
}

export const JobCard: React.FC<IProps> = props => {
  let history = useHistory();

  const handleClick = () => {
    console.log('Title clicked');
    history.push(`/stage/${props.id}`);
  };

  function handleMenuClick(e: any) {
    switch (e.key) {
      case '1':
        props.handleEdit();
        break;
      case '2':
        showDeleteConfirm(props.handleDelete);
        break;
      default:
        break;
    }
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Item key='1'>ویرایش</Item>
      <Item key='2'>آرشیو</Item>
    </Menu>
  );

  return (
    <Card
      className='job-card'
      size='small'
      title={<span className='job-card__title'>{props.title}</span>}
      extra={
        <div>
          <Button className='job-card__button' onClick={handleClick}>
            مشاهده کاندیدها
          </Button>
          <Dropdown overlay={menu}>
            <a href='# '>
              <Icon type='caret-down' className='job-card__icon' />
            </a>
          </Dropdown>
        </div>
      }>
      <p className='job-card__body'>{props.numOfCandidates} کاندید</p>
    </Card>
  );
};
