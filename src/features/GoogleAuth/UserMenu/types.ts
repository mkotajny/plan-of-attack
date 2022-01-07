export type UserMenuPropsType = {
  fullName: string | undefined;
  anchorElement: HTMLDivElement | null | undefined;
  handleMenuOpen: (open: boolean) => void;
  onAuthenticationClick: () => void;
};
