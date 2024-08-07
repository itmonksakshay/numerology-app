import { styled } from "@mui/material";
import CardWrapper from "../atoms/CardWrapper";
import starIcon from "../../assets/icons/starIcon.svg";

const DetailCardWrapper = styled("div")({
  "& .card-title": {
    fontSize: "22px",
    fontWeight: 600,
    lineHeight: "26.63px",
  },
  "& .start-bar": {
    width: "100%",
    border: "0.65px solid",
    borderImageSlice: 1,
    borderImageSource:"linear-gradient(90deg, rgba(229, 201, 169, 0) 0%, #E5C9A9 100%)",
  },
});

const DetailCard = ({ children, title,subtitle,divider, ...extraProps }) => {
  return (
    <CardWrapper {...extraProps}>
      <DetailCardWrapper className="rounded-xl px-[48px] py-[40px]">
        <div className="flex gap-2 items-end">
          <img src={starIcon} className="h-7 w-7" />
          <p className="text-orangePeel card-title">{title}</p>
          {subtitle && <p className="text-orangeCrayola card-title" >{subtitle}</p>}
        </div>
        {divider && <div className="start-bar mt-2"></div>}
        <div className="pt-4">{children}</div>
      </DetailCardWrapper>
    </CardWrapper>
  );
};

export default DetailCard;
