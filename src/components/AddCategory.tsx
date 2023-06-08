import { ChangeEvent, FormEvent, useState } from "react";

interface AddCategoryProps {
  onAddCategorie: (categorie: string) => void;
}

const AddCategory = ({ onAddCategorie }: AddCategoryProps) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (inputValue.trim().length >= 0) {
      setError(false);
    }
    setInputValue(e.target.value);
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = inputValue.trim();
    if (value.length == 0) {
      return setError(true);
    }
    onAddCategorie(value);
    setInputValue("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar..."
        value={inputValue}
        onChange={onInputChange}
      />
      {error ? <p style={{ color: "red" }}>Escriba un valor valido</p> : ""}
    </form>
  );
};

export default AddCategory;
