import Image from "next/image";

type TitleContainerProps = {
  children: React.ReactNode;
  className?: string | undefined;
  imgUrl?: string | undefined;
  imgAlt?: string | undefined;
};

export const TitleContainer = ({
  children,
  className,
  imgUrl,
  imgAlt,
}: TitleContainerProps) => {
  return (
    <div className={`flex items-center mb-3 ${className}`}>
      {imgUrl && (
        <Image src={imgUrl} width={50} height={50} alt={imgAlt ? imgAlt : ""} />
      )}
      <h2 className="font-light ms-5">{children}</h2>
    </div>
  );
};
