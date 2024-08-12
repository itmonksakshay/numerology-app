import React from 'react';
import DetailCard from './DetailCard';
import { SmallPrimaryButton } from '../atoms/Button/PrimaryButton';


const CommonDetailCard = ({ title, buttonTitle, content, subtitle }) => {


  return (
    <DetailCard title={title} subtitle={subtitle}>
      <div className="flex flex-col gap-8">
        <p className="text-[15px] font-normal text-white leading-[24px]">
          {content}
        </p>
        <div className="w-[295px]">
          <SmallPrimaryButton>
            {buttonTitle}
          </SmallPrimaryButton>
        </div>
      </div>
    </DetailCard>
  );
};

export default CommonDetailCard;