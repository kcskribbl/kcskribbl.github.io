import content from './content.json';

export interface LinkItem {
  title: string;
  description: string;
  url: string;
  published?: boolean;
}

export interface BlogItem extends LinkItem {
  date: string;
  tags: string[];
  featured?: boolean;
}

export interface PublicationItem extends LinkItem {
  type: string;
  date: string;
  featured?: boolean;
}

export interface ProjectItem extends LinkItem {
  language: string;
}

export interface RecordItem {
  title: string;
  organization: string;
  date: string;
  description: string;
  url: string;
  type?: string;
  metric?: string;
  published?: boolean;
}

const visible = <T extends { published?: boolean }>(items: T[]) =>
  items.filter((item) => item.published !== false);

export const profile = content.profile;
export const focusAreas = content.focusAreas;
export const topics = content.topics;
export const publications = visible(content.publications as PublicationItem[]);
export const blogs = visible(content.blogs as BlogItem[]);
export const projects = visible(content.projects as ProjectItem[]);
export const certifications = visible(content.certifications as RecordItem[]);
export const credentials = visible(content.credentials as RecordItem[]);
export const contributions = visible(content.contributions as RecordItem[]);
export const reviews = visible(content.reviews as RecordItem[]);
export const awards = visible(content.awards as RecordItem[]);
