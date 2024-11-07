import React, { useState } from "react";

const Home = () => {
  const customDictionary = {
    teh: "the",
    wrok: "work",
    fot: "for",
    exampl: "example",
  };
  const [inputField, setInputField] = useState("");
  const [suggestedText, setSuggestedText] = useState("");

  const handleChange = (event) => {
    let text = event.target.value;
    setInputField(text);

    const words = text.split(" ");
    const correctedWords = words.map((word) => {
      const correctedWord = customDictionary[word.toLowerCase()];
      return correctedWord || word;
    });
    const correctedText = correctedWords.join(" ");
    const firstCorrection = correctedWords.find(
      (word, index) => word !== words[index]
    );
    setSuggestedText(firstCorrection || "");
  };
  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        placeholder="Enter text..."
        rows={5}
        cols={40}
        value={inputField}
        onChange={handleChange}
      />
      {suggestedText && (
        <p>
          Did you mean : <strong>{suggestedText}</strong>?
        </p>
      )}
    </div>
  );
};

export default Home;
