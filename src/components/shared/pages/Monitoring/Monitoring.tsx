import './Monitoring.css'
import type { MonitorProps } from '../../@types/monitor';
import useServer from '../../../../data/server';
import { FaUsers } from "react-icons/fa";

export const Monitoring: React.FC<MonitorProps> = ({ online }) => {
  const { data, loading, error } = useServer();

  if (loading) {
    return <section className="monitoring">Loading...</section>;
  }

  if (error) {
    return <section className='monitoring'>ERROR {error}</section>
  }

  const servers = data?.servers ?? [];

  return (
    <section id="monitoring" className="monitoring">
      <h1 className="monitoring__title">Monitoring</h1>
      <div className="monitoring__card--container">
        <div className="row">
          <div className="monitoring__card--main card--title">
            <p className="total__online">Total Online is 23 players</p>
          </div>
          {servers.map((server) => (
            <div key={server.id} className="monitoring__card--item card--title"
            style={{
              '--gradient-to': server.gradient.to,
              '--backgroundImage': `url(${server.flag})`
            } as React.CSSProperties}>
              <div className="server--content">
                <div className="server__container">
                  <div className="server--name">{server.nameServer}</div>
                  <span className={`server--status ${server.isStatus === true ? "on" : "offline"}`}></span>
                </div>
                <div className="server__container">
                  <div className="server--ip">{server.ip}</div>
                  <div className="server--currentonline">{server.currentOnline} <FaUsers/></div>
                </div>
                <div className="server--button"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}