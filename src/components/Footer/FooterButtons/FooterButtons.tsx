import './FooterButtons.scss';
type Props = {
  direction: string,
}
export const FooterButtons: React.FC<Props> = ({ direction }) => {
  return (
    <div className="foobuttons">
      <ul className={direction === 'column' ? "foobuttons__menu--mobile" : "foobuttons__menu"}>
        <li
          className="foobuttons__menu-item"
        >
          <a
            href="https://github.com/vlasiuk-anatolii"
            className="foobuttons__link"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </li>
        <li className="foobuttons__menu-item">
          <a
            href="/"
            className="foobuttons__link"
          >
            Contacts
          </a>
        </li>
        <li className="foobuttons__menu-item">
          <a
            href="/"
            className="foobuttons__link"
          >
            Rights
          </a>
        </li>
      </ul>
    </div>
  );
};
