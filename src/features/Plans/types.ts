export type PlanDocumentType = {
  authorId: string | undefined;
  title: string;
};

export type PlanPatchRequestType = PlanDocumentType & {
  id: string | undefined;
};

export type PlanDeleteRequestType = {
  authorId: string | undefined;
  planId: string;
};

export type PlanType = {
  id: string;
  document: PlanDocumentType;
};

export type PlansStateType = {
  apiRequestInProgress: boolean;
  plansList: PlanType[];
};
