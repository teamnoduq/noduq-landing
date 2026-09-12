import { DeviceMobile, Globe } from "@phosphor-icons/react/dist/ssr";

const payments = [
  { name: "Laura Méndez", amount: "$48.000", time: "16:42", tag: "Verificado con correo" },
  { name: "Andrés Ruiz", amount: "$22.500", time: "16:39", tag: "Por SMS" },
  { name: "Camila Ortiz", amount: "$15.000", time: "16:31", tag: "Por SMS" },
];

export default function Home() {
  return (
    <div className="page">
      <div className="shell">
        <header className="nav">
          <a className="mark" href="/">
            <span className="mark-mark" aria-hidden="true" />
            NODUQ
          </a>
          <p className="soon">
            <span>Próximamente</span>
            <span className="soon-en">Coming soon</span>
          </p>
        </header>

        <main className="hero">
          <section>
            <p className="kicker">Pago QR en el mostrador</p>
            <h1>
              El pago llegó.
              <br />
              <em>El mostrador ya lo sabe.</em>
            </h1>
            <p className="lede">
              NODUQ lee el aviso del QR, no el comprobante que manda el cliente.
              El SMS entra en el momento. El correo solo confirma.
            </p>
            <div className="actions">
              <a className="button solid" href="#escena">
                <DeviceMobile size={18} weight="bold" />
                Ver el teléfono
              </a>
              <a className="button ghost" href="#escritorio">
                <Globe size={18} weight="bold" />
                Ver el escritorio
              </a>
            </div>
            <div className="meta">
              <span>SMS primero</span>
              <span>Correo como refuerzo</span>
              <span>El empleado entra con código</span>
            </div>
          </section>

          <div className="stage" id="escena">
            <div className="glow" />
            <article className="browser" id="escritorio">
              <div className="chrome">
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
                <div className="url">noduq.app / hoy</div>
              </div>
              <div className="desk">
                <div className="desk-head">
                  <strong>Hoy en caja</strong>
                  <span>Del más reciente</span>
                </div>
                {payments.map((payment) => (
                  <div className="row" key={payment.name}>
                    <b>{payment.name}</b>
                    <span className="amount">{payment.amount}</span>
                    <span className="who">{payment.time}</span>
                    <span className="tag">{payment.tag}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="phone" aria-label="Teléfono simulado">
              <div className="screen">
                <div className="notch" />
                <div className="phone-top">
                  <span className="phone-brand">
                    <span className="mark-mark" aria-hidden="true" />
                    NODUQ
                  </span>
                  <span className="live">
                    <i />
                    En vivo
                  </span>
                </div>
                <div className="pay">
                  <small>Pago QR · 85540</small>
                  <strong>$48.000</strong>
                  <p>Laura Méndez · 16:42</p>
                  <span className="badge">Verificado con correo</span>
                </div>
                <div className="quiet">
                  <div>
                    <span>Andrés Ruiz</span>
                    <span>$22.500</span>
                  </div>
                  <div>
                    <span>Camila Ortiz</span>
                    <span>$15.000</span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </main>

        <section className="band">
          <article className="card">
            <h2>El SMS decide.</h2>
            <p>Llega el aviso, se ve el nombre y el valor. El mostrador no espera una foto.</p>
          </article>
          <article className="card">
            <h2>El correo marca.</h2>
            <p>Si el mismo pago aparece en Gmail, gana la marca. Si no llega, igual se entrega.</p>
          </article>
          <article className="card">
            <h2>El empleado entra con código.</h2>
            <p>No conecta el banco ni el correo. Ve el aviso en la app o en la web.</p>
          </article>
        </section>

        <section className="close">
          <span className="close-mark" role="img" aria-label="NODUQ" />
          <p className="soon soon-block">
            <span>Próximamente</span>
            <span className="soon-en">Coming soon</span>
          </p>
          <h2>El banco no se toca.</h2>
          <p>Un código para el empleado. El aviso en el teléfono o en el escritorio.</p>
        </section>

        <footer className="foot">
          <span>NODUQ</span>
          <span>Próximamente · Coming soon</span>
        </footer>
      </div>
    </div>
  );
}
