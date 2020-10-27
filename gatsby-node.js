// const graph = require('gatsby')
const path = require("path")


module.exports.createPages = async ({graphql,actions})=>{
    const {createPage} = actions;
    const blogTemplate = path.resolve('src/templates/blog.js')
    const res = await graphql(`
    query{
        allSanityPost{
            edges{
           node{
             title
           }
         } 
       }
       } 
    `)


    res.data.allSanityPost.edges.forEach(edge => {
        createPage({
            component:blogTemplate,
            path:`/blog/${edge.node.title}`,
            context:{
                title:edge.node.title
            }
        })
    }); 
}