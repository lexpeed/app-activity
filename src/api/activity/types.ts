export interface SearchActivity {
  id: string;
  title: string;
  tags: { label: string }[];
  questions: { content: string; alternatives: { label: string }[] }[];
}
