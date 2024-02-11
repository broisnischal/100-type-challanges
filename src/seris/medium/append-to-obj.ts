type AppendToObject<T extends {}, U extends PropertyKey, V> = {
  [P in keyof T | U]: (T & Record<U, V>)[P];
};
