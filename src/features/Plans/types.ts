export type PlanType = {
  authorId: string;
  title: string;
};

export type PlansStateType = {
  apiRequestInProgress: boolean;
  plans: PlanType[];
};
