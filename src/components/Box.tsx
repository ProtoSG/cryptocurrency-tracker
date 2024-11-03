import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function Box({ children, className }: Props) {
  return (
    <div className={
      clsx(
        "bg-bg rounded-3xl px-8 py-6",
        className
      )
    }>
      {children}
    </div>
  )
}
