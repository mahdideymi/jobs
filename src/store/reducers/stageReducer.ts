import { FETCH_STAGES } from 'store/actionTypes';

import data from './stages.json';

const PRELOAD: Array<any> = data;

export const stageReducer = (state = PRELOAD, action: any) => {
  switch (action.type) {
    case FETCH_STAGES:
      return action.preload;
    case 'ADD_CANDIDATE':
      const start = state.find(
        (stage: any) => stage.id === action.sourceDroppableId,
      );
      const end = state.find(
        (stage: any) => stage.id === action.destinationDroppableId,
      );
      const candidate = start.candidates.find(
        (candidate: any) => candidate.id === action.draggableId,
      );

      if (start === end) {
        const stage = state.find(stage => stage.id === start.id);
        const newCandidates = Array.from(stage.candidates);
        newCandidates.splice(action.sourceIndex, 1);
        newCandidates.splice(action.destinationIndex, 0, candidate);

        const newStage = {
          ...stage,
          candidates: newCandidates,
        };

        const newState = state.map((stage: any) =>
          stage.id === start.id ? newStage : stage,
        );

        return newState;
      }

      const startCandidates = Array.from(start.candidates);
      startCandidates.splice(action.sourceIndex, 1);
      const newStart = {
        ...start,
        candidates: startCandidates,
      };

      const endCandidates = Array.from(end.candidates);
      endCandidates.splice(action.destinationIndex, 0, candidate);
      const newEnd = {
        ...end,
        candidates: endCandidates,
      };

      const newState = state.map((stage: any) => {
        if (stage.id === start.id) return newStart;
        else if (stage.id === end.id) return newEnd;
        return stage;
      });

      return newState;
    case 'REMOVE_CANDIDATE':
      return state;
    default:
      return state;
  }
};
