export interface SearchActivity {
  id: string;
  title: string;
  tags: { label: string }[];
  questions: { question: string; alternatives: { label: string }[] }[];
}
