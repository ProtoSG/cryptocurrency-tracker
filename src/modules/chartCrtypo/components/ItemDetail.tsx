interface ItemDetalProps {
  name: String,
  info: String | number
}

export default function ItemDetail({ name, info }: ItemDetalProps) {
  return (
    <div className="flex gap-2 font-semibold">
      <p>{name}</p>
      <span>{info}</span>
    </div>
  )
}


