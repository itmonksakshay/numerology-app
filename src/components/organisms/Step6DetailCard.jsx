import React from 'react'
import DetailCard from '../molecules/DetailCard'
import Arrow from '../../assets/ArrowImage6/Arrow.svg'
import Arrow2 from '../../assets/ArrowImage6/Arrow2.svg'
import Arrow3 from '../../assets/ArrowImage6/Arrow3.svg'
const Step6DetailCard = () => {
    const Step6Data = [
        { id: "",bgcolor:"#27AE60", title: "Chu kỳ 1", subTitle: "Gieo hạt", rank: "4", desc: "Đầu đời - 33 tuổi (2024)",img:Arrow },
        { id: "",bgcolor:"#F2994A", title: "Chu kỳ 2", subTitle: "Chín", rank: "6", desc: "34 - 60 tuổi (2025 - 2051)" ,img:Arrow2,left:"-28px"},
        { id: "",bgcolor:"#EB5757", title: "Chu kỳ 3", subTitle: "Thu hoạch", rank: "2", desc: "61 tuổi trở về sau (2052 trở đi)" ,img:Arrow3,left:"-60px"}
    ]

    const bgimage ={
        1:Arrow,
        2:Arrow2,
        3:Arrow3
    }
    
    return (
        <div>

            <DetailCard title={"6. Chu kỳ đường đời"} divider>
                <p className="text-[15px] font-normal text-white leading-[24px]">
                    <span className="font-bold">Chu kì đỉnh cuộc đời </span>được đại
                    diện và kết hợp bởi rung động năng lượng riêng của từng thần số từ 1
                    đến 9 và những kết hợp đa dạng của nó. Chúng ta vẫn biết rằng, làm
                    việc với một đoạn văn bản dễ đọc và rõ nghĩa dễ gây rối trí và cản
                    trở việc tập trung vào yếu tố trình bày văn bản. Lorem Ipsum có ưu
                    điểm hơn so với đoạn văn bản chỉ gồm nội dung kiểu "Nội dung, nội
                    dung, nội dung" là nó khiến văn bản giống thật hơn, bình thường hơn.
                    Nhiều phần mềm thiết kế giao diện web và dàn trang ngày nay đã sử
                    dụng Lorem Ipsum làm đoạn văn bản giả, và nếu bạn thử tìm các đoạn
                    "Lorem ipsum" trên mạng thì sẽ khám phá ra nhiều trang web hiện vẫn
                    đang trong quá trình xây dựng. Có nhiều phiên bản khác nhau đã xuất
                    hiện, đôi khi do vô tình, nhiều khi do cố ý (xen thêm vào những câu
                    hài hước hay thông tục).
                </p>
                <div className="flex justify-center items-center ">
                    {Step6Data.map((item) => (
                        <div >
                            <div style={{left:`${item.left}`}} className='relative top-0 left-0 right-0 bottom-0'>
                                <div className='relative top-0 left-0 right-0 bottom-0'>
                                    <img src={item.img}></img>
                                </div>
                                <div className='absolute left-[40%] top-[19%]'>
                                    <h2 className='text-[40px] text-white'>{item.rank}</h2>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center text-[#FFFFFF]">
                                <h2 style={{color:`${item.bgcolor}`}} className='text-[22px] font-bold mt-4  mb-1'>{item.title}</h2>
                                <h3 className='text-[18px]  font-semibold mb-1'>{item.subTitle}</h3>
                                <h4 className='text-[18px]  font-normal'>{item.desc}</h4>
                            </div>
                            {/* 
                            <div className=' flex relative top-0 left-[-28px] right-0 bottom-0'>
                                <div className='relative top-0 left-0 right-0 bottom-0'>
                                    <div className='relative top-0 left-0 right-0 bottom-0'>
                                        <img src={Arrow2}></img>
                                    </div>
                                    <div className='absolute left-[40%] top-[19%]'>
                                        <h2 className='text-[40px] text-white'>4</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center items-center relative top-0 left-[-60px] right-0 bottom-0">
                                <div className='relative top-0 left-0 right-0 bottom-0'>
                                    <div className='relative top-0 left-0 right-0 bottom-0'>
                                        <img src={Arrow3}></img>
                                    </div>
                                    <div className='absolute left-[40%] top-[19%]'>
                                        <h2 className='text-[40px] text-white'>4</h2>
                                    </div>
                                </div>

                            </div> */}
                        </div>
                    ))}
                </div>
                <div>

                </div>
            </DetailCard>
        </div>
    )
}

export default Step6DetailCard