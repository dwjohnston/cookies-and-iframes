import { NextResponse } from "next/server";

export async function GET() {
 

  const x =  NextResponse.json({ error: 'I am req 3 data' }, { status: 200 })
    
  x.cookies.set("my-cookie-3", "hello world", {
    "secure": true,
  });

  return x;

}
