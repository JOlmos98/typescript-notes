
type Person={ //Creamos el tipo person.
  name:string,
  lastName:string,
  role:[number, string]
}

const admin:Person = { //Tipamos todos los objetos para que sean person.
  name: 'Jhon',
  lastName: 'Smith',
  role: [1, 'Admin'],
};

const developer:Person = {
  name: 'Jose',
  lastName: 'Cabrera',
  role: [2, 'Developer'],
};

const editor:Person = {
  name: 'Will',
  lastName: 'Doe',
  role: [3, 'Editor'],
};

type BlogPost={ //Creamos el tipo post.
  id:number,
  title:string,
  createdAt:string,
  author:Person
}

const POSTS:BlogPost[] = [ //Añadimos tipo post y hacemnos array: POSTS:post[]
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

type EditedPost={ //Creamos el tipo postLog.
  //[id:number]:{ Esto me estaba volviendo loco, pero la verdad que no termino de entender su función ni la de Record.
    oldPost:BlogPost,
    edittedBy:Person,
    edittedAt:number,
    newPost:BlogPost
  //}
}

const postLog:Record <number, EditedPost> = {}; //Tipamos todos los objetos para que sean postLog.

function isAdmin(person:Person) {
  /*if (typeof person === 'undefined') {
    throw new Error('Person should be an object');
  }

  if (typeof person.role === 'undefined') {
    throw new Error('Person has no role');
  } */ //Estas lineas son useless porque TS obliga a que tenga si o si un rol definidio, o sea, no puede ser nunca undefined.

  //Esta constante comprueba que role es la posición 0 del array role y rolename es la posición 1 del array role.
  const [role, roleName] = person.role; //Por lo que podemos eliminar el rest.

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

function notHasPermissionLog({ name, role }:Person, { title }:BlogPost) {
  console.log(`User ${name} with the role ${role[1]} has no permission to edit the post ${title}`);
}

for (let index = 0; index < POSTS.length; index++) {
  const post = POSTS[index];
  if (isAdmin(post.author)) {
    if (!(post.id in postLog)) {
      const copyPost = JSON.parse(JSON.stringify(post));
      copyPost.title = '¿Es realmente TypeScript útil?';
      copyPost.author = admin;
      
      const editedPost: EditedPost = {
        oldPost: post,
        edittedBy: admin,
        edittedAt: Date.now(),
        newPost: copyPost,
      };

      postLog[post.id] = editedPost;
    }
  } else {
    notHasPermissionLog(post.author, post);
  }
}

console.log(postLog);
