"use client";

import { FormEvent, useState } from "react";
import Reveal from "./Reveal";

type Fields = {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  metier: string;
  departement: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = {
  nom: "",
  prenom: "",
  email: "",
  telephone: "",
  metier: "",
  departement: "",
  message: "",
};

function validate(values: Fields): Errors {
  const errors: Errors = {};
  if (!values.nom.trim()) errors.nom = "Le nom est requis.";
  if (!values.prenom.trim()) errors.prenom = "Le prénom est requis.";

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

  if (!values.metier.trim()) errors.metier = "Indiquez votre métier.";

  if (!values.departement.trim()) {
    errors.departement = "Le département est requis.";
  } else if (!/^(\d{2,3}|2[ab])$/i.test(values.departement.trim())) {
    errors.departement = "Ex. : 75, 33, 2A…";
  }

  if (!values.message.trim()) errors.message = "Décrivez votre besoin.";
  return errors;
}

const fieldBase =
  "w-full rounded-xl border bg-white px-4 py-3 text-sm text-kubex-ink placeholder:text-kubex-ink/35 focus:outline-none focus:ring-2 focus:ring-kubex-accent/50";

export default function Contact() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function update(field: keyof Fields, value: string) {
    setValues((v) => ({ ...v, [field]: value }));
    if (errors[field]) {
      setErrors((e) => ({ ...e, [field]: undefined }));
    }
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length === 0) {
      // Pas de back-end ici : on confirme côté client.
      setSubmitted(true);
    }
  }

  function reset() {
    setValues(empty);
    setErrors({});
    setSubmitted(false);
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
              Parlons de votre carnet de commandes
            </h2>
            <p className="mt-4 text-lg text-white/65">
              Remplissez ce formulaire et on revient vers vous pour un échange
              sans engagement. On regarde ensemble votre zone, le potentiel de
              propriétaires de logements F/G à rénover et ce que Meta Ads peut —
              ou ne peut pas — vous apporter en leads.
            </p>
            <ul className="mt-7 space-y-3 text-sm text-white/70">
              <li>· Réponse honnête, même si Meta Ads n'est pas pour vous</li>
              <li>· Aucune obligation, aucun engagement</li>
              <li>· Estimation du potentiel de leads sur votre département</li>
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-2xl bg-white p-6 text-kubex-ink shadow-kubex sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center py-8 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-kubex-gradient">
                    <svg
                      className="h-7 w-7 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m5 13 4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold">
                    Merci {values.prenom} !
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-kubex-ink/65">
                    Votre demande a bien été enregistrée. On revient vers vous
                    très vite à l'adresse <strong>{values.email}</strong> pour
                    organiser votre audit gratuit.
                  </p>
                  <button
                    type="button"
                    onClick={reset}
                    className="btn-secondary mt-6"
                  >
                    Envoyer une autre demande
                  </button>
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

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="metier" className="mb-1.5 block text-sm font-medium">
                        Métier
                      </label>
                      <input
                        id="metier"
                        type="text"
                        list="metiers"
                        placeholder="Isolation ITE, ITI, combles…"
                        value={values.metier}
                        onChange={(e) => update("metier", e.target.value)}
                        className={`${fieldBase} ${border("metier")}`}
                      />
                      <datalist id="metiers">
                        <option value="Isolation thermique par l'extérieur (ITE)" />
                        <option value="Isolation thermique par l'intérieur (ITI)" />
                        <option value="Isolation des combles" />
                        <option value="Isolation de toiture" />
                        <option value="Ravalement avec isolation" />
                        <option value="Rénovation énergétique globale" />
                        <option value="Autre métier de l'isolation" />
                      </datalist>
                      {errors.metier && (
                        <p className="mt-1 text-xs text-red-500">{errors.metier}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="departement" className="mb-1.5 block text-sm font-medium">
                        Département
                      </label>
                      <input
                        id="departement"
                        type="text"
                        inputMode="numeric"
                        placeholder="75, 33, 2A…"
                        value={values.departement}
                        onChange={(e) => update("departement", e.target.value)}
                        className={`${fieldBase} ${border("departement")}`}
                      />
                      {errors.departement && (
                        <p className="mt-1 text-xs text-red-500">{errors.departement}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                      Votre besoin
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Décrivez votre activité et votre objectif…"
                      value={values.message}
                      onChange={(e) => update("message", e.target.value)}
                      className={`${fieldBase} resize-y ${border("message")}`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                    )}
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    Réserver mon audit gratuit
                  </button>
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
