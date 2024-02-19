import React from "react";
import { Page, Text, View, Document, Image } from '@react-pdf/renderer';

//Logo:
import logo from '../../../../images/logo/TBG-logo.png'

//Styles:
import { styles } from "./new-owner-styles";

//Variables:
import { behaviorQs } from "../sections/pet/pet-questions";
import { healthQs } from "../sections/pet/pet-questions";

const ownerSect = (formData, ownerCount) => 
ownerCount.map((__, index) => 
    <View 
        key={`owner${index + 1}`}
        style={[index % 2 !== 0 ? styles.off_color : null, styles.num_section]}
    >
        <Text style={styles.numbered_title}>
            Owner {index + 1}
        </Text>
        <View style={styles.view_row}>
            <View style={styles.view_col}>
                <Text style={[styles.section_info, styles.info_title]}>
                    Name 
                </Text>
                <Text style={styles.section_info}>
                    {formData[`owner${index + 1}_first_name`]} {formData[`owner${index + 1}_last_name`]} 
                </Text>
            </View>
                        
            <View style={styles.view_col}>
                <Text style={[styles.section_info, styles.info_title]}>
                    Phone Number
                </Text>
                <Text style={styles.section_info}>
                    {formData[`owner${index + 1}_phone`]}                    
                </Text>
            </View>
        </View>
                    
        <View style={styles.view_row}>
            <View style={styles.view_col}>
                <Text style={[styles.section_info, styles.info_title]}>
                    Email
                </Text>
                <Text style={styles.section_info}>
                    {formData[`owner${index + 1}_email`]}
                </Text>
            </View>
            
            <View style={styles.view_col}>
                <Text style={[styles.section_info, styles.info_title]}>
                    Address
                </Text>
                <Text style={styles.section_info}>
                    {formData[`owner${index + 1}_address1`]}
                </Text>
                <Text style={styles.section_info}>
                    {formData[`owner${index + 1}_address2`]}
                </Text>
                <Text style={styles.section_info}>
                    {`${formData[`owner${index + 1}_city`]}, ${formData[`owner${index + 1}_state`]} ${formData[`owner${index + 1}_zipcode`]}`}
                </Text>
            </View>
        </View>
    </View>
)

const emergencySect = (formData, emergencyCount) => 
emergencyCount.map((__, index) =>
    <View 
        key={`emergency${index + 1}`}
        style={[index % 2 !== 0 ? styles.off_color : null, styles.num_section]}
    >
        <Text style={styles.numbered_title}>
            Emergency Contact {index + 1}
        </Text>
        <View style={styles.view_row}>
            <View style={styles.view_col}>
                <Text style={[styles.section_info, styles.info_title]}>
                    Name 
                </Text>
                <Text style={styles.section_info}>
                    {formData[`emergency${index + 1}_name`]}
                </Text>
            </View>
                        
            <View style={styles.view_col}>
                <Text style={[styles.section_info, styles.info_title]}>
                    Phone Number
                </Text>
                <Text style={styles.section_info}>
                    {formData[`emergency${index + 1}_phone`]}                    
                </Text>
            </View>
        </View>
                    
        <View style={styles.view_row}>
            <View style={styles.view_col}>
                <Text style={[styles.section_info, styles.info_title]}>
                    Relation
                </Text>
                <Text style={styles.section_info}>
                    {formData[`emergency${index + 1}_relation`]}
                </Text>
            </View>
            
            <View style={styles.view_col}>
                <Text style={[styles.section_info, styles.info_title]}>
                    Permission to Make Decisions
                </Text>
                <Text style={styles.section_info}>
                    {formData[`emergency${index + 1}_permission`]}
                </Text>
            </View>
        </View>
    </View>
)

