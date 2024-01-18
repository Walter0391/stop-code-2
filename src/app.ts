import * as driver from "./driver";
import * as orm from "./orm";

const main = async () => {
    console.log(await driver.insertProdotto("Cover", 14));
    console.log(await driver.deleteProdotto("65a8f145de414b47675673af"));
    console.log(await driver.getProdotti());
}

const mainORM = async () => {
    console.log(await orm.insertCategoria("", "", ""));
    console.log(await orm.getCategorie());
}

mainORM();