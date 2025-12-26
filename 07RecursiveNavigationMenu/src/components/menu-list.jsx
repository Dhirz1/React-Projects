import MenuItem from "./menu-items";

export default function MenuList({ list = [] }) {
  return (
    <ul className="pl-2">
      {list.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </ul>
  );
}
