import Image from "next/image";
import styles from "./page.module.css";
import React from "react";

// Pass in the string "Bob" as the 1st argument, the props argument. And pass in the number 30 as the value for the "initialAge" function
// class UserProfile extends React.Component {
//   constructor(props:any) {
//     super(props);
//     this.state = {
//       age: props.initialAge
//     };
//   }

  // celebrateBirthday = () => {
  //   this.setState((mystate=18) => ({
  //     age: mystate.age+1
  //   }));
  // }

//   render() {
//     return (
//       <div>
//       <h1> Profile </h1>
//       {/* <p>Age: {this.state.age}</p> */}
//       <button>Happy Birthday!</button>
//       </div>
//     );
//   }
// }

//Convert the class UserProfile as a functional component that takes 1 prop as an argument

function UserProfile(props: any) {
  return (
    <div>
    <h1> Profile </h1>
    <h1>{props.name}</h1>
    <h1>{props.number}</h1>
    <button>Happy Birthday!</button>
    </div>
  );
}
{/* <><UserProfile name="Bob" /><UserProfile number /></>30 /> */}

export default function User() {
  return <UserProfile name="Bob" number="30" />;
 }

 //need to export the function that has the values not the function that has the props.





