import { z } from "zod";

export const contactSchema = z.object({
  firstName: z.string().min(1).max(50),
  lastName: z.string().min(1).max(50),
  email: z.string().min(1).max(254).email(),
  phone: z.string().min(1).max(20),
  company: z.string().min(1).max(100),
  jobTitle: z.string().min(1).max(100),
  revenue: z.string().min(1).max(20),
  service: z.array(z.string().max(50)).min(1).max(5),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const ugcFormationSchema = z.object({
  firstName: z.string().min(1).max(50),
  lastName: z.string().min(1).max(50),
  email: z.string().min(1).max(254).email(),
  phone: z.string().min(1).max(20),
  company: z.string().min(1).max(100),
  participants: z.string().min(1).max(10),
});

export type UgcFormationData = z.infer<typeof ugcFormationSchema>;
