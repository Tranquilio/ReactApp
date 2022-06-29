/**
 * QuillForms Depndencies
 */
 import { useTheme, useMessages } from "@quillforms/renderer-core";

 /**
  * React Dependencies
  */
 import { useEffect } from "react";
 
 /**
  * External Dependencies
  */
 import tinyColor from "tinycolor2";
 import { css } from "emotion";
 import classnames from "classnames";
 
 let timer;
 const MyCustomBlockDisplay = (props) => {
   const {
     id,
     attributes,
     setIsValid,
     setIsAnswered,
     setValidationErr,
     isActive,
     val,
     setVal,
     next
   } = props;
 
   const { required, start, end } = attributes;
   const messages = useMessages();
   const theme = useTheme();
   const answersColor = tinyColor(theme.answersColor);
 
   const checkfieldValidation = (value) => {
     if (required === true && (!value || value === "")) {
       setIsValid(false);
       setValidationErr(messages["label.errorAlert.required"]);
     } else {
       setIsValid(true);
       setValidationErr(null);
     }
   };
 
   const items = [];
   for (let i = start; i <= end; i++) {
     items.push(i);
   }
 
   useEffect(() => {
     if (!isActive) {
       clearTimeout(timer);
     }
   }, [isActive]);
 
   useEffect(() => {
     checkfieldValidation(val);
   }, [val]);
 
   return (
     <>
       <div
         className={css`
           display: flex;
           width: 100%;
           height: 62px;
           margin-top: 18px;
         `}
       >
        <div className="font-light text-lg mt-2 text-white">We appreciate you for completing this assessment!</div>
       </div>
     </>
   );
 };
 export default MyCustomBlockDisplay;
 