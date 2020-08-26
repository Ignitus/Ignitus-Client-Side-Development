export type SavedJobCardData = {
  title: string;
  location: string;
  lastUpdated: string;
  poster: string;
  avatar: string;
  id: string;
};
export type Option = {
  title: string;
  action: Function;
  id: string;
};
export type JobProps = {
  isDraft: boolean;
  JobData: SavedJobCardData[];
  JobOptions: Option[];
};
