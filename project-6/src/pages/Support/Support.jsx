import { BsMailbox } from "react-icons/bs"
import { BsMessenger } from "react-icons/bs"
import DashboardLayout from "../../components/DashboardLayout"
import ContactCard from "./components/ContactCard"
import SupportCard from "./components/SupportCard"
import InfoCard from "../Dashboard/components/InfoCard"
import { Stack } from "@chakra-ui/react"
const Support = () => {
  return (
  <DashboardLayout>
     <Stack spacing="5rem">
     <SupportCard
          icon={BsMailbox} 
          leftComponent={<ContactCard />} 
          title="Contact Us" 
          text="Have a question or just want to know more? Feel to reach out to
                us." 
        />
      <SupportCard
          icon={BsMessenger} 
          leftComponent={
             <InfoCard
             inverted={true}
             tagText="Contact"
             imgUrl="/grid_bg.svg"
             text="Learn more about real state....."
           />
           } 
          title="Live Chat" 
          text="Don't have time to wait for the answer? Chat whith us now." 
        />
     </Stack>
  </DashboardLayout>
  );
};

export default Support