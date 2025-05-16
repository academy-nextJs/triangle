'use client'

import { useState } from "react";
import { Drawer } from "vaul";
import FilterForm from "./Filter";

export default function FilterDrawerClient() {
  const [open, setOpen] = useState(false);

  const closeDrawer = () => setOpen(false);

  return (
    <Drawer.Root open={open} onOpenChange={setOpen}>
      <Drawer.Trigger asChild>
        <button
          onClick={() => setOpen(true)}
          className="w-20 h-12 rounded-2xl bg-[#586CFF]"
        >
          <span className="font-semibold text-base text-[#FFFFFF] font-[IranYekanRegular]">
            فیلتر ها
          </span>
        </button>
      </Drawer.Trigger>

      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40 z-40" />
        <Drawer.Content className="bg-white rounded-t-[10px] fixed bottom-0 left-0 right-0 max-h-[80%] z-50 p-4">
         
          <FilterForm onSubmit={closeDrawer} />
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}