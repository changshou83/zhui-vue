type Dictionary<T> = {
  [key: string]: T;
};

export function omit<T>(
  obj: Dictionary<T>,
  keys: string | string[]
): Dictionary<T> {
  if (typeof obj !== "object" || Array.isArray(obj) || obj === null) {
    throw new TypeError("First argument must be an object");
  }
  if (typeof keys === "string") {
    keys = [keys];
  }

  const result: Dictionary<T> = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && !keys.includes(key)) {
      result[key] = obj[key];
    }
  }
  return result;
}
