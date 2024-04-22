import Link from 'next/link';
import style from './style.module.css';
import DropMenu from './dropmenu';
export default function MenuAdmin() {
  return (
    <div className={`${style.containerMenu}`} >
      <div>
        <Link href={'./'}>
          <img
            className={`${style.img}`}
            src="https://bizweb.dktcdn.net/100/436/707/themes/834473/assets/logo.png?1704276438486"
            alt=""
          />
        </Link>
      </div>

      <div className={`${style.menu}`}>
        <DropMenu/>
      </div>
    </div>
  );
}
