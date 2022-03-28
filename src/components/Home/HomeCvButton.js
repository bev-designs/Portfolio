import Axios from 'axios';
import FileDownload from 'js-file-download';
import { Link } from 'react-router-dom';

const HomeCvButton = () => {

   const pdfDownload = (e) => {
       e.preventDefault();

    //    Axios({
    //        url: 'http://localhost:4000',
    //        method: 'GET',
    //        responseType: 'blob',
    //    }).then((res) => {
    //        console.log(res);
    //        FileDownload(res.data, 'BeverleyCV.pdf');
    //    });
   
   };   

return (
    <button className="cvButton">
        <Link 
           to="/files/resume.pdf" 
           target="_blank" 
           download 
           style={{textDecoration: 'none', color: 'rgb(129, 118, 103)'}}
           >Download CV</Link>
    </button>

   )

};

export default HomeCvButton;