function target(targetX, targetY, targetR) {
  // validacni funkce
  const validate = (value, name) => {
    if (typeof value !== 'number') {
      throw new Error(`Vstupni hodnota ${name} musí být číslo! Je ${value}`);
    }

    // pokud bychm chteli zrychlit
    // return parseInt(value, 10);
    return value;
  };

  // provedeme validaci vstupni hodnot
  const tx = validate(targetX, 'targetX');
  const ty = validate(targetY, 'targetY');
  const tr = validate(targetR, 'targetR');
  // vypocitame si dopredu mocninu polomeru kruhu
  const rPow = tr ** 2;
  // vypocitamse si polovinu sirky vnitrniho ctverce
  // pro automatickou trefu
  const innerSize = Math.sqrt(rPow / 2, 2);
  // nastavime si cache
  const cache = {};

  return {
    hit: (hitX, hitY) => {
      // provedeme validaci vstupu
      const mx = validate(hitX, 'MX');
      const my = validate(hitY, 'MY');

      // klic pro cachovani
      const key = `${mx}-${my}`;
      if (key in cache) {
        return cache[key];
      }

      // zjistime si absolutni vzdalenost strely od os stredu terce
      const distanceX = Math.abs(tx - mx);
      const distanceY = Math.abs(ty - my);

      // pokud je v jedno ose strela dale od stredu je momi terc
      if (distanceX > tr || distanceY > tr) {
        return false;
      } if (distanceX <= innerSize && distanceY <= innerSize) {
        // pokud je strela ve vnitrnim ctverci je automaticky zasah
        return true;
      }
      // pokud je nekde mezi vnitrnim a vnejsim cverci vypocitam jeji vzdalenosr od strede
      const sr = (mx - tx) ** 2 + (my - ty) ** 2;
      const result = sr < rPow;

      // ulozime si vysledek
      cache[key] = result;

      return result;
    },
  };
}

export default target;