export const validators = {
  required: (value, label = "This field") =>
    !value?.toString().trim() ? `${label} is required` : null,

  email: (value) => {
    if (!value?.trim()) return "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Enter a valid email address";
    return null;
  },

  minLength: (min) => (value, label = "This field") =>
    value?.length < min ? `${label} must be at least ${min} characters` : null,

  maxLength: (max) => (value, label = "This field") =>
    value?.length > max ? `${label} must not exceed ${max} characters` : null,

  passwordStrength: (value) => {
    if (!value) return "Password is required";
    if (value.length < 8) return "Password must be at least 8 characters";
    if (!/[A-Z]/.test(value)) return "Password must contain at least one uppercase letter";
    if (!/[0-9]/.test(value)) return "Password must contain at least one number";
    return null;
  },

  passwordMatch: (password) => (confirmPassword) =>
    password !== confirmPassword ? "Passwords do not match" : null,
};

export function validateForm(values, rules) {
  const errors = {};
  for (const [field, fieldRules] of Object.entries(rules)) {
    for (const rule of fieldRules) {
      const error = rule(values[field]);
      if (error) {
        errors[field] = error;
        break;
      }
    }
  }
  return errors;
}
