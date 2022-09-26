<template>
    <div>
        <nav>
            <ul>
                <li>
                    <router-link to="artists">Artistas</router-link>
                </li>
                <li>
                    <router-link to="signup">Cadastre-se</router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style scoped>
ul {
  list-style-type: none;
  margin: 0px;
  padding: 0px;
  overflow: hidden;
  background-color: rgb(50, 54, 143);
  font-family: sans-serif;
  display: flex;
  justify-content:center;
  align-items:center;
}


li a {
  display: block;
  color: white;
  text-align: center;
  padding: 20px 60px;
  text-decoration: none;
}

li a:hover {
  background-color: #111;
}
/* 
div{
    box-sizing: border-box;
}
nav {
    width: 100%;
    background-color: rgb(50, 54, 143);
    font-family: sans-serif;
    overflow: hidden;
}

ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    padding: 10px;
}

ul li {
    padding: 10px 60px;
}

ul li a {
    text-decoration: none;
    color: aliceblue;
}

ul li a:hover {
    background-color: #111;
} */
</style>