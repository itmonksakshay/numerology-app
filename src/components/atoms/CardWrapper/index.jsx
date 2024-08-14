import { styled } from "@mui/material";
const CardWrapper = styled("div")({
  borderRadius: "15px",
  background: "rgba(255, 255, 255, 0.12)",
  backdropFilter: "blur(25px)",
  border: "1px solid transparent",
  borderImage:"linear-gradient(126.63deg, rgba(255, 255, 255, 0.5) 3.9%, rgba(255, 255, 255, 0.1) 96.24%)",
  borderImageSlice: "1",
});

export default CardWrapper;