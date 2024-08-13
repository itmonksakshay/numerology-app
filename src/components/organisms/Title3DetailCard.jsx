
import React from 'react'

import SunIcon from '../../assets/icons/sunIcon.svg';
import Title3Card from '../molecules/Title3Card';
import MoonIcon from '../../assets/icons/moonIcon.svg';
import DetailCard from '../molecules/DetailCard';

const Title3DetailCard = () => {
  return (
    
        <div className='flex gap-6 justify-center py-[40px]'>
   <Title3Card src={SunIcon} className='bg-[#ffffff] flex items-start flex-col px-[15px] py-[15px] gap-2'
   title={'Nắm bắt cơ hội năm Cá Nhân để nương theo con sóng'} >
    <div className='list-disc'>
    <li>
        <a>Lựa chọn và chuẩn bị kế hoạch cho từng năm</a>
        </li>
        <li>
        <a>Phát triển đồng điều thân, tâm, trí trên cả chu kỳ linh hồn trưởng thành, phát triển</a>
        </li>
        <li>
        <a>Thành công trong từng năm, các đỉnh thu được thành tự lớn</a>
        </li>
        <li>
        <a>Hạn chế tổn thất, mất mát</a>
        </li>
        </div>
        </Title3Card>
        <Title3Card src={MoonIcon} className='bg-[#F9F2EE] flex items-start flex-col px-[15px] py-[15px] gap-2'
   title={'Mặt trái, nếu không tròn vai các con số thì:'} >
    <div className='list-disc'>
    <li>
        <a>Lãng phí cơ hội, khó đạt được năng lượng của các đỉnh</a>
        </li>
        <li>
        <a>Dễ tổn thất, mất mát</a>
        </li>
        <li>
        <a>Dính mắc, tiêu cực, lo lắng, bất an, stress</a>
        </li>
        <li>
        <a>Nội tâm xung đột, mâu thuẫn</a>
        </li>
        <li>
        <a>Thi lại bài thi</a>
        </li>
        </div>
        </Title3Card>
        
        </div>
    
  )
}

export default Title3DetailCard
