import { ChangeEvent } from 'react';

export type EventHandleAdapter<T = Event> = T | ChangeEvent<HTMLInputElement>;
