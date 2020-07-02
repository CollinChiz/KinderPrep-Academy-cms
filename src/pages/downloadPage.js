import React from "react";
import Layout from "../components/Layout";
import "../../src/global.css"
const downloadPage = () => (
  <>
    <Layout>
      <section className="section">
        <div className="container">
          <div className="content">
            <h1>Application Download</h1>
            <div>
              Below is a button to download the Application for Admittance in a word document. 
              Please fill out this document digitally and include any attachments in this word document. <br></br>
              After document is filled out visit the Application Submission page and submit this document with your name. <br></br>

              For help including attachments in the word document, see below

              <h3>Attaching files to word document</h3>
              <p> To include a file in your word document, go to the "Insert" tab under the "Text" column and select "Object" in the bottom right corner.
                  Select "Create From File" and then select "Browse" to find the desired file. Then click "OK" </p>
            </div>
            <a href={"KinderPrep Academy Application for Admittance.docx"} download><button className="downloadButton">Download Application</button>
            </a>{" "}
          </div>
        </div>
      </section>
    </Layout>
  </>
);

export default downloadPage;
