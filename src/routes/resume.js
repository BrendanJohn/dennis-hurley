import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Link } from 'react-router-dom';
import pdfFile from '../files/dennis.pdf'
import downloadFile from '../files/dennis-hurley.pdf'
import '../index.css';
pdfjs.GlobalWorkerOptions.workerSrc = './pdf.worker.min.js';


export default function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
        <div className="d-flex justify-content-center ">
          <Document
            file={pdfFile}
            onLoadSuccess={onDocumentLoadSuccess}
            className="resume"
          >
            <Page pageNumber={pageNumber} />
          </Document>
          </div>
          <div className="d-flex justify-content-center resume">
          <p>Page {pageNumber} of {numPages}</p>
          </div>
          <div className="d-flex justify-content-center resume">
          <Link to={downloadFile} target="_blank" download>Download</Link>
          </div>
    </div>
  );
}