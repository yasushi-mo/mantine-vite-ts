// organize-imports-ignore
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import { Button, MantineProvider } from "@mantine/core";
import { Notifications, notifications } from "@mantine/notifications";

function App() {
  return (
    <MantineProvider>
      <Notifications />

      <Button
        onClick={() =>
          notifications.show({
            title: "Default notification",
            message: "Do not forget to star Mantine on GitHub! 🌟",
          })
        }
      >
        Show notification
      </Button>
    </MantineProvider>
  );
}

export default App;
