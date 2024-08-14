import "./App.css";
import Layout from "./components/layout";
import InfoCard from "./components/molecules/InfoCard";
import infoCardPattern from "./assets/images/infoCardPattern.png";
import DetailCard from "./components/molecules/DetailCard";
import { styled } from "@mui/material";
import PrimaryButton, {
  BigPrimaryButton,
  SmallPrimaryButton,
} from "./components/atoms/Button/PrimaryButton";
import CardWrapper from "./components/atoms/CardWrapper";
import PreviewDataChart from "./components/organisms/PreviewDataChart";
import Step2DetailCard from "./components/organisms/Step2DetailCard";
import Step3DetailCard from "./components/organisms/Step3DetailCard";
import Step4DetailCard from "./components/organisms/Step4DetailCard";
import Step6DetailCard from "./components/organisms/Step6DetailCard";
import Step8DetailCard from "./components/organisms/Step8DetailCard";
import Step9DetailCard from "./components/organisms/Step9DetailCard";
import Step22DetailCard from "./components/organisms/Step22DetailCard";
import Step23DetailCard from "./components/organisms/Step23DetailCard";


const TextWrapper = styled("div")({
  "& .title": {
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: "19.36px",
    color: "white",
  },
  "& .subtitle": {
    fontSize: "18px",
    fontWeight: 600,
    lineHeight: "21.78px",
    color: "#FB6514",
  },
});

