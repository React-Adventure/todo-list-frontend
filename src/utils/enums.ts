import { TPriority } from './types';

export enum Priority {
  Minor = { e: 'we' },
  Major,
  Critical,
};

export enum PriorityColor {
  Minor = 'green',
  Major = 'orange',
  Critical = 'red'
};

export const Pr: Object<TPriority> = {
  Minor: {
    id: 1,
    name: 'Minor',
    color: 'green',
  },
};
