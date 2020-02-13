export function setStorage(key: string, value: string) {
  localStorage.setItem(key, value);
}

export function getStorage(key: string): string {
  const list = localStorage.getItem(key);
  return list || "";
}
