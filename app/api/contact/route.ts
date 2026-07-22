// IMPORTANT : Créer un compte sur resend.com
// Aller dans API Keys → Create API Key
// Remplacer RESEND_API_KEY dans Vercel :
// Settings → Environment Variables → Add
// RESEND_API_KEY = ta_clé_resend
// Puis redéployer depuis Vercel dashboard
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

/** Échappe les entrées utilisateur avant injection dans le HTML de l'email. */
function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: Request) {
  const body = await req.json();
  const { prenom, nom, email, telephone, niche, statut, departement, message } =
    body;

  // Champs obligatoires côté serveur (défense en profondeur)
  if (!prenom || !nom || !email || !telephone || !niche || !statut || !departement) {
    return NextResponse.json({ error: "Champs manquants" }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY manquante");
    return NextResponse.json(
      { error: "Service email non configuré" },
      { status: 500 }
    );
  }

  const p = escapeHtml(prenom);
  const n = escapeHtml(nom);
  const e = escapeHtml(email);
  const t = escapeHtml(telephone);
  const ni = escapeHtml(niche);
  const s = escapeHtml(statut);
  const d = escapeHtml(departement);
  const m = message ? escapeHtml(message) : "—";

  try {
    await resend.emails.send({
      from: "KUBEX Contact <onboarding@resend.dev>",
      to: "samirmtkd.contact@gmail.com",
      replyTo: email,
      subject: `Nouvelle demande d'audit — ${p} ${n} (${ni})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #00B4FF, #003F5C); padding: 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px;">
              Nouvelle demande d'audit KUBEX
            </h1>
          </div>
          <div style="background: #f8fafc; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e2e8f0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #64748b; width: 140px;">Prénom</td><td style="padding: 8px 0; font-weight: 600;">${p}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748b;">Nom</td><td style="padding: 8px 0; font-weight: 600;">${n}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748b;">Email</td><td style="padding: 8px 0;"><a href="mailto:${e}" style="color: #00B4FF;">${e}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #64748b;">Téléphone</td><td style="padding: 8px 0; font-weight: 600;">${t}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748b;">Niche</td><td style="padding: 8px 0;"><span style="background: #00B4FF; color: white; padding: 2px 10px; border-radius: 20px; font-size: 13px;">${ni}</span></td></tr>
              <tr><td style="padding: 8px 0; color: #64748b;">Statut</td><td style="padding: 8px 0;">${s}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748b;">Département</td><td style="padding: 8px 0;">${d}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748b; vertical-align: top;">Message</td><td style="padding: 8px 0;">${m}</td></tr>
            </table>
          </div>
          <p style="color: #94a3b8; font-size: 12px; margin-top: 16px; text-align: center;">
            Envoyé depuis kubex.fr
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erreur envoi email" }, { status: 500 });
  }
}
