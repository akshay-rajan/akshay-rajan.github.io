import React from 'react';

import { Tooltip } from "@nextui-org/tooltip";
import dpIcon from '../assets/dp_icon.jpg';

export default function ContactLinks() {
  return window.innerWidth >= 798 && (
    <div className='link-container'>
      <div className="mylinks">
        <div className="icon linkedin-icon">
          <Tooltip content="LinkedIn" placement="bottom" color="success" style={{color: 'white'}}>
            <a href="https://www.linkedin.com/in/iamakshayrajan/">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="linkedin" />
            </a>
          </Tooltip>
        </div>
        <div className="icon github-icon">
          <Tooltip content="Github" placement="bottom" color="success" style={{color: 'white'}}>
            <a href="https://github.com/akshay-rajan" >
              <img src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png" alt="github" />
            </a>
          </Tooltip>
        </div>
        <div className="icon leetcode-icon">
          <Tooltip content="LeetCode" placement="bottom" color="success" style={{color: 'white'}}>
            <a href="https://leetcode.com/u/akshayrajan/" >
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG3Ir9453MFZjzGK8jeX9en0kjW8igj-FTNg&s" alt="leetcode" />
            </a>
          </Tooltip>
        </div>
        <div className="icon myicon">
          <Tooltip content="Resume" placement="bottom" color="success" style={{color: 'white'}}>
            <a href="https://drive.google.com/file/d/1OAndl2Vdgvz096IhcTUArfRPpG7oadOm/view?usp=sharing">
              <img src={dpIcon} alt="DP" />
            </a>
          </Tooltip>
        </div>
      </div>  
    </div>
  );
}