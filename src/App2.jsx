// import Footer  from "./components/Footer";
// import Navigation from "./components/Navigation";
// import { useState } from "react";

// import React from 'react'

// const App = () => {
//     const [nav, setnav] = useState("children Components | Navigation")
//     const [app, setapp] = useState("parent component")
//     const [footer, setfooter] = useState("footer component")
//   return (

//     <wrapper>
//         <Navigation nav={nav}/>
//         <Footer footer = {footer}/>
//     </wrapper>
//   )
// }

// export default App

// ------------   rendering list

// import { useState } from 'react';
// import React from 'react'

// const App = () => {
//   const [users, setusers] = useState([]);

//   const [username, setusername] = useState("")
//   const [gender, setgender] = useState("")
//   const [city, setcity] = useState("")
//   const [desc, setdesc] = useState("")
//   const [accept, setaccept] = useState("")

//   const SubmitHandler = (e) => {
//     e.preventDefault();
//     const newuser = { username, gender, desc, city, accept }
//     const copyuser = [...users];
//     copyuser.push(newuser);
//     setaccept(false);
//     setcity("delhi");
//     setusername("");
//     setgender("male");
//     setdesc("");
//   }

//   let userrender = "no data";
//   if (users.length > 0) {
//     userrender = users.map((user, i) => <li key={i}>{users.username}</li>);

//   }

//   return (
//     <>
//       <div>
//         <h1 className='text-center p-5 text-5xl'>React form</h1>
//         <form onSubmit={SubmitHandler}>
//           <input
//             onChange={(e) => setusername(e.target.value)}
//             value={username}
//             type="text"
//             placeholder='username'
//             name='username'
//           />
//           <br /><br />
//           <input
//             onChange={(e) => setgender(e.target.value)}
//             checked={gender === "male" ? true : false}
//             value="male"
//             type="radio"
//             name="gender"
//           />
//           male
//           <input
//             onChange={(e) => setgender(e.target.value)}
//             checked={gender === "female" ? true : false}
//             value="female"
//             type="radio"
//             name="gender"
//           />
//           female
//           <br /><br />
//           <select value={city} onChange={(e) => setcity(e.target.value)}>
//             <option value="mumbai">Mumbai</option>
//             <option value="delhi">Delhi</option>
//             <option value="kolkata">Kolkata</option>
//           </select>
//           <br /><br />

//           <textarea
//             placeholder="enter text here"
//             onChange={(e) => setdesc(e.target.value)}
//             value={desc}
//           ></textarea>

//           <br /><br />
//           <input
//             onChange={(e) => setaccept(!accept)}
//             checked={accept ? true : false}
//             type="checkbox"
//           />
//           Accept
//           <br /><br />

//           <button>submit</button>
//         </form>

//         <hr />
//         <ol>
//           {userrender}
//         </ol>
//       </div>
//     </>
//   )
// }
// export default App

// ----- useRef hook: its use as same as to select the element same as document.queryselector ------
// import React, { useRef } from 'react';

// const App2 = () => {
//   const head = useRef(null);
//   const handler = ()=>{
//   console.log(head);
//   head.current.innerHTML = "hiii";
//   head.current.style.color = "red";

//   }
//   return (
//     <div className='w-[70] m-10 bg-zinc-100 p-10 rounded-xl'>
//       <h1 ref={head}>This is important info</h1>
//       <button onClick={handler}>Select</button>
//     </div>
//   )
// }

// export default App2


