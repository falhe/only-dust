type Props = {
  title: string;
};

export const Title = ({ title }: Props) => {
  return (
    <p className="text-2xl leading-8 tracking-tighter text-text-base">
      {title}
    </p>
  );
};
