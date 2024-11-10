import { NextResponse } from "next/server";
import { authToken } from "../../../../../constant/general";

export async function GET(request, { params }) {
  const { id, itemId } = params;
  const apiUrl = `https://wmf-application-966973465264.us-central1.run.app/wmf-backend/event/${id}/item/${itemId}/image/front?base64=true`;

  try {
    const res = await fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    return res;
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching data" },
      { status: 500 },
    );
  }
}
