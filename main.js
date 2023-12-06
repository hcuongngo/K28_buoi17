// // trường hợp 1 có thẻ element và truy xuất tới
// const userNameElement = document.getElementById("username");
// console.log("userNameElement", userNameElement)
// console.log("type of element", typeof userNameElement);

// const passwordElement = document.getElementById("password");
// console.log("passwordElement", passwordElement);

// // cách lấy giá trị người dùng nhập vào
// document.getElementById("btn-submit").addEventListener("click", () => {
//   console.log("username", document.getElementById("username").value)
//   console.log("password", document.getElementById("password").value)
//   console.log("username type", document.getElementById("username").type)
//   console.log("username placeholder", document.getElementById("username").placeholder)

//   document.getElementById("username").type = "button"
// })


// document.getElementById("btn-click").addEventListener("click", () => {
//   console.log("click btn")
//   document.getElementById("content").innerHTML = "Nội dung mới"
//   document.getElementById("content").style.padding = "100px"
//   document.getElementById("content").style.color = "red"
//   console.log("thuoc tinh cua the p", document.getElementById("content").style.margin)
//   console.log("height", document.getElementById("block")).height
// })

// // create new element by javascript
// const btn = document.createElement("BUTTON");
// document.getElementById("taoButton").onclick = () => {
//   const btn = document.createElement("BUTTON");
//   btn.innerHTML = "New button";
//   document.body.appendChild(btn);
// }



// // trường hợp 2: chưa có thẻ element thì tạo bằng javascript, thêm content, thêm style, thêm attribute cho thẻ bằng javascript

// student literal
// let studentA = {
//   fullName: "nguyen van a",
//   age: 20,
//   address: 'HCM'
// }

// constructor function
// function Student(_name, _age) {
//   this.name = _name;
//   this.age = _age;
// }

// const studentA = new Student("A", 20);
// console.log("studentA", studentA)

// const studentB = new Student("B", 20);
// console.log("studentB", studentB);


// class Person {
//   constructor(_fullName, _gender) {
//     this.fullName = _fullName;
//     this.gender = _gender;
//   }
// }

// const person1 = new Person("A", "male")
// console.log("person1", person1);

// const person2 = new Person("B", "female");
// console.log("person2", person2);

// const person3 = new Person("C", "others");
// console.log("person3", person3);

// let sum = (a, b) => {
//   return a+b
// }



// console.log("a")

// setTimeout(() => {
//   console.log("b")
// }, 3000)

// setTimeout(
//   () => console.log("c"),
//   1000
// )

// setTimeout(() => {
//   console.log("d")
// }, 0);

// console.log("e")

/*
a
e
d
c
b


*/
// const sum = (a, b) => {
//   return a + b;
// }
// sum(1,2)


// // input params
// const fetchData = (callback) => {
//   setTimeout(() => {
//     const userInfo = {
//       fullName: 'A',
//       phoneNumber: '03838383'
//     }

//     // argument
//     callback(userInfo)

//   }, 700);
// }

// // const showUserInfo = (userInfo) => {
// //   console.log("userInfo", userInfo)
// // }

// fetchData((userData) => {
//   console.log("userData", userData)
// });

// const fetchData = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const product = {
//         name: 'iphone16',
//         price: 2500
//       }
//       // console.log("product in promise", product)
//       resolve(product);
//       // reject(error)
//     }, 700);
//   })
// }

// // render UI, console.log
// fetchData()
//   .then((product) => {
//     console.log("product from server in thencatch", product)
//   })
//   .catch((error) => {
//     console.log("error", error)
//   })



// let person = {
//   name: 'a',
//   age: 18,
// }

// console.log("person", person);
// console.log("typeof person", typeof person);

// const jsonString = JSON.stringify(person)
// console.log("jsonString", jsonString)
// console.log("typeof jsonString", typeof jsonString)



// const studentString = `{
//   "name": "Alex",
//   "class": "12"
// }`

// console.log("studentString", studentString)
// console.log("typeof studentString", typeof studentString)

// const student = JSON.parse(studentString);
// console.log("student", student)
// console.log("typeof student", typeof student)


// const fetchData = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const product = {
//         name: 'iphone15',
//         price: 1500
//       }
//       resolve(product)
//       // reject(error)
//     }, 700)
//   })
// }

// const handleSuccessData = async () => {
  //render UI, console
  // const productFromAPI = await fetchData();
  // console.log("productFromAPI", productFromAPI);
// }

// handleSuccessData()

// let sum = async (a, b) => {
//   return a + b;
// }
// console.log("???", sum(1,2))

// let divide = (a, b) => {
//   if (b === 0) {
//     throw new Error('Chia cho 0 khong hop le')
//     // return new Error('Chia cho 0 khong hop le')
//   }

//   return a / b;
// }

// try {
//   let result = divide(5, 0);
//   console.log("result", result);
// } catch (error) {
//   console.log("error", error);
// } finally {
//   console.log("luon luon thuc thi");
// }

// const fetchData = async () => {
//   // throw new Error('Call API fail')
//   const successData = {
//     name: 'iphone',
//     price: '1000',
//   }

//   // giong nhu resolve, reject cua callback truyen vo promise
//   return successData;
// }

// const handleResultFromFetchData = async () => {
//   try {
//     let data = await fetchData()
//     console.log("data", data);
//   } catch (error) {
//     console.log("error", error)
//   }
// }

// handleResultFromFetchData();

// document.getElementById("paragraph").innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, quam!"


// console.log("object p element", document.getElementById("paragraph"))
// console.log("typeof p element", typeof document.getElementById("paragraph"))

// const handleClick = () => {
//   alert('Button da duoc nhan')
// }

document.getElementById("paragraph").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, temporibus."
console.log("object p element",document.getElementById("paragraph"));
console.log("typeof p element", typeof document.getElementById("paragraph"));

const handleClick = () => {
    alert("button da duoc nhan")
}


document.getElementById("paragraph").style.fontSize = '50px';
document.getElementById("paragraph").style.color = "red";



document.getElementById("btn-submit").addEventListener("click", () => {
  console.log("username:", document.getElementById("username").value)
  console.log("password:", document.getElementById("password").value)
  document.getElementById("username").type = "password";


})

document.getElementById("btn").addEventListener("click", () => {
  let pElement = document.createElement("p");
  pElement.innerHTML = "the moi vua duoc them";
  pElement.style.color = 'yellow';
  document.body.appendChild(pElement);
})

let person = {
  name: "Alex",
  age: 20,
}
console.log("person", person)
console.log("typeof person", typeof person)

// object => string
const personString = JSON.stringify(person);
console.log("personString", personString)
console.log("typeof personString", typeof personString)

// string => object
const personObject = JSON.parse(personString);
console.log("personObject", personObject)
console.log("typeof personObject", typeof personObject)



const fetchData = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  console.log("data", data);
}

fetchData()









