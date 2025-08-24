import { type NextRequest, NextResponse } from "next/server"
import { readFile } from "fs/promises"
import { join } from "path"

export async function GET(request: NextRequest) {
  try {
    const imagePath = join(process.cwd(), "public", "oso-investigador.webp")
    const imageBuffer = await readFile(imagePath)

    return new NextResponse(imageBuffer, {
      status: 200,
      headers: {
        "Content-Type": "image/webp",
        "Content-Length": imageBuffer.length.toString(),
        "Cache-Control": "public, max-age=31536000, immutable",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    })
  } catch (error) {
    console.error("Error serving image:", error)
    return new NextResponse("Image not found", { status: 404 })
  }
}
