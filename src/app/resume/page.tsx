import { redirect } from "next/navigation";
import { PERSONAL_INFO } from "@/lib/constants";

export default function ResumePage() {
  redirect(PERSONAL_INFO.cv.href);
}
