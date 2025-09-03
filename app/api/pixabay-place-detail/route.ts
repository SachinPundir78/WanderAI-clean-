import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: NextRequest) {
  try {
    const { placeName } = await req.json();
    
    if (!placeName) {
      return NextResponse.json({ error: "Place name is required" }, { status: 400 });
    }

    const PIXABAY_API_KEY = process.env.PIXABAY_API_KEY;
    
    if (!PIXABAY_API_KEY) {
      console.error("PIXABAY_API_KEY is not configured");
      return NextResponse.json({ error: "API key not configured" }, { status: 500 });
    }

    // Add more specific search terms and filters for better hotel/place results
    const searchQuery = `${placeName} hotel resort lodge`;
    const BASE_URL = `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${encodeURIComponent(searchQuery)}&image_type=photo&per_page=10&category=places&min_width=640&min_height=480`;

    console.log("Searching Pixabay for:", searchQuery);

    const result = await axios.get(BASE_URL);

    if (!result.data || !result.data.hits) {
      return NextResponse.json([]);
    }

    // Return only relevant fields
    const images = result.data.hits.map((hit: any) => ({
      url: hit.webformatURL,
      tags: hit.tags,
      largeImageURL: hit.largeImageURL,
      previewURL: hit.previewURL, // Fallback option
    }));

    console.log(`Found ${images.length} images for: ${placeName}`);
    return NextResponse.json(images);

  } catch (error: unknown) {
    console.error("Pixabay API Error:", error);
    
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 429) {
        return NextResponse.json({ error: "Rate limit exceeded" }, { status: 429 });
      }
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: "Unknown error occurred" }, { status: 500 });
  }
}