interface ItemDetailProps {
  name: string;
  info: string | number;
}

export default function ItemDetail({ name, info }: ItemDetailProps) {
  return (
    <div className="flex justify-between border-zinc-500/80 py-2">
      <div className="text-sm font-medium text-white">{name}</div>
      <div className="text-sm text-gray-300">{info}</div>
    </div>
  );
}
