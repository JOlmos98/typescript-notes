var admin = {
    name: 'Jhon',
    lastName: 'Smith',
    role: [1, 'Admin'],
};
var developer = {
    name: 'Jose',
    lastName: 'Cabrera',
    role: [2, 'Developer'],
};
var editor = {
    name: 'Will',
    lastName: 'Doe',
    role: [3, 'Editor'],
};
var POSTS = [
    {
        id: 1,
        title: 'Aprender TypeScript',
        createdAt: '03/03/2020',
        author: developer,
    },
    {
        id: 2,
        title: 'Aprender JavaScript',
        createdAt: '18/03/2020',
        author: editor,
    },
    {
        id: 3,
        title: 'Es realmente TypeScript útil?',
        createdAt: '18/05/2020',
        author: admin,
    },
];
var postLog = {}; //Tipamos todos los objetos para que sean postLog.
function isAdmin(person) {
    /*if (typeof person === 'undefined') {
      throw new Error('Person should be an object');
    }
  
    if (typeof person.role === 'undefined') {
      throw new Error('Person has no role');
    } */ //Estas lineas son useless porque TS obliga a que tenga si o si un rol definidio, o sea, no puede ser nunca undefined.
    //Esta constante comprueba que role es la posición 0 del array role y rolename es la posición 1 del array role.
    var _a = person.role, role = _a[0], roleName = _a[1]; //Por lo que podemos eliminar el rest.
    /*if (typeof role === 'undefined') {
      throw new Error('Role should be defined');
    }
  
    if (typeof roleName === 'undefined') {
      throw new Error(`The role ${role} has no name or description`);
    }*/ //Código inservible porque TS obliga a que tenga si o si un rol definidio, o sea, no puede ser nunca undefined.
    /*if (typeof rest !== 'undefined' && rest.length) {
      throw new Error('That is not a Tupla, please provide a correct tuple');
    }*/ //Como nos quitamos el rest, todo esto es innecesario.
    return role === 1 && roleName === 'Admin';
}
function notHasPermissionLog(_a, _b) {
    var name = _a.name, role = _a.role;
    var title = _b.title;
    console.log("User ".concat(name, " with the role ").concat(role[1], " has no permission to edit the post ").concat(title));
}
for (var index = 0; index < POSTS.length; index++) {
    var post = POSTS[index];
    if (isAdmin(post.author)) {
        if (!(post.id in postLog)) {
            var copyPost = JSON.parse(JSON.stringify(post));
            copyPost.title = '¿Es realmente TypeScript útil?';
            copyPost.author = admin;
            var editedPost = {
                oldPost: post,
                edittedBy: admin,
                edittedAt: Date.now(),
                newPost: copyPost,
            };
            //postLog[post.id].oldPost = post;
            //postLog[post.id].edittedBy = admin;
            //postLog[post.id].edittedAt = Date.now();
            postLog[post.id] = editedPost;
        }
    }
    else {
        notHasPermissionLog(post.author, post);
    }
}
console.log(postLog);
