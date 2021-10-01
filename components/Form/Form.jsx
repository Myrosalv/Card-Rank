import React from "react"
import styles from './Form.module.css';

export const Form = ({ submit }) => {

   const sendFormHandler = event => {
      event.preventDefault();

      const data = {
         name: event.target.cardsName.value,
         issuer: event.target.issuer.value,
         apr: event.target.apr.value,
         Fee: event.target.fee.value,
         cashback: {
            travel: event.target.travel.value,
            dining: event.target.dining.value,
            ohter: event.target.ohter.value,
         },
      };

      if (submit) {
         submit(data);
      }

   }

   return (
      <div className={styles.container}>
         <h1>Add Carts</h1>

         <form className={styles.form} onSubmit={sendFormHandler}>
            <label htmlFor="cardsName">cards name</label>
            <input id="cardsName" name="cardsName" type="text" required />

            <label htmlFor="issuer">issuer</label>
            <input id="issuer" name="issuer" type="text" required />

            <label htmlFor="apr">apr</label>
            <input id="apr" name="apr" type="text" required />

            <label htmlFor="Fee">Fee</label>
            <input id="Fee" name="fee" type="text" required />
            <h2>Cashback</h2>
            <label htmlFor="travel">travel</label>
            <input id="travel" name="travel" type="text" required />

            <label htmlFor="dining">Dining</label>
            <input id="dining" name="dining" type="text" required />

            <label htmlFor="ohter">Ohter</label>
            <input id="ohter" name="ohter" type="text" required />

            <button className={styles.submit} type="submit">Send Form</button>
         </form>

      </div>
   )
}
