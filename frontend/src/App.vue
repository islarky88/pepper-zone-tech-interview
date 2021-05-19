<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
// CSS reset
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

// main CSS

#app {
  font-family: 'Rubik', sans-serif;
  color: $dark-color;
  font-size: 12px;

  h1 {
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 37px;
  }

  h3 {
    font-family: Rubik;
    font-style: normal;
    font-size: 20px;
    font-weight: 300;
  }
  h4 {
    font-family: Rubik;
    font-weight: normal;
    font-size: 12px;
    text-align: left;
    color: #1b1b1b;
  }

  a:link,
  a:visited {
    text-decoration: none;
    color: $primary-color;
  }
  a:hover {
    text-decoration: underline;
    color: $primary-color;
  }
}
</style>
