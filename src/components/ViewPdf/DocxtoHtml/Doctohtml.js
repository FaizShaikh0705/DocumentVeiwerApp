// import React, { useState } from 'react';
// import mammoth from 'mammoth'; // A library for converting .docx to HTML

// const DocxToHtmlConverter = () => {
//   const [htmlContent, setHtmlContent] = useState('');

//   const handleFileUpload = (event) => {
//     const file = event.target.files[0];

//     if (file) {
//       const reader = new FileReader();

//       reader.onload = async (e) => {
//         const docxBuffer = e.target.result;
//         const result = await convertToHtml(docxBuffer);
//         setHtmlContent(result.value);
//       };

//       reader.readAsArrayBuffer(file);
//     }
//   };

//   const convertToHtml = (docxBuffer) => {
//     return new Promise((resolve, reject) => {
//       mammoth.extractRawText({ arrayBuffer: docxBuffer })
//         .then((result) => {
//           resolve(result); // Returns the raw HTML content
//         })
//         .catch((error) => {
//           reject(error);
//         });
//     });
//   };

//   return (
//     <div>
//       <h2>DOCX to HTML Converter</h2>
//       <input type="file" accept=".docx" onChange={handleFileUpload} />
//       <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
//     </div>
//   );
// };

// export default DocxToHtmlConverter;
