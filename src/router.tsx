import type { ReactElement } from "react";
import { Monitoring, Donate } from "./components/shared/pages";

interface RouterProps {
  id: number;
  path: string;
  element: ReactElement;
}

export const useRouter = () => {
  return [
    {
      id: 1,
      path: "monitoring",
      element: <Monitoring />
    },
    {
      id: 2,
      path: "donate",
      element: <Donate />
    }
  ];
};