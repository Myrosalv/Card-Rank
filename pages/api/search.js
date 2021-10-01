import * as Realm from "realm-web";


export default async function searchProducts(req, res) {

  let { term } = req.query

  if (term) {
    const REALM_APP_ID = process.env.NEXT_PUBLIC_REALM_ID;
    const app = new Realm.App({ id: REALM_APP_ID });
    const credentials = Realm.Credentials.anonymous();
    try {
      const user = await app.logIn(credentials);
      const searchCards = await user.functions.searchCards(term);
      res.status(200).json(searchCards);
    } catch (error) {
      console.error(error);
    }

    return;
  }


  res.status(500).json({ error: 'errr' })
}
