
import image from"next/image"
import Link from "next/link";
import Navbar from "./Component/Navbar";


const Home= () => {
  return (



<div> 

  <Navbar/> 
          <div>
            <ul>
          
            <li> <Link href="/">HomePage</Link></li>    
            <li> <Link href="/AboutPage">AboutPage</Link></li>
          <li> <Link href="/ContactPage">ContactPage
           </Link></li>
          <li> <Link href="/ServicePage">ServicePage</Link></li>
      
          
       


          
            </ul>
          
          </div>      

          
    </div>
       
        
  )
}

export default Home;



