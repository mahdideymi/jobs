import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { Layout, Dropdown, Menu, Icon } from 'antd';

import { StageContainer } from 'containers';
import 'layouts/EmployerLayout/style.scss';
import './style.scss';

const { Header, Content } = Layout;

function handleMenuClick(e: any) {
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key='1'>آرشیو</Menu.Item>
  </Menu>
);

interface IProps {
  match?: any;
}

export const EmployerStagePage: React.FC<IProps> = props => {
  const dispatch = useDispatch();
  const jobs = useSelector((state: any) => state.jobs);
  const stages = useSelector((state: any) => state.stages);

  console.log(stages);

  let job = jobs.data.find((item: any) => item.id === +props.match.params.id);

  const onDragEnd = (result: any) => {
    const { source, destination, draggableId } = result;
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    dispatch({
      type: 'ADD_CANDIDATE',
      sourceDroppableId: source.droppableId,
      destinationDroppableId: destination.droppableId,
      draggableId,
      sourceIndex: source.index,
      destinationIndex: destination.index,
    });
  };

  return (
    <>
      <Header className='employer-layout__header employer-stage-page__header'>
        <p className='employer-stage-page__title'>
          <span>موقعیت شغلی</span>&nbsp;
          <span className='employer-stage-page__title--sub'>{job.title}</span>
        </p>
        <Dropdown.Button
          className='employer-stage-page__header__dropdown'
          overlay={menu}
          icon={<Icon type='down' />}>
          <div>
            <Icon type='edit' />
            &nbsp;ویرایش
          </div>
        </Dropdown.Button>
      </Header>
      <DragDropContext onDragEnd={onDragEnd}>
        <Content className='employer-layout__content'>
          <div className='employer-stage-page__content'>
            {stages.map((stage: any) => {
              return (
                <Droppable key={stage.id} droppableId={stage.id}>
                  {(provided, snapshot) => (
                    <StageContainer
                      stage={stage}
                      candidates={stage.candidates}
                      provided={provided}
                      isDraggingOver={snapshot.isDraggingOver}
                      innerRef={provided.innerRef}
                      {...provided.droppableProps}>
                      {provided.placeholder}
                    </StageContainer>
                  )}
                </Droppable>
              );
            })}
          </div>
        </Content>
      </DragDropContext>
    </>
  );
};
