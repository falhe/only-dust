type Props = {
  text: string;
};

export const Button = ({ text }: Props) => {
  return (
    <div className="flex items-end">
      <button className="btn primary bg-text-base text-text-black capitalize font-semibold  hover:bg-text-base hover:border-fuchsia-500">
        {text}
      </button>
    </div>
  );
};
