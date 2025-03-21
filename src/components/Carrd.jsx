import image from "./assets/person1.jpg"
import immage from "./assets/person2.jpg"
import sss from "./assets/person3.jpg"
function Carrd(){
    return(
<div>





<div className="title">


<h1>The Agents</h1>

</div>




<div className="rr">

<div className="okk">

<img className="iimg" src={image} alt="" />

<h2>Christinne James</h2>
<p>
Fusce lobortis a enim eget tempus. Class <br />
 aptent taciti sociosqu ad litora. Donec eget <br />
  efficitur ex. Donec eget dolor vitae eros <br />
   feugiat tristique id vitae massa.
</p>
<a className="llink" href="#">Find out more
</a>
</div>


<div className="okk">

<img className="iimg" src={immage} alt="" />

<h2>Davina Brown</h2>
<p>
Fusce lobortis a enim eget tempus. Class <br />
 aptent taciti sociosqu ad litora. Donec eget <br />
  efficitur ex. Donec eget dolor vitae eros <br />
   feugiat tristique id vitae massa.
</p>
<a className="llink" href="#">Find out more
</a>
</div>
<div className="okk">

<img className="iimg" src={sss} alt="" />

<h2>Michael Smith</h2>
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
export default Carrd;