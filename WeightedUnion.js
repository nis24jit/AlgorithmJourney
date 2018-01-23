var parent = [];
var size = [];

parent = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
size = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];


function find(p) {

    while (p != parent[p]) {

        parent[p] = parent[parent[p]];
        p = parent[p];
    }


    return p;
}


function connected(p, q) {
    return find(p) == find(q);
}


function union(p, q) {
    var rootP = find(p);
    var rootQ = find(q);
    if (rootP == rootQ) return;

    // make smaller root point to larger one
    if (size[rootP] < size[rootQ]) {
        parent[rootP] = rootQ;
        size[rootQ] += size[rootP];
    }
    else {
        parent[rootQ] = rootP;
        size[rootP] += size[rootQ];
    }

}

console.log(parent);

union(4, 3);
union(3, 8);
union(6, 5);
union(9, 4);
union(2, 1);
union(5, 0);
union(7, 2);

console.log(parent);




