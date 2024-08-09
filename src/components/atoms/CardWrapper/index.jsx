import { styled } from "@mui/material";
const CardWrapper = styled("div")({
    borderRadius: "12px",
    background: "rgba(255, 255, 255, 0.12)",
    backdropFilter: "blur(25px)",
    position:'relative',
    "& :first-of-type::before": {
      content:'""',
      position: "absolute",
      inset: "0",
      borderRadius: "12px",
      padding: "0.5px",
      background: "linear-gradient(126.63deg, rgba(255, 255, 255, 0.5) 3.9%, rgba(255, 255, 255, 0.1) 96.24%)",
      WebkitMask:"linear-gradient(#fff 0 0) content-box, \n     linear-gradient(#fff 0 0)",
      WebkitMaskComposite: "xor",
      maskComposite: "exclude"
    }
});

export default CardWrapper;