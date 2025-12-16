import { StaticImageData } from "next/image";

export interface ServiceItem {
  id: string;
  icon: StaticImageData;
  title: string;
  desc: string;
}

