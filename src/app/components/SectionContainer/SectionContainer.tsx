type SectionContainerProps = {
  children: React.ReactNode;
  className?: string | undefined;
};

export const SectionContainer = ({
  children,
  className,
}: SectionContainerProps) => {
  return (
    <section
      className={`bg-[url('/img/section-background.png')] text-white md:rounded-3xl drop-shadow-md p-10 w-full ${className}`}
    >
      {children}
    </section>
  );
};
