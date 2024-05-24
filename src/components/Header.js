import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { ThemeProvider, createGlobalStyle, keyframes } from 'styled-components';
import { FaSun, FaMoon, FaSearch } from 'react-icons/fa';
import './Header.css';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.bodyBackground};
    color: ${(props) => props.theme.bodyColor};
    transition: background-color 0.3s ease, color 0.3s ease;
  }
`;

const lightTheme = {
  background: '#fff',
  color: '#000',
  bodyBackground: '#fff',
  bodyColor: '#000'
};

const darkTheme = {
  background: '#333',
  color: '#fff',
  bodyBackground: '#333',
  bodyColor: '#fff'
};

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const rainbowColor = keyframes`
  0% { color: red; }
  15% { color: orange; }
  30% { color: yellow; }
  45% { color: green; }
  60% { color: blue; }
  75% { color: indigo; }
  90% { color: violet; }
`;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  transition: background-color 0.3s ease, transform 0.3s ease;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  perspective: 1000px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  transform: translateZ(50px);
`;

const LogoImage = styled.img`
  height: 40px;
  margin-right: 10px;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  animation: ${rotate} 10s linear infinite;
`;

const LogoText = styled.h1`
  font-family: 'Pacifico', cursive;
  font-size: 24px;
  margin: 0;
  animation: ${rainbowColor} 6s ease infinite;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  transform: translateZ(50px);

  .dropdown {
    position: relative;
    padding: 10px;

    &:hover .dropdown-content {
      display: block;
    }
  }

  .dropdown-content {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background: #eee;
    padding: 5px;
    border-radius: 3px;
    z-index: 1;
  }
`;

const SearchAndThemeContainer = styled.div`
  display: flex;
  align-items: center;
  transform: translateZ(50px);
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const SearchButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  padding: 5px;
`;

const ThemeToggle = styled.div`
  cursor: pointer;
  margin-left: 5px;
`;

const Header = () => {
  const [theme, setTheme] = useState(lightTheme);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    // Handle search submit logic here
    console.log('Searching for:', searchQuery);
  };

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HeaderContainer>
        <LogoContainer>
          <LogoImage src="https://cdn.dsmcdn.com/seller-store/uploads/960098/cbe2e782-7cc5-4597-8f8f-4c032933e6a2.jpeg" alt="Logo" />
          <LogoText>Ogion</LogoText>
        </LogoContainer>
        <Nav>
          <Link to="/">Menü</Link>
          <div className="dropdown">
            <Link to="/products">Ürünler</Link>
            <div className="dropdown-content">
              <Link to="/products/option1">Seçenek 1</Link>
              <Link to="/products/option2">Seçenek 2</Link>
            </div>
          </div>
          <Link to="/contact">İletişim</Link>
          <a href="https://www.trendyol.com/magaza/ogion-m-960098?sst=0" target="_blank" rel="noopener noreferrer">Trendyol Mağaza</a>
        </Nav>
        <SearchAndThemeContainer>
          <SearchContainer>
            <SearchInput
              type="text"
              placeholder="Ara..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <SearchButton onClick={handleSearchSubmit}>
              <FaSearch />
            </SearchButton>
          </SearchContainer>
          <ThemeToggle onClick={toggleTheme}>
            {theme === lightTheme ? <FaMoon size={20} /> : <FaSun size={20} />}
          </ThemeToggle>
        </SearchAndThemeContainer>
      </HeaderContainer>
    </ThemeProvider>
  );
};

export default Header;
