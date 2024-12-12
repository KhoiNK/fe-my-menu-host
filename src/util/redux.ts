export const createActionName = (reducer: string, actionName: string) =>
  `@@${reducer.toUpperCase()}/${actionName}`;
