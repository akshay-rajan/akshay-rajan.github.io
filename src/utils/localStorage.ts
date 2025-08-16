export const setItemWithTTL = (key: string, value: any, ttlInMs: number) => {
  const now = new Date();
  const item = {
    value: value,
    expiry: now.getTime() + ttlInMs
  };
  localStorage.setItem(key, JSON.stringify(item));
};

export const getItemWithTTL = (key: string) => {
  const itemStr = localStorage.getItem(key);

  if (!itemStr) {
    return null;
  }

  try {
    const item = JSON.parse(itemStr);
    const now = new Date();

    if (now.getTime() > item.expiry) {
      console.warn(`Item with key: ${key} has expired, removing from localStorage`);
      localStorage.removeItem(key);
      return null;
    }

    return item.value;
  } catch (error) {
    return null;
  }
};
