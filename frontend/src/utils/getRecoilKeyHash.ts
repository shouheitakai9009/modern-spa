type RecoilKeysHash<T extends ReadonlyArray<string>> = {
  [K in T[number]]: K;
};

export const getRecoilKeyHash = <T extends readonly string[]>(
  keys: T
): RecoilKeysHash<T> =>
  keys.reduce((obj, key) => {
    obj[key as T[number]] = key;
    return obj;
  }, {} as RecoilKeysHash<T>);
