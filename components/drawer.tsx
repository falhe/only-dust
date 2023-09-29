import Image from "next/image";
import { Tabs } from "@/components/tabs";
import { Title } from "@/components/title";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const Drawer = ({ open, setOpen }: Props) => {
  return (
    <div className="drawer-side flex">
      <label htmlFor="my-drawer" className="drawer-overlay"></label>
      <div className="menu py-8 px-6 min-h-full w-full text-base-content bg-base-drawer">
        {/* Sidebar content here */}
        <button
          className="p-2 flex justify-center items-center gap-1 rounded-xl border absolute right-3 top-3 cursor-pointer shadow-lg"
          onClick={() => setOpen(!open)}
        >
          <Image
            src="/close-cross-exit.svg"
            alt="Logo"
            width={16}
            height={16}
          />
        </button>
        <Title title="Title" />
        <Tabs />
      </div>
    </div>
  );
};
