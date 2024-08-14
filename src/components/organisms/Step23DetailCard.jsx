import React from "react";
import { SmallPrimaryButton } from "../atoms/Button/PrimaryButton";
import DetailCard from "../molecules/DetailCard";
import StandardButton from "../atoms/Button/StandardButton";
import TicTacToeGrid from "../molecules/TicTacToeGrid";

const Step23DetailCard = () => {

  const gridData1 = [
    { id: 1, subTitle: 1 },
    { id: 5, subTitle: 55 },
    { id: 6, subTitle: 8 },
    { id: 7, subTitle: 1 },
  ]

  const gridData2 = [
    { id: 1, subTitle: 3 },
    { id: 3, title: 99 },
    { id: 4, title: 2 },
    { id: 5, title: 5, subTitle: 55 },
    { id: 6, subTitle: 8 },
    { id: 7, title: 1, subTitle: 1 },
    { id: 8, title: 44 },
  ]

  return (
    <DetailCard title={"23. Biểu đồ tên và biểu đồ tổng hợp"}>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between px-[108px] pt-[32px]">
          <div className="flex flex-col justify-center items-center gap-6">
            <div className="w-[229px] h-[169px]">
              <TicTacToeGrid data={gridData1} />
            </div>
            <div className="w-[165px]">
              <StandardButton>
                Phạm Duy Tiến
              </StandardButton>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-6">
            <div className="w-[229px] h-[169px]">
              <TicTacToeGrid data={gridData2} />
            </div>
            <div className="w-[179px]">
              <StandardButton>
                Biểu đồ tổng hợp
              </StandardButton>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-[15px] font-normal text-white leading-[24px]">
            Mục này cho biết bạn nên đi theo hướng nào trong những năm sắp tới
            để đạt thành công.
          </p>
          <div className="w-[295px]">
            <SmallPrimaryButton>
              Chỉ tài khoản Vip mới xem được mục này
            </SmallPrimaryButton>
          </div>
        </div>
      </div>
    </DetailCard>
  );
};

export default Step23DetailCard;
