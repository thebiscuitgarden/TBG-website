import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer"
import PdfDoc from "../make-pdf/new-owner-pdf";
import { styles } from "../make-pdf/new-owner-styles";


export default function DownloadFormPDF(props){
    const { countAuth, countEmergencyContacts, countPets, formData, ownerCountArr, pdfName } = props

    return(
        <PDFDownloadLink
            id="form-pdf-download"
            fileName={`${pdfName}.pdf`} 
            document={<PdfDoc
                formData={formData} 
                ownerCount={ownerCountArr}
                emergencyCount={countEmergencyContacts}
                authCount={countAuth}
                countPets={countPets}
                pdfName={pdfName}
        />}
            style={styles.download}
        >
            {({ blob, url, loading, error }) => {
                return loading ? 'Loading PDF' : 'Download Form'
            }}
        </PDFDownloadLink>
    )
}