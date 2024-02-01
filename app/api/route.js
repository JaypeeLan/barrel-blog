import { revalidatePath } from "next/cache";

export default function handler(req, res) {
  revalidatePath("/blog");
  res.status(200).json({ message: "Data revalidation triggered" });
}
