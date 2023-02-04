export const catogoriesSelector = (state) =>
  state.catogories.catogories.reduce((acc, querySnapShot) => {
    const { items, title } = querySnapShot;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
