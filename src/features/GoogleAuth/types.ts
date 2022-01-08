export type ProfileType = {
  fullName?: string;
  firstName?: string;
  imageUrl?: string;
};

export type AuthStateType = {
  signedIn: boolean;
  inProgress: boolean;
  googleInitialized: boolean;
  profile: ProfileType;
};
