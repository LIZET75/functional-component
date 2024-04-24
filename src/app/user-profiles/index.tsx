import Image from "next/image";
import styles from "./page.module.css";
import React from "react";


      
        class UserProfile extends React.Component {
          constructor(props:any) {
            super(props);
            this.state = {
              age: props.initialAge
            };
          }

          // celebrateBirthday = () => {
          //   this.setState((mystate=18) => ({
          //     age: mystate.age+1
          //   }));
          // }

          render() {
            return (
              <div>
              <h1> Profile </h1>
              {/* <p>Age: {this.state.age}</p> */}
              <button>Happy Birthday!</button>
              </div>
            );
          }
        }

        // Pass in the string "Bob" as the 1st argument, the props argument. And pass in the number 30 as the value for the "initialAge" function
      
      
  
