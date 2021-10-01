import * as Realm from "realm-web";


export default async function productsAdd(req, res) {

  if (req.method === 'POST') {
    let product = req.body;

    const REALM_APP_ID = process.env.NEXT_PUBLIC_REALM_ID;
    const app = new Realm.App({ id: REALM_APP_ID });
    const credentials = Realm.Credentials.anonymous();
    try {
      const user = await app.logIn(credentials);
      const products = await user.functions.ProductAdd(product);
      res.status(200).json(products);
    } catch (error) {
      console.error(error);
    }

    return;
  }


  res.status(500).json({ error: 'errr' })
}
