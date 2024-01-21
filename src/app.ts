import * as orm from "./orm";

const index = async () => {
  console.log(await orm.getArticoli());

  //   console.log(
  //     await orm.insertPost(
  //       "Antonio",
  //       "va a pesca",
  //       "al tevere",
  //       " e prende una pantegana"
  //     )
  //   );
  //   console.log(
  //     await orm.modificaPost(
  //       "65ad23bdf0d2321771ee7a1e",
  //       "sbaglia un goal già fatto"
  //     )
  //   );

  console.log(await orm.deleteArticolo("65ad28234c223d122439bb12"));
};

index();
