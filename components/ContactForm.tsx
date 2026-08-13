"use client";

import { FormEvent, useState } from "react";
import { contact } from "@/lib/content";

const enquiryTypes = [
  "Vehicle Sales",
  "Vehicle Service",
  "Spare Parts",
  "Bus Assembly",
  "Coffee Export",
  "Oilseed Export",
  "Pulse Export",
  "General Enquiry",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(String(form.get("enquiryType") || "Website enquiry"));
    const message = encodeURIComponent(
      [
        `Name: ${form.get("name") || ""}`,
        `Company: ${form.get("company") || ""}`,
        `Phone: ${form.get("phone") || ""}`,
        `Country: ${form.get("country") || ""}`,
        "",
        String(form.get("message") || ""),
      ].join("\n"),
    );
    setSubmitted(true);
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${message}`;
  }

  return (
    <form className="enquiry-form" onSubmit={onSubmit}>
      <div className="form-field form-field--wide">
        <label htmlFor="enquiryType">I want to enquire about</label>
        <select id="enquiryType" name="enquiryType" defaultValue="General Enquiry" required>
          {enquiryTypes.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="name">Full name</label>
        <input id="name" name="name" autoComplete="name" required />
      </div>
      <div className="form-field">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" autoComplete="organization" />
      </div>
      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="form-field">
        <label htmlFor="phone">Phone</label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" />
      </div>
      <div className="form-field form-field--wide">
        <label htmlFor="country">Country</label>
        <input id="country" name="country" autoComplete="country-name" />
      </div>
      <div className="form-field form-field--wide">
        <label htmlFor="message">How can we help?</label>
        <textarea id="message" name="message" rows={6} required />
      </div>
      <div className="form-actions form-field--wide">
        <button className="button button--gold" type="submit">
          Prepare email enquiry <span aria-hidden="true">↗</span>
        </button>
        <p>
          This preview opens your email application. A secure online submission service will
          be connected before launch.
        </p>
      </div>
      {submitted ? (
        <p className="form-success form-field--wide" role="status">
          Your email application should now open with the enquiry details prepared.
        </p>
      ) : null}
    </form>
  );
}
