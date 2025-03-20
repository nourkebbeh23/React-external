import { Link } from "react-router-dom";

const Navbar = () => {
  return (
<div className="back">

<div className="margin">
<div>


<a href="#"><img src="	https://themewagon.github.io/monday/img/logo.png" alt="" /></a>
  
</div>

<div>
<nav className="css-navbar">
      <Link className="link" to="/">Home</Link>
      <Link className="link" to="/about">About</Link>
      <Link className="link" to="/services">News</Link>
      <Link className="link" to="/contact">Contact</Link>
      <Link className="link" to="/blog">Buy</Link>
  
    </nav>
</div>
<div className="mm">

<h3>sign in</h3>
<a className="tag" href="#">Join us</a>

</div>




</div>



<div className="text">

<div>
<a className="link-1" href="#">Buy</a>
<a className="link-1" href="#">Rent</a>
<a className="link-1" href="#">Sell</a>
<a className="link-1" href="#">Property Value</a>
<a className="link-1" href="#">Agents</a>

</div>
<div >


<input type="text" className="input" placeholder="search by postcode or suburb" />
<a href="#" className="btn">SEARCH</a>

</div>
<div>
  <p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
</div>

</div>













</div>












  );
};

export default Navbar;
