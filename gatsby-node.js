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


module.exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /react-responsive-gallery/,
              use: loaders.null(),
            },
          ],
        },
      })
    }
  }