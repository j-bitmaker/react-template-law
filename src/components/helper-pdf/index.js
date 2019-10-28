import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


let pdf = new jsPDF();
const createPDF = (img, save) =>{
    pdf.addImage(img, 'JPEG', 18, 10);
    if (!save){
        pdf.addPage()
    } else {
        pdf.save("confident.pdf")
        pdf = new jsPDF()
              }
}
const createPage = (page, save) =>{ 
    //page - фрагмент кода, который будет преобразован в pdf-страницу; 
    //save - опциональный параметр, определяющий, является ли заданная страницей последней (если да, то true)
    html2canvas(page.current)
    .then((img) => {
        createPDF(img.toDataURL('html2canvas'), save);
        })
}
    
    export default createPage