const authSect = (formData, authCount) => 
authCount.map((__, index) =>
    <View 
        key={`emergency${index + 1}`}
        style={[index % 2 !== 0 ? styles.off_color : null, styles.num_section]}
    >
        <Text style={styles.numbered_title}>
            Person {index + 1}
        </Text>
        <View style={styles.view_row}>
            <View style={styles.view_col}>
                <Text style={[styles.section_info, styles.info_title]}>
                    Name 
                </Text>
                <Text style={styles.section_info}>
                    {formData[`auth${index + 1}_name`]}
                </Text>
            </View>

            <View style={styles.view_col}>
                <Text style={[styles.section_info, styles.info_title]}>
                    Relation
                </Text>
                <Text style={styles.section_info}>
                    {formData[`auth${index + 1}_relation`]}
                </Text>
            </View>
                        
            <View style={styles.view_col}>
                <Text style={[styles.section_info, styles.info_title]}>
                    Phone Number
                </Text>
                <Text style={styles.section_info}>
                    {formData[`auth${index + 1}_phone`]}                    
                </Text>
            </View>
        </View>
    </View>
)

let petSect = (formData, countPets) => 
countPets.map((__, index) => 
    <View 
        key={`pet${index + 1}`}
        style={[index % 2 !== 0 ? styles.off_color : null, styles.num_section]}
    >
        <Text style={styles.numbered_title}>
            Pet {index + 1}
        </Text>
        <View style={styles.view_row}>
            <View style={styles.view_col}>
                <Text style={[styles.section_info, styles.info_title]}>
                    Name 
                </Text>
                <Text style={styles.section_info}>
                    {formData[`pet${index + 1}_name`]}
                </Text>
            </View>
                        
            <View style={styles.view_col}>
                <Text style={[styles.section_info, styles.info_title]}>
                    Species
                </Text>
                <Text style={styles.section_info}>
                    {formData[`pet${index + 1}_species`]}                    
                </Text>
            </View>

            <View style={styles.view_col}>
                <Text style={[styles.section_info, styles.info_title]}>
                    Breed
                </Text>
                <Text style={styles.section_info}>
                    {formData[`pet${index + 1}_breed`]}                    
                </Text>
            </View>

            <View style={styles.view_col}>
                <Text style={[styles.section_info, styles.info_title]}>
                    Color
                </Text>
                <Text style={styles.section_info}>
                    {formData[`pet${index + 1}_color`]}                    
                </Text>
            </View>
        </View>
                    
        <View style={styles.view_row}>
            <View style={styles.view_col}>
                <Text style={[styles.section_info, styles.info_title]}>
                    Sex
                </Text>
                <Text style={styles.section_info}>
                    {formData[`pet${index + 1}_sex`]}
                </Text>
            </View>
            
            <View style={styles.view_col}>
                <Text style={[styles.section_info, styles.info_title]}>
                    Altered
                </Text>
                <Text style={styles.section_info}>
                    {formData[`pet${index + 1}_altered`]}
                </Text>
            </View>

            <View style={styles.view_col}>
                <Text style={[styles.section_info, styles.info_title]}>
                    Weight
                </Text>
                <Text style={styles.section_info}>
                    {formData[`pet${index + 1}_weight`]}
                </Text>
            </View>

            <View style={styles.view_col}>
                <Text style={[styles.section_info, styles.info_title]}>
                    Date of Birth
                </Text>
                <Text style={styles.section_info}>
                    {formData[`pet${index + 1}_dob`]}
                </Text>
            </View>
        </View>

        {/* Behavior Section */}
        <View style={[styles.view_row, styles.behave_title]}>
            <Text>
                Behavioral Information
            </Text>
        </View>

        <View style={styles.view_row}>
            <View style={styles.view_col}>
                <Text style={[styles.section_info, styles.info_title]}>
                    {`1) ${behaviorQs[0]}`}
                </Text>
                <Text style={[styles.section_info, styles.pet_ans]}>
                    {formData[`pet${index + 1}_destructive`]}
                </Text>

                {
                    formData[`pet${index + 1}_destructive`] === 'yes' ?
                    <>
                    <Text style={[styles.section_info, styles.pet_ans, {marginTop: '10px', fontWeight: 'bold'}]}>
                        Please Explain
                    </Text>
                    <Text style={[styles.section_info, styles.pet_ans]}>
                        {formData[`pet${index + 1}_destructive_explain`]}
                    </Text>
                    </>
                    : null
                }
            </View>
        </View>

        <View style={styles.view_row}>
            <View style={styles.view_col}>
                <Text style={[styles.section_info, styles.info_title]}>
                    {`2) ${behaviorQs[1]}`}
                </Text>
                <Text style={[styles.section_info, styles.pet_ans]}>
                    {formData[`pet${index + 1}_fence`]}
                </Text>

                {
                    formData[`pet${index + 1}_fence`] === 'yes' ?
                    <>
                    <Text style={[styles.section_info, styles.pet_ans, {marginTop: '10px', fontWeight: 'bold'}]}>
                        Please Explain
                    </Text>
                    <Text style={[styles.section_info, styles.pet_ans]}>
                        {formData[`pet${index + 1}_fence_explain`]}
                    </Text>
                    </>
                    : null
                }
            </View>
        </View>

        <View style={styles.view_row}>
            <View style={styles.view_col}>
                <Text style={[styles.section_info, styles.info_title]}>
                    {`3) ${behaviorQs[2]}`}
                </Text>
                <Text style={[styles.section_info, styles.pet_ans]}>
                    {formData[`pet${index + 1}_guard`]}
                </Text>

                {
                    formData[`pet${index + 1}_guard`] === 'yes' ?
                    <>
                    <Text style={[styles.section_info, styles.pet_ans, {marginTop: '10px', fontWeight: 'bold'}]}>
                        Please Explain
                    </Text>
                    <Text style={[styles.section_info, styles.pet_ans]}>
                        {formData[`pet${index + 1}_guard_explain`]}
                    </Text>
                    </>
                    : null
                }
            </View>
        </View>

        <View style={styles.view_row}>
            <View style={styles.view_col}>
                <Text style={[styles.section_info, styles.info_title]}>
                    {`4) ${behaviorQs[3]}`}
                </Text>
                <Text style={[styles.section_info, styles.pet_ans]}>
                    {formData[`pet${index + 1}_social`]}
                </Text>

                {
                    formData[`pet${index + 1}_social`] === 'yes' ?
                    <>
                    <Text style={[styles.section_info, styles.pet_ans, {marginTop: '10px', fontWeight: 'bold'}]}>
                        Please Explain
                    </Text>
                    <Text style={[styles.section_info, styles.pet_ans]}>
                        {formData[`pet${index + 1}_social_explain`]}
                    </Text>
                    </>
                    : null
                }
            </View>
        </View>

        <View style={styles.view_row}>
            <View style={styles.view_col}>
                <Text style={[styles.section_info, styles.info_title]}>
                    {`5) ${behaviorQs[4]}`}
                </Text>
                <Text style={[styles.section_info, styles.pet_ans]}>
                    {formData[`pet${index + 1}_kennel`]}
                </Text>

                {
                    formData[`pet${index + 1}_kennel`] === 'yes' ?
                    <>
                    <Text style={[styles.section_info, styles.pet_ans, {marginTop: '10px', fontWeight: 'bold'}]}>
                        Please Explain
                    </Text>
                    <Text style={[styles.section_info, styles.pet_ans]}>
                        {formData[`pet${index + 1}_kennel_explain`]}
                    </Text>
                    </>
                    : null
                }
            </View>
        </View>

        <View style={styles.view_row}>
            <View style={styles.view_col}>
                <Text style={[styles.section_info, styles.info_title]}>
                    {`6) ${behaviorQs[5]}`}
                </Text>
                <Text style={[styles.section_info, styles.pet_ans]}>
                    {
                        formData[`pet${index + 1}_extra_behavior`] ?
                        formData[`pet${index + 1}_extra_behavior`]
                        : 'N/A'
                    }
                </Text>
            </View>
        </View>

        {/* Health Section */}
        <View style={[styles.view_row, styles.behave_title]}>
            <Text>
                Health Information
            </Text>
        </View>

        <View style={styles.view_row}>
            <View style={styles.view_col}>
                <Text style={[styles.section_info, styles.info_title]}>
                    {`1) ${healthQs[0]}`}
                </Text>
                <Text style={[styles.section_info, styles.pet_ans]}>
                    {formData[`pet${index + 1}_food_allergy`]}
                </Text>

                {
                    formData[`pet${index + 1}_food_allergy`] === 'yes' ?
                    <>
                    <Text style={[styles.section_info, styles.pet_ans, {marginTop: '10px', fontWeight: 'bold'}]}>
                        Please Explain
                    </Text>
                    <Text style={[styles.section_info, styles.pet_ans]}>
                        {formData[`pet${index + 1}_food_allergy_explain`]}
                    </Text>
                    </>
                    : null
                }
            </View>
        </View>

        <View style={styles.view_row}>
            <View style={styles.view_col}>
                <Text style={[styles.section_info, styles.info_title]}>
                    {`2) ${healthQs[1]}`}
                </Text>
                <Text style={[styles.section_info, styles.pet_ans]}>
                    {formData[`pet${index + 1}_medical_condition`]}
                </Text>

                {
                    formData[`pet${index + 1}_medical_condition`] === 'yes' ?
                    <>
                    <Text style={[styles.section_info, styles.pet_ans, {marginTop: '10px', fontWeight: 'bold'}]}>
                        Please Explain
                    </Text>
                    <Text style={[styles.section_info, styles.pet_ans]}>
                        {formData[`pet${index + 1}_medical_condition_explain`]}
                    </Text>
                    </>
                    : null
                }
            </View>
        </View>

        <View style={styles.view_row}>
            <View style={styles.view_col}>
                <Text style={[styles.section_info, styles.info_title]}>
                    {`3) ${healthQs[3]}`}
                </Text>
                <Text style={[styles.section_info, styles.pet_ans]}>
                    {formData[`pet${index + 1}_past_injury`]}
                </Text>

                {
                    formData[`pet${index + 1}_past_injury`] === 'yes' ?
                    <>
                    <Text style={[styles.section_info, styles.pet_ans, {marginTop: '10px', fontWeight: 'bold'}]}>
                        Please Explain
                    </Text>
                    <Text style={[styles.section_info, styles.pet_ans]}>
                        {formData[`pet${index + 1}_past_injury_explain`]}
                    </Text>
                    </>
                    : null
                }
            </View>
        </View>

        <View style={styles.view_row}>
            <View style={styles.view_col}>
                <Text style={[styles.section_info, styles.info_title]}>
                    {`4) ${healthQs[4]}`}
                </Text>
                <Text style={[styles.section_info, styles.pet_ans]}>
                    {
                        formData[`pet${index + 1}_extra_medical`] ?
                        formData[`pet${index + 1}_extra_medical`] 
                        : 'N/A'
                    }
                </Text>
            </View>
        </View>
    </View>
)

