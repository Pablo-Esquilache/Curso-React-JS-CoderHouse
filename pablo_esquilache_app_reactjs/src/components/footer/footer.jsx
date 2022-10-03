import "./footer.css";

const Footer = () => {
  return (
    <div className="footerConteiner">
      <div className="footerDatos">
        <div>
          <ul>
            <li>Carlos Tejedor, Pcia de Buenos Airea</li>
            <li>E y S Garre 1234</li>
            <li>02355 15 659878</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Facebook: /pdemotos</li>
            <li>Instagra: @pdemotos</li>
            <li>Twitter: @pdemotos</li>
          </ul>
        </div>
      </div>
      <hr className="hr2" />
      <div className="footerCopy">
        <p>copyright: P.D.E. Motos | Desarrollado por @pabloesquilache</p>
      </div>
    </div>
  );
};

export default Footer;
