import React from "react";
import DetailCard from "../molecules/DetailCard";
import Arrow from "../../assets/ArrowImage6/Arrow.svg";
import Arrow2 from "../../assets/ArrowImage6/Arrow2.svg";
import Arrow3 from "../../assets/ArrowImage6/Arrow3.svg";
const Step6DetailCard = () => {
  const data = [
    {
      title: "Chu kỳ 1",
      subTitle: "Gieo hạt",
      rank: "4",
      desc: "Đầu đời - 33 tuổi (2024)",
    },
    {
      title: "Chu kỳ 2",
      subTitle: "Chín",
      rank: "6",
      desc: "34 - 60 tuổi (2025 - 2051)",
    },
    {
      title: "Chu kỳ 3",
      subTitle: "Thu hoạch",
      rank: "2",
      desc: "61 tuổi trở về sau (2052 trở đi)",
    },
  ];

  const bgimage = {
    1: Arrow,
    2: Arrow2,
    3: Arrow3,
  };

  const textBgColor = ["#27AE60", "#F2994A", "#EB5757"];

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

          <div className="flex justify-center items-center w-full">
            <div className="w-full h-[198px] flex justify-center">
              {data.map((item, idx) => (
                <div className=" w-[297px] relative" key={idx}>
                  <div
                    style={{
                      background: `url(${bgimage[idx + 1]})`,
                      zIndex: 3 - idx,
                      marginLeft: !idx ? "30px" : idx === 2 ? "-30px" : 0,
                    }}
                    className="w-full h-[95.6px] flex justify-center items-center absolute  "
                  >
                    <h2 className="text-[40px] text-white ">{item.rank}</h2>
                  </div>
                  <div
                    className="flex flex-col gap-2 items-center h-full mt-10 justify-center"
                    style={{
                      marginLeft: !idx ? "60px" : idx === 2 ? "-60px" : 0,
                    }}
                  >
                    <p
                      className="text-[22px] leading-[26.63px] font-bold"
                      style={{ color: textBgColor[idx] }}
                    >
                      {item.title}
                    </p>
                    <div className="flex flex-col items-center gap-1">
                      <p className="leading-[18.78px] text-[18px] font-semibold text-white">
                        {item.subTitle}
                      </p>
                      <p className="leading-[18.15px] text-[15px] font-normal text-white">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-3 items-center">
              <p className="text-orangeCrayola text-[14px] font-medium leading-[22px]">Xem giải thích chi tiết</p>
              <div class="w-0 h-0 border-l-[8px] border-l-transparent border-t-[10px] border-t-orangeCrayola border-r-[8px] border-r-transparent" />
          </div>
        </div>
      </DetailCard>
    </div>
  );
};

export default Step6DetailCard;
