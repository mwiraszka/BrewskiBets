/**
 * A custom sorting algorithm, to be used within an array sort method, for example
 * `sortedItems = items.sort(customSort(key, order))`
 * @param {string} key The object property to sort by
 * @param {boolean} isAscending Whether sort is in ascending order (i.e. 1..10, a..z)
 */
export function customSort(key: string, isAscending: boolean) {
  return function innerSort<T extends Object>(a: T, b: T): number {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0; // Property doesn't exist on either object
    }

    let varA: any =
      typeof a[key as keyof T] === 'string'
        ? (a[key as keyof T] as unknown as string).toUpperCase()
        : a[key as keyof T];
    let varB: any =
      typeof b[key as keyof T] === 'string'
        ? (b[key as keyof T] as unknown as string).toUpperCase()
        : b[key as keyof T];

    const ascendingOrder = varA > varB ? 1 : varA < varB ? -1 : 0;
    return isAscending ? ascendingOrder : ascendingOrder * -1;
  };
}
