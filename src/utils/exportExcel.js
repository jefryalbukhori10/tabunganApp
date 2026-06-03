import * as XLSX from "xlsx";

export function exportSantri(data) {
  const worksheet = XLSX.utils.json_to_sheet(data);

  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(workbook, worksheet, "Santri");

  XLSX.writeFile(workbook, "data-santri.xlsx");
}
