import type { category } from "./Category";
export interface Data {
  profile: {
    name: string;
  };
  categories: Array<category>;
}
