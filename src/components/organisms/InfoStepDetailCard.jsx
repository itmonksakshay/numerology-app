import React from 'react'
import InfoCard from '../molecules/InfoCard'

const InfoStepDetailCard = () => {
  return (
    <InfoCard
      title={"Tính cách nổi trội của bạn"}
      className="h-[226px]">
      <div className='flex gap-12 justify-center '>
        <div className="w-[536px] h-[72px] flex ">
          <p className="text-[16px] font-normal text-[#ffffff] leading-[24px]">
            <span className="font-bold">Điểm mạnh:</span> Bạn là người vui vẻ, quảng giao, hoạt
            ngôn, hoạt bát, có óc tưởng tượng, óc thẩm mỹ rất
            tốt. Bạn cũng khôn khéo, tháo vát, thân thiện;
            tình và trung thành.
          </p>
        </div>
        <div className=" border border-solid border-darkgray" />
        <div className="w-[536px] h-[72px]">
          <p className="text-[16px] font-normal text-[#ffffff] leading-[24px]">
            <span className="font-bold">Điểm yếu:</span> Bạn thường dễ làm việc theo cảm hứng, đôi
            khi trở nên nông nổi, cường điệu mọi chuyện, bạn cũng
            dễ bộc trực, nóng giận và hay thay đổi. Bạn thường
            không giỏi giữ tiền và chi tiêu hoang phí.
          </p>
        </div>
      </div>
    </InfoCard>
  )
}

export default InfoStepDetailCard;
