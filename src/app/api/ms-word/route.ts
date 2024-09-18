import htmlToDocx from "html-to-docx";

export async function POST(req: Request) {
  const body = await req.json();
  const buffer = await htmlToDocx(body.html);

  return new Response(buffer, {
    headers: {
      "Content-Type":
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "Content-Disposition": `attachment; filename=${body.filename}.docx`,
    },
  });
}
