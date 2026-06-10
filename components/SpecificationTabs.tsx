"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { Layers, Zap, CheckCircle2 } from "lucide-react";
import { CarSpecifications } from "@/data/cars";

export default function SpecificationTabs({ spec }: { spec: CarSpecifications }) {
  const tabs = [
    {
      id: "mesin",
      label: "Mesin",
      icon: <Zap size={15} />,
      content: (
        <div className="space-y-3">
          <Row label="Mesin" value={spec.mesin} />
          <Row label="Transmisi" value={spec.transmisi} />
          <Row label="Konsumsi BBM" value={spec.konsumsiBBM} />
        </div>
      ),
    },
    {
      id: "dimensi",
      label: "Dimensi",
      icon: <Layers size={15} />,
      content: <Row label="Dimensi" value={spec.dimensi} />,
    },
    {
      id: "fitur",
      label: "Fitur",
      icon: <CheckCircle2 size={15} />,
      content: (
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {spec.fitur.map((f) => (
            <div key={f} className="motion-card flex items-center gap-2 border border-gray-100 bg-gray-50 px-3 py-2 text-sm font-semibold text-gray-700">
              <CheckCircle2 size={14} className="shrink-0 text-red-600" />
              {f}
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <Tabs.Root defaultValue="mesin" className="w-full">
      <Tabs.List className="motion-pop mb-5 grid grid-cols-3 gap-2 border border-gray-200 bg-white p-2 shadow-card">
        {tabs.map((t) => (
          <Tabs.Trigger
            key={t.id}
            value={t.id}
            className="flex items-center justify-center gap-1.5 border border-transparent px-3 py-3 text-[10px] font-black uppercase tracking-[0.16em] text-gray-400 transition-all data-[state=active]:border-red-600 data-[state=active]:bg-red-600 data-[state=active]:text-white sm:text-xs"
          >
            {t.icon}
            {t.label}
          </Tabs.Trigger>
        ))}
      </Tabs.List>

      {tabs.map((t) => (
        <Tabs.Content key={t.id} value={t.id} className="red-edge motion-card border border-gray-200 bg-white p-5 shadow-card">
          {t.content}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-gray-100 py-3 text-sm last:border-0">
      <span className="font-black uppercase tracking-[0.12em] text-gray-400">{label}</span>
      <span className="max-w-[62%] text-right font-bold text-gray-950">{value}</span>
    </div>
  );
}
