import { NextResponse } from "next/server";

export async function GET() {
 

  const x =  NextResponse.json({ error: 'I am req 1 data' }, { status: 200 })
    
  x.cookies.set("my-cookie-1", "hello world");

  return x;

}
