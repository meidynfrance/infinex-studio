import { z } from "zod";

export const contactSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().min(1).email(),
  phone: z.string().min(1),
  company: z.string().min(1),
  jobTitle: z.string().min(1),
  revenue: z.string().min(1),
  service: z.array(z.string()).min(1),
  needs: z.string().min(10),
  source: z.string().min(1),
});

export type ContactFormData = z.infer<typeof contactSchema>;
