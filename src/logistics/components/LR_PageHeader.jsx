import LR_SectionHeading from './LR_SectionHeading';

export default function LR_PageHeader({ eyebrow, title, description }) {
  return <section className="bg-[#e5e9df] px-5 pb-16 pt-14 sm:pb-20 sm:pt-20"><div className="mx-auto max-w-7xl"><LR_SectionHeading eyebrow={eyebrow} title={title}>{description}</LR_SectionHeading></div></section>;
}