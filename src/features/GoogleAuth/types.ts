export type ProfileType = {
  userId: string | undefined;
  userName: string | undefined;
  imageUrl: string | undefined;
};

export type AuthStateType = {
  signedIn: boolean;
  inProgress: boolean;
  profile: ProfileType;
};
