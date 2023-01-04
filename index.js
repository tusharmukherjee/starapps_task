// [1,6,3,4,5,0,0,0,6]
/*

[x] 1. value of the index,
as we go next we will minus the value by 1 as the value goes to 0 at a particular index we have to take the value at that index
[x] 2. if the array not end and the value become 0 we will take that value.
[x] 3. compare the value of each index if it is  greater than current we will took it.
[x] 4. if the value is 0 and our choosed value become 0, it will return -1.
[x] 5. as the value reaches to index print myairports.

*/
// 1 -> 6 -> 5 -> 6
const testarr = [1,6,3,4,5,0,0,0,6];

// const testarr = [1,3,3,3,0,0,0,1];

// const testarr = [2,1,1,1,2,3,4,2,2,1,3,2,0];

// const testarr = [2,1,2,3,1];

let change=0;
let myairport=[];

myairport.push(testarr[0]);

for(let i =0; i<testarr.length; i++){

    // 1. checks if the last taken value is 0 and the current index value is not 0 then it will asign that index value as the
    // new pivot and store it to the new array.
    if(testarr[change] == 0 && testarr[i] !=0){
        change = i;
        myairport.push(testarr[i]);
    }
    
    // 2. checks if the choosed value is less, and the left path to the final is greter than the taken airplane's left fuel then take the new plane.
    // and store it to the myairport array.
    if(testarr[change]<testarr[i] && (testarr.length-1 - i) > testarr[change]){
        change = i;
        myairport.push(testarr[i]);
    }

    // 3. if both the index value and the last airplane fuel become to 0 then return "-1".
    if(testarr[change] == 0 && testarr[i] ==0){
        console.log(-1);
        return -1;
    }

    // 4. if the last plane fuel is greater or equal to 0 and the plane reached to the last airport.
    if(testarr[change] >= 0 && i==testarr.length-1){
        
        // if the last airport's plane has greater fuel than the last airplane then took the last airplane also and store it to the myairport array.
        if(testarr[i] > testarr[change]){
            myairport.push(testarr[i]);
        }

        // as the plane reached printing the array of the airplane's fuel took initially.
        console.log(myairport);
    }

    // subtracting the value of the airplane's fuel, which we are flying as we touched the airport in this cycle and moving forward to next in next cycle. 
    testarr[change]--;

}