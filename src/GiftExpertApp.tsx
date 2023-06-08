import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

function GiftExpertApp() {
  const [categories, setCategories] = useState(["One Punch", "DragonBall"]);
  const onAddCategorie = (newCategorie: string) => {
    if (categories.includes(newCategorie)) return;
    setCategories([newCategorie, ...categories]);
  };
  return (
    <>
      <h1>Gif Expert App </h1>
      <AddCategory onAddCategorie={onAddCategorie} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
}

export default GiftExpertApp;
