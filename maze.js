let maze_container = document.getElementById("maze_container");
let maze_size = document.getElementById("maze_size");



let bool=false
makeGrid(maze_size.value);
maze_size.addEventListener("change", () => {
    let size = maze_size.value;
    if(!bool){makeGrid(size);}

})

 function makeGrid(n) {
    const five = [[0, 1, 0, 1, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 1], [0, 1, 0, 0, 1], [1, 0, 0, 0, 0]];
    const seven = [[0, 1, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0], [1, 1, 0, 0, 0, 1, 0], [0, 0, 1, 1, 1, 0, 0], [1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 1, 1], [1, 0, 0, 0, 0, 0, 0]];
    const nine = [[0, 0, 1, 0, 0, 0, 0, 0, 0], [1, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 1, 0, 0, 0], [0, 1, 1, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0], [1,1,1,1,1,1,1,1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0]];
    let curr = five;
    if (n == 9) {
        curr = nine;
    } else if (n == 7) {
        curr = seven;
    }
    //calling display function
    displaymaze(curr, n)
    //solving the current maze
    let t = solveMaze(curr, curr.length, 0, 0, "", []);
   
    
    console.log(t)
    if (t.length) {
        t = t[0];
        let k = 0;
        let i = 0;
        let j = 0;
        // while (k < t.length) {
            
        //     let pathdiv = document.querySelector(`.cell:nth-child(${(i * curr.length) + j + 1})`)
        //     console.log(pathdiv);
        //     path(pathdiv)
        //     if (t[k] == "D") {
        //         i++;
        //     } else if (t[k] == "U") {
        //         i--;
        //     } else if (t[k] == "L") {
        //         j--;
        //     } else if (t[k] == "R") {
        //         j++;
        //     }
        //     k++

        // }
        //RUDLRD
        let intt= setInterval(()=>{
            
            if(k==t.length){
                let cell = document.querySelector(`.cell:nth-child(${n * n})`)
        cell.classList.add("green");
                bool=false;
                clearInterval(intt);
                
            }else{
                bool=true;
            }
            
            let cell = document.querySelector(`.cell:nth-child(${(i * curr.length) + j + 1})`)
            path(cell)
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
        },200)
        
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
    return ans
}














