import { NextResponse } from "next/server";
import { authToken } from "../../../constant/general";

export async function GET(request) {
  const apiUrl =
    "https://wmf-application-966973465264.us-central1.run.app/wmf-backend/scans";

  try {
    const res = await fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching data" },
      { status: 500 },
    );
  }
}
