import React, { FunctionComponent } from 'react';
import { IUserOverview } from 'models';
import { Row, Col, Avatar, Typography, Icon, Button, Layout } from 'antd';
import { Menu, Dropdown, message } from 'antd';
import './EmployeeOverview.scss';
import { DeleteConfirm } from './DeleteConfirm/DeleteConfirm';
import { useDispatch, useSelector, useStore } from 'react-redux';
import {
  AsyncFetchUser,
  AsyncRemoveUser,
  AsyncChangeUserStage,
  FetchUsers,
  AsyncFetchUsers,
  AsyncCreateUserStage,
  AsyncChangeOrderOfUserStage,
  AsyncUpdateUserStage,
  RemoveUserStage,
  AsyncRemoveUserStage,
} from 'store/actions';
import { Card } from 'antd';
import { ResumePdfViewer } from './ResumePdfViewer/ResumePdfViewer';
import 'layouts/EmployerLayout/style.scss';
function handleButtonClick(e: any) {
  message.info('Click on left button.');
  console.log('click left button', e);
}

function handleMenuClick(e: any) {
  message.info('Click on menu item.');
  console.log('click', e);
}
const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key='1'>
      <Icon type='user' />
      1st menu item
    </Menu.Item>
    <Menu.Item key='2'>
      <Icon type='user' />
      2nd menu item
    </Menu.Item>
    <Menu.Item key='3'>
      <Icon type='user' />
      3rd item
    </Menu.Item>
  </Menu>
);
const EmployeeOverview: FunctionComponent = (props: IUserOverview) => {
  const { Title, Text } = Typography;
  const result: any = useSelector((store: any) => {
    return {
      listOfUsers: store.userStage,
    };
  });
  const dispatch = useDispatch();
  const { Header, Content } = Layout;
  return (
    <>
      <Header className='employer-layout__header'>Some header goes here</Header>
      <Content className='employer-layout__content'>
        <div className='EmployeeOverview'>
          <Row type='flex' align='middle'>
            <Col>
              <Avatar
                src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
                size={70}
              />
            </Col>
            <Col lg={19} md={17} sm={17}>
              <Title level={4}>رضا نعیمی زاده</Title>
              <Text>
                <Icon type='plus' className='EmployeeOverview__icon--plus' />
                افزوده شده در 4 روز پیش
                <Icon type='check' className='EmployeeOverview__icon--check' />3
                ساعت پیش
              </Text>
            </Col>
            <Col span={3} md={3} sm={3}>
              <DeleteConfirm />
            </Col>
          </Row>
          <Row
            className='EmployeeOverview__ContactDetailsAndPdfViewer'
            gutter={16}>
            <Col span={9}>
              <Card title='اطلاعات تماس' bordered={true}>
                <Row type='flex' justify='space-between'>
                  <Col>
                    <div
                      className={
                        'EmployeeOverview__ContactDetailsAndPdfViewer__contactDetails_item'
                      }>
                      ایمیل
                    </div>
                    <div
                      className={
                        'EmployeeOverview__ContactDetailsAndPdfViewer__contactDetails_item'
                      }>
                      شماره تماس
                    </div>
                  </Col>
                  <Col>
                    <div
                      className={
                        'EmployeeOverview__ContactDetailsAndPdfViewer__contactDetails_item'
                      }>
                      mahmood@gmail.com
                    </div>
                    <div
                      className={
                        'EmployeeOverview__ContactDetailsAndPdfViewer__contactDetails_item'
                      }>
                      09334319058
                    </div>
                  </Col>
                </Row>
              </Card>
              <Card
                title='تغییر مرحله'
                bordered={true}
                extra={'مرحله ی فعلی: ارزیابی'}>
                <Dropdown overlay={menu}>
                  <Button>
                    ارزیابی <Icon type='down' />
                  </Button>
                </Dropdown>
              </Card>
            </Col>
            <button
              onClick={() =>
                dispatch(AsyncRemoveUserStage({ stageId: 1, JobOfferId: 1 }))
              }>
              list of users
            </button>

            <div style={{ whiteSpace: 'pre', direction: 'ltr' }}>
              {JSON.stringify(result, null, 3)}
            </div>
            <Col span={14}>
              <Card
                title='رزومه پروفایل'
                bordered={true}
                className={
                  'EmployeeOverview__ContactDetailsAndPdfViewer__PdfViewer'
                }>
                <ResumePdfViewer />
              </Card>
            </Col>
          </Row>
        </div>
      </Content>
    </>
  );
};

export { EmployeeOverview };
