import * as z from "zod";
import type { NextApiRequest, NextApiResponse } from "next";
import { $ZodIssue } from "zod/v4/core";

interface CreateRoomTypeRequest {
  name: string;
}

interface CreateRoomTypeResponse {
  id: string;
  name: string;
}

interface ErrorResponse {
  message: string;
  errors?: $ZodIssue[];
}

const createRoomTypeRequestSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name too long"),
});

const createRoomType = async (
  data: CreateRoomTypeRequest,
): Promise<CreateRoomTypeResponse> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return { id: "1", name: data.name };
};

export default async function createRoomTypeHandler(
  req: NextApiRequest,
  res: NextApiResponse<CreateRoomTypeResponse | ErrorResponse>,
) {
  const { body } = req;

  try {
    const validatedData = createRoomTypeRequestSchema.parse(body);

    const newRoomType = await createRoomType(validatedData);

    res.status(201).json(newRoomType);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        message: "Validation error",
        errors: error.issues,
      });
    }

    res.status(500).json({
      message: "Internal server error",
    });
  }
}
