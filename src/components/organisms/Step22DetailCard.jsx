import React from 'react'
import TicTacToeGrid from '../molecules/TicTacToeGrid'
import DetailCard from '../molecules/DetailCard'
import { SmallPrimaryButton } from '../atoms/Button/PrimaryButton'
import StandardButton from '../atoms/Button/StandardButton'

const Step22DetailCard = () => {

 const gridData =[
    {id:3,title:99},
    {id:4,title:2},
    {id:5,title:5},
    {id:7,title:1},
    {id:8,title:44},
]

  return (
    <DetailCard title={"22. Chỉ số sinh mệnh của bạn là: 4"}>
    <div className="flex flex-col gap-8">
      <p className="text-[15px] font-normal text-white leading-[24px]">
        Kim tự tháp cho thấy 4 đoạn trong chu kỳ cuộc đời và những kết hợp
        đa dạng của nó. Chúng ta vẫn biết rằng, làm việc với một đoạn văn
        bản dễ đọc và rõ nghĩa dễ gây rối trí và cản trở việc tập trung
        vào yếu tố trình bày văn bản. Lorem Ipsum có ưu điểm hơn so với
        đoạn văn bản chỉ gồm nội dung kiểu "Nội dung, nội dung, nội dung"
        là nó khiến văn bản giống thật hơn, bình thường hơn.
      </p>
      <div className='flex flex-col justify-center items-center gap-6'>
        <div className='w-[229px] h-[169px]'>
        <TicTacToeGrid data={gridData}/>
        </div>
        <div className='w-[403px]'>
            <StandardButton>Biểu đồ sức mạnh (biểu đồ ngày sinh) của bạn</StandardButton>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-[15px] font-normal text-white leading-[24px]">
          Mục này cho biết bạn nên đi theo hướng nào trong những năm sắp
          tới để đạt thành công.
        </p>
        <div className="w-[295px]">
          <SmallPrimaryButton>
            Chỉ tài khoản Vip mới xem được mục này
          </SmallPrimaryButton>
        </div>
      </div>
    </div>
  </DetailCard>
  )
}

export default Step22DetailCard