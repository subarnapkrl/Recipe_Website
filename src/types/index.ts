type Categories={
    id:number,
    name:string,
    path:string
}
type Links={
    id:number;
    path:string,
    name:string
}

export const categories:Categories[]=[
    {
        id:1,
        name:'Breakfast',
        path:'/categories'
    },
     {
        id:2,
        name:'Lunch',
        path:'/categories'
    },
     {
        id:3,
        name:'Dinner',
        path:'/categories'
    },
     {
        id:4,
        name:'Snacks',
        path:'/categories'
    },
     {
        id:5,
        name:'Desserts',
        path:'/categories'
    }
]

export const links:Links[]=[
    {
        id:1,
        path:'/about',
        name:'About'
    },
    {
        id:2,
        path:'/blog',
        name:'Blog'
    },
    {
        id:3,
        path:'/contact',
        name:'Contact'
    }
]