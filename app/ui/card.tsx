export default function Card({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[#fdfdfe] rounded-lg shadow-card p-4">{children}</div>
  );
}
