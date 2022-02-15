<template>
    <div id="app">
        <el-container>
            <!-- <el-header style="text-align: right; font-size: 12px;padding:0;">
                <el-menu
                    default-active="/user"
                    class="el-menu-demo"
                    mode="horizontal"
                    background-color="#545c64"
                    text-color="#fff"
                    :router="true"
                    active-text-color="#ffd04b"
                >
                    <el-menu-item index="/user">vue子应用首页</el-menu-item>
                    <el-menu-item index="/about">vue子应用列表页</el-menu-item>
                </el-menu>
            </el-header> -->
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<style>
*{margin: 0;padding: 0;}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
