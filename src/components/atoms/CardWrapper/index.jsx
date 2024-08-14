import { styled } from "@mui/material";
const CardWrapper = styled("div")({
  // borderRadius: "15px",
  // background: "rgba(255, 255, 255, 0.12)",
  // backdropFilter: "blur(25px)",
  // border: "1px solid transparent",
  // borderImage:"linear-gradient(126.63deg, rgba(255, 255, 255, 0.5) 3.9%, rgba(255, 255, 255, 0.1) 96.24%)",
  // borderImageSlice: "1",
  background: "linear-gradient(transparent 0 0) padding-box, linear-gradient(to right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)) border-box",
  padding: "10px",
  border: "1px solid rgba(255, 255, 255, 0.5)",
  borderRadius: "15px",
  backdropFilter: "blur(25px)",
});

export default CardWrapper;