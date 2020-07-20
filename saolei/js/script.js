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
        markBox(box, e) {
            console.log("e", e)
            this.closeMenu(box) // 关掉菜单
            var flagDom = document.getElementById('flag'+box) // 获取到每次点击对应的dom
            if (flagDom.style.display == 'none') {
                flagDom.style.display = 'block'
                e.target.innerHTML = "撤标" // 改变了li标签的值
            } else {
                flagDom.style.display = 'none'
                e.target.innerHTML = "标记"
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
        closeMenu(boxNum){  // 关闭盒子菜单
            var menuDom = document.getElementById('menu' + boxNum)
            menuDom.style.display = "none";
        }
    }
})