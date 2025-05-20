
'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

interface Item {
  title: string;
  content: string;
}

const items: Item[] = [
  {
    title: 'Sobre el servicio',
    content:
      'Para contratar nuestros servicios, puede realizarlo en forma presencial en las oficinas comerciales de la Cooperativa, o bien, consultar via email los planes y características en ventas@interbourg.com.ar',
  },
  {
    title: '¿Cómo me adhiero?',
    content:
      'Requisitos para adherirse al sistema de financiación colectiva:\n• Nombre y apellido\n• Número de documento\n• Fecha de nacimiento del titular y de todos los integrantes del grupo familiar\n\nCómo adherirse:\nEl interesado debe presentarse personalmente en las oficinas de la Cooperativa para realizar el trámite.\nHorario de atención: lunes a viernes de 8:30 a 16:00 hs.',
  },
  {
    title: 'Tarifas',
    content:
      'Para contratar nuestros servicios, puede realizarlo en forma presencial en las oficinas comerciales de la Cooperativa, o bien, consultar via email los planes y características en ventas@interbourg.com.ar',
  },
];

export default function SepeliosAccordion() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <Accordion.Root
      type="single"
      collapsible
      value={openItem ?? ''}
      onValueChange={(value) => setOpenItem(value)}
      className="w-full space-y-4"
    >
      {items.map((item, index) => {
        const isOpen = openItem === item.title;

        return (
          <Accordion.Item key={index} value={item.title} className="w-full">
            <Accordion.Header>
              <Accordion.Trigger className="flex justify-between items-center w-full text-2xl font-medium text-[#222427] hover:opacity-90 py-2">
                {item.title}
                {isOpen ? (
                  <Minus className="h-6 w-6 text-green-600" />
                ) : (
                  <Plus className="h-6 w-6 text-green-600" />
                )}
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="text-slate-700 text-lg font-normal pt-2 whitespace-pre-line">
              {item.content}
            </Accordion.Content>
          </Accordion.Item>
        );
      })}
    </Accordion.Root>
  );
}
