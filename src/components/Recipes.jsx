import { useState } from "react";
import Modal from "./Modal";

export default function UseModal() {
  const [recipe1, setRecipe1] = useState("Recipe");
  const [recipe2, setRecipe2] = useState("Recipe");

  function showRecipe1() {
    setRecipe1(
      `Fresh arugula, Red grapes, Parmesan cheese, Almonds, Tamari and my lemon vinaigrette – To tie it all together! This 6-ingredient salad dressing is zingy, bold, and bright.`
    );
  }
  function showRecipe2() {
    setRecipe2(
      `An apple, Red onion, Apple cider vinegar and mustard, Honey, Extra-virgin olive oil, Hazelnuts And parsley.`
    );
  }
  return (
    <div>
      <Modal
        title="Arugula Salad with Lemon Vinaigrette"
        message={recipe1}
        onClose={showRecipe1}
      />
      <Modal
        title="Kohlrabi Slaw Salad"
        message={recipe2}
        onClose={showRecipe2}
      />
    </div>
  );
}
