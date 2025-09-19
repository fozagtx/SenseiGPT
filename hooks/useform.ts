import { useState, useCallback } from "react";

export const useForm = <T extends Record<string, any>>(initialValues: T) => {
  const [formValues, setFormValues] = useState<T>(initialValues);

  const setFieldValue = useCallback((name: keyof T, value: any) => {
    setFormValues((prev) => ({ ...prev, [name]: value }));
  }, []);

  const updateFormValues = useCallback((newValues: Partial<T>) => {
    setFormValues((prev) => ({ ...prev, ...newValues }));
  }, []);

  const resetForm = useCallback(() => {
    setFormValues(initialValues);
  }, [initialValues]);

  const handleFieldChange = useCallback(
    (name: keyof T) =>
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFieldValue(name, e.target.value);
      },
    [setFieldValue],
  );

  return {
    values: formValues,
    setValue: setFieldValue,
    updateValues: updateFormValues,
    reset: resetForm,
    handleChange: handleFieldChange,
  };
};
