import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState( ['One Punch']);

  return (
    <>
        <h2>Busca un gif mediante una palabra, sonríe y ten un día lleno de éxito</h2>

        <AddCategory 
          setCategories={setCategories}
        />

        <hr />

        <ol>
          {
            categories.map(category => (
              <GifGrid 
                key={category}
                category={category} 
              />
            ))
          }
        </ol>
    </>
  )
}
