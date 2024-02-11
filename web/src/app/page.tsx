import { NextPage } from "next";
import dynamic from "next/dynamic";
import { Box, Container, Typography } from "@mui/joy";

const Player = dynamic(() => import("@/components/Player"), { ssr: false });

const HomePage: NextPage = () => {
  return (
    <Box>
      <Container maxWidth="xl" sx={{ pt: 3 }}>
        <Box>
          <Typography level="h1">Open Streaming</Typography>
        </Box>
      </Container>

      <Container sx={{ pt: 3 }}>
        <Box
          width="full"
          bgcolor="black"
          borderRadius={8}
          sx={{ aspectRatio: 16 / 9 }}
        >
          <Player />
        </Box>
        <Box pt={3}>
          <Typography level="h3" mt={1}>
            Big Buck Bunny
          </Typography>
          <Typography level="body-lg" color="neutral">
            An infinite Big Buck Bunny live stream
            <br />
            Credits: Media files are © copyright Blender Foundation |{" "}
            <a href="https://www.blender.org" target="_blank">
              www.blender.org
            </a>
            .
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
