interface MainSectionProps {
  children: React.ReactNode;
  className: string;
  index?: number;
}

const MainSection = ({ children, className }: MainSectionProps) => {
  return <section className={className}>{children}</section>;
};

export default MainSection;
