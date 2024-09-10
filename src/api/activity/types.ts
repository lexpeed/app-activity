export interface SearchActivity {
  tags: { label: string }[];
  content: string;
}

export interface GetActivityById {
  title: string;
  question: string;
  alternatives: { label: string }[];
}
