function BinarySearchTree() {
    var Node = function (key) {

        this.key = key;
        this.left = null;
        this.right = null;

    };
    var root = null;


    this.remove = function (key) {
        root = removeNode(root, key);
    } //{1} };

    var removeNode = function (node, key) {

        if (node === null) {

            return null;
        }

        if (key < node.key) {

            node.left = removeNode(node.left, key);
            return node;
        }
        if (key > node.key) {

            node.right = removeNode(node.right, key);
            return node;
        }else{

            if(node.left===null && node.right===null){
                node = null;
                return node;
            }

            if(node.left===null){
                node = node.right;
                return node;
            }else if(node.right===null){
                node = node.left;
                return node;
            }

            var aux = findMinNode(node.right); //{18}
            node.key = aux.key; //{19}
            node.right = removeNode(node.right, aux.key); //{20}
            return node; //{21}

        }


    }


    var findMinNode = function(node){
        while (node && node.left !== null) {
            node = node.left;
        }
        return node;
    };

    this.search = function (key) {
        return searchNode(root, key); //{1}
    };

    var searchNode = function (node, key) {

        if (node === null) { //{2}
            return false;
        }
        if (key < node.key) {
            return searchNode(node.left, key);
        }
        else if (key > node.key) {
            return searchNode(node.right, key);
        }
        else {
            return false;
        }

    }


    this.min = function () {
        return minNode(root); //{1}
    };
    this.max = function () {
        return maxNode(root); //{1}
    };

    var maxNode = function (node) {
        if (node) {
            while (node && node.right !== null) {
                node = node.right;

            }
            return node.key;
        }
    };

    var minNode = function (node) {
        if (node) {
            while (node && node.left !== null) {
                node = node.left;

            }
            return node.key;
        }
    };


    this.inOrderTraverse = function (callback) {
        inOrderTraverseNode(root, callback); //{1}
    };
    var inOrderTraverseNode = function (node, callback) {
        if (node !== null) { //{2}
            inOrderTraverseNode(node.left, callback); //{3}
            callback(node.key); //{4}
            inOrderTraverseNode(node.right, callback); //{5}

        }
    };

    this.preOrderTraverse = function (callback) {
        preOrderTraverseNode(root, callback);
    };

    var preOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            callback(node.key); //{1}
            preOrderTraverseNode(node.left, callback); //{2}
            preOrderTraverseNode(node.right, callback); //{3}
        }
    };

    this.postOrderTraverse = function (callback) {
        postOrderTraverseNode(root, callback);
    };
    var postOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            postOrderTraverseNode(node.left, callback); //{1}
            postOrderTraverseNode(node.right, callback); //{2}
            callback(node.key); //{3}
        }
    };


    this.insert = function (key) {
        var newNode = new Node(key);
        if (root === null) {
            root = newNode;
        } else insertNode(root, newNode);
    }

    var insertNode = function (node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode);
            }
        }
    }

}

var tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(13);

function printNode(value) { //{6}
    console.log(value);
}
// tree.preOrderTraverse(printNode);
// console.log(tree.max());

tree.remove(5);

//console.log(tree.search(12));

