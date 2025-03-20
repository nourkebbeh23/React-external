import ff from "./assets/3.jpg"
import dd from "./assets/4 .jpg"
import gg from "./assets/33.jpg"

function Card(){
    return(
<div>



<div className="title">
    <h1>Recently Add Homes</h1>
</div>






<div className="rr">

<div className="ok">

<img className="iimg" src={ff} alt="" />
<p>April 16, 2019</p>
<h2>How to buy a house in this market</h2>
<p>
Fusce lobortis a enim eget tempus. Class <br />
 aptent taciti sociosqu ad litora. Donec eget <br />
  efficitur ex. Donec eget dolor vitae eros <br />
   feugiat tristique id vitae massa.
</p>
<a className="llink" href="#">Find out more
</a>
</div>


<div className="ok">

<img className="iimg" src={dd} alt="" />
<p>April 16, 2019</p>
<h2>How to buy a house in this market</h2>
<p>
Fusce lobortis a enim eget tempus. Class <br />
 aptent taciti sociosqu ad litora. Donec eget <br />
  efficitur ex. Donec eget dolor vitae eros <br />
   feugiat tristique id vitae massa.
</p>
<a className="llink" href="#">Find out more
</a>
</div>
<div className="ok">

<img className="iimg" src={gg} alt="" />
<p>April 16, 2019</p>
<h2>How to buy a house in this market</h2>
<p>
Fusce lobortis a enim eget tempus. Class <br />
 aptent taciti sociosqu ad litora. Donec eget <br />
  efficitur ex. Donec eget dolor vitae eros <br />
   feugiat tristique id vitae massa.
</p>
<a className="llink" href="#">Find out more
</a>
</div>







      </div>
</div>
    )
}
export default Card;