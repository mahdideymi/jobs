import React from 'react';
import { Card } from 'antd';
import { Draggable } from 'react-beautiful-dnd';

import { StageEmployee } from 'components';

import './style.scss';

interface IProps {
  stage: any;
  candidates: any;
  innerRef: any;
  provided: any;
  isDraggingOver: boolean;
}

export default class StageContainer extends React.Component<IProps> {
  render() {
    let droppableStyle = {
      ...this.props.provided.droppableProps.style,
      padding: '12px 12px 4px',
      paddingBottom:
        this.props.isDraggingOver && this.props.candidates.length > 3 ? 52 : 4,
      transition: 'background-color 1s ease, padding-bottom 0.3s ease-out',
      backgroundColor: this.props.isDraggingOver ? 'lightblue' : 'initial',
    };

    return (
      <Card
        size='small'
        className='stage-container'
        title={
          <div className='stage-container__head'>
            <span className='stage-container__title'>
              {this.props.stage.title}
            </span>
            <span className='stage-container__count'>
              {this.props.candidates.length}
            </span>
          </div>
        }
        bodyStyle={droppableStyle}>
        <div style={{ minHeight: '240px' }} ref={this.props.innerRef}>
          {this.props.candidates.map((candidate: any, index: number) => (
            <Draggable
              key={candidate.id}
              draggableId={candidate.id}
              index={index}>
              {(provided, snapshot) => (
                <StageEmployee
                  candidate={candidate}
                  provided={provided}
                  isDragging={snapshot.isDragging}
                />
              )}
            </Draggable>
          ))}
        </div>
      </Card>
    );
  }
}
