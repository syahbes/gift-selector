import { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Button, Paper, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";

//appcontainer
const MyBox = styled(Box)({
  backgroundColor: "#fbf3ab",
  height: "100vh",
  width: "100vw",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // gap: "10px",
  flexDirection: "column",
});

const DisplayGift = styled(Box)({
  backgroundColor: "#f0b9dd",
  padding: "15px 25px",
  fontSize: "1.5em",
  borderRadius: "15px",
  marginBottom: "40px",
});

const OptionsBox = styled(Box)({
  width: "250px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: "25px",
  padding: "5px",
});

function App() {
  const [gift, setGift] = useState({
    totalAmount: 0,
    food: "",
    shipping: "",
    balloons: false,
  });

  const handleChange = (e) => {
    if (e.target.name === "balloons") {
      setGift((prev) => ({ ...prev, balloons: !prev.balloons }));
    } else {
      setGift((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const calculate = () => {
    let x =
      (gift.food ? gift.food : 0) +
      (gift.shipping ? gift.shipping : 0) +
      (gift.balloons ? 7 : 0);
    setGift((prev) => ({ ...prev, totalAmount: x }));
  };

  return (
    <MyBox>
      <Paper elevation={3} sx={{ padding: "15px 25px"}}>
        <Typography variant="h4" marginBottom={4}>
        Gift Selector 🎁
        </Typography>
      
      <DisplayGift>
        Total gift cost:{" "}
        <span style={{ color: "#f04c86" }}>{gift.totalAmount}</span>
      </DisplayGift>
      <OptionsBox>
        <FormControl fullWidth>
          <InputLabel id="food">Food</InputLabel>
          <Select
            labelId="selectFood"
            id="001"
            value={gift.food}
            label="Food"
            onChange={handleChange}
            name="food"
          >
            <MenuItem value={5}>🍓 Strawberries - $5</MenuItem>
            <MenuItem value={10}>🍫 Chocolate - $10</MenuItem>
            <MenuItem value={20}>🧁 Cupcake - $20</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="shipping">Shipping</InputLabel>
          <Select
            labelId="selectShipping"
            id="002"
            value={gift.shipping}
            label="Shipping"
            onChange={handleChange}
            name="shipping"
          >
            <MenuItem value={5}>🛹 Skateboard - $5</MenuItem>
            <MenuItem value={50}>🚗 Car - $50</MenuItem>
            <MenuItem value={500}>🚁 Helicopter - $500</MenuItem>
          </Select>
        </FormControl>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={gift.balloons}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
            }
            label="🎈 Add balloons ? - $7"
            name="balloons"
          />
        </FormGroup>
        <Button
          variant="contained"
          fullWidth
          onClick={calculate}
        >
          Calculate
        </Button>
      </OptionsBox>
      </Paper>
    </MyBox>
  );
}

export default App;
