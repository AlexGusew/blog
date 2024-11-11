import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");

  if (!name || !email) {
    return NextResponse.json(
      { message: "Name and email are required" },
      { status: 400 }
    );
  }

  try {
    const supabase = await createClient();

    await supabase.from(process.env.USERS_TABLE).insert({ name, email });

    return NextResponse.json(
      { message: "Subscription successful", name },
      { status: 200 }
    );
  } catch (error) {
    console.error("Subscription error:", error);
    return NextResponse.json(
      { message: "An error occurred while subscribing" },
      { status: 500 }
    );
  }
}
