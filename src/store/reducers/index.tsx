import { combineReducers } from 'redux';

import { registerReducer } from './registerReducer';
import { loginReducer } from './loginReducer';
import { jobReducer } from './jobReducer';
import { stageReducer } from './stageReducer';
import { jobListReducer } from './jobListReducer';
import { jobDetailReducer } from './jobDetailReducers';
import { applyResumeReducer } from './applyResumeReducer';
import { Employee } from './EmployeeOverview';
import { UserStageReducer } from './UserStage';

export default combineReducers({
  // register: registerReducer,
  login: loginReducer, //made by haleh
  jobs: jobReducer, // made by hamidreza
  jobList: jobListReducer, //made by mahdi
  jobDetail: jobDetailReducer, //made by mahdi
  applyResume: applyResumeReducer, //made by haleh
  employee: Employee, // made by mahmood
  userStage: UserStageReducer, // made by mahmood
  stages: stageReducer, // made by Hamidreza
});
