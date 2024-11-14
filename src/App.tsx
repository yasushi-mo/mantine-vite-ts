// organize-imports-ignore
import "@mantine/core/styles.css";
import { Center, MantineProvider, Stepper, StepperStep } from "@mantine/core";
import classes from "./css_modules/Stepper.module.css";

function App() {
  return (
    <MantineProvider>
      <Center w={1080} p="lg">
        <Stepper active={1} classNames={classes}>
          <StepperStep label="Step1" completedIcon={1} />
          <StepperStep label="Step2" />
          <StepperStep label="Step3" />
        </Stepper>
      </Center>
    </MantineProvider>
  );
}

export default App;
