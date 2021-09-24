import { RecipeType } from '../components/AllRecipies';

type ObjType = {
  [key: string]: number;
};

type ResultType = readonly [string, number];

export const setupTags = (recipes: RecipeType[]) => {
  const obj: ObjType = {};

  const tags = recipes.reduce((acc, cur) => [...acc, ...cur.content.tags], []);

  const theNumberOfTags: ResultType[] = tags.reduce((acc, cur) => {
    if (acc[cur]) {
      acc[cur] += 1;
    } else {
      acc[cur] = 1;
    }
    return acc;
  }, obj);

  const result = Object.entries(theNumberOfTags).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  return result;
};
