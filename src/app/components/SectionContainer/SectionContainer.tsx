type SectionContainerProps = {
  children: React.ReactNode;
};

export const SectionContainer = ({ children }: SectionContainerProps) => {
  return (
    <section className="bg-[url('/img/section-background.png')] text-white rounded-3xl drop-shadow-md p-10 w-full">
      {children}
    </section>
  );
};
