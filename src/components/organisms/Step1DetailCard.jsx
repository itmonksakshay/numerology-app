import React from 'react'
import DetailCard from '../molecules/DetailCard'
import { BigPrimaryButton } from '../atoms/Button/PrimaryButton'

const Step1DetailCard = () => {
  return (
    <DetailCard title={"1. Chu kì đỉnh cuộc đời"} divider>
    <div></div>
    <div className="flex flex-col gap-8">
      <div className="w-[225px]">
        <BigPrimaryButton>Trưởng thành: 5</BigPrimaryButton>
      </div>
      <p className="text-[15px] font-normal text-white leading-[24px]">
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
  </DetailCard>
  )
}

export default Step1DetailCard