export default function PdfDoc(props){
    const { formData, ownerCount, emergencyCount, authCount, countPets } = props

    let pdfTitle = `${formData[`owner1_first_name`]} ${formData[`owner1_last_name`]}'s New Owner Form`

    return (
        <Document title={pdfTitle}>
            <Page size='A4' style={styles.page}>
                <View style={styles.header_logo}>
                    <Image src={logo} style={styles.logo}/>
                    <View style={styles.header_view}>
                        <Text style={styles.header}>
                            New Owner Form
                        </Text>
                    </View>
                </View>

                <View style={[styles.view_row, styles.section]}>
                    <View style={styles.view_col}>
                        <Text style={[styles.section_info, styles.info_title]}>
                            How did you hear about us?
                        </Text>
                        <Text style={styles.section_info}>
                            {formData['referred_by']}
                        </Text>
                    </View>
                </View>
                
                <View style={styles.section}>
                    <Text style={styles.section_title}>
                        Owner(s) Information 
                    </Text>

                    {
                        ownerCount ? ownerSect(formData, ownerCount) : null
                    }
                </View>

                <View style={styles.section}>
                    <Text style={styles.section_title}>
                        Emergency Contact(s)
                    </Text>

                    {
                        emergencyCount ? emergencySect(formData, emergencyCount) : null
                    }
                </View>

                {  
                    formData['auth1_name'] ?
                    <View style={styles.section}>
                        <Text style={styles.section_title}>
                            People Authorized to Pickup
                        </Text>
                    
                        {
                            authCount  ?
                            authSect(formData, authCount) : null
                        }
                    </View>
                    : null
                }

                <View style={styles.section}>
                    <Text style={styles.section_title}>
                        Pet(s) Information 
                    </Text>

                    {
                        countPets ? petSect(formData, countPets) : null
                    }
                </View>
                    
                {/* <Text 
                    style={styles.pageNumber} 
                    render={({pageNumber, totalPages }) => (`${pageNumber} / ${totalPages}`)} 
                    fixed
                /> */}
            </Page>
        </Document>
    )
}
