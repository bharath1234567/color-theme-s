import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/Global";
import HeaderComponent from "./Header";
import { blue, brown, dark, green, light, pink } from "./styles/Theme.styled";
import { ThemeButton, ThemeContainer } from "./styles/ThemeSwitching.styled";
import { ThemeCard } from "./styles/Cards.styled";
import Quotes from "./Quotes";
import FooterComponent from "./Footer";
import axios from "axios";
export default function Home({onLogout}) {
  const userId = sessionStorage.getItem("userId");
  const [selectedTheme, setSelectedTheme] = useState(light); // react hook to get the theme selected by the user 
  useEffect(() => {
    getColor();
 
  },[]);
  const getColor = async () => {
    axios
      .get(`http://localhost:8080/api/v1/auth/preferences/${userId}`)
      .then((res) => {
      
        if (res.data.success) {
          const temp = [blue, brown, dark, green, light, pink].filter((item) =>
            res.data.theme?.includes(item.name)
          )[0];

          setSelectedTheme(temp || light);
        }
      });

 
  };

  const HandleThemeChange = async (theme) => {
   
   await colorUpdate(theme);
    setSelectedTheme(theme);
  };



  const colorUpdate = async (data) => {

    await axios.post(`http://localhost:8080/api/v1/auth/preferences`, {
      userId,
      theme: data?.name,
    });
  };

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />

      <HeaderComponent onLogout={onLogout} />

      <ThemeContainer>
        <ThemeCard>
          <p>Select the theme of your choice:</p>
        </ThemeCard>

        <ThemeButton
          className={`light ${selectedTheme === light ? "active" : ""}`}
          onClick={() => HandleThemeChange(light)}
        ></ThemeButton>
        <ThemeButton
          className={`dark ${selectedTheme === dark ? "active" : ""}`}
          onClick={() => HandleThemeChange(dark)}
        ></ThemeButton>
        <ThemeButton
          className={`blue ${selectedTheme === blue ? "active" : ""}`}
          onClick={() => HandleThemeChange(blue)}
        ></ThemeButton>
        <ThemeButton
          className={`green ${selectedTheme === green ? "active" : ""}`}
          onClick={() => HandleThemeChange(green)}
        ></ThemeButton>
        <ThemeButton
          className={`brown ${selectedTheme === brown ? "active" : ""}`}
          onClick={() => HandleThemeChange(brown)}
        ></ThemeButton>
        <ThemeButton
          className={`pink ${selectedTheme === pink ? "active" : ""}`}
          onClick={() => HandleThemeChange(pink)}
        ></ThemeButton>
      </ThemeContainer>

      <Quotes />

     
      <FooterComponent />
    </ThemeProvider>
  );
}
