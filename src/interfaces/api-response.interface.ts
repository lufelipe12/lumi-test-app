export interface ApiResponse {
  currentPage: number;
  pageSize: number;
  quantity: number;
  data: {
    id: number;
    clientNumber: string;
    month: string;
    year: number;
    electricity: number;
    electricityValue: string;
    sceee: number;
    sceeeValue: string;
    compensatedEnergy: number;
    compensatedEnergyValue: string;
    contribution: string;
    total: string;
    billUrl: string;
  }[];
}
