"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { Car, Gauge, Layers, Zap, CheckCircle2 } from "lucide-react";
import { CarSpecifications } from "@/data/cars";

export default function SpecificationTabs({ spec }: { spec: CarSpecifications }) {
  const tabs = [
    {
      id: "mesin", label: "Mesin", icon: <Zap size={15} />,
      content: (
        <div className="space-y-3">
          <Row label="Mesin" value={spec.mesin} />
          <Row label="Transmisi" value={spec.transmisi} />
          <Row label="Konsumsi BBM" value={spec.konsumsiBBM} />
        </div>
      ),
    },
    {
      id: "dimensi", label: "Dimensi", icon: <Layers size={15} />,
      content: <Row label="Dimensi" value={spec.dimensi} />,
    },
    {
      id: "fitur", label: "Fitur", icon: <CheckCircle2 size={15} />,
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {spec.fitur.map((f) => (
            <div key={f} className="flex items-center gap-2 text-sm text-gray-700">
              <CheckCircle2 size={14} className="text-green-500 shrink-0" />
              {f}
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <Tabs.Root defaultValue="mesin">
      <Tabs.List className="flex gap-1 bg-suzuki-gray-light rounded-xl p-1 mb-5">
        {tabs.map((t) => (
          <Tabs.Trigger
            key={t.id} value={t.id}
            className="flex-1 flex items-center justify-center gap-1.5 text-sm font-semibold py-2.5 rounded-lg transition-all data-[state=active]:bg-white data-[state=active]:text-suzuki-blue data-[state=active]:shadow-sm text-gray-500"
          >
            {t.icon}{t.label}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {tabs.map((t) => (
        <Tabs.Content key={t.id} value={t.id} className="bg-white rounded-xl border border-gray-100 p-5">
          {t.content}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 py-2 border-b border-gray-50 last:border-0 text-sm">
      <span className="text-gray-500 font-medium">{label}</span>
      <span className="text-gray-900 font-semibold text-right">{value}</span>
    </div>
  );
}
