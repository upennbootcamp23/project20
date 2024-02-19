import React  from "react";
import Footer from './components/footer';
import Header from './components/header';
import '../src/application.css';

function Application() {

    return (
        <div className="Application">
            <Header/>
            <Footer/>
        </div>
    );
}

export default Application;