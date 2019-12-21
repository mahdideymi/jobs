import { all, fork } from 'redux-saga/effects';

import { registerFlow } from './registerSaga';
import { loginFlow, watchDeleteToken } from './loginSaga';
import { applyResumeFlow } from './applyResumeSaga';
import {
  watchFetchJobs,
  watchAddJob,
  watchEditJob,
  watchDeleteJob,
} from './jobSaga';
import { getJobListFlow } from './jobListSaga';
import { jobDetailFlow } from './jobDetailSaga';
import {
  watchFetchUser,
  watchRemoveUser,
  watchChangeUserStage,
  watchChangeOrderOfUserStage,
  watchCreateUserStage,
  watchFetchUserStages,
  watchRemoveUserStage,
  watchUpdateUserStage,
  watchFetchUsers,
} from 'store/watchers';
export default function* root() {
  yield all([
    fork(registerFlow),
    fork(loginFlow),
    fork(watchFetchJobs),
    fork(watchAddJob),
    fork(watchEditJob),
    fork(watchDeleteJob),
    fork(getJobListFlow),
    fork(jobDetailFlow),
    fork(watchFetchUser),
    fork(watchRemoveUser),
    fork(watchChangeUserStage),
    fork(watchChangeOrderOfUserStage),
    fork(watchCreateUserStage),
    fork(watchFetchUserStages),
    fork(watchRemoveUserStage),
    fork(watchUpdateUserStage),
    fork(applyResumeFlow),
    fork(watchFetchUsers),
    fork(watchDeleteToken),
  ]);
}
