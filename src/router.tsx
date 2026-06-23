import { Monitoring, Donate } from "./components/shared/pages";

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