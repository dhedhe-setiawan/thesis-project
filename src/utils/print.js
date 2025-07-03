export const print = (ref) => {
  const printWindow = window.open('', '_blank');
  const content = ref.current.outerHTML;

  printWindow.document.write(`
      <html>
      <head>
        <title>Cetak Struk</title>
        <style>
          table { width: 100%; border-collapse: collapse; }
          th, td { border: 1px solid black; padding: 8px; text-align: left; }
          th { background-color: #f2f2f2; }
        </style>
      </head>
      <body style="text-align: center;">
        <h2 style="text-align: center;">Struk Pembelian</h2>
        ${content}
        <script>
          window.onload = function() { window.print(); window.close(); };
        </script>
      </body>
      </html>
    `);

  printWindow.document.close();
};
