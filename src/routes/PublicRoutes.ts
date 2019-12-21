import {
  LoginPage,
  RegisterPage,
  JobListPage,
  EmployerJobsPage,
  CandidatesPage,
  EmployerStagePage,
  JobDetail,
  NotFoundPage,
} from 'pages';
import { Routes } from 'models';

export const PublicRoutes: Routes[] = [
  { path: '/', component: LoginPage, exact: true },
  { path: '/register', component: RegisterPage, exact: false },
  { path: '/job-list', component: JobListPage, exact: false },
  { path: '/job-detail', component: JobDetail, exact: false },
  // { path: '*', component: NotFoundPage, exact: false },
];
