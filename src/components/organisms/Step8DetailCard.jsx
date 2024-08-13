import React from 'react'
import DetailCard from '../molecules/DetailCard'
import { SmallPrimaryButton } from '../atoms/Button/PrimaryButton'
import SimpleDataCard from '../molecules/SimpleDataCard'

const Step8DetailCard = () => {

    const step8Data = [
        { title: "Nam 2024", rank: "9" }, { title: "Nam 2024", rank: "1" }, { title: "Nam 2024", rank: "2" }
    ]

    return (
        <div>

            <DetailCard title={"8. Các chỉ số năm"}>
                <div className="flex flex-col gap-8">
                    <p className="text-[15px] font-normal text-white leading-[24px]">
                        Kim tự tháp cho thấy 4 đoạn trong chu kỳ cuộc đời và những kết hợp
                        đa dạng của nó. Chúng ta vẫn biết rằng, làm việc với một đoạn văn
                        bản dễ đọc và rõ nghĩa dễ gây rối trí và cản trở việc tập trung
                        vào yếu tố trình bày văn bản. Lorem Ipsum có ưu điểm hơn so với
                        đoạn văn bản chỉ gồm nội dung kiểu "Nội dung, nội dung, nội dung"
                        là nó khiến văn bản giống thật hơn, bình thường hơn.
                    </p>
                    {/* table */}
                    <div className='mx-auto '>
                        <SimpleDataCard items={step8Data} />
                    </div>

                    <div className="flex flex-col gap-4">
                        <p className="text-[15px] font-normal text-orangeCrayola leading-[24px]">
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
        </div>
    )
}

export default Step8DetailCard