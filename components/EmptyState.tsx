import type { ReactNode } from "react";
import { SearchX } from "lucide-react";

interface EmptyStateProps {
  title: string;
  description: string;
  action?: ReactNode;
}

export default function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div className="red-edge motion-pop border border-gray-200 bg-white px-6 py-16 text-center shadow-card md:px-10 md:py-20">
      <div className="motion-icon-float mx-auto mb-6 grid h-14 w-14 place-items-center border border-red-100 bg-red-50 text-red-600">
        <SearchX size={24} strokeWidth={1.8} />
      </div>
      <h3 className="text-xl font-black uppercase tracking-tight text-gray-950 md:text-2xl">{title}</h3>
      <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-gray-500">{description}</p>
      {action ? <div className="mt-7 flex justify-center">{action}</div> : null}
    </div>
  );
}
