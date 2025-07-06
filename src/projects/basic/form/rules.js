export const rules = {
  name: { required: true, max: 20 },
  email: { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, max: 45 },
  phone: { required: true, pattern: /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/ },
  city: { required: true, max: 20 },
  country: { required: true, max: 20 },
  zip: { required: true, pattern: /^\d{5,6}$/ }
}