import React from 'react';
import '../footer.css';

function Footer() {
    return (
        <div className="footer" id="footer">
            <div className='img-link'>
                <a href="https://github.com/upennbootcamp2323" target="_blank"><img src="https://img.icons8.com/color/48/000000/github-2.png" alt="Github" className="icon"/></a>
            </div>
            <p className='footer-info'>
                &copy; 2024 Alexander Egerev  |  <a href="https://github.com/upennbootcamp23/project20/blob/main/src/assets/Egerev_Resume2023.docx.pdf" className="link">download resume</a>  |  <a href="https://coolors.co/f06543-e8e9eb-e0dfd5-313638-f09d51"></a>  |  made with <img id="react-icon" src="https://img.icons8.com/color/48/000000/react-native.png" alt="React"/>
            </p>

        </div>
    )
}

export default Footer;