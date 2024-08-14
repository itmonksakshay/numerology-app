import { styled } from "@mui/material";
import threeStarIcon from "../../assets/icons/threeStarIcon.svg";
import CardWrapper from "../atoms/CardWrapper";

const InfoCardWrapper = styled("div")({
  "& .card-title": {
    fontSize: "20px",
    fontWeight: 600,
    lineHeight: "24.2px",
  },
  "& .start-bar": {
    width: "100%",
    border: "0.65px solid",
    borderImageSlice: 1,
    borderImageSource:
      "linear-gradient(90deg, rgba(229, 201, 169, 0) 0%, #E5C9A9 100%)",
  },
  "& .end-bar": {
    width: "100%",
    border: "0.65px solid",
    borderImageSlice: 1,
    borderImageSource:
      "linear-gradient(90deg, #E5C9A9 0%, rgba(229, 201, 169, 0) 100%)",
  },
});

const InfoCard = ({ children, title, ...extraProps }) => {
  return (
    <CardWrapper {...extraProps}>
      <InfoCardWrapper className="rounded-xl">
        <div className="h-[72px] flex items-center justify-center  card-title text-white	">
          {title}
        </div>
        <div className="flex justify-center items-center gap-4 mx-4">
          <div className="start-bar"></div>
          <img src={threeStarIcon} />
          <div className="end-bar"></div>
        </div>
        <div className="py-8">{children}</div>
      </InfoCardWrapper>
    </CardWrapper>
  );
};

export default InfoCard;
