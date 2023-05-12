import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { tokens } from "../../theme";
import Header from "../../components/common/Header";
import { faqAccordion } from "../../utils/object";

const Faq = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Stack spacing={2}>
      <Header title="FAQ" subTitle="Frequently Asked Questions" />
      {faqAccordion.map((item, index) => (
        <Accordion key={index}>
          <AccordionSummary>
            <Typography level="h4">{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.description}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Stack>
  );
};

export default Faq;
