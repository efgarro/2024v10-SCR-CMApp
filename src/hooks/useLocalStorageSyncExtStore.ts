import * as React from "react";

const dispatchStorageEvent = (key: string, newValue: string | null) => {
  window.dispatchEvent(new StorageEvent("storage", { key, newValue }));
};

const getLocalStorageItem = (key: string) => {
  return window.localStorage.getItem(key);
};

const setLocalStorageItem = <T>(key: string, value: T) => {
  const stringifiedValue = JSON.stringify(value);
  window.localStorage.setItem(key, stringifiedValue);
  dispatchStorageEvent(key, stringifiedValue);
};

const removeLocalStorageItem = (key: string) => {
  window.localStorage.removeItem(key);
  dispatchStorageEvent(key, null);
};

const subscribe = (callback: () => void) => {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
};

// const getLocalStorageServerSnapshot = () => {
//   throw Error("useLocalStorageSyncExtStore is a client-only hook");
// };

const useLocalStorageSyncExtStore = <T>(
  key: string,
  initialValue: T
): [localStorageState: T, setState: (v: T) => void] => {
  const getSnapshot = () => getLocalStorageItem(key);

  const stringifiedStore = React.useSyncExternalStore(
    subscribe,
    getSnapshot
    // getLocalStorageServerSnapshot
  );

  const setState = React.useCallback(
    (v: T) => {
      try {
        const nextState =
          typeof v === "function"
            ? v(JSON.parse(stringifiedStore as string))
            : v;

        if (nextState === undefined || nextState === null) {
          removeLocalStorageItem(key);
        } else {
          setLocalStorageItem<T>(key, nextState);
        }
      } catch (e) {
        console.warn(e);
      }
    },
    [key, stringifiedStore]
  );

  React.useEffect(() => {
    if (
      getLocalStorageItem(key) === null &&
      typeof initialValue !== "undefined"
    ) {
      setLocalStorageItem<T>(key, initialValue);
    }
  }, [key, initialValue]);

  return [
    stringifiedStore ? JSON.parse(stringifiedStore) : initialValue,
    setState,
  ] as const;
};

export default useLocalStorageSyncExtStore;
