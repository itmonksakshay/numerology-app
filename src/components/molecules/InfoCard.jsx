
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
  });

const InfoCard =({children,title})=>{
    return       <CardWrapper className="w-[248px] h-[401px] rounded-xl">
    <div className="h-[90px] flex items-center justify-center card-title text-white	">
      {title}
    </div>
    <div className="flex justify-center items-center">
      <img src={threeStarIcon} />
    </div>
    <div className="pt-[40px]">
      {children}
    </div>
  </CardWrapper>
}

export default InfoCard;