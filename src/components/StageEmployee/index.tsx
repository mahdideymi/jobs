import React from 'react';
import { Avatar, Dropdown, Menu, Icon } from 'antd';

import './style.scss';

function handleMenuClick(e: any) {
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key='1'>آرشیو</Menu.Item>
  </Menu>
);

interface IProps {
  candidate: { id: string; content: string };
  provided: any;
  isDragging: boolean;
}

export default class StageEmployee extends React.Component<IProps> {
  render() {
    const { candidate, provided, isDragging } = this.props;
    let draggableStyle = {
      ...provided.draggableProps.style,
      backgroundColor: isDragging ? '#f3f5ff' : '#f2f2f2',
      border: isDragging ? '2px solid #333' : 'initial',
      boxShadow: isDragging ? '2px 2px rgba(0, 0, 0, 0.3)' : 'initial',
    };

    return (
      <div
        className='stage-employee'
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        style={draggableStyle}>
        <div>
          <Avatar
            className='stage-employee__avatar'
            src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
          />
          <span>{candidate.content}</span>
        </div>
        <Dropdown overlay={menu}>
          <Icon className='stage-employee__icon' type='caret-down' />
        </Dropdown>
      </div>
    );
  }
}
