import { VctrApi } from "https://www.vectary.com/viewer-api/v1/api.js";

let containerButton = document.getElementsByTagName('button');
let select = document.getElementById('itemVectary');

const viewerApi = new VctrApi('model_X');
await viewerApi.init();
await viewerApi.load();

const allSceneObjects = await viewerApi.getObjects();
const allMaterial = await viewerApi.getMaterials();

async function createListItem(){
    for(let Material of allMaterial){
        let newOption = document.createElement('option');
        newOption.value = Material.name;
        newOption.innerText = Material.name;
        select.appendChild(newOption);
    }
}
createListItem();

async function changeColor(){
    for(let button of containerButton){
        button.addEventListener('click', async function() {
            const updateMaterial = {
                color: button.dataset.set
            };
            await viewerApi.updateMaterial(select.value, updateMaterial);
        })
    }
   
}
changeColor();
// async function run() {    
    
//     function errHandler(err) {
//         console.log("API error", err);
//     }

//     async function onReady() {
//         console.log("API ready");
//         try {
          
//             //Example
//             const allSceneObjects = await viewerApi.getObjects();
//             console.log("Objects", allSceneObjects); 
          
//         } catch (e) {
//             errHandler(e);
//         }
//     }

//     const viewerApi = new VctrApi("model_X", errHandler);

//     try {
//         await viewerApi.init();        
//         onReady();
//     } catch (e) {
//         errHandler(e);
//     }
// }
// run();