export type ProfileType = {
  userName?: string;
  imageUrl?: string;
};

export type AuthStateType = {
  signedIn: boolean;
  inProgress: boolean;
  googleInitialized: boolean;
  profile: ProfileType;
};
