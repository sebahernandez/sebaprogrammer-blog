import { getCollection, type CollectionEntry } from "astro:content";

// Define la interfaz para el objeto Page
export interface Page {
  data: CollectionEntry<"posts">[];
  start: number;
  end: number;
  size: number;
  total: number;
  currentPage: number;
  lastPage: number;
  url: {
    current: string;
    prev: string | undefined;
    next: string | undefined;
  };
}
