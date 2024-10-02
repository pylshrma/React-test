// import { useState } from "react";

// const App = () => {
// const [a, seta] = useState(12);

// const counthandler = () =>{
//   seta( a+1)
// };
// console.log(a);

//   return (
//     <>
//     <div>App</div>
//     <h1>{a}</h1>
//     <button onClick={counthandler}>Counter</button>
//     </>
//   )
// }
// export default App
//----------------------------------------------------

// import React, { useState } from 'react'

// const App = () => {
// const [time, settime] = useState(new Date().toLocaleTimeString());
//   setInterval(()=>{
//     settime(new Date().toLocaleTimeString());
//   },1000);

//   return (
//     <>
//     <div>
//       <h1>{time}</h1>
//     </div>
//     </>
//   )
// }

// export default App
//---------------------------------------------------------------

// import React, { useState } from 'react'

// const App = () => {

//   const[username, setusername] = useState("john");
//   const ChangeHandler = (n) =>{
//     setusername(n);
//   };

//   return (
//     <div>
//       <h1>{username}</h1>
//     <button onClick={() => ChangeHandler("pradeep")}>      Chnage Username</button>

//     </div>
//   )
// };

// export default App
//-----------------------------------------------------------
//    2 way binding

// import { useState } from 'react';
// import React from 'react'

// const App = () => {
//   const [username, setusername] = useState("")
//   const [gender, setgender] = useState("")
//   const [city, setcity] = useState("")
//   const [desc, setdesc] = useState("")
//   const [accept, setaccept] = useState("")

//   const SubmitHandler = (e) => {
//     e.preventDefault();
//     console.log({ username,gender,desc,city,accept })

//   }

//   return (
//     <>
//       <div>
//         <h1>React form</h1>
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

//             <br /><br />
//           <input
//             onChange={(e) => setaccept(!accept)}
//             checked = {accept? true:false}
//             type="checkbox"
//           />
//           Accept
//           <br /><br />

//           <button>submit</button>
//         </form>
//       </div>
//     </>
//   )
// }
// export default App