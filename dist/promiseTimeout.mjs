export default function(e,t){
// Create a promise that rejects in <ms> milliseconds
const o=new Promise(((t,o)=>{const i=setTimeout((()=>{clearTimeout(i),o("Timed out in "+e+"ms.")}),e)}));
// Returns a race between our timeout and the passed in promise
return Promise.race([t,o])}