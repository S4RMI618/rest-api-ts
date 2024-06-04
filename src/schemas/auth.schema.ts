import { z } from "zod";

export const loginSchema = z.object({
  body: z.object({
    username: z
      .string()
      .min(1, "Username is required")
      .email({ message: "Write a correct email" }),
    password: z.string().min(8, "Password is required, al least 8 characters"),
  }),
});

export const registerSchema = z.object({
  body: z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z
      .string()
      .min(1, "Email is required")
      .email({ message: "Write a correct email" }),
    password: z.string().min(8, "Password is required, al least 8 characters"),
  })
})
