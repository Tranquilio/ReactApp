import { Form } from "@quillforms/renderer-core";
import "@quillforms/renderer-core/build-style/style.css";
import { registerCoreBlocks } from "@quillforms/react-renderer-utils";
import "./styles.css";
import "./custom-block";
import "./custom-block2";
import { useEffect } from "react";

registerCoreBlocks();

const Survey = () => {

    async function getQuestions() {
        const result = await fetch('http://localhost:5000/api/questions', {
        method : 'GET',
        });
        var data =  await result.json();
        console.log(data);
    }

    useEffect(() => {
        
        
        getQuestions();
    }, [])

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
            buttonsFontColor: "#000",
            buttonsBgColor: "#fff",
            buttonsBorderRadius: 10,
            errorsFontColor: "#fff",
            errorsBgColor: "#f00",
            progressBarFillColor: "#9b51e0",
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
