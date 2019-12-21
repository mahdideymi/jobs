import React, { useState } from 'react';
import { Avatar, Dropdown, Icon, Menu } from 'antd';

import './style.scss';
import { useHistory } from 'react-router';
import { deleteToken } from 'store/actions';
import { useDispatch } from 'react-redux';

function logout() {
  window.localStorage.removeItem('accessToken');
  window.localStorage.removeItem('refreshToken');
}
const menu = (
  <Menu>
    <Menu.Item>
      <a onClick={logout} target='_blank' rel='noopener noreferrer'>
        خروج
      </a>
    </Menu.Item>
  </Menu>
);

interface IProps {
  name: string;
}

//@ts-ignore
export const User: React.FC<IProps> = props => {
  const dispatch = useDispatch();
  let history = useHistory();
  const [auth, setAuth] = useState(
    Boolean(
      localStorage.getItem('accessToken') &&
        localStorage.getItem('refreshToken'),
    ),
  );
  function logout() {
    dispatch(deleteToken());
    history.push('/');
  }
  return (
    <div className='user'>
      {
        <>
          {' '}
          <div>
            <Avatar
              className='user__avatar'
              src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
            />
            <span>{props.name}</span>
          </div>
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item>
                  <a
                    onClick={() => logout()}
                    target='_blank'
                    rel='noopener noreferrer'>
                    خروج
                  </a>
                </Menu.Item>
              </Menu>
            }>
            <Icon className='user__icon' type='caret-up' />
          </Dropdown>
        </>
      }
    </div>
  );
};
