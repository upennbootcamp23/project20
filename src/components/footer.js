import React from 'react';
import '../footer.css';

function Footer() {
    return (
        <div className="footer" id="footer">
            <div className='img-link'>
                <a href="https://github.com/upennbootcamp2323" target="_blank"><img src="https://img.icons8.com/color/48/000000/github-2.png" alt="Github" className="icon"/></a>
            </div>
            <p className='footer-info'>
                &copy; 2024 Alexander Egerev  |  <a href="https://github.com/upennbootcamp23/project20/blob/main/src/assets/Egerev_Resume2023.docx.pdf" className="link">download resume</a>  
            </p>

        </div>
    )
}

export default Footer;