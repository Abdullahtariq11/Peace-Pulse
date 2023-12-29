import React, { useState } from "react";
import ReadSurah from "./ReadSurah";
import SurahList from "./SurahList";
import "./QuranAndSurah.css";

function QuranAndSurah() {
  const [surahNumber, setSurahNumber] = useState(1);

  return (
    <div className="Qr-Sur-container">
      <div className="mid-panel">
        <SurahList setSurahNumber={setSurahNumber} />
      </div>
      <div className="bottom-panel">
        <ReadSurah surahNumber={surahNumber} />
      </div>
    </div>
  );
}

export default QuranAndSurah;
