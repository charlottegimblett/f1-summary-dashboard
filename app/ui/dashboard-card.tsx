import { williamsBold } from "@/app/fonts/fonts";

export function DashboardCard({
  summary,
  buttonTitle,
  href,
}: {
  summary: string;
  buttonTitle: string;
  href: string;
}) {
  return (
    <div className="justify-self-center bg-[#fdfdfe] rounded-lg shadow-card p-4 w-96 flex flex-col gap-8 blue">
      <span>{summary}</span>
      <a
        className={`${williamsBold.className} antialiased bg-primary-blue text-white w-full p-4 hover:bg-bright-blue text-center`}
        href={href}
      >
        {buttonTitle}
      </a>
    </div>
  );
}
