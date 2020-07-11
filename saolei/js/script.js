new Vue ({
    el: "#game-ui",
    data: {
        boxs: 100,
        inputNum: ""
    },
    methods: {
        settingGame() {
            this.boxs = parseInt(this.inputNum) * parseInt(this.inputNum)
        },
        listMove(e) {
            // console.log(e.target.className)
            if (e.target.className == "li") {
                e.target.className = "li active"
            } else {
                e.target.className = "li"
            }
        },
        openMenu(boxNum) {  // 打开盒子菜单
            var menuDom = document.getElementById('menu' + boxNum)
            menuDom.style.display = "block";
            for (let i = 1; i <= this.boxs; i++) {
                if (boxNum != i) {
                    this.closeMenu(i)
                }
            }
        },
        closeMenu(boxNum){
            var menuDom = document.getElementById('menu' + boxNum)
            menuDom.style.display = "none";
        }
    }
})