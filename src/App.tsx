import { Button, Center, MantineProvider } from "@mantine/core";
import { useState } from "react";
import "@mantine/core/styles.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <MantineProvider>
      <Center w={1080}>
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </Center>
    </MantineProvider>
  );
}

export default App;
