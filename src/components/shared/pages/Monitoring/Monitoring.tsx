import './Monitoring.css'
import useServer from '../../../../data/server';
import {
  FaUsers,
  FaWindows,
  FaLinux,
  FaApple,
  FaDownload
} from "react-icons/fa";

export const Monitoring: React.FC = () => {
  const { data, loading, error } = useServer();

  if (loading) {
    return (
      <section className="monitoring">
        <h2>Loading...</h2>
      </section>
    );
  }

  if (error) {
    return (
      <section className="launcher-info">

        <div className="launcher-switcher">

          <button className="active">
            <FaWindows />
            <span>Windows</span>
          </button>

          <button>
            <FaLinux />
            <span>Linux</span>
          </button>

          <button>
            <FaApple />
            <span>macOS</span>
          </button>

        </div>

        <h2 className="launcher-title">
          LAUNCHER REQUIREMENTS
        </h2>

        <div className="requirements-list">

          <div className="requirement-item">
            <span>CPU</span>
            <span>Intel Core i3 / Ryzen 3</span>
          </div>

          <div className="requirement-item">
            <span>RAM</span>
            <span>4 GB</span>
          </div>

          <div className="requirement-item">
            <span>Storage</span>
            <span>2 GB Free Space</span>
          </div>

          <div className="requirement-item">
            <span>Internet</span>
            <span>Required</span>
          </div>

        </div>

        <button className="download-btn">
          <FaDownload />
          <span>Download Launcher</span>
        </button>

      </section>
    );
  }

  const servers = data?.servers ?? [];

  return (
    <section id="monitoring" className="monitoring">

      <h1 className="monitoring__title">
        Monitoring
      </h1>

      <div className="monitoring__card--container">

        <div className="row">

          <div className="monitoring__card--main card--title">
            <p className="total__online">
              Total Online is 23 players
            </p>
          </div>

          {servers.map((server) => (
            <div
              key={server.id}
              className="monitoring__card--item card--title"
              style={{
                '--gradient-to': server.gradient.to,
                '--backgroundImage': `url(${server.flag})`
              } as React.CSSProperties}
            >
              <div className="server--content">

                <div className="server__container">

                  <div className="server--name">
                    {server.nameServer}
                  </div>

                  <span
                    className={`server--status ${
                      server.isStatus ? "on" : "offline"
                    }`}
                  />

                </div>

                <div className="server__container">

                  <div className="server--ip">
                    {server.ip}
                  </div>

                  <div className="server--currentonline">
                    {server.currentOnline}
                    <FaUsers />
                  </div>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};