const sagas = [];
const hero = aHero();
const newSaga = function () {
  const foil = aFoil();
  sagas.push(() => {
    const deed = aDeed();
    log(hero + deed + foil);
  });
};
newSaga();
sagas[0]();
sagas[0]();
newSaga(0);
sagas[0]();
sagas[1]();
sagas[0]();
