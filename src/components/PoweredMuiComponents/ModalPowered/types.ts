import { ReactNode } from 'react';

export type ModalPoweredPropsType = {
  title: string;
  open: boolean;
  small?: boolean;
  setOpen: (newState: boolean) => void;
  children: ReactNode;
};
