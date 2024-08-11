import React from "react";
import TitleCard from "../molecules/TitleCard";
import StandarButton from "../atoms/Button/StandardButton";
import DataChart from "../molecules/DataChart";

const Step3DetailCard = () => {
  const titleInfo = [
    {
      id: 1,
      title: "Năm CN thứ 1",
      subtitle: "Năm điều chỉnh mạnh mẽ cho  1 chu kỳ mới",
    },
    {
      id: 2,
      title: "Năm CN thứ 2",
      subtitle: "Năm phát triển về tâm linh và  chia sẻ",
    },
    {
      id: 3,
      title: "Năm CN thứ 3",
      subtitle: "Năm phát triển trí não thông  qua học tập",
    },
    {
      id: 4,
      title: "Năm CN thứ 4",
      subtitle: "Cũng cố nội lực (đáy thứ 1  trong chu kỳ)",
    },
    { id: 5, title: "Năm CN thứ 5", subtitle: "Năm tự do và kết nối" },
    { id: 6, title: "Năm CN thứ 6", subtitle: "Năm sáng tạo, yêu thương" },
    {
      id: 7,
      title: "Năm CN thứ 7",
      subtitle: "Vượt chướng ngại vật, quay về học hành đạo ký",
    },
    { id: 8, title: "Năm CN thứ 8", subtitle: "Độc lập và trí tuệ" },
    { id: 9, title: "Năm CN thứ 9", subtitle: "Năm đạt đỉnh cao của chu kỳ" },
  ];

  const data = [
    { date: 2021, value: 9,markerValue:'Đ2 (số 10)' },
    { date: 2022, value: 7 },
    { date: 2023, value: 5 },
    { date: 2024, value: 3 },
    { date: 2025, value: 0 },
    { date: 2026, value: 2,markerValue:'Đ3 (số 5)' },
    { date: 2027, value: 1 },
    { date: 2028, value: 4 },
    { date: 2029, value: 6 },
    { date: 2030, value: 9 },
    { date: 2031, value: 6 },
  ];
  const topAxisData = [41,42,43,44,45,46,47,48,49,50,51];

  return (
    <div className="flex flex-col gap-8">
        <div className="flex justify-center">
            <div className="w-[740px]">
                <DataChart data={data} boxHeight={364} defaultWidth={740} topAxisData={topAxisData}/>
            </div>
        </div>
      <div className="flex justify-center">
        <div className="w-[250px]">
          <StandarButton>Chu kỳ vận số của bạn</StandarButton>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <p className="text-white text-[18px] leading-[22px] font-semibold">
          Tính chất chu kỳ các năm cá nhân
        </p>
        <div>
          <p className="text-white text-[15px] leading-[26px] font-normal">
            Năm cá nhân biên thiên theo chu kỳ con sóng.
          </p>
          <p className="text-white text-[15px] leading-[26px] font-normal">
            Nếu các năm đạt đỉnh có số của đỉnh trùng với số chủ đạo hoặc số có
            trong số năng lượng lớn, thì sóng rung sẽ càng rõ rệt.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        {titleInfo.map((item) => (
          <TitleCard item={item} />
        ))}
      </div>
    </div>
  );
};

export default Step3DetailCard;
