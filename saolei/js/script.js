new Vue ({
    el: "#game-ui",
    data: {
        boxs: 0,
        inputNum: "10",
        boomNum:20,
        booms:[] // 把20个雷选出来放进去
    },
    methods: {
        // 生成随机数
        randomNum() {
            var num = Math.floor(Math.random() * (this.boxs-1) + 1)
            return num
        },
        settingGame() {
            this.boxs = parseInt(this.inputNum) * parseInt(this.inputNum)
            for (let i = 0; i < this.boomNum; i++) {
                this.addBoom()
            }
            console.log(this.booms)
        },
        addBoom() {
            var num = this.randomNum()
            if (this.booms.indexOf(num) == -1 ) {
                this.booms.push(num)
            } else {
                this.addBoom()
            }
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