import React from 'react'
import DetailCard from '../molecules/DetailCard';
import GridCard from '../molecules/GridCard';

import { BigPrimaryButton } from '../atoms/Button/PrimaryButton'
import Arrow4 from "../../assets/ArrowImage6/Arrow4.svg";
import ArrowCircular from "../../assets/ArrowImage6/ArrowCircular.svg"
import Arrow2Circular from "../../assets/ArrowImage6/Arrow2Circular.svg"



const Step1DetailCard = () => {
    return (
        <DetailCard title={"1. Chu kì đỉnh cuộc đời"} divider>
            <div className='flex justify-center mt-10'>
                <GridCard title="Đỉnh 1" arrowValue="4" className="w-24 space-x-2">32 tuổi</GridCard>
                <GridCard title="Đỉnh 2" arrowValue="10" className="w-24 space-x-2">32 tuổi</GridCard>
                <GridCard title="Đỉnh 3" arrowValue="5" className="w-24 space-x-2">32 tuổi</GridCard>
                <GridCard title="Đỉnh 4" arrowValue="3" className="w-24 space-x-2">32 tuổi</GridCard>
                <GridCard title="Đỉnh 5" arrowValue="4" className="w-24 space-x-2">32 tuổi</GridCard>

            </div>
            <div className='flex justify-center'>
                <img src={ArrowCircular} alt='Arrow' />
                <img src={Arrow4} alt='Arrow' />
                <img src={Arrow2Circular} alt='Arrow' />
            </div>
            <div className="w-full">
                <div className='flex  flex-col justify-center items-center'>
                    <BigPrimaryButton>Trưởng thành: 5</BigPrimaryButton>
                    <p className="text-[15px] font-normal text-white leading-[24px] p-5">
                        <span className="font-bold">Chu kì đỉnh cuộc đời </span>được đại
                        diện và kết hợp bởi rung động năng lượng riêng của từng thần số từ
                        1 đến 9 và những kết hợp đa dạng của nó. Chúng ta vẫn biết rằng,
                        làm việc với một đoạn văn bản dễ đọc và rõ nghĩa dễ gây rối trí và
                        cản trở việc tập trung vào yếu tố trình bày văn bản. Lorem Ipsum
                        có ưu điểm hơn so với đoạn văn bản chỉ gồm nội dung kiểu "Nội
                        dung, nội dung, nội dung" là nó khiến văn bản giống thật hơn, bình
                        thường hơn. Nhiều phần mềm thiết kế giao diện web và dàn trang
                        ngày nay đã sử dụng Lorem Ipsum làm đoạn văn bản giả, và nếu bạn
                        thử tìm các đoạn "Lorem ipsum" trên mạng thì sẽ khám phá ra nhiều
                        trang web hiện vẫn đang trong quá trình xây dựng. Có nhiều phiên
                        bản khác nhau đã xuất hiện, đôi khi do vô tình, nhiều khi do cố ý
                        (xen thêm vào những câu hài hước hay thông tục).
                    </p>
                </div>

            </div>
        </DetailCard>
    )
}

export default Step1DetailCard
