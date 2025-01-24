
const majorityElement = (nums)=>{
    let occ = nums.reduce((acc,curr)=>{
        return acc[curr]?++acc[curr]:acc[curr]=1,acc
    },{})
    let ans = Object.values(occ);
    let maxIndex = ans.indexOf(Math.max(...ans));
    let keys = Object.keys(occ);
    return keys[maxIndex];
}
console.log(majorityElement([4,2,3,3]));