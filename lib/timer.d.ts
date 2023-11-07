type Timer<T extends number | string> = T extends number
  ? Promise<void>
  : ReturnType<typeof $timer>;
declare  const clock: Readonly<Record<string, number>>;
declare function $timer(val: string): number|void;
declare function timer<T extends string|number>(val: T): Timer<T>;
export default timer;