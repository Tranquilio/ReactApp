import { Form } from "@quillforms/renderer-core";
import "@quillforms/renderer-core/build-style/style.css";
import { registerCoreBlocks } from "@quillforms/react-renderer-utils";
import "./styles.css";
import "./custom-block";

registerCoreBlocks();

const Survey = () => {
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
                  backgroundImage: "https://img.freepik.com/free-vector/welcome-neon-sign-vector_53876-76088.jpg?t=st=1656421912~exp=1656422512~hmac=853443135486ff2edbfe1c0930fba0bba476701d458976d32d4b3de0dff1a309&w=900",
                  url:
                    "https://img.freepik.com/free-vector/welcome-neon-sign-vector_53876-76088.jpg?t=st=1656421912~exp=1656422512~hmac=853443135486ff2edbfe1c0930fba0bba476701d458976d32d4b3de0dff1a309&w=900"
                }
              }
            },
            {
              name: "my-custom-block-unique-name",
              id: "jg1402r",
              attributes: {
                label: "Question",
                required: true,
                start: 1,
                end: 6
              },
            },
            {
              name: "statement",
              id: "g91imf1023",
              attributes: {
                label: "You are doing great so far!",
                buttonText: "Continue",
                quotationMarks: true
              }
            },  
            {
              name: "End of Survey",
              id: "jg1403r",
              attributes: {
                label: "Tranquilio's vision is to empower the 21st Century Workforce.",
                description: "By understanding what's causing us stress and burnout at work, we can start the conversation on how organizations approach workplace mental wellbeing.",
                description: "We appreciate you for completing this assessment!",
              }
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
            questionsColor: "#000",
            answersColor: "#0aa7c2",
            buttonsFontColor: "#fff",
            buttonsBorderRadius: 25,
            errorsFontColor: "#fff",
            errorsBgColor: "#f00",
            progressBarFillColor: "#000",
            progressBarBgColor: "#ccc"
          }
        }}
        onSubmit={(data, { completeForm, setIsSubmitting }) => {
          setTimeout(() => {
            setIsSubmitting(false);
            completeForm();
          }, 500);
        }}
      />
    </div>
  );
};

export default Survey;
