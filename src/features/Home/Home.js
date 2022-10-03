import React from 'react'
import { Link } from "react-router-dom";
import '../Home/Home.css'

export default function Home() {
  return (
    <div>
      <div className='container mt-5'>
      <div className='box mx-auto'>
        <div className='profile-details-name'>
            <h5>- HELLO -</h5><span className='fw-bold'><h1>I'm Siti Rosa<span className='lina fw-bolder'>Lina</span></h1></span>
            <p>Elit proident magna enim ex ex sit aliquip ex enim consectetur ea minim. Ex est dolor elit pariatur deserunt nisi. Ipsum reprehenderit amet anim in non. Elit id aliqua cillum culpa ex exercitation qui. Proident commodo velit consequat dolore eiusmod aliqua duis et tempor velit occaecat. Elit ullamco occaecat enim sit in ullamco ut duis eu sint duis nulla eiusmod.</p>
        </div>
        <div className='profile-options'>
          <button className='btnHire fw-bold my-4 px-4 py-2'>
              <Link className='contentButton' to="/Post">Get Post</Link>
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}
