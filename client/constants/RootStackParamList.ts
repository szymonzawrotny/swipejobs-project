import { JobMatchInterace } from "./JobMatchInterface";

export type RootStackParamList = {
  Matches: undefined;
  JobDetails: { jobId: string };
  OfferDetails: { item: JobMatchInterace };
  Tabs: {
    screen: 'Maps';
  };
};
