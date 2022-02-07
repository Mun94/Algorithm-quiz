const Comm = {
    dbInfoObj: {}
}
for(let ix = 1; ix <= 10000; ix++) {
    Comm.dbInfoObj[ix] = { instanceName: ix, osName: ix };
}

console.time('performance: [ Object.keys, for ]');
const dbInfoObj = Object.keys(Comm.dbInfoObj || {});
let result;
for(let ix = 0; ix < dbInfoObj.length; ix++) {
	if(Comm.dbInfoObj[dbInfoObj[ix]].instanceName) {
		if(Comm.dbInfoObj[dbInfoObj[ix]].osName) {
			result = true;
		}
	}
}
console.timeEnd('performance: [ Object.keys, for ]');

console.time('performance: [ Object.entries, for of ]');
const dbInfo = Object.entries(Comm.dbInfoObj || {});
let result2;
for(let [, dbInfoVal] of dbInfo) {
	if(dbInfoVal.instanceName && dbInfoVal.osName) {
		result2 = true;
	}
}
console.timeEnd('performance: [ Object.entries, for of ]');

console.time('performance: [ for in ]');
let result3;
for(let key in Comm.dbInfoObj) {
    const { instanceName, osName } = Comm.dbInfoObj[key];
	if(instanceName && osName) {
		result3 = true;
	}
}
console.timeEnd('performance: [ for in ]');

// const arr = new Array(100000).fill('data');

// console.time('performance: [ for ]');
// let forResult;
// for(let ix = 0; ix < arr.length; ix++) {
//     forResult = arr[ix];
// };
// console.timeEnd('performance: [ for ]');

// console.time('performance: [ forEach ]');
// arr.forEach(item => forResult = item)
// console.timeEnd('performance: [ forEach ]');
