class Matrix {
    static data: number[];

    constructor(m?: []) {
        if (m) this.data = m;
    }

    /**
     * @param {any[]} value
     */
    set data(value: number[]) {
        if (Array.isArray(value)) {
            this.data = value;//Array(this.data).concat(value);
        } else throw new Error("value is not array");
    }

    add(matrices: number[][]) {
        if (matrices.length <= 0)
            throw new Error("Atleast two matrix are required for addition");

        const result = this.data.length > 0 ? this.data : Array(matrices.length);

        for (let i = 0; i < matrices.length; i++) {
            for (let j = 0; j < matrices[i].length; j++) {
                if (i < matrices.length - 1) {
                    console.log(i, j, matrices[i][j], matrices[i + 1][j]);

                    result[i + j] = matrices[i][j] + matrices[i + 1][j];
                }
            }
        }

        console.log('result', result)
        this.data = result;
        return this;
    }
}

const m = new Matrix();

m.add([[1, 2, 3], [4, 5, 6]]).add([[4, 3, 1]]);
