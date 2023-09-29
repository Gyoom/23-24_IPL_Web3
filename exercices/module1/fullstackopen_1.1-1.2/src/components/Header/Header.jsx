import logo from './LOGO HE VINCI.png'

const Header = (props) => {
    return (
      <h1>
        <img src={logo} />
        <br />
        {props.course}
      </h1>  
    ) 
}

export default Header