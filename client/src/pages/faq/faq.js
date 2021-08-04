import React from 'react';
import './faq.css';
import NavigationTool from '../../components/navigationTool/navigationTool';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Faq() {
    return (
        <div className="faq">
            <NavigationTool currentPage="faq" />
            <div className="faq__title">FAQ</div>
            <div className="faq__category">Category one</div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    Question One?
                </AccordionSummary>
                <AccordionDetails>
                    Answer One.
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    Question Two?
                </AccordionSummary>
                <AccordionDetails>
                    Answer Two.
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    Question Three?
                </AccordionSummary>
                <AccordionDetails>
                    Answer Three.
                </AccordionDetails>
            </Accordion>
            <div className="faq__category">Category Two</div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    Question One?
                </AccordionSummary>
                <AccordionDetails>
                    Answer One.
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    Question Two?
                </AccordionSummary>
                <AccordionDetails>
                    Answer Two.
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    Question Three?
                </AccordionSummary>
                <AccordionDetails>
                    Answer Three.
                </AccordionDetails>
            </Accordion>
            <div className="faq__category">Category Three</div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    Question One?
                </AccordionSummary>
                <AccordionDetails>
                    Answer One.
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    Question Two?
                </AccordionSummary>
                <AccordionDetails>
                    Answer Two.
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    Question Three?
                </AccordionSummary>
                <AccordionDetails>
                    Answer Three.
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default Faq
