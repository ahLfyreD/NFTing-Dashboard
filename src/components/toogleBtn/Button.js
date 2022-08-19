import React, { Children } from "react";
// import styled from "styled-components";

const Button = (props) => {
  return (
    <button
      className="text-blue-500 border-3 border-blue-500 
                        font-medium rounded-lg w-24 h-10
                        hover:bg-blue-500 hover:text-white"
      {...props}
    >
      {props.children}
    </button>
  );
};

// The below was commented should incase one prefers using styled component on buttons. Note
// you will also have to comment out the export default button function and put the Button in the component
// you are passing it to in a string.

// export const Button = styled.button`
//   width: ${(props) => props.width};
//   color: ${(props) => props.color};
//   padding: ${(props) => props.padding};
//   font-size: ${(props) => props.size};
//   border: 2px solid ${(props) => props.border};
//   border-radius: 10px;
//   height: ${(props) => props.height};

//   &:hover {
//     cursor: pointer;
//     background-color: ${(props) => props.darkColor};
//   }
// `

export default Button;
