import jsPDF from "jspdf";

export function createPdf(data) {
  const { owner, client, price } = data;
  console.log(owner, client, price);
  const pdf = new jsPDF();

  // Add content to the PDF
  pdf.text(`${owner} ${client} ${price}  `, 10, 10);

  const today = new Date().toDateString();
  pdf.save(`Presupuesto ${owner} ${today}`);
}