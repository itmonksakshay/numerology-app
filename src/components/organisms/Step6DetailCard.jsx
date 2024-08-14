import React from "react";
import DetailCard from "../molecules/DetailCard";
import Arrow from "../../assets/ArrowImage6/Arrow.svg";
import Arrow2 from "../../assets/ArrowImage6/Arrow2.svg";
import Arrow3 from "../../assets/ArrowImage6/Arrow3.svg";
const Step6DetailCard = () => {
  const data = [
    {
      id: "",
      bgcolor: "#27AE60",
      title: "Chu kỳ 1",
      subTitle: "Gieo hạt",
      rank: "4",
      desc: "Đầu đời - 33 tuổi (2024)",
    },
    {
      id: "",
      bgcolor: "#F2994A",
      title: "Chu kỳ 2",
      subTitle: "Chín",
      rank: "6",
      desc: "34 - 60 tuổi (2025 - 2051)",
      left: "-28px",
    },
    {
      id: "",
      bgcolor: "#EB5757",
      title: "Chu kỳ 3",
      subTitle: "Thu hoạch",
      rank: "2",
      desc: "61 tuổi trở về sau (2052 trở đi)",
      left: "-60px",
    },
  ];

  const bgimage = {
    1: Arrow,
    2: Arrow2,
    3: Arrow3,
  };

  return (
    <div>
      <DetailCard title={"6. Chu kỳ đường đời"} divider>
        <div className="flex flex-col gap-10  ">
          <p className="text-[15px] font-normal text-white leading-[24px]">
            <span className="font-bold">Chu kì đỉnh cuộc đời </span>được đại
            diện và kết hợp bởi rung động năng lượng riêng của từng thần số từ 1
            đến 9 và những kết hợp đa dạng của nó. Chúng ta vẫn biết rằng, làm
            việc với một đoạn văn bản dễ đọc và rõ nghĩa dễ gây rối trí và cản
            trở việc tập trung vào yếu tố trình bày văn bản. Lorem Ipsum có ưu
            điểm hơn so với đoạn văn bản chỉ gồm nội dung kiểu "Nội dung, nội
            dung, nội dung" là nó khiến văn bản giống thật hơn, bình thường hơn.
            Nhiều phần mềm thiết kế giao diện web và dàn trang ngày nay đã sử
            dụng Lorem Ipsum làm đoạn văn bản giả, và nếu bạn thử tìm các đoạn
            "Lorem ipsum" trên mạng thì sẽ khám phá ra nhiều trang web hiện vẫn
            đang trong quá trình xây dựng. Có nhiều phiên bản khác nhau đã xuất
            hiện, đôi khi do vô tình, nhiều khi do cố ý (xen thêm vào những câu
            hài hước hay thông tục).
          </p>

          <div className="flex justify-center items-center w-full   ">
            <div className="w-full h-[198px] flex justify-center  ">
              {data.map((item,idx) => (
                <div className=" w-[297px] relative   rounded-none">
                  <div style={{background:`url(${bgimage[idx+1]})`,zIndex:3-idx, marginLeft:!idx?'30px':idx==2?'-30px':0}} className="w-full h-[95.6px] flex justify-center items-center absolute  ">
                    <h2 className="text-[40px] text-white ">{item.rank}</h2>
                  </div>
                  {/* <div className="flex flex-col items-center justify-center text-[#FFFFFF]">
                    <h2
                      style={{ color: `${item.bgcolor}` }}
                      className="text-[22px] font-bold"
                    >
                      {item.title}
                    </h2>
                    <h3 className="text-[18px]  font-semibold mb-1">
                      {item.subTitle}
                    </h3>
                    <h4 className="text-[18px]  font-normal">{item.desc}</h4>
                  </div> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </DetailCard>
    </div>
  );
};

export default Step6DetailCard;
