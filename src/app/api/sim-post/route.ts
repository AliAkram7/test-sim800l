import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.text(); // Get the raw text body
  const parsedBody = new URLSearchParams(body);
  const formData: Record<string, string> = {}; // Define formData as an object with string keys and values

  for (const [key, value] of parsedBody.entries()) {
    formData[key] = value;
  }

  // Now you can access the form data
  console.log(formData);

  return NextResponse.json(
    { message: "success" },
    {
      status: 200,
    }
  );
}
