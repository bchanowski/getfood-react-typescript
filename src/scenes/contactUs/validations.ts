export const customValidations = {
  name: {
    required: {
      value: true,
      message: "This field is required.",
    },
    maxLength: {
      value: 100,
      message: "Max length is 100 characters.",
    },
  },
  email: {
    required: {
      value: true,
      message: "This field is required.",
    },
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Invalid email address.",
    },
  },
  message: {
    required: {
      value: true,
      message: "This field is required.",
    },
    maxLength: {
      value: 2000,
      message: "Max length is 2000 characters.",
    },
  },
};
