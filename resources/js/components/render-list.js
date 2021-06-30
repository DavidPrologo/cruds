export default
function RenderList({data, render}){
    return data.map(render)
}