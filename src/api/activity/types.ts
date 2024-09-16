export interface Tag {
  label: string;
}

export interface SearchActivity {
  id: string;
  title: string;
  tags: Tag[];
  questions: { content: string; alternatives: { label: string }[] }[];
}

export interface ActivityDetails {
  htmlContent: string;
  summary: string;
  tags: Tag[];
}
