export type DecisionModalPropTypes = {
  title: string;
  question: string;
  open: boolean;
  setOpen: (newState: boolean) => void;
  onSubmit: (e: React.SyntheticEvent) => Promise<void>;
};
