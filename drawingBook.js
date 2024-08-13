function drawingBook(n, p) {
    const maxSheet = Math.floor(n/2);
    const sheet = Math.floor(p/2);
    
    return (sheet < (maxSheet - sheet)) ? sheet : maxSheet - sheet
}


console.log(drawingBook(10, 7));