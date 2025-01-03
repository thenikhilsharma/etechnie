import dbConnect from "@/lib/dbConnect";
import Card from "@/model/Card";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();
  const courses = await Card.find();
  return NextResponse.json({ courses });
}