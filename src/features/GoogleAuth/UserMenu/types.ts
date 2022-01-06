export type UserMenuPropsType = {
  userName: string | undefined;
  anchorElement: HTMLDivElement | null | undefined;
  handleMenuOpen: (open: boolean) => void;
  onAuthenticationClick: () => void;
};
