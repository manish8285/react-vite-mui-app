import { Box, Checkbox, FormControlLabel, Stack } from '@mui/material'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react'

const Departments = () => {
    const [checked, setChecked] = React.useState([true, false]);
    const handleChange = () => {
        setChecked((prev) => !prev);
      };

      const handleChange1 = (event) => {
        if(event.target.checked){
            document.getElementById("id"+event.target.id).style.display="block"
        }else{
            document.getElementById("id"+event.target.id).style.display="none"
        }
      };

    const departments = [
        {
          "department": "customer_service",
          "sub_departments": [
            "support",
            "customer_success"
          ]
        },
        {
          "department": "design",
          "sub_departments": [
            "graphic_design",
            "product_design",
            "web_design"
          ]
        }
      ]

      




  return (
    <div style={{textAlign:"left"}} >

        {
            departments.map((dep)=>(
                <Accordion style={{border:"none",boxShadow:"none",borderBox:"none"
                }} >
        <AccordionSummary
          
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
         <FormControlLabel
                        label={dep.department}
                        control={
                        <Checkbox     
                        />
                        }
                    />
          
        </AccordionSummary>
        <AccordionDetails>
            <Stack marginLeft={4}>
          {
            dep.sub_departments.map((sd)=>(
                <FormControlLabel
                            label={sd}
                            control={<Checkbox   />}
                        />
            ))
          }
          </Stack>
        </AccordionDetails>
      </Accordion>
            ))
        }
      

    </div>
  )
}

export default Departments