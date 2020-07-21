new Vue ({
    el: "#game-ui",
    data: {
        boxs: 0,
        inputNum: "10",
        boomNum:20,
        booms:[] // 把20个雷选出来放进去
    },
    methods: {
        // 点击扫雷
        standBox(box) {
            this.closeMenu(box) // 隐藏菜单。
            var boomBoxDom = document.getElementById("boomBox"+box)
            boomBoxDom.className = "boom-box activ"
        },
        boomLoop(box) {
            console.log(box)
            var has_boom = 0  // 点击的一个盒子周围八个相邻的方向炸弹的总数。
            // 左边
            var box_left = box - 1
            if (this.lastNum(box_left) >= 1) {
                if (this.booms.indexOf(box_left)!= -1) {
                    has_boom += 1;
                }
            }
            // 右边
            var box_right = box + 1
            if (this.lastNum(box_right) != 1) { // != 1说明 有右边
                if (this.booms.indexOf(box_right)!= -1) {
                    has_boom += 1;
                }
            }
            // 上边
            var box_top = box - 10
            if (box_top > 0) {
                if (this.booms.indexOf(box_top)!= -1) {
                    has_boom += 1;
                }
                //上左
                var box_top_left = box_top -1
                if (this.lastNum(box_top_left) >= 1) {
                    if (this.booms.indexOf(box_top_left)!= -1) {
                        has_boom += 1;
                    }
                }
                // 上右
                var box_top_right = box_top + 1
                if (this.lastNum(box_top_right) != 1) {
                    if (this.booms.indexOf(box_top_right)!= -1) {
                        has_boom += 1;
                    }
                } 
            }
            // 下边
            var box_bottom = box + 10
            if (box_bottom < this.boxs ) {
                if (this.booms.indexOf(box_bottom)!= -1) {
                    has_boom += 1;
                }
                //下左
                var box_bottom_left = box_bottom -1
                if (this.lastNum(box_bottom_left) >= 1) {
                    if (this.booms.indexOf(box_bottom_left)!= -1) {
                        has_boom += 1;
                    }
                }
                // 下右
                var box_bottom_right = box_bottom + 1
                if (this.lastNum(box_bottom_right) != 1) {
                    if (this.booms.indexOf(box_bottom_right)!= -1) {
                        has_boom += 1;
                    }
                } 
            }

            var aroundDom = document.getElementById('around'+box)
            aroundDom.innerHTML = has_boom;
        },
        // 判断个位, 判断最左还是最右
        lastNum(box) {
            var boxstr = box.toString().split('')
            var last = boxstr[boxstr.length-1]
            return parseInt(last)
        },
        // 生成一个随机数
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
            for (let i = 0; i < this.boxs; i++) {
                const element = this.boxs[i];
                if(this.booms.indexOf(i + 1) == -1) {  // 判断是不是雷区，不是雷区为true。
                    // 计算周围有多少雷。
                    this.boomLoop(i + 1)
                }
            }
        },
        closeMenu(boxNum){  // 关闭盒子菜单
            var menuDom = document.getElementById('menu' + boxNum)
            menuDom.style.display = "none";
        },
        resetGame() {
            window.location.reload()
        }
    }
})