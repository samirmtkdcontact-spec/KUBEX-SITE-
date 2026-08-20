"use client";

import { FormEvent, useState } from "react";
import Reveal from "./Reveal";

type Fields = {
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  entreprise: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = {
  prenom: "",
  nom: "",
  email: "",
  telephone: "",
  entreprise: "",
  message: "",
};

function validate(values: Fields): Errors {
  const errors: Errors = {};
  if (!values.prenom.trim()) errors.prenom = "Le prénom est requis.";
  if (!values.nom.trim()) errors.nom = "Le nom est requis.";

  if (!values.email.trim()) {
    errors.email = "L'email est requis.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Format d'email invalide.";
  }

  if (!values.telephone.trim()) {
    errors.telephone = "Le téléphone est requis.";
  } else if (!/^[0-9 +().-]{8,}$/.test(values.telephone)) {
    errors.telephone = "Numéro de téléphone invalide.";
  }

  if (!values.entreprise.trim()) {
    errors.entreprise = "Le nom de votre entreprise est requis.";
  }

  return errors;
}

const fieldBase =
  "w-full rounded-xl border bg-white px-4 py-3 text-sm text-kubex-ink placeholder:text-kubex-ink/35 focus:outline-none focus:ring-2 focus:ring-kubex-accent/50";

export default function Contact() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  function update(field: keyof Fields, value: string) {
    setValues((v) => ({ ...v, [field]: value }));
    if (errors[field]) {
      setErrors((e) => ({ ...e, [field]: undefined }));
    }
    if (error) setError(false);
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setError(false);
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (res.ok) {
        setSuccess(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  const border = (field: keyof Fields) =>
    errors[field] ? "border-red-400" : "border-kubex-ink/15";

  return (
    <section
      id="contact"
      className="py-24 text-white sm:py-32"
      style={{
        background: "linear-gradient(160deg, #003F5C 0%, #001A2E 100%)",
      }}
    >
      <div className="container-kubex">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm font-semibold text-kubex-accent">
              Audit gratuit
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Réservez votre audit gratuit — 30 minutes.
            </h2>
            <p className="mt-4 text-lg text-white/65">
              Gratuit, sans engagement, sans pression. On analyse votre
              situation et votre potentiel en publicité digitale ciblée avant de
              vous proposer quoi que ce soit.
            </p>
            <ul className="mt-7 space-y-3 text-sm text-white/70">
              <li>
                · Réponse honnête, même si la publicité digitale ciblée n'est pas
                pour vous
              </li>
              <li>· Aucune obligation, aucun engagement</li>
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-2xl bg-white p-6 text-kubex-ink shadow-kubex sm:p-8">
              {success ? (
                <div className="confirm-block flex flex-col items-center px-2 py-10 text-center">
                  <div
                    className="confirm-circle flex items-center justify-center"
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "9999px",
                      background: "#22C55E",
                    }}
                  >
                    <svg
                      width="54"
                      height="54"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path className="confirm-check" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3
                    className="confirm-text font-display font-bold"
                    style={{ fontSize: "24px", color: "#0A1628", marginTop: "24px" }}
                  >
                    Demande bien reçue ✓
                  </h3>
                  <p
                    className="confirm-text"
                    style={{ fontSize: "16px", color: "#4A6080", marginTop: "12px" }}
                  >
                    Nous vous recontactons sous 24h ouvrées.
                  </p>
                  <p
                    className="confirm-text"
                    style={{ fontSize: "14px", color: "#8AA0B8", marginTop: "8px" }}
                  >
                    Vérifiez vos emails et votre messagerie.
                  </p>
                </div>
              ) : (
                <form noValidate onSubmit={onSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="prenom" className="mb-1.5 block text-sm font-medium">
                        Prénom
                      </label>
                      <input
                        id="prenom"
                        type="text"
                        autoComplete="given-name"
                        value={values.prenom}
                        onChange={(e) => update("prenom", e.target.value)}
                        className={`${fieldBase} ${border("prenom")}`}
                      />
                      {errors.prenom && (
                        <p className="mt-1 text-xs text-red-500">{errors.prenom}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="nom" className="mb-1.5 block text-sm font-medium">
                        Nom
                      </label>
                      <input
                        id="nom"
                        type="text"
                        autoComplete="family-name"
                        value={values.nom}
                        onChange={(e) => update("nom", e.target.value)}
                        className={`${fieldBase} ${border("nom")}`}
                      />
                      {errors.nom && (
                        <p className="mt-1 text-xs text-red-500">{errors.nom}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        value={values.email}
                        onChange={(e) => update("email", e.target.value)}
                        className={`${fieldBase} ${border("email")}`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="telephone" className="mb-1.5 block text-sm font-medium">
                        Téléphone
                      </label>
                      <input
                        id="telephone"
                        type="tel"
                        autoComplete="tel"
                        value={values.telephone}
                        onChange={(e) => update("telephone", e.target.value)}
                        className={`${fieldBase} ${border("telephone")}`}
                      />
                      {errors.telephone && (
                        <p className="mt-1 text-xs text-red-500">{errors.telephone}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="entreprise" className="mb-1.5 block text-sm font-medium">
                      Nom de votre entreprise{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="entreprise"
                      type="text"
                      autoComplete="organization"
                      placeholder="Ex: Dupont Énergie, Soleil & Fils…"
                      value={values.entreprise}
                      onChange={(e) => update("entreprise", e.target.value)}
                      className={`${fieldBase} ${border("entreprise")}`}
                    />
                    {errors.entreprise && (
                      <p className="mt-1 text-xs text-red-500">{errors.entreprise}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                      Message <span className="text-kubex-ink/40">(optionnel)</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Décrivez votre activité et votre objectif…"
                      value={values.message}
                      onChange={(e) => update("message", e.target.value)}
                      className={`${fieldBase} resize-y ${border("message")}`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {loading ? (
                      <>
                        <svg
                          className="h-4 w-4 animate-spin"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-90"
                            fill="currentColor"
                            d="M4 12a8 8 0 0 1 8-8V0C5.4 0 0 5.4 0 12h4Z"
                          />
                        </svg>
                        Envoi en cours…
                      </>
                    ) : (
                      <>
                        Envoyer ma demande <span aria-hidden>→</span>
                      </>
                    )}
                  </button>

                  {error && (
                    <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                      Une erreur s'est produite. Contactez-nous directement :{" "}
                      <a
                        href="mailto:samirmtkd.contact@gmail.com"
                        className="font-semibold underline"
                      >
                        samirmtkd.contact@gmail.com
                      </a>
                    </div>
                  )}

                  <p className="text-center text-xs text-kubex-ink/45">
                    En envoyant ce formulaire, vous acceptez d'être recontacté
                    au sujet de votre demande.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
