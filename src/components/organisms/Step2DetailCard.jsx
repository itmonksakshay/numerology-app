import React from 'react'
import TableCard from '../molecules/TableCard'
import DetailCard from '../molecules/DetailCard'

const Step2DetailCard = () => {


    const tableInfo = [
        {
            title: "Tri",
            bgcolor: "#F0F9FF",
            column1: {
                number: "3",
                power: "^3"
            },
            column2: {
                number: "6",
                power: ""
            },
            column3: {
                number: "9",
                power: "^2"
            },
            column4: {                
                bgcolor: "#C2E3F9",
                values: [
                {
                    number: "30",
                    power: "^2"
                },
                {
                    number: "33",
                    power: ""
                }]

            }
        },
        {
            title: "Tam",
            bgcolor: "#FFF8EB",
            column1: {
                number: "2",
                power: ""
            },
            column2: {
                number: "5",
                power: "^5"
            },
            column3: {
                number: "8",
                power: ""
            },
            column4: {
                bgcolor: "#FFE4B3",
                values: [{
                    number: "20",
                    power: ""
                }, {
                    number: "11",
                    power: "^3"
                }]

            }
        },
        {
            title: "Than",
            bgcolor: "#FFECEC",
            column1: {
                number: "1",
                power: "^2"
            },
            column2: {
                number: "4",
                power: ""
            },
            column3: {
                number: "7",
                power: ""
            },
            column4: {
                bgcolor: "#FFC9C9",
                values: [{
                    number: "10",
                    power: "^4"
                }, {
                    number: "22",
                    power: ""
                }]

            }
        }
    ]

    return (
        <div >         
        <DetailCard title={"2. Trọng số năng lượng"}>
          <div className='w-[563px] h-[232px]  mx-auto my-0 '>  
          <TableCard items={tableInfo} />
          </div>
          <div className="flex flex-col gap-8 pt-10">
            <p className="text-[15px] font-normal text-white leading-[24px]">
              <span className="font-bold">Trọng số năng lượng </span>trái với
              quan điểm chung của số đông, Lorem Ipsum không phải chỉ là một
              đoạn văn bản ngẫu nhiên. Người ta tìm thấy nguồn gốc của nó từ
              những tác phẩm văn học la-tinh cổ điển xuất hiện từ năm 45 trước
              Công Nguyên, nghĩa là nó đã có khoảng hơn 2000 tuổi. Một giáo sư
              của trường Hampden-Sydney College (bang Virginia - Mỹ) quan tâm
              tới một trong những từ la-tinh khó hiểu nhất, "consectetur", trích
              từ một đoạn của Lorem Ipsum, và đã nghiên cứu tất cả các ứng dụng
              của từ này trong văn học cổ điển, để từ đó tìm ra nguồn gốc không
              thể chối cãi của Lorem Ipsum.
            </p>
            <p className="text-[15px] font-normal text-white leading-[24px]">
              Thật ra, nó được tìm thấy trong các đoạn 1.10.32 và 1.10.33 của
              "De Finibus Bonorum et Malorum" (Đỉnh tối thượng của Cái Tốt và
              Cái Xấu) viết bởi Cicero vào năm 45 trước Công Nguyên. Cuốn sách
              này là một luận thuyết đạo lí rất phổ biến trong thời kì Phục
              Hưng. Dòng đầu tiên của Lorem Ipsum, "Lorem ipsum dolor sit
              amet..." được trích từ một câu trong đoạn thứ 1.10.32.
            </p>
          </div>
        </DetailCard>
        </div>
    )
}

export default Step2DetailCard