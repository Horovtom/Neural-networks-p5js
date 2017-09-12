
// var m = new Matrix(3,2);

function Matrix(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.matrix = [];

    for(var i = 0; i < this.rows; i++) {
        this.matrix[i] = [];
        for(var j = 0; j <this.cols; j++) {
            this.matrix[i][j] = 0;
        }
    }
}

Matrix.prototype.randomize = function() {
    for(var i = 0; i < this.rows; i++) {
        for(var j = 0; j < this.cols; j++) {
            this.matrix[i][j] = Math.floor(Math.random() * 10);
        }
    }
}

Matrix.prototype.add = function(n) {

    if (n instanceof Matrix) {
        if (n.rows != this.rows || n.cols != this.cols) {
            console.error("Matrices do not have the same dimensions!");
            console.error(this.rows + " != " + n.rows + " or " + this.cols + " != " + n.cols);
            return;
        }
        for(var i = 0; i < this.rows; i++) {
            for(var j = 0; j < this.cols; j++) {
                this.matrix[i][j] += n.matrix[i][j];
            }
        }
    } else {
        for(var i = 0; i < this.rows; i++) {
            for(var j = 0; j < this.cols; j++) {
                this.matrix[i][j] += n;
            }
        }
    }
}

Matrix.prototype.scale = function(n) {
    if (n instanceof Matrix) {
        if (n.rows != this.rows || n.cols != this.cols) {
            console.error("Matrices do not have the same dimensions!");
            console.error(this.rows + " != " + n.rows + " or " + this.cols + " != " + n.cols);
            
            return;
        }
        for(var i = 0; i < this.rows; i++) {
            for(var j = 0; j < this.cols; j++) {
                this.matrix[i][j] *= n.matrix[i][j];
            }
        }
    } else {
        for(var i = 0; i < this.rows; i++) {
            for(var j = 0; j < this.cols; j++) {
                this.matrix[i][j] *= n;
            }
        }
    }
}

Matrix.prototype.print = function() {
    console.table(this.matrix)
}