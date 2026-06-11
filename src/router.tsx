import type { ReactElement } from "react";
import { Monitoring } from "./components/shared/pages";

interface RouterProps {
  id: number;
  path: string;
  element: ReactElement;
}

export const useRouter = (): RouterProps[] => {
  return [
    {
      id: 1,
      path: "monitoring",
      element: <Monitoring/>
    }
  ]
}