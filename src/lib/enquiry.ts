export type Enquiry = {
  name: string;
  email: string;
  service: string;
  message: string;
};

export type EnquiryErrors = {
  name?: string;
  email?: string;
};

export const emptyEnquiry: Enquiry = {
  name: "",
  email: "",
  service: "",
  message: "",
};

export function validateEnquiry(form: Enquiry): EnquiryErrors {
  const errors: EnquiryErrors = {};
  if (!form.name.trim()) errors.name = "Please tell us your name.";
  const email = form.email.trim();
  if (!email) errors.email = "Please add an email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    errors.email = "That email address doesn't look quite right.";
  }
  return errors;
}

export function firstName(name: string) {
  return name.trim().split(/\s+/)[0] || "there";
}
