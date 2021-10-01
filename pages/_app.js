import Head from "next/head";
import Header from "../components/Header";
import Modal from "../components/Modal/Modal";
import 'tailwindcss/tailwind.css'
import { useState } from "react";
import {
  PlusIcon,
} from "@heroicons/react/outline";
import { Form } from "../components/Form/Form";
import { productAdd } from '../web/products';
import '../styles/styles.css';

function MyApp({ Component, pageProps }) {
  const [showModal, setShowModal] = useState(false);
  const [keyRender, setKeyRender] = useState(0);

  const productAddHandler = async (data) => {
    console.log(data)
    await productAdd(data);
    setShowModal(false);
    setKeyRender((key) => key + 1);
  }

  return (<>
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-white w-full min-h-screen">

        <Header />

        <div className="actions">
          <button onClick={() => setShowModal(true)} className="text-gray-600 focus:outline-none mx-4 sm:mx-0">
            <PlusIcon
              className="h-5 w-5"
            />
          </button>
        </div>

        <Component key={keyRender} {...pageProps} />
      </div>
      <div id="modal-root"></div>

      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <Form submit={productAddHandler} />
      </Modal>
    </div>

  </>)
}

export default MyApp
