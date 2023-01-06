let maze_container = document.getElementById("maze_container");
let maze_size = document.getElementById("maze_size");
let wayText=document.getElementById("ways");

const five = [[[0, 1, 0, 1, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 1], [0, 1, 0, 0, 1], [1, 0, 0, 0, 0]],
[[0, 0, 0, 0, 0],[0, 0, 1, 1, 0],[0, 1, 0, 0, 0],[1, 0, 0, 1, 1],[0, 1, 0, 0, 0]],
[[0, 0, 1, 0, 0],[1, 0, 1, 0, 0],[0, 0, 0, 0, 0],[0, 1, 0, 1, 0],[0, 0, 0, 1, 0]],
[[0, 0, 1, 0, 0],[0, 0, 0, 0, 0],[1, 1, 0, 1, 0],[0, 0, 0, 0, 1],[0, 0, 1, 0, 0]],
[[0, 0, 0, 1, 0],[0, 1, 0, 1, 0],[0, 0, 0, 0, 1],[0, 1, 1, 0, 0],[1, 0, 0, 0, 0]],
[[0, 1, 0, 0, 0],[0, 0, 1, 1, 0],[0, 1, 0, 0, 0],[0, 0, 0, 1, 0],[0, 1, 0, 1, 0]],
[[0, 0, 0, 0, 0],[0, 1, 0, 1, 0],[1, 0, 1, 0, 0],[0, 1, 0, 0, 1],[0, 0, 1, 0, 0]],
[[0, 0, 0, 0, 0],[1, 1, 1, 1, 0],[0, 0, 0, 0, 0],[0, 1, 1, 1, 1],[0, 0, 0, 0, 0]],
[[0, 0, 1, 0, 0],[0, 0, 0, 1, 0],[1, 1, 0, 0, 1],[0, 1, 1, 0, 0],[0, 0, 1, 1, 0]],
[[0, 0, 1, 0, 0],[1, 0, 0, 0, 0],[0, 0, 1, 0, 1],[0, 1, 0, 0, 0],[0, 0, 0, 0, 0]]
];
const seven = [[[0, 1, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0], [1, 1, 0, 0, 0, 1, 0], [0, 0, 1, 1, 1, 0, 0], [1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 1, 1], [1, 0, 0, 0, 0, 0, 0]],
[[0, 0, 1, 0, 0, 0, 1],[1, 0, 0, 0, 1, 0, 0],[0, 1, 1, 1, 0, 1, 0],[0, 0, 0, 0, 0, 0, 0],[0, 1, 1, 1, 1, 1, 1],[0, 0, 0, 1, 0, 0, 0],[0, 1, 0, 0, 0, 1, 0]],
[[0, 0, 0, 1, 1, 1, 1],[0, 0, 0, 0, 0, 0, 0],[1, 1, 1, 1, 0, 0, 1],[1, 0, 0, 0, 0, 0, 1],[1, 0, 0, 1, 1, 1, 1],[1, 0, 0, 0, 0, 0, 0],[1, 1, 1, 1, 1, 0, 0]],
[[0, 0, 0, 1, 1, 1, 1],[0, 0, 0, 0, 0, 1, 0],[1, 1, 1, 0, 0, 0, 1],[1, 0, 0, 0, 1, 1, 1],[1, 0, 1, 1, 0, 0, 0],[1, 0, 0, 0, 0, 1, 0],[1, 1, 1, 1, 1, 0, 0]],
[[0, 0, 0, 1, 1, 1, 1],[0, 0, 0, 0, 0, 0, 0],[1, 0, 0, 1, 1, 1, 0],[1, 0, 0, 1, 0, 0, 0],[1, 0, 1, 0, 0, 1, 1],[1, 1, 0, 0, 1, 0, 0],[1, 1, 1, 0, 0, 0, 0]],
[[0, 0, 0, 1, 0, 0, 0],[1, 0, 1, 0, 0, 1, 0],[0, 0, 1, 1, 0, 1, 0],[0, 1, 0, 0, 0, 1, 0],[0, 0, 0, 1, 1, 0, 0],[0, 0, 1, 0, 0, 0, 1],[1, 0, 0, 1, 1, 0, 0]],
[[0, 0, 0, 0, 0, 0, 0],[0, 1, 1, 0, 1, 1, 0],[0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 1, 0, 0, 0],[0, 1, 0, 0, 0, 1, 0],[0, 0, 1, 1, 1, 0, 0],[0, 0, 0, 0, 0, 0, 0]],
[[0, 0, 1, 0, 0, 0, 0],[1, 0, 1, 0, 1, 0, 1],[1, 0, 1, 0, 1, 0, 0],[1, 0, 1, 0, 1, 0, 1],[1, 0, 1, 0, 1, 0, 0],[1, 0, 1, 0, 1, 0, 1],[1, 0, 0, 0, 1, 0, 0]],
[[0, 0, 1, 0, 0, 0, 0],[1, 0, 0, 0, 1, 0, 1],[0, 1, 1, 1, 0, 0, 0],[1, 0, 0, 0, 0, 0, 1],[0, 0, 0, 0, 1, 0, 1],[0, 1, 0, 1, 0, 1, 0],[0, 0, 0, 0, 0, 0, 0]],
[[0, 0, 0, 1, 0, 0, 0],[1, 1, 0, 0, 0, 1, 0],[0, 0, 1, 1, 1, 0, 0],[0, 0, 0, 0, 0, 0, 1],[0, 1, 1, 1, 1, 1, 0],[0, 1, 0, 0, 0, 1, 0],[0, 0, 0, 1, 0, 0, 0]]];
const nine = [[0, 0, 1, 0, 0, 0, 0, 0, 0], [1, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 1, 0, 0, 0], [0, 1, 1, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0], [1,1,1,1,1,1,1,1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0]];

