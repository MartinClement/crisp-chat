export interface Storage {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

const IDENTIFICATION_TOKEN_KEY = "cc_id_token";
export const useLocalStorage = (storage: Storage = window.localStorage) => {
  const getIdToken = () => {
    return storage.getItem(IDENTIFICATION_TOKEN_KEY);
  };

  const setIdToken = (token: string) => {
    storage.setItem(IDENTIFICATION_TOKEN_KEY, token);
  };

  const removeIdToken = () => {
    storage.removeItem(IDENTIFICATION_TOKEN_KEY);
  };

  return { setIdToken, getIdToken, removeIdToken };
};
