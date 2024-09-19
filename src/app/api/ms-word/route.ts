import htmlToDocx from 'html-to-docx';
const { JSDOM } = require('jsdom');

export async function POST(req: Request) {
  const body = await req.json();

  const dom = new JSDOM(body.html);
  const correctedHtml = dom.window.document.documentElement.outerHTML;

  const buffer = await htmlToDocx(correctedHtml);

  return new Response(buffer, {
    headers: {
      'Content-Type':
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'Content-Disposition': `attachment; filename=${body.filename}.docx`,
    },
  });
}
