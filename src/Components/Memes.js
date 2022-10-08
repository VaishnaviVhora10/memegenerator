import React from "react";
import { Box, TextField, Typography, Button } from "@mui/material";
import image2 from "../Images/image2.jpg";
import { useState } from "react";

function Memes() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [cont1, setCont1] = useState([]);
  const [cont2, setCont2] = useState([]);
  const [img1, setImg1] = useState([]);
  const [img2, setImg2] = useState([]);

  function handleSubmit() {
    setCont1([text1]);
    setCont2([text2]);
    setImg1(image2);
    setImg2(image2);
    setText1("");
    setText2("");
  }

  return (
    <>
      <Box sx={{ pt: 15, display: "flex", ml: 70, mb: 10 }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <img sx={{ pt: 1, pb: 2 }} width="200" src={image2}></img>
          <img sx={{ pt: 1, mt: 5 }} width="200" src={image2}></img>
          <Typography sx={{ mt: -10, fontSize: 30, color: "white" }}>
            {text2}
          </Typography>
          <Typography sx={{ mt: -25, fontSize: 30, color: "white" }}>
            {text1}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex", ml: 70, mb: 10 }}>
        <Box></Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            ml: 30,
            mt: -15,
            color: "white",
          }}
        >
          <TextField
          sx={{ mt: 5, width: 500 }}
            type="text"
            variant="outlined"
            value={text1}
            placeholder="Text#1"
            onChange={(e) => setText1(e.target.value)}
          ></TextField>
          <TextField
            sx={{ mt: 5, width: 500 }}
            type="text"
            variant="outlined"
            placeholder="Text#2"
            value={text2}
            onChange={(e) => setText2(e.target.value)}
          ></TextField>
        </Box>
      </Box>
      <Button
        variant="contained"
        onClick={handleSubmit}
        sx={{ ml: 80, width: "35ch", height: "5ch", mb: 5 }}
      >
        Generate Meme
      </Button>

      <Box>
        <Box sx={{ mt: 10, display: "flex", flexDirection: "column", ml: 70 }}>
          <img sx={{ pt: 1 }} width="200" src={img1}></img>
          <img sx={{ pt: 1 }} width="200" src={img2}></img>
          <Typography sx={{ mt: -15, fontSize: 30, mr: 100, color: "white" }}>
            {cont2}
          </Typography>
          <Typography sx={{ mt: -19, fontSize: 30, mr: 100, color: "white"}}>
            {cont1}
          </Typography>
        </Box>
        <Box></Box>
        <Box></Box>
      </Box>
    </>
  );
}

export default Memes;
