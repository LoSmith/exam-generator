export function getKeysFromEnum<T>(object: T): string[] {
  return Object.keys(object).slice(
    Object.keys(object).length / 2,
    Object.keys(object).length
  );
}
