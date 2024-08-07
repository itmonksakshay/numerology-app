
import { styled } from "@mui/material";
import threeStarIcon from '../../assets/icons/threeStarIcon.svg';

const CardWrapper = styled("div")({
    border: "1px solid",
    background: "rgba(255, 255, 255, 0.12)",
    backdropFilter: "blur(25px)",
    position:'relative',
    "& ::before": {
      content:'""',
      position: "absolute",
      inset: "0",
      borderRadius: "12px",
      padding: "1px",
      background: "linear-gradient(126.63deg, rgba(255, 255, 255, 0.5) 3.9%, rgba(255, 255, 255, 0.1) 96.24%)",
      WebkitMask:"linear-gradient(#fff 0 0) content-box, \n     linear-gradient(#fff 0 0)",
      WebkitMaskComposite: "xor",
      maskComposite: "exclude"
    },
    "& .card-title": {
      fontSize: "20px",
      fontWeight: 600,
      lineHeight: "24.2px",
    },
    "& .start-bar":{
        width:'100%',
        border: "0.65px solid",
        borderImageSlice:1,
        borderImageSource:"linear-gradient(90deg, rgba(229, 201, 169, 0) 0%, #E5C9A9 100%)"
    },
    "& .end-bar":{
        width:'100%',
        border: "0.65px solid",
        borderImageSlice:1,
        borderImageSource:"linear-gradient(90deg, #E5C9A9 0%, rgba(229, 201, 169, 0) 100%)"
    }
  });

const InfoCard =({children,title,...extraProps})=>{
    return       <CardWrapper className="rounded-xl"{ ...extraProps}>
    <div className="h-[72px] flex items-center justify-center card-title text-white	">
      {title}
    </div>
    <div className="flex justify-center items-center gap-4 mx-4">
        <div className="start-bar"></div>
      <img src={threeStarIcon} />
      <div className="end-bar"></div>
    </div>
    <div className="pt-8">
      {children}
    </div>
  </CardWrapper>
}

export default InfoCard;