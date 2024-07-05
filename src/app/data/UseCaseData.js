'use client'
import managingFinancesIcon from '../assets/images/icons/managing_finances.svg';
import savingFutureIcon from '../assets/images/icons/saving_future.svg';
import homeIcon from '../assets/images/icons/home.svg';
import educationIcon from '../assets/images/icons/education.svg';
import startupsIcon from '../assets/images/icons/startups.svg';
import cashFlowIcon from '../assets/images/icons/cash_flow.svg';
import businessIcon from '../assets/images/icons/business.svg';
import paymentIcon from '../assets/images/icons/payment.svg';

const UseCaseData = [
  {
    title: 'For Individuals',
    description: 'For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers.',
    cards: [
      { imageSrc: managingFinancesIcon, title: 'Managing Personal Finances' },
      { imageSrc: savingFutureIcon, title: 'Saving for the Future' },
      { imageSrc: homeIcon, title: 'Homeownership' },
      { imageSrc: educationIcon, title: 'Education Funding' },
    ],
    stats: [
      { percentage: 78, description: 'Secure Retirement Planning' },
      { percentage: 63, description: 'Manageable Debt Consolidation' },
      { percentage: 91, description: 'Reducing financial burdens' },
    ]
  },
  {
    title: 'For Business',
    description: 'For businesses, we empower growth with working capital solutions that optimize cash flow, and our tailored financing options fuel business expansion. Whatever your financial aspirations, YourBank is committed to providing the right tools and support to achieve them.',
    cards: [
      { imageSrc: startupsIcon, title: 'Startups and Entrepreneurs' },
      { imageSrc: cashFlowIcon, title: 'Cash Flow Management' },
      { imageSrc: businessIcon, title: 'Business Expansion' },
      { imageSrc: paymentIcon, title: 'Payment Solutions' },
    ],
    stats: [
      { percentage: 65, description: 'Cash Flow Management' },
      { percentage: 70, description: 'Drive Business Expansion' },
      { percentage: 45, description: 'Streamline payroll processing' },
    ]
  },
];

export default UseCaseData;