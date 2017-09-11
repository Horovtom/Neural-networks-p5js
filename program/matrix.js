
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

Matrix.prototype.add = function(n) {
    for(var i = 0; i < this.rows; i++) {
        for(var j = 0; j < this.cols; j++) {
            this.matrix[i][j] += n;
        }
    }
}

Matrix.prototype.scale = function(n) {
    for(var i = 0; i < this.rows; i++) {
        for(var j = 0; j < this.cols; j++) {
            this.matrix[i][j] *= n;
        }
    }
}