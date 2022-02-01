export type DecisionModalPropTypes = {
  title: string;
  question: string;
  open: boolean;
  inProgress?: boolean;
  setOpen: (newState: boolean) => void;
  onSubmit: (e: React.SyntheticEvent) => Promise<void>;
};
