export type PlanType = {
  authorId: string | undefined;
  title: string;
};

export type PlansStateType = {
  apiRequestInProgress: boolean;
  plans: PlanType[];
};
