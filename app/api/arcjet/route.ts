import { aj } from "@/lib/arcjet";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const userId = "user123";
  const decision = await aj.protect(req, { userId, requested: 5 });

  if (decision.isDenied()) {
    return NextResponse.json(
      { error: "Too Many Requests", reason: decision.reason },
      { status: 429 }
    );
  }

  return NextResponse.json({ message: "Hello world" });
}
