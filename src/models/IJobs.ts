import { IJobCard } from './IJobCard';

export interface IJobs {
  error: boolean,
  loading: boolean,
  jobs: Array<IJobCard>
}