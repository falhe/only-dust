"use client";

import { Drawer } from "@/components/drawer";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="drawer w-auto">
        <input
          id="my-drawer"
          type="checkbox"
          className="drawer-toggle"
          checked={open}
        />
        <div className="drawer-content">
          {/* Page content here */}
          <button
            className="btn btn-primary drawer-button"
            onClick={() => setOpen(!open)}
          >
            Open drawer
          </button>
        </div>
        <Drawer open={open} setOpen={setOpen} />
      </div>
    </main>
  );
}
