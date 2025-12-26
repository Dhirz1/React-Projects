import MenuList from "./menu-list";

export default function TreeView({ menus = [] }) {
  return (
    <div className="w-72 bg-slate-900 text-slate-100 p-4 rounded-xl shadow-lg">
      <h2 className="text-lg font-semibold mb-3">Menu</h2>
      <MenuList list={menus} />
    </div>
  );
}
