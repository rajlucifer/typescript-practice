// const a: number;
// a=12;
// console.log(a);

// this will show error because in const must provide the value during initialized time then it work

// know it work
const a:number =12;
console.log(a);

// this string 
let username:string ;
username="hello";
console.log(username)


// this is boolean
let isLoggedIn:boolean;
isLoggedIn= true;
console.log(isLoggedIn);


// making array datatype is number

let array:number[];
// array=[1,2,3,"hello"];// in this we decleared the array in the number form thatswhy thatswhy string show error

array=[1,7,8];
console.log(array);

// making array datatype is string

let arr:string[];
// one more way to assign the array in ts
let arr2 :Array<string>;

console.log(arr=["hello","world"]);

// enum
// it used to defind the particular role which can not be change
// enum role {
//     "admin","user"
// }

//any is the default type in the typescript
// in real world we mainly don't use the any in project

// let value;
// value = "hello"
// value=12,
// value=true;

let value:any;
value = "hello"
value=12,
value=true;


function adding(a:number,b:number){

    const sum = a+b;
    return sum;

}

const result = adding(2,5);
console.log(result);


//type inference  means typescript automatically know the datatype easily  when we decleared value  below code showing no error

let num1=33;

// type declearation 
let num2:number =77;


//type aliase it is use to make the coustom type scipt

type id= number| string ; //now here we make the custom type 

let myId:id ="hello"; // no error is comming

// best use of type
type status = "success" | "error" | "pending"

let b:status;

b="success";



// how to make the object  one more thing we have to write all info about the fields that are present otherwise show error like 
// if we don't write the age then show the error


type user ={
    name:string,
    age:number
};

let obj:user;
obj={
    name:"kira",
    age:21

}

console.log(obj);



//interface it is mainly use by object only and user u should be capital letter

interface User{
    username:string,
    email:string,
    password:string,
    isLogged:boolean



};


let obj2:User = {
    username:"god",
    email:"god@gmail.com",
    password:"61548vv",
    isLogged:true
};



type x={
    num1:number
}
type y={
    num2:number
}
// combine the two type 
type xy= x&y;

// extends  


interface Like extends User{
    totalLike:number
};


let objLike:Like = {
    username:"kira",
    email:"kirad@gmail.com",
    password:"61eeed8vv",
    isLogged:false,
    totalLike:10

}


console.log(objLike)



// generic  <T> ():T here this is the return type
function hello<T>(a:T,b:T):T{
    return (b);
     

}

hello<number>(2,5);



// global declearation  we do in the src/type.d.ts

declare global {
    interface Window {
        appVersion:string
    }
    type ApiResponse<T> = {
        data:T,
        error?:string
    };

}

export {};

// this basically work in react 
type ButtonProps = {
label: string;
onClick: () => void;
};
const Button: React.FC<ButtonProps> = ({ label, onClick }) =>
<button onClick={onClick}>{label}</button>;