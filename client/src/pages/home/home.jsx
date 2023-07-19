
import React from "react";
import Form from '../../components/form/form.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './home.css';

function Home() {
    return (
        <>
            
                <div className="col sm-6">
                    <div className="hero-text">
                        <h1 className="greeting">Welcome!</h1>
                        <br /><br /><br /><br /><br />
                        <h2>I'm Jithmal Danusha</h2>
                        <h4>And I'm a Software Developer</h4>
                        <button className="Hire">Hire me</button>
                    </div>
                </div>
            <div className="">
                <Form/>
            </div>

        </>
    )
}

export default Home