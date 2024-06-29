import { FaUser } from 'react-icons/fa6';
import { BsFillTelephoneFill } from 'react-icons/bs';
import css from './Contact.module.css';

export default function Contact({ contact: { id, name, number }, onDelete }) {
  return (
    <div className={css.cardWrap}>
      <p className={css.nameParagraph}>
        <FaUser className={css.icon} />
        {name}
      </p>
      <p className={css.phoneParagraph}>
        <BsFillTelephoneFill className={css.icon} />
        {number}
      </p>
      <button className={css.button} onClick={()=> onDelete(id)}>Delete</button>
    </div>
  );
}
