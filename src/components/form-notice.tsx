import { Info } from "lucide-react";
import { COMPANY } from "@/lib/company";

export function FormNotice() {
  return (
    <div className="flex items-start gap-3 rounded-md border border-secondary/30 bg-secondary/5 p-3 text-xs leading-relaxed text-foreground/85">
      <Info className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
      <span>
        Online submissions are not yet connected. When you submit, we will open
        your email client with your details pre-filled so you can send it
        directly to{" "}
        <a href={`mailto:${COMPANY.email}`} className="font-semibold text-secondary underline">
          {COMPANY.email}
        </a>
        .
      </span>
    </div>
  );
}