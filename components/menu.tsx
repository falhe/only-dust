"use client";

import { useState } from "react";
import { Drawer } from "@/components/drawer";

const DrawerButton = ({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) => (
  <button className="btn btn-primary drawer-button" onClick={onClick}>
    {text}
  </button>
);

export const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="drawer w-auto">
        <input
          id="my-drawer"
          type="checkbox"
          className="drawer-toggle"
          defaultChecked={open}
          readOnly
        />
        <div className="drawer-content">
          {/* Page content here */}
          <DrawerButton text="Open drawer" onClick={() => setOpen(!open)} />
        </div>
        <Drawer open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};