makeGrid(maze_size.value);
maze_size.addEventListener("change", () => {
    let size = maze_size.value;
    
    makeGrid(size);

})

 function makeGrid(n) {
    let randIndex=Math.floor(Math.random() * 10);
    let curr = five[randIndex];
    
    if (n == 9) {
        curr = nine;
    } else if (n == 7) {
        curr = seven[randIndex];
    }
    console.log(randIndex,curr)
    //calling display function
    displaymaze(curr, n)
    //solving the current maze
    let t = solveMaze(curr, curr.length, 0, 0, "", []);
    //formatts the total ways string
    let way=getFormattedWays(t?t.length:0);
    // displays button (max=5)
    
    displaySolutionButtons(t?t.length:0)
    
   wayText.innerHTML=way;
    if (t) {
        
        let ans = t[0];
        displaySolution(ans,curr)
        let buttons=document.querySelectorAll(".sbtn");
        buttons.forEach((item)=>{
            item.addEventListener("click",function(){
                displaymaze(curr, n)
                displaySolution(t[this.dataset.id-1],curr)
            })
        })
        
    }else{
       console.log("No paths found")
    }
    


}

//adding color to the cell path
 function path(cell){
     cell.classList.add("green")
    
}
//display maze function
function displaymaze(curr, n) {

    maze_container.innerHTML = "";
    maze_container.style = `grid-template-columns:repeat(${n},1fr)`
    let str = "";
    for (let i = 0; i < n * n; i++) {
        if (curr[Math.floor(i / n)][i % n] == 1) {
            str += `<div class="cell block"></div> `
        } else {
            str += `<div class="cell"></div> `
        }


    }
    maze_container.innerHTML = str;
    
    
}
//maze solving function
function solveMaze(arr, n, i, j, string, ans) {
    if (i < 0 || j < 0 || i >= n || j >= n) {
        return;
    }
    if (arr[i][j] == 1 || arr[i][j] == 2) {
        return;
    }

    if (i == n - 1 && j == n - 1) {
        ans.push(string);
        return;
    }
    arr[i][j] = 2;
    
    
    solveMaze(arr, n, i, j + 1, string + "R", ans);
    solveMaze(arr, n, i + 1, j, string + "D", ans);
    solveMaze(arr, n, i - 1, j, string + "U", ans);
    solveMaze(arr, n, i, j - 1, string + "L", ans);
    arr[i][j] = 0;
    return ans
}
//formatted ways
function getFormattedWays(Nways){
    Nways+="";
    let str="";
    let c=3;
    let l=0;
    if(Nways.length>3){
        for(let i=Nways.length-1;i>=0;i--){
            l++;
            if(l==c){
                str+=Nways[i]+","
                c=2
                l=0
            }else{
                str+=Nways[i]
            }
        }
        return str.split("").reverse().join("")
    }else{
        return Nways;
    }
}
function displaySolution(t,curr,){
    let n=curr.length
    let k = 0;
            let i = 0;
            let j = 0;
        while (k < t.length) {
            
            let pathdiv = document.querySelector(`.cell:nth-child(${(i * curr.length) + j + 1})`)
            setTimeout(()=>{
                path(pathdiv)
            },(k+1)*200)
            
            if (t[k] == "D") {
                i++;
            } else if (t[k] == "U") {
                i--;
            } else if (t[k] == "L") {
                j--;
            } else if (t[k] == "R") {
                j++;
            }
            k++

        }
        let pathdiv = document.querySelector(`.cell:nth-child(${n*n})`)
            
        setTimeout(()=>{
            path(pathdiv)
        },(k+1)*200)
        
}
function displaySolutionButtons(N){
    let buttonContainer=document.getElementById("buttons")
    buttonContainer.innerHTML="";
    // <button class="sbtn">1</button>
    N=N>5?5:N;
    let i=1;
    while(i<=N){
        
        buttonContainer.innerHTML+=`<button class="sbtn" data-id=${i}>${i}</button>`
        
        i++;
    }
    
}


// setInterval(()=>{console.log(},500)









