import React from "react";

export default function ContentPortal() {
  return (
    <>
      <div className="bgContentPortal">
        <a href="#" className="infoCardFossil">
          Fossilt bränsle
        </a>

        <a href="#" className="infoCardTemperatur">
          Temperaturförändring
        </a>

        <a href="/kunskapsportalen/kategori/havsniva" className="infoCardHavs">
          Havsnivå
        </a>

        <a href="#" className="infoCardGlaciar">
          Glaciärer
        </a>
      </div>
    </>
  );
}
