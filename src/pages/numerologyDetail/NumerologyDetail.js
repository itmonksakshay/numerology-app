
import InfoCard from "../../components/molecules/InfoCard";

import infoCardPattern from "../../assets/images/infoCardPattern.png";
import DetailCard from "../../components/molecules/DetailCard";
import { styled } from "@mui/material";
import PrimaryButton, {
  SmallPrimaryButton,
} from "../../components/atoms/Button/PrimaryButton";
import CardWrapper from "../../components/atoms/CardWrapper";
import PreviewDataChart from "../../components/organisms/PreviewDataChart";
import Step2DetailCard from "../../components/organisms/Step2DetailCard";
import Step3DetailCard from "../../components/organisms/Step3DetailCard";
import Step4DetailCard from "../../components/organisms/Step4DetailCard";
import Step6DetailCard from "../../components/organisms/Step6DetailCard";
import Step8DetailCard from "../../components/organisms/Step8DetailCard";
import Step9DetailCard from "../../components/organisms/Step9DetailCard";
import Step22DetailCard from "../../components/organisms/Step22DetailCard";
import Step23DetailCard from "../../components/organisms/Step23DetailCard";
import Step5DetailCard from "../../components/organisms/Step5DetailCard";
import InfoStepDetailCard from "../../components/organisms/InfoStepDetailCard";
import Step1DetailCard from "../../components/organisms/Step1DetailCard";


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

function NumerologyDetail() {
  const infoData = [
    { title: "Họ và tên:", subtitle: "Phạm Duy Tiến" },
    { title: "Ngày sinh:", subtitle: "07/08/2024" },
    { title: "Giới tính:", subtitle: "Nam" },
  ];

  return (
  <>
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
        <InfoStepDetailCard />
      </div>
      <div className="pt-5">
        <Step1DetailCard />
      </div>
      <div className="pt-5">
        {/* TableCard */}
        <Step2DetailCard />
      </div>
      <div className="pt-5">
        <Step3DetailCard />
      </div>
      <div className="pt-5">
        <Step4DetailCard />
      </div>
      <div className="pt-5">
        <Step5DetailCard />
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
        <Step8DetailCard />
      </div>
      <div className="pt-5">
        {/* step-9 */}
        <Step9DetailCard />
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
        <Step22DetailCard />
      </div>
      <div className="pt-5">
        <Step23DetailCard />
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
      </>
  );
}

export default NumerologyDetail;

// import React from 'react'

// const NumerologyDetail = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default NumerologyDetail
