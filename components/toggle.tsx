import Image from "next/image";

export const Toggle = () => {
  return (
    <div className="form-control flex-row">
      <label className="label cursor-pointer flex items-center self-stretch gap-3">
        <Image src="/icn.svg" alt="Logo" width={16} height={16} />
        <span className="label-text text-text-base">Remember me</span>
        <input type="checkbox" className="toggle" />
      </label>
    </div>
  );
};
