import logo from './LOGO HE VINCI.png'

const Header = (props) => {
    return (
      <h1>
        <img src={logo} alt="" />
        <br />
        {props.title}
      </h1>  
    ) 
}

export default Header