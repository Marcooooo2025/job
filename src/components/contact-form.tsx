import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
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
import { FormNotice } from "./form-notice";
import { buildMailto } from "@/lib/mailto";

const schema = z.object({
  name: z.string().trim().min(2, "Required").max(80),
  email: z.string().trim().email("Valid email required").max(160),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  subject: z.string().trim().min(2, "Required").max(120),
  message: z.string().trim().min(10, "Tell us a little more").max(2000),
});
type FormValues = z.infer<typeof schema>;

// TODO: wire to Lovable Cloud / email notifications.
export function ContactForm() {
  const [done, setDone] = useState(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "", subject: "", message: "" },
  });

  const onSubmit = (data: FormValues) => {
    const url = buildMailto({
      subject: `Website enquiry: ${data.subject}`,
      fields: {
        Name: data.name,
        Email: data.email,
        Phone: data.phone || "—",
        Subject: data.subject,
        Message: data.message,
      },
    });
    window.location.href = url;
    setDone(true);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <FormField control={form.control} name="name" render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl><Input placeholder="Your name" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField control={form.control} name="email" render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl><Input type="email" placeholder="you@example.com" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField control={form.control} name="phone" render={({ field }) => (
            <FormItem>
              <FormLabel>Phone (optional)</FormLabel>
              <FormControl><Input type="tel" placeholder="07700 900 000" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField control={form.control} name="subject" render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl><Input placeholder="What's it about?" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField control={form.control} name="message" render={({ field }) => (
            <FormItem className="sm:col-span-2">
              <FormLabel>Message</FormLabel>
              <FormControl><Textarea rows={5} placeholder="How can we help?" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />
        </div>
        <FormNotice />
        <Button type="submit" size="lg" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
          Send Message
        </Button>
        {done && (
          <p className="text-sm text-success">Your email client should have opened. If not, please email us directly.</p>
        )}
      </form>
    </Form>
  );
}