export interface ServerProps {
  id: number;
  nameServer: string;
  currentOnline: number;
  maxOnline: number;
  flag: string;
  gradient: {
    from: string;
    to: string;
  };
  ip: string;
  isStatus: boolean; // true or false
}