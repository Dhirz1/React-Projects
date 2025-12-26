import { useState } from "react";
import MenuList from "./menu-list";

export default function MenuItem({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <li className="my-1">
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 cursor-pointer rounded-md px-2 py-1
                   hover:bg-slate-700 transition-colors"
      >
        {item.children && (
          <span className="text-xs text-slate-400">
            {open ? "▼" : "▶"}
          </span>
        )}
        <span className="text-slate-200">{item.label}</span>
      </div>

      {item.children && open && (
        <div className="ml-4 pl-3 border-l border-dashed border-slate-600">
          <MenuList list={item.children} />
        </div>
      )}
    </li>
  );
}
