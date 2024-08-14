import React from 'react'
import DetailCard from '../molecules/DetailCard'
import ContentCard from '../molecules/ContentCard';
import PercentageCircularProgress from '../atoms/PercentageCircularProgess/PercentageCircularProgess';
import { SmallPrimaryButton } from '../atoms/Button/PrimaryButton';
const Step4DetailCard = () => {
    return (
        <>
            <DetailCard
                title={
                    "4. Nhóm tính cách theo bản ngã của bạn (có thể thay đổi do luyện tập)"
                }
                divider
            >
                <div className='flex flex-col  gap-8'>

                    <p className="text-[14px] font-normal text-white leading-[22px]">
                        Có rất nhiều biến thể của Lorem Ipsum mà bạn có thể tìm thấy,
                        nhưng đa số được biến đổi bằng cách thêm các yếu tố hài hước,
                        các từ ngẫu nhiên có khi không có vẻ gì là có ý nghĩa.
                        Nếu bạn định sử dụng một đoạn Lorem Ipsum.
                    </p>
                    <div className='flex justify-center'>
                        <div className='flex gap-3  flex-wrap w-[1096px]'>
                            <ContentCard className={"bg-lavenderBlush"} title={'1 Mạnh mẽ - Độc lập - Tự tin'} >
                                <PercentageCircularProgress value={20} />

                            </ContentCard>
                            <ContentCard className={"bg-Linen"} title={'2. Lắng nghe - Khéo léo - Nhạy cảm'}>
                                <PercentageCircularProgress value={40} />
                            </ContentCard>
                            <ContentCard className={"bg-eggShell"} title={'3. Sáng tạo - Hoạt bát - Lạc quan'}>
                                <PercentageCircularProgress value={60} />

                            </ContentCard>
                            <ContentCard className={"bg-pastelMint"} title={'4. Cẩn thận - Cầu toàn - Thực tế'}>
                                <PercentageCircularProgress value={80} />

                            </ContentCard>
                            <ContentCard className={"bg-lavenderBlush  gap-5"} title={'5. Năng động - Linh hoạt - Tò mò'} >
                                <div className="w-[295px] pt-4">
                                    <SmallPrimaryButton>
                                        Chỉ tài khoản Vip mới xem được mục này
                                    </SmallPrimaryButton>
                                </div>

                            </ContentCard>
                            <ContentCard className={"bg-lavenderBlush gap-5"} title={'6. Quan tâm - Yêu thương - Kiểm soát'} >
                                <div className="w-[295px] pt-4">
                                    <SmallPrimaryButton>
                                        Chỉ tài khoản Vip mới xem được mục này
                                    </SmallPrimaryButton>
                                </div>

                            </ContentCard>
                            <ContentCard className={"bg-lavenderBlush gap-5"} title={'7. Thông thái - Khám phá - truyền đạt'} >
                                <div className="w-[295px] pt-4">
                                    <SmallPrimaryButton>
                                        Chỉ tài khoản Vip mới xem được mục này
                                    </SmallPrimaryButton>
                                </div>

                            </ContentCard>
                            <ContentCard className={"bg-lavenderBlush gap-5"} title={'8. Công bằng - Tập trung - Lý tưởng'} >
                                <div className="w-[295px] pt-4">
                                    <SmallPrimaryButton>
                                        Chỉ tài khoản Vip mới xem được mục này
                                    </SmallPrimaryButton>
                                </div>

                            </ContentCard>
                            <ContentCard className={"bg-lavenderBlush gap-5"} title={'9. Trách nhiệm - Rộng lượng - Hào phóng'} >
                                <div className="w-[295px] pt-4">
                                    <SmallPrimaryButton>
                                        Chỉ tài khoản Vip mới xem được mục này
                                    </SmallPrimaryButton>
                                </div>

                            </ContentCard>
                        </div>
                    </div>
                </div>
            </DetailCard>
        </>
    )
}

export default Step4DetailCard;
