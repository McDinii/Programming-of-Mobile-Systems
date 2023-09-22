const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Формирование HTML-страницы с информацией о запросе
    const html = `
    <html>
      <head>
        <title>Request Information</title>
      </head>
      <body>
        <h1>Request Information</h1>
        <p><strong>Method:</strong> ${req.method}</p>
        <p><strong>URI:</strong> ${req.url}</p>
        <p><strong>HTTP Version:</strong> ${req.httpVersion}</p>
        <h2>Headers:</h2>
        <ul>
          ${Object.entries(req.headers)
        .map(([key, value]) => `<li>${key}: ${value}</li>`)
        .join('')}
        </ul>
        <h2>Body:</h2>
        <p>${req.body}</p>
      </body>
    </html>
  `;

    res.write(html);
    res.end();
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
