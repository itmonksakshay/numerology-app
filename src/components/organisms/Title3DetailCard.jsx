
import React from 'react'

import SunIcon from '../../assets/icons/sunIcon.svg';
import Title3Card from '../molecules/Title3Card';
import MoonIcon from '../../assets/icons/moonIcon.svg';

const Title3DetailCard = () => {
  return (

    <div className='flex gap-6 justify-center py-[40px]'>
      <Title3Card src={SunIcon} className='bg-[#ffffff] flex items-start flex-col px-[15px] py-[15px] gap-2'
        title={'Nắm bắt cơ hội năm Cá Nhân để nương theo con sóng'} >
        <ul className='list-disc text-[15px] font-normal  text-[#000000] leading-[26px]'>
          <li>Lựa chọn và chuẩn bị kế hoạch cho từng năm</li>
          <li>
            Phát triển đồng điều thân, tâm, trí trên cả chu kỳ linh hồn trưởng thành, phát triển
          </li>
          <li>
            Thành công trong từng năm, các đỉnh thu được thành tự lớn
          </li>
          <li>
            Hạn chế tổn thất, mất mát
          </li>
        </ul>
      </Title3Card>
      <Title3Card src={MoonIcon} className='bg-[#F9F2EE] flex items-start flex-col px-[15px] py-[15px] gap-2'
        title={'Mặt trái, nếu không tròn vai các con số thì:'} >
        <ul className='list-disc text-[15px] font-normal  text-[#000000] leading-[26px]'>
          <li>Lãng phí cơ hội, khó đạt được năng lượng của các đỉnh</li>
          <li>Dễ tổn thất, mất mát</li>
          <li>Dính mắc, tiêu cực, lo lắng, bất an, stress</li>
          <li>Nội tâm xung đột, mâu thuẫn</li>
          <li>Thi lại bài thi</li>
        </ul>
      </Title3Card>

    </div>

  )
}

export default Title3DetailCard
