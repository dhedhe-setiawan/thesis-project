export const print = (ref, title = 'Struk Pembelian', subtitle) => {
  const printWindow = window.open('', '_blank');
  const content = ref.current.outerHTML;

  printWindow.document.write(`
      <html>
      <head>
        <title>${title}</title>
        <style>
          table { width: 100%; border-collapse: collapse; }
          th, td { border: 1px solid black; padding: 8px; text-align: left; }
          th { background-color: #f2f2f2; }
        </style>
      </head>
      <body style="text-align: center;">
        <h2 style="text-align: center;">${title}</h2>
        <p style='text-align: center;'>${subtitle}</p>
        ${content}
        <script>
          window.onload = function() { window.print(); window.close(); };
        </script>
      </body>
      </html>
    `);

  printWindow.document.close();
};
