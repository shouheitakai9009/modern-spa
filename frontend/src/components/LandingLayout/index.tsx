import { Box } from "@radix-ui/themes";
import { Outlet } from "react-router-dom";

export const LandingLayout = () => {
  return (
    <Box width="100%">
      <Outlet />
    </Box>
  );
};
