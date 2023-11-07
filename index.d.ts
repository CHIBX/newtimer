type Timer<T extends number | string> = T extends number
  ? Promise<void>
  : number|void;
declare function timer<T extends string|number>(val: T): Timer<T>;
export default timer;