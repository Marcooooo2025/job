import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormNotice } from "./form-notice";
import { buildMailto } from "@/lib/mailto";

const schema = z.object({
  name: z.string().trim().min(2, "Required").max(80),
  phone: z.string().trim().min(6, "Required").max(30),
  email: z.string().trim().email("Valid email required").max(160),
  location: z.string().trim().min(2, "Required").max(80),
  experience: z.string().trim().min(10, "Tell us a little more").max(2000),
  cvName: z.string().trim().max(160).optional().or(z.literal("")),
  position: z.string().min(1, "Please choose a role"),
  availability: z.string().min(1, "Please choose availability"),
});
type FormValues = z.infer<typeof schema>;

const STEPS = ["Personal", "Experience", "Role & Availability", "Review"];

// TODO: wire to Lovable Cloud / email notifications + CV upload storage.
export function ApplicationForm() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onTouched",
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      location: "",
      experience: "",
      cvName: "",
      position: "",
      availability: "",
    },
  });

  const next = async () => {
    const fields: Record<number, (keyof FormValues)[]> = {
      0: ["name", "phone", "email", "location"],
      1: ["experience"],
      2: ["position", "availability"],
    };
    const ok = await form.trigger(fields[step] ?? []);
    if (ok) setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  const onSubmit = (data: FormValues) => {
    const url = buildMailto({
      subject: `Job application from ${data.name}`,
      fields: {
        Name: data.name,
        Phone: data.phone,
        Email: data.email,
        Location: data.location,
        "Desired Position": data.position,
        Availability: data.availability,
        "CV File": data.cvName || "(please attach in this email)",
        Experience: data.experience,
      },
    });
    window.location.href = url;
    setDone(true);
  };

  if (done) {
    return (
      <div className="rounded-xl border bg-card p-8 text-center shadow-sm">
        <CheckCircle2 className="mx-auto h-12 w-12 text-success" />
        <h2 className="mt-4 text-2xl font-bold text-foreground">Almost there</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Your email client should have opened with your application pre-filled.
          Please attach your CV and press send. We will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <span>Step {step + 1} of {STEPS.length}</span>
            <span>{STEPS[step]}</span>
          </div>
          <Progress value={((step + 1) / STEPS.length) * 100} className="mt-2" />
        </div>

        {step === 0 && (
          <div className="grid gap-4 sm:grid-cols-2">
            <FormField control={form.control} name="name" render={({ field }) => (
              <FormItem><FormLabel>Full Name</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
            )} />
            <FormField control={form.control} name="phone" render={({ field }) => (
              <FormItem><FormLabel>Phone</FormLabel><FormControl><Input type="tel" {...field} /></FormControl><FormMessage /></FormItem>
            )} />
            <FormField control={form.control} name="email" render={({ field }) => (
              <FormItem><FormLabel>Email</FormLabel><FormControl><Input type="email" {...field} /></FormControl><FormMessage /></FormItem>
            )} />
            <FormField control={form.control} name="location" render={({ field }) => (
              <FormItem><FormLabel>Location</FormLabel><FormControl><Input placeholder="e.g. London" {...field} /></FormControl><FormMessage /></FormItem>
            )} />
          </div>
        )}

        {step === 1 && (
          <div className="space-y-4">
            <FormField control={form.control} name="experience" render={({ field }) => (
              <FormItem>
                <FormLabel>Work Experience</FormLabel>
                <FormControl><Textarea rows={6} placeholder="Recent roles, employers, dates and key responsibilities." {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="cvName" render={({ field }) => (
              <FormItem>
                <FormLabel>CV (optional file)</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => field.onChange(e.target.files?.[0]?.name ?? "")}
                  />
                </FormControl>
                <p className="text-xs text-muted-foreground">
                  File upload storage is not yet connected — you will be asked to attach your CV in your email client at the final step.
                </p>
                <FormMessage />
              </FormItem>
            )} />
          </div>
        )}

        {step === 2 && (
          <div className="grid gap-4 sm:grid-cols-2">
            <FormField control={form.control} name="position" render={({ field }) => (
              <FormItem>
                <FormLabel>Desired Position</FormLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                  <FormControl><SelectTrigger><SelectValue placeholder="Select a role" /></SelectTrigger></FormControl>
                  <SelectContent>
                    <SelectItem value="Healthcare Assistant">Healthcare Assistant</SelectItem>
                    <SelectItem value="Security Guard">Security Guard</SelectItem>
                    <SelectItem value="Care Assistant">Care Assistant</SelectItem>
                    <SelectItem value="Warehouse Operative">Warehouse Operative</SelectItem>
                    <SelectItem value="Hospitality">Hospitality</SelectItem>
                    <SelectItem value="Cleaner">Cleaner</SelectItem>
                    <SelectItem value="Administrator">Administrator</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="availability" render={({ field }) => (
              <FormItem>
                <FormLabel>Availability</FormLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                  <FormControl><SelectTrigger><SelectValue placeholder="Select availability" /></SelectTrigger></FormControl>
                  <SelectContent>
                    <SelectItem value="Immediately">Immediately</SelectItem>
                    <SelectItem value="Within 1 week">Within 1 week</SelectItem>
                    <SelectItem value="Within 2 weeks">Within 2 weeks</SelectItem>
                    <SelectItem value="1 month+">1 month+</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )} />
          </div>
        )}

        {step === 3 && (
          <div className="space-y-3 rounded-lg border bg-muted/50 p-4 text-sm">
            {Object.entries(form.getValues()).map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4">
                <dt className="font-medium capitalize text-muted-foreground">{k}</dt>
                <dd className="max-w-[60%] text-right text-foreground">{v as string || "—"}</dd>
              </div>
            ))}
            <FormNotice />
          </div>
        )}

        <div className="flex justify-between gap-2">
          <Button type="button" variant="outline" onClick={prev} disabled={step === 0}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Button>
          {step < STEPS.length - 1 ? (
            <Button type="button" onClick={next} className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              Next <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button type="submit" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              Submit Application
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
}