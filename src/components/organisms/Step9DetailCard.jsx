import React from 'react'
import DetailCard from '../molecules/DetailCard'
import { SmallPrimaryButton } from '../atoms/Button/PrimaryButton'
import SimpleDataCard from '../molecules/SimpleDataCard'
const Step9DetailCard = () => {
    const step9Data = [
        { title: "Thang 7 2024", rank: "9" }, { title: "Thang 8 2024", rank: "1" }, { title: "Thang 9 2024", rank: "2", }
    ]

    return (
        <div>
            <DetailCard title={"9. Các chỉ số tháng"}>
                <div className="flex flex-col gap-8">
                    <p className="text-[15px] font-normal text-white leading-[24px]">
                        Kim tự tháp cho thấy 4 đoạn trong chu kỳ cuộc đời và những kết hợp
                        đa dạng của nó. Chúng ta vẫn biết rằng, làm việc với một đoạn văn
                        bản dễ đọc và rõ nghĩa dễ gây rối trí và cản trở việc tập trung
                        vào yếu tố trình bày văn bản. Lorem Ipsum có ưu điểm hơn so với
                        đoạn văn bản chỉ gồm nội dung kiểu "Nội dung, nội dung, nội dung"
                        là nó khiến văn bản giống thật hơn, bình thường hơn.
                    </p>

                    <div className='mx-auto'>
                        <SimpleDataCard items={step9Data} />
                    </div>

                    <div className="w-[295px]">
                        <SmallPrimaryButton>
                            Chỉ tài khoản Vip mới xem được mục này
                        </SmallPrimaryButton>
                    </div>
                </div>
            </DetailCard>
        </div>
    )
}

export default Step9DetailCard;