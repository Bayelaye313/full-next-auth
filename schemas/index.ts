import * as z from 'zod';

export const LoginSchema = z.object({
  email: z.string()
    .min(1, { message: "L'email est requis" }) // Champ obligatoire
    .email({ message: "L'email n'est pas valide" }), // Format email valide

  password: z.string()
    .min(1, { message: "Le mot de passe est requis" }) // Champ obligatoire
    .min(8, { message: "Le mot de passe doit contenir au moins 8 caractères" }) // Longueur minimale
    .regex(/[A-Z]/, { message: "Le mot de passe doit contenir au moins une majuscule" }) // Au moins une majuscule
    .regex(/[0-9]/, { message: "Le mot de passe doit contenir au moins un chiffre" }), // Au moins un chiffre
});

export const RegisterSchema = z.object({
  email: z.string()
    .min(1, { message: "L'email est requis" }) // Champ obligatoire
    .email({ message: "L'email n'est pas valide" }), // Format email valide

  password: z.string()
    .min(1, { message: "Le mot de passe est requis" }) // Champ obligatoire
    .min(8, { message: "Le mot de passe doit contenir au moins 8 caractères" }) // Longueur minimale
    .regex(/[A-Z]/, { message: "Le mot de passe doit contenir au moins une majuscule" }) // Au moins une majuscule
    .regex(/[0-9]/, { message: "Le mot de passe doit contenir au moins un chiffre" }), // Au moins un chiffre
  name: z.string()
    .min(1, { message: "Le nom est requis" }) // Champ obligatoire

});