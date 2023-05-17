function useFieldValidation(value = null, checks = {}) {
  const { min, max, required } = checks;

  if (value === null) return null;

  if (required && !value) {
    return "This value is required";
  } else if (min !== undefined && value.length < min) {
    return `Value needs to have more than ${min} characters`;
  } else if (max !== undefined && value.length > max) {
    return `Value needs to have less than ${max} characters`;
  }

  return null;
}

export default useFieldValidation;
