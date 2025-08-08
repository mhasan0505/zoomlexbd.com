import ConnectDB from "@/lib/DatabaseConnection";
import { NextResponse } from "next/server";

export async function GET() {
  await ConnectDB();
  return NextResponse.json({
    success: true,
    message: "Connection established successfully",
  });
}
