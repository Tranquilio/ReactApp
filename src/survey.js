import { Form } from "@quillforms/renderer-core";
import "@quillforms/renderer-core/build-style/style.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { registerCoreBlocks } from "@quillforms/react-renderer-utils";
import "./styles.css";
import "./custom-block";
import "./custom-block2";

registerCoreBlocks();

const Survey = () => {
  const navigate = useNavigate();

  return (

    <div style={{ width: "100%", height: "100vh" }}>
      <Form
        formId="1"
        formObj={{
          blocks: [
            {
              name: "welcome-screen",
              id: "jg1401r",
              attributes: {
                label: "Welcome to our survey, ready when you are!",
                attachment: {
                  type: "image",
                  url: "",
                    
                }
              }
            },
            {
              name: "my-custom-block-unique-name",
              id: "jg1402r",
              attributes: {
                label: "You are feeling...",
                required: true,
                start: 1,
                end: 6
              },
            },
            {
              name: "dropdown",
              id: "nb913rqw",
              attributes: {
                required: true,
                label: "One last thing before we share your result! Which field do you work in?",
                choices: [
                  {
                    label: "Information Technology",
                    value: "choice-1"
                  },
                  {
                    label: "Engineering and Architecture",
                    value: "choice-2"
                  },
                  {
                    label: "Arts, Culture, and Entertainment",
                    value: "choice-3"
                  },
                  {
                    label: "Consumer",
                    value: "choice-4"
                  },
                  {
                    label: "Business, Management, and Administration",
                    value: "choice-5"
                  },
                  {
                    label: "Communications",
                    value: "choice-6"
                  },
                  {
                    label: "Community and Social Services",
                    value: "choice-7"
                  },
                  {
                    label: "Education",
                    value: "choice-8"
                  },
                  {
                    label: "Installation, Repair, and Maintenance",
                    value: "choice-9"
                  },
                  {
                    label: "Government",
                    value: "choice-10"
                  },
                  {
                    label: "Health and Medicine",
                    value: "choice-11"
                  },
                  {
                    label: "Law and Public Policy",
                    value: "choice-12"
                  },
                  {
                    label: "Sales",
                    value: "choice-13"
                  },
                  {
                    label: "Others",
                    value: "choice-14"
                  }
                ]
              }
            },
            {
              name: "short-text",
              id: "kd12edg",
              attributes: {
                required: true,
                label: "One last thing before we share your result! \n\n What is your current role in your company?"
              }
            }, 
            {
              name: "statement",
              id: "jg1403r",
              color: "#FFFFFF",
              attributes: {
                label: "Tranquilio's vision is to empower the 21st Century Workforce.",
                description: "By understanding what's causing us stress and burnout at work, we can start the conversation on how organizations approach workplace mental wellbeing. We appreciate you for completing this assessment!",
                quotationMarks: true,
                buttonText: "Fantastic!",
              }, 
            },             
          ],
          settings: {
            animationDirection: "vertical",
            disableWheelSwiping: false,
            disableNavigationArrows: false,
            disableProgressBar: false
          },
          theme: {
            font: "Roboto",
            buttonsBgColor: "#9b51e0",
            logo: {
              src: ""
            },
            backgroundImage: "https://images.pexels.com/photos/6331085/pexels-photo-6331085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            backgroundColor: "",
            questionsColor: "#fff",
            answersColor: "#0aa7c2",
            buttonsFontColor: "#9b51e0",
            buttonsBgColor: "#fff",
            buttonsBorderRadius: 10,
            errorsFontColor: "#fff",
            errorsBgColor: "#f00",
            progressBarFillColor: "#9b51e0",
            progressBarBgColor: "#ccc"
          }
        }}
        onSubmit={( ) => {
            navigate("/assessment");
        }}
      />
    </div>

  );
};

export default Survey;
