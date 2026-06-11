import Logo from '../../../../assets/image/logo.png'
import './footer.css'
export const Footer: React.FC = () => {
  return (
    <footer className="footer">

      <img src={Logo} width={60} height={60}/>

      <div className="policy">
        <p>NextGen RP is not affiliated with or endorsed by Take-Two,
          Rockstar North Interactive, or any other rights holder.
          All the used trademarks belong to their respective owners.</p>
      </div>

      <span className="question">
        if you have some questions
         <p>support@nextgen.com</p>
      </span>

    </footer>
  )
}