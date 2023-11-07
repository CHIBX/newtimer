// import { fileURLToPath } from 'node:url';
import sleep from './sleep.js'
const clock = {}

function timer(val){
    if(typeof val === 'string'){
        return $timer(val);
    }
    return sleep(val);
}
export default timer;


function $timer(val, ms=true){
      if(clock[val]){
        let time=performance.now()-clock[val];
        return parseInt(ms? time: time/1000);
      }
      clock[val]=performance.now();
      return void 0;
}