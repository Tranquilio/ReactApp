import { registerBlockType } from "@quillforms/blocks";
import display from "./display";

registerBlockType("end-of-survey-block", {
  supports: {
    editable: true
  },
  attributes: {
    start: {
      type: "number",
      default: 1
    },
    end: {
      type: "number",
      default: 5
    }
  },
  display
});