function App() {
  const infoData = [
    { title: "Họ và tên:", subtitle: "Phạm Duy Tiến" },
    { title: "Ngày sinh:", subtitle: "07/08/2024" },
    { title: "Giới tính:", subtitle: "Nam" },
  ];

  return (
    <Layout>
      <div className="flex gap-[24px]">
        <InfoCard title={"Thông tin"} className="min-w-[248px]">
          <div className="px-[25px] py-3">
            <div className="w-[198px] h-[195px] flex flex-col items-center justify-between">
              {infoData.map((item, idx) => (
                <TextWrapper
                  key={idx}
                  className="flex flex-col gap-[8px] items-center"
                >
                  <p className="title">{item.title}</p>
                  <p className="subtitle">{item.subtitle}</p>
                </TextWrapper>
              ))}
            </div>
          </div>
        </InfoCard>
        <InfoCard title={"Số chủ đạo"} className="min-w-[248px]">
          <div
            className="w-[238px] h-[240px] flex justify-center items-center"
            style={{ backgroundImage: `url(${infoCardPattern})` }}
          >
            <p className="text-[150px] font-semibold text-white leading-[181.53px]">
              5
            </p>
          </div>
        </InfoCard>
        <InfoCard
          title={"Chu kỳ vận số của bạn"}
          className="min-w-[656px] flex-auto"
        >
          <div className="flex justify-center w-full px-2">
            <PreviewDataChart />
          </div>
        </InfoCard>
      </div>
      <div className="pt-5 w-full">
        <InfoCard
          title={"Tính cách nổi trội của bạn"}
          className="h-[226px]"
        ></InfoCard>
      </div>
      <div className="pt-5">
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
      </div>
      <div className="pt-5">
        <DetailCard title={"2. Trọng số năng lượng"} divider>
          <div className="flex flex-col gap-8">
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
        {/* TableCard */}
        <Step2DetailCard />
      </div>
      <div className="pt-5">
        <DetailCard title={"3. Chu kỳ 9 năm cá nhân"} divider>
          <Step3DetailCard />
        </DetailCard>
      </div>
      <div className="pt-5">
       <Step4DetailCard />
      </div>
      <div className="pt-5">
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
        </DetailCard>
      </div>
      <div className="pt-5">
        {/* step-6 */}
        <Step6DetailCard />
      </div>
      <div className="pt-5">
        <DetailCard title={"7. Kim tự tháp thần số học"}>
          <div className="flex flex-col gap-8">
            <p className="text-[15px] font-normal text-white leading-[24px]">
              Kim tự tháp cho thấy 4 đoạn trong chu kỳ cuộc đời và những kết hợp
              đa dạng của nó. Chúng ta vẫn biết rằng, làm việc với một đoạn văn
              bản dễ đọc và rõ nghĩa dễ gây rối trí và cản trở việc tập trung
              vào yếu tố trình bày văn bản. Lorem Ipsum có ưu điểm hơn so với
              đoạn văn bản chỉ gồm nội dung kiểu "Nội dung, nội dung, nội dung"
              là nó khiến văn bản giống thật hơn, bình thường hơn.
            </p>
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
      <div className="pt-5">
        {/* step-8 */}
        <Step8DetailCard/>
      </div>
      <div className="pt-5">
        {/* step-9 */}
        <Step9DetailCard/>
      </div>
      <div className="pt-5">
        <DetailCard title={"10. Chỉ số sinh mệnh của bạn là:"} subtitle={"4"}>
          <div className="flex flex-col gap-8">
            <p className="text-[15px] font-normal text-white leading-[24px]">
              Kim tự tháp cho thấy 4 đoạn trong chu kỳ cuộc đời và những kết hợp
              đa dạng của nó. Chúng ta vẫn biết rằng, làm việc với một đoạn văn
              bản dễ đọc và rõ nghĩa dễ gây rối trí và cản trở việc tập trung
              vào yếu tố trình bày văn bản. Lorem Ipsum có ưu điểm hơn so với
              đoạn văn bản chỉ gồm nội dung kiểu "Nội dung, nội dung, nội dung"
              là nó khiến văn bản giống thật hơn, bình thường hơn.
            </p>
            <div className="w-[295px]">
              <SmallPrimaryButton>
                Chỉ tài khoản Vip mới xem được mục này
              </SmallPrimaryButton>
            </div>
          </div>
        </DetailCard>
      </div>
      <div className="pt-5">
        <DetailCard title={"11. Tương quan đường đời - Sứ mệnh"}>
          <div className="flex flex-col gap-8">
            <p className="text-[15px] font-normal text-white leading-[24px]">
              Kim tự tháp cho thấy 4 đoạn trong chu kỳ cuộc đời và những kết hợp
              đa dạng của nó. Chúng ta vẫn biết rằng, làm việc với một đoạn văn
              bản dễ đọc và rõ nghĩa dễ gây rối trí và cản trở việc tập trung
              vào yếu tố trình bày văn bản. Lorem Ipsum có ưu điểm hơn so với
              đoạn văn bản chỉ gồm nội dung kiểu "Nội dung, nội dung, nội dung"
              là nó khiến văn bản giống thật hơn, bình thường hơn.
            </p>
            <div className="w-[295px]">
              <SmallPrimaryButton>
                Chỉ tài khoản Vip mới xem được mục này
              </SmallPrimaryButton>
            </div>
          </div>
        </DetailCard>
      </div>
      <div className="pt-5">
        <DetailCard
          title={"12. Chỉ số thử thách sứ mệnh của bạn:"}
          subtitle={"1"}
        >
          <div className="flex flex-col gap-8">
            <p className="text-[15px] font-normal text-white leading-[24px]">
              Kim tự tháp cho thấy 4 đoạn trong chu kỳ cuộc đời và những kết hợp
              đa dạng của nó. Chúng ta vẫn biết rằng, làm việc với một đoạn văn
              bản dễ đọc và rõ nghĩa dễ gây rối trí và cản trở việc tập trung
              vào yếu tố trình bày văn bản. Lorem Ipsum có ưu điểm hơn so với
              đoạn văn bản chỉ gồm nội dung kiểu "Nội dung, nội dung, nội dung"
              là nó khiến văn bản giống thật hơn, bình thường hơn.
            </p>
            <div className="w-[295px]">
              <SmallPrimaryButton>
                Chỉ tài khoản Vip mới xem được mục này
              </SmallPrimaryButton>
            </div>
          </div>
        </DetailCard>
      </div>
      <div className="pt-5">
        <DetailCard
          title={"13. Chỉ số năng lực trưởng thành của bạn là:"}
          subtitle={"5"}
        >
          <div className="flex flex-col gap-8">
            <p className="text-[15px] font-normal text-white leading-[24px]">
              Kim tự tháp cho thấy 4 đoạn trong chu kỳ cuộc đời và những kết hợp
              đa dạng của nó. Chúng ta vẫn biết rằng, làm việc với một đoạn văn
              bản dễ đọc và rõ nghĩa dễ gây rối trí và cản trở việc tập trung
              vào yếu tố trình bày văn bản. Lorem Ipsum có ưu điểm hơn so với
              đoạn văn bản chỉ gồm nội dung kiểu "Nội dung, nội dung, nội dung"
              là nó khiến văn bản giống thật hơn, bình thường hơn.
            </p>
            <div className="w-[295px]">
              <SmallPrimaryButton>
                Chỉ tài khoản Vip mới xem được mục này
              </SmallPrimaryButton>
            </div>
          </div>
        </DetailCard>
      </div>
      <div className="pt-5">
        <DetailCard title={"14. Chỉ số linh hồn của bạn là:"} subtitle={"4"}>
          <div className="flex flex-col gap-8">
            <p className="text-[15px] font-normal text-white leading-[24px]">
              Kim tự tháp cho thấy 4 đoạn trong chu kỳ cuộc đời và những kết hợp
              đa dạng của nó. Chúng ta vẫn biết rằng, làm việc với một đoạn văn
              bản dễ đọc và rõ nghĩa dễ gây rối trí và cản trở việc tập trung
              vào yếu tố trình bày văn bản. Lorem Ipsum có ưu điểm hơn so với
              đoạn văn bản chỉ gồm nội dung kiểu "Nội dung, nội dung, nội dung"
              là nó khiến văn bản giống thật hơn, bình thường hơn.
            </p>
            <div className="w-[295px]">
              <SmallPrimaryButton>
                Chỉ tài khoản Vip mới xem được mục này
              </SmallPrimaryButton>
            </div>
          </div>
        </DetailCard>
      </div>
      <div className="pt-5">
        <DetailCard title={"15. Chỉ số sinh mệnh của bạn là:"} subtitle={"6"}>
          <div className="flex flex-col gap-8">
            <p className="text-[15px] font-normal text-white leading-[24px]">
              Kim tự tháp cho thấy 4 đoạn trong chu kỳ cuộc đời và những kết hợp
              đa dạng của nó. Chúng ta vẫn biết rằng, làm việc với một đoạn văn
              bản dễ đọc và rõ nghĩa dễ gây rối trí và cản trở việc tập trung
              vào yếu tố trình bày văn bản. Lorem Ipsum có ưu điểm hơn so với
              đoạn văn bản chỉ gồm nội dung kiểu "Nội dung, nội dung, nội dung"
              là nó khiến văn bản giống thật hơn, bình thường hơn.
            </p>
            <div className="w-[295px]">
              <SmallPrimaryButton>
                Chỉ tài khoản Vip mới xem được mục này
              </SmallPrimaryButton>
            </div>
          </div>
        </DetailCard>
      </div>
      <div className="pt-5">
        <DetailCard title={"16. Chỉ số sinh mệnh của bạn là: 4"}>
          <div className="flex flex-col gap-8">
            <p className="text-[15px] font-normal text-white leading-[24px]">
              Kim tự tháp cho thấy 4 đoạn trong chu kỳ cuộc đời và những kết hợp
              đa dạng của nó. Chúng ta vẫn biết rằng, làm việc với một đoạn văn
              bản dễ đọc và rõ nghĩa dễ gây rối trí và cản trở việc tập trung
              vào yếu tố trình bày văn bản. Lorem Ipsum có ưu điểm hơn so với
              đoạn văn bản chỉ gồm nội dung kiểu "Nội dung, nội dung, nội dung"
              là nó khiến văn bản giống thật hơn, bình thường hơn.
            </p>
            <div className="w-[295px]">
              <SmallPrimaryButton>
                Chỉ tài khoản Vip mới xem được mục này
              </SmallPrimaryButton>
            </div>
          </div>
        </DetailCard>
      </div>
      <div className="pt-5">
        <DetailCard title={"17. Chỉ số sinh mệnh của bạn là: 4"}>
          <div className="flex flex-col gap-8">
            <p className="text-[15px] font-normal text-white leading-[24px]">
              Kim tự tháp cho thấy 4 đoạn trong chu kỳ cuộc đời và những kết hợp
              đa dạng của nó. Chúng ta vẫn biết rằng, làm việc với một đoạn văn
              bản dễ đọc và rõ nghĩa dễ gây rối trí và cản trở việc tập trung
              vào yếu tố trình bày văn bản. Lorem Ipsum có ưu điểm hơn so với
              đoạn văn bản chỉ gồm nội dung kiểu "Nội dung, nội dung, nội dung"
              là nó khiến văn bản giống thật hơn, bình thường hơn.
            </p>
            <div className="w-[295px]">
              <SmallPrimaryButton>
                Chỉ tài khoản Vip mới xem được mục này
              </SmallPrimaryButton>
            </div>
          </div>
        </DetailCard>
      </div>
      <div className="pt-5">
        <DetailCard title={"18. Chỉ số sinh mệnh của bạn là: 4"}>
          <div className="flex flex-col gap-8">
            <p className="text-[15px] font-normal text-white leading-[24px]">
              Kim tự tháp cho thấy 4 đoạn trong chu kỳ cuộc đời và những kết hợp
              đa dạng của nó. Chúng ta vẫn biết rằng, làm việc với một đoạn văn
              bản dễ đọc và rõ nghĩa dễ gây rối trí và cản trở việc tập trung
              vào yếu tố trình bày văn bản. Lorem Ipsum có ưu điểm hơn so với
              đoạn văn bản chỉ gồm nội dung kiểu "Nội dung, nội dung, nội dung"
              là nó khiến văn bản giống thật hơn, bình thường hơn.
            </p>
            <div className="w-[295px]">
              <SmallPrimaryButton>
                Chỉ tài khoản Vip mới xem được mục này
              </SmallPrimaryButton>
            </div>
          </div>
        </DetailCard>
      </div>
      <div className="pt-5">
        <DetailCard title={"19. Chỉ số sinh mệnh của bạn là: 4"}>
          <div className="flex flex-col gap-8">
            <p className="text-[15px] font-normal text-white leading-[24px]">
              Kim tự tháp cho thấy 4 đoạn trong chu kỳ cuộc đời và những kết hợp
              đa dạng của nó. Chúng ta vẫn biết rằng, làm việc với một đoạn văn
              bản dễ đọc và rõ nghĩa dễ gây rối trí và cản trở việc tập trung
              vào yếu tố trình bày văn bản. Lorem Ipsum có ưu điểm hơn so với
              đoạn văn bản chỉ gồm nội dung kiểu "Nội dung, nội dung, nội dung"
              là nó khiến văn bản giống thật hơn, bình thường hơn.
            </p>
            <div className="w-[295px]">
              <SmallPrimaryButton>
                Chỉ tài khoản Vip mới xem được mục này
              </SmallPrimaryButton>
            </div>
          </div>
        </DetailCard>
      </div>
      <div className="pt-5">
        <DetailCard title={"20. Chỉ số sinh mệnh của bạn là: 4"}>
          <div className="flex flex-col gap-8">
            <p className="text-[15px] font-normal text-white leading-[24px]">
              Kim tự tháp cho thấy 4 đoạn trong chu kỳ cuộc đời và những kết hợp
              đa dạng của nó. Chúng ta vẫn biết rằng, làm việc với một đoạn văn
              bản dễ đọc và rõ nghĩa dễ gây rối trí và cản trở việc tập trung
              vào yếu tố trình bày văn bản. Lorem Ipsum có ưu điểm hơn so với
              đoạn văn bản chỉ gồm nội dung kiểu "Nội dung, nội dung, nội dung"
              là nó khiến văn bản giống thật hơn, bình thường hơn.
            </p>
            <div className="w-[295px]">
              <SmallPrimaryButton>
                Chỉ tài khoản Vip mới xem được mục này
              </SmallPrimaryButton>
            </div>
          </div>
        </DetailCard>
      </div>
      <div className="pt-5">
        <DetailCard title={"21. Chỉ số sinh mệnh của bạn là: 4"}>
          <div className="flex flex-col gap-8">
            <p className="text-[15px] font-normal text-white leading-[24px]">
              Kim tự tháp cho thấy 4 đoạn trong chu kỳ cuộc đời và những kết hợp
              đa dạng của nó. Chúng ta vẫn biết rằng, làm việc với một đoạn văn
              bản dễ đọc và rõ nghĩa dễ gây rối trí và cản trở việc tập trung
              vào yếu tố trình bày văn bản. Lorem Ipsum có ưu điểm hơn so với
              đoạn văn bản chỉ gồm nội dung kiểu "Nội dung, nội dung, nội dung"
              là nó khiến văn bản giống thật hơn, bình thường hơn.
            </p>
            <div className="w-[295px]">
              <SmallPrimaryButton>
                Chỉ tài khoản Vip mới xem được mục này
              </SmallPrimaryButton>
            </div>
          </div>
        </DetailCard>
      </div>
      <div className="pt-5">
              <Step22DetailCard/>
      </div>
      <div className="pt-5">
              <Step23DetailCard/>
      </div>
      <div className="pt-5">
        <DetailCard title={"24. Chỉ số sinh mệnh của bạn là: 4"}>
          <div className="flex flex-col gap-8">
            <p className="text-[15px] font-normal text-white leading-[24px]">
              Kim tự tháp cho thấy 4 đoạn trong chu kỳ cuộc đời và những kết hợp
              đa dạng của nó. Chúng ta vẫn biết rằng, làm việc với một đoạn văn
              bản dễ đọc và rõ nghĩa dễ gây rối trí và cản trở việc tập trung
              vào yếu tố trình bày văn bản. Lorem Ipsum có ưu điểm hơn so với
              đoạn văn bản chỉ gồm nội dung kiểu "Nội dung, nội dung, nội dung"
              là nó khiến văn bản giống thật hơn, bình thường hơn.
            </p>
            <div className="w-[295px]">
              <SmallPrimaryButton>
                Chỉ tài khoản Vip mới xem được mục này
              </SmallPrimaryButton>
            </div>
          </div>
        </DetailCard>
      </div>
      <div className="pt-5">
        <DetailCard title={"25. Chỉ số sinh mệnh của bạn là: 4"}>
          <div className="flex flex-col gap-8">
            <p className="text-[15px] font-normal text-white leading-[24px]">
              Kim tự tháp cho thấy 4 đoạn trong chu kỳ cuộc đời và những kết hợp
              đa dạng của nó. Chúng ta vẫn biết rằng, làm việc với một đoạn văn
              bản dễ đọc và rõ nghĩa dễ gây rối trí và cản trở việc tập trung
              vào yếu tố trình bày văn bản. Lorem Ipsum có ưu điểm hơn so với
              đoạn văn bản chỉ gồm nội dung kiểu "Nội dung, nội dung, nội dung"
              là nó khiến văn bản giống thật hơn, bình thường hơn.
            </p>
            <div className="w-[295px]">
              <SmallPrimaryButton>
                Chỉ tài khoản Vip mới xem được mục này
              </SmallPrimaryButton>
            </div>
          </div>
        </DetailCard>
      </div>
      <div className="pt-5">
        <DetailCard title={"26. Chỉ số sinh mệnh của bạn là: 4"}>
          <div className="flex flex-col gap-8">
            <p className="text-[15px] font-normal text-white leading-[24px]">
              Kim tự tháp cho thấy 4 đoạn trong chu kỳ cuộc đời và những kết hợp
              đa dạng của nó. Chúng ta vẫn biết rằng, làm việc với một đoạn văn
              bản dễ đọc và rõ nghĩa dễ gây rối trí và cản trở việc tập trung
              vào yếu tố trình bày văn bản. Lorem Ipsum có ưu điểm hơn so với
              đoạn văn bản chỉ gồm nội dung kiểu "Nội dung, nội dung, nội dung"
              là nó khiến văn bản giống thật hơn, bình thường hơn.
            </p>
            <div className="w-[295px]">
              <SmallPrimaryButton>
                Chỉ tài khoản Vip mới xem được mục này
              </SmallPrimaryButton>
            </div>
          </div>
        </DetailCard>
      </div>
      <div className="pt-5">
        <DetailCard title={"27. Chỉ số sinh mệnh của bạn là: 4"}>
          <div className="flex flex-col gap-8">
            <p className="text-[15px] font-normal text-white leading-[24px]">
              Kim tự tháp cho thấy 4 đoạn trong chu kỳ cuộc đời và những kết hợp
              đa dạng của nó. Chúng ta vẫn biết rằng, làm việc với một đoạn văn
              bản dễ đọc và rõ nghĩa dễ gây rối trí và cản trở việc tập trung
              vào yếu tố trình bày văn bản. Lorem Ipsum có ưu điểm hơn so với
              đoạn văn bản chỉ gồm nội dung kiểu "Nội dung, nội dung, nội dung"
              là nó khiến văn bản giống thật hơn, bình thường hơn.
            </p>
            <div className="w-[295px]">
              <SmallPrimaryButton>
                Chỉ tài khoản Vip mới xem được mục này
              </SmallPrimaryButton>
            </div>
          </div>
        </DetailCard>
      </div>
      <div className="pt-5">
        <DetailCard title={"28. Chỉ số sinh mệnh của bạn là: 4"}>
          <div className="flex flex-col gap-8">
            <p className="text-[15px] font-normal text-white leading-[24px]">
              Kim tự tháp cho thấy 4 đoạn trong chu kỳ cuộc đời và những kết hợp
              đa dạng của nó. Chúng ta vẫn biết rằng, làm việc với một đoạn văn
              bản dễ đọc và rõ nghĩa dễ gây rối trí và cản trở việc tập trung
              vào yếu tố trình bày văn bản. Lorem Ipsum có ưu điểm hơn so với
              đoạn văn bản chỉ gồm nội dung kiểu "Nội dung, nội dung, nội dung"
              là nó khiến văn bản giống thật hơn, bình thường hơn.
            </p>
            <div className="w-[295px]">
              <SmallPrimaryButton>
                Chỉ tài khoản Vip mới xem được mục này
              </SmallPrimaryButton>
            </div>
          </div>
        </DetailCard>
      </div>
      <div className="pt-5">
        <DetailCard title={"29. Chỉ số sinh mệnh của bạn là: 4"}>
          <div className="flex flex-col gap-8">
            <p className="text-[15px] font-normal text-white leading-[24px]">
              Kim tự tháp cho thấy 4 đoạn trong chu kỳ cuộc đời và những kết hợp
              đa dạng của nó. Chúng ta vẫn biết rằng, làm việc với một đoạn văn
              bản dễ đọc và rõ nghĩa dễ gây rối trí và cản trở việc tập trung
              vào yếu tố trình bày văn bản. Lorem Ipsum có ưu điểm hơn so với
              đoạn văn bản chỉ gồm nội dung kiểu "Nội dung, nội dung, nội dung"
              là nó khiến văn bản giống thật hơn, bình thường hơn.
            </p>
            <div className="w-[295px]">
              <SmallPrimaryButton>
                Chỉ tài khoản Vip mới xem được mục này
              </SmallPrimaryButton>
            </div>
          </div>
        </DetailCard>
      </div>
      <div className="pt-5">
        <DetailCard title={"30. Chỉ số sinh mệnh của bạn là: 4"}>
          <div className="flex flex-col gap-8">
            <p className="text-[15px] font-normal text-white leading-[24px]">
              Kim tự tháp cho thấy 4 đoạn trong chu kỳ cuộc đời và những kết hợp
              đa dạng của nó. Chúng ta vẫn biết rằng, làm việc với một đoạn văn
              bản dễ đọc và rõ nghĩa dễ gây rối trí và cản trở việc tập trung
              vào yếu tố trình bày văn bản. Lorem Ipsum có ưu điểm hơn so với
              đoạn văn bản chỉ gồm nội dung kiểu "Nội dung, nội dung, nội dung"
              là nó khiến văn bản giống thật hơn, bình thường hơn.
            </p>
            <div className="w-[295px]">
              <SmallPrimaryButton>
                Chỉ tài khoản Vip mới xem được mục này
              </SmallPrimaryButton>
            </div>
          </div>
        </DetailCard>
      </div>
      <div className="pt-5">
        <CardWrapper className="px-[48px] py-[30px]">
          <div className="flex flex-col gap-8 items-center">
            <p className="text-[15px] font-normal text-orangeCrayola leading-[24px]">
              Bạn đang sử dụng lượt tra miễn phí chỉ xem được giới hạn các luận
              giải. Để xem những luận giải và giải pháp mà các chuyên gia quốc
              tế đã nghiên cứu cho toàn bộ chỉ số của bạn, vui lòng nâng cấp tìa
              khoản VIP!
            </p>
            <div className="w-[295px]">
              <PrimaryButton>Nâng cấp VIP</PrimaryButton>
            </div>
          </div>
        </CardWrapper>
      </div>
    </Layout>
  );
}

export default App;
