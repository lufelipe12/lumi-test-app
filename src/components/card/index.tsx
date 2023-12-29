"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import { MdPageview } from "react-icons/md";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { ApiResponse } from "@/interfaces/api-response.interface";

interface DataGridProps {
  invoices?: ApiResponse;
}

export default function InvoicesTable({ invoices }: DataGridProps) {
  const columns: GridColDef[] = [
    {
      field: "clientNumber",
      headerName: "n. do cliente",
      width: 190,
      headerAlign: "left",
      headerClassName: "styledHeader",
      align: "left",
    },
    {
      field: "year",
      headerName: "mês/ano",
      editable: true,
      width: 190,
      headerAlign: "left",
      headerClassName: "styledHeader",
      align: "left",
    },
    {
      field: "contribution",
      headerName: "contribuição(kWh)",
      editable: true,
      width: 190,
      headerAlign: "left",
      headerClassName: "styledHeader",
      align: "left",
    },
    {
      field: "electricity",
      headerName: "energia-elétrica(kWh)",
      type: "number",
      editable: true,
      width: 190,
      headerAlign: "left",
      headerClassName: "styledHeader",
      align: "left",
    },
    {
      field: "total",
      headerName: "total(R$)",
      width: 190,
      headerAlign: "left",
      headerClassName: "styledHeader",
      align: "left",
    },
    {
      field: "billUrl",
      headerName: "invoice",
      width: 190,
      editable: false,
      headerClassName: "styledHeader",
      renderCell: (params) => (
        <a href={params.value} target="_blank" rel="noopener noreferrer">
          <MdPageview />
        </a>
      ),
    },
  ];

  const rows = invoices
    ? invoices?.data.map((invoice) => {
        return {
          id: invoice.id,
          clientNumber: invoice.clientNumber,
          year: `${invoice.month}/${invoice.year}`,
          contribution: invoice.contribution,
          electricity: invoice.electricity,
          total: invoice.total,
          billUrl: invoice.billUrl,
        };
      })
    : [];

  return (
    <Box
      sx={{
        width: "80%",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
