import ReactDOM from "react-dom";
import { IsBrowser } from '../../web/utils'
import {
   XIcon
} from "@heroicons/react/outline";
import styles from './Modal.module.css';

export default function Modal({ show, onClose, children }) {

   const handleClose = (e) => {
      e.preventDefault();
      onClose();
   }

   const modalContent = show ? (
      <div className={`${styles.Modal} absolute top-0 left-0 w-full h-full flex justify-center items-center bg-center`}>
         <div className={styles.wrap}>
            <div className="">
               <a href="#" onClick={handleClose}>
                  <button>
                     <XIcon
                        className="h-5 w-5"
                     />
                  </button>
               </a>
            </div>
            <div>{children}</div>
         </div>
      </div>
   ) : null;

   if (IsBrowser()) {
      return ReactDOM.createPortal(
         modalContent,
         document.getElementById("modal-root")
      )
   } else {
      return null;
   }
}
