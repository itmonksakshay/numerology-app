import React from 'react'

import Title3Card from '../molecules/Title3Card'
import DetailCard from '../molecules/DetailCard'


const Step5DetailCard = () => {
    return (

        <DetailCard
            title={
                "5. Chỉ số đường đời (số chủ đạo) của bạn là: 5 Năng động - Linh hoạt"
            }
            divider
        >
            <p className="text-[14px] font-normal text-white leading-[22px]" >
                Có rất nhiều biến thể của Lorem Ipsum mà bạn có thể tìm thấy, nhưng
                đa số được biến đổi bằng cách thêm các yếu tố hài hước, các từ ngẫu
                nhiên có khi không có vẻ gì là có ý nghĩa. Nếu bạn định sử dụng một
                đoạn Lorem Ipsum.
            </p>
            <div className='flex gap-6 justify-center py-[40px]'>
                <Title3Card className='bg-[#ffffff] flex items-start flex-col px-[15px] py-[15px] gap-2'
                    title={'Điểm mạnh của bạn:'} >
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
                <Title3Card className='bg-[#F9F2EE] flex items-start flex-col px-[15px] py-[15px] gap-2'
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
            <div className='text-[18px] font-semibold text-[#FFFFFF] leading-[21.78px] flex flex-col gap-6'>
                <h2>Những người nổi tiếng có số 5:</h2>
                <div className='list-disc text-[15px] font-normal text-[#FFFFFF] leading-[26px]'>
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
            </div>



        </DetailCard>

    )
}

export default Step5DetailCard
