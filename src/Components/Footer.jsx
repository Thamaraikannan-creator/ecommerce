import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import '../Styles/Footer.css'
export default function Footer() {
  return (
    <div className="Footer">
        <div className="contact">
            <span>Contact Us:</span><br />
            phone:1234567890 <br /> Email:ekart@gmail.com
        </div>
        <div className="connect">
            <FacebookIcon/> <InstagramIcon/> <YouTubeIcon/> <XIcon/>
        </div>
    </div>
  )
}
