import { IconType } from "react-icons";

export type FloatingIcon = {
  id: number;
  Icon: IconType;
  color: string;
  top: number;
  left: number;
  size: number;
  duration: number;
  driftDuration: number;
  delay: number;
  opacity: number;
};
