Themed example


Theme 1:
```jsx
 const ThemeProvider = require('emotion-theming').ThemeProvider;
 const theme1 = require('../utils/myTheme').default;

 <ThemeProvider theme={theme1}>
    <ThemedButton type="primary"> Theme 1</ThemedButton>
 </ThemeProvider>
```

Theme 2:
```jsx
 const ThemeProvider = require('emotion-theming').ThemeProvider;
 const theme1 = require('../utils/myTheme2').default;

 <ThemeProvider theme={theme1}>
    <ThemedButton type="primary"> Theme 2</ThemedButton>
 </ThemeProvider>
```