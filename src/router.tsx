import { Monitoring, Donate, About } from "./components/shared/pages";

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
    },
    {
      id: 3,
      path: "about",
      element: <About />
    }
  ];
};