// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

interface UploadResponse {
  success: boolean;
  message: string;
  filename?: string;
  url?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UploadResponse>,
) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  // Simulate image upload delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const timestamp = Date.now();
  const filename = `image-${timestamp}`;

  res.status(200).json({
    success: true,
    message: "Image uploaded successfully",
    filename,
    url: `https://picsum.photos/200`,
  });
}
