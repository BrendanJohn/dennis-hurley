import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import pdfFile from '../files/dennis-hurley-resume.pdf'
import '../index.css';
import { Link } from 'react-router-dom';
pdfjs.GlobalWorkerOptions.workerSrc = './pdf.worker.min.js';


export default function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="resume">
        <div className="d-flex justify-content-center">
          <Document
            file={pdfFile}
            onLoadSuccess={onDocumentLoadSuccess}
            className="resume"
          >
            <Page pageNumber={pageNumber} />
          </Document>
          </div>
          <div className="d-flex justify-content-center">
          <p>Page {pageNumber} of {numPages}</p>
          </div>
          <div className="d-flex justify-content-center">
            <Link to={pdfFile} target="_blank" download>Download</Link>
          </div>
    </div>
  );
}