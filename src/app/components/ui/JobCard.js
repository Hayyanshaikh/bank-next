import React from 'react';
import Image from 'next/image';
import Button from '../utils/Button.js';
import JobIcon from '../../assets/images/icons/bag.svg';

const JobCard = ({ job }) => {
  return (
    <div className="flex flex-col gap-[30px] lg:gap-[40px] items-start bg-lighter-background border border-light-background rounded-[16px] p-[24px] lg:p-[40px]">
      <div className="flex flex-col items-start gap-[30px] lg:gap-[40px] flex-1">
        <div className="flex flex-col items-start gap-[10px]">
          <h4 className="font-semibold text-[20px] lg:text-[24px] text-white">{job.title}</h4>
          <div className="flex gap-[8px] items-center">
            {job.locations.map((location, index) => (
              <button
                key={index}
                className="px-[10px] lg:px-[14px] py-[6px] rounded-full border border-light-background bg-background text-[14px] lg:text-[16px] font-light text-color"
              >
                {location}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start gap-[30px] lg:gap-[40px]">
          <div className="flex flex-col items-start gap-[16px]">
            <h4 className="font-semibold text-[18px] lg:text-[20px] text-white">About This Job</h4>
            <p className="font-light text-[14px] lg:text-[16px] text-color">{job.description}</p>
          </div>
          <div className="flex flex-col items-start gap-[16px]">
            <h4 className="font-semibold text-[18px] lg:text-[20px] text-white">Requirements & Qualifications</h4>
            <ul className="flex flex-col gap-[14px]">
              {job.qualifications.map((qualification, index) => (
                <li key={index} className="flex items-center gap-[8px]">
                  <Image src={JobIcon} alt="job icon" />
                  <p className="font-light text-[14px] lg:text-[16px] text-color">{qualification}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Button text="Apply Now" />
    </div>
  );
};

export default JobCard;
