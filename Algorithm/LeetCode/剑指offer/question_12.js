/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let rowLen = board.length;
    let colLen = board[0].length;
    for(let i = 0;i<rowLen;i++){
        for(let j = 0; j<colLen;j++){
            if(board[i][j] === word[0]){
                if(findWord(i,j,0)) return true
            }
        }
    }

    
    function findWord(x,y,k){
        if(x < 0 || x >= rowLen || y < 0 || y >= colLen || board[x][y] != word[k]){
            return false
        }
        if(k === word.length - 1) return true
        let temp = board[x][y]
        board[x][y] = '-'

        let res = findWord(x,y-1,k+1) || findWord(x,y+1,k+1) || findWord(x-1,y,k+1) || findWord(x+1,y,k+1)
        
        board[x][y] = temp
        return res
    }

    return false
};