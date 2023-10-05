import { OurFileRouter } from "@/app/api/uploadthing/code";
import { generateComponents } from "@uploadthing/react";

export const { UploadButton, UploadDropzone, Uploader } =
  generateComponents<OurFileRouter>();
