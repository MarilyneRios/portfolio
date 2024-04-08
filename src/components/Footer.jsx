import { Link } from 'react-router-dom';
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { MdMailOutline } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <p className='text-footer pt-2'>
        <span className="fst-italic">{" "} Copyright © 2024 by Marilyne Rios</span>
      </p>
      <div className='link-footer'>
        <Link
          to="mailto:rios.marilyne@gmail.com"
          className="link-underline-light link-primary  "
        >
          <MdMailOutline  size={50}/>
        </Link>
        <Link
          to="https://github.com/MarilyneRios"
          target="_blank"
          className="link-underline-light link-primary  mx-4"
        >
         <FaGithub size={50}/>
        </Link>
        <Link
          to="https://www.linkedin.com/in/marilyne-rios-59a13015b"
          target="_blank"
          className="link-underline-light link-primary "
        >
          <TiSocialLinkedinCircular  size={70}/>
        </Link>
      </div>
    </div>
  )
}

export default Footer
