export type FormSubmitPropsType = {
  inProgress: boolean;
  formPristine: boolean;
  formWithErrors?: boolean;
  onCancel: (cancelState: boolean) => void;
};
