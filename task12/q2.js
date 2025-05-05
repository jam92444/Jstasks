let feature = {
  feature_1_content: "vbxvxvbvxnbcnmbcmnbmn",
  feature_1_img: "123",
  feature_1_title: "vbvbvbcvb",
  feature_2_content: "671bxvxvbvxnbcnmbcmnbmn",
  feature_2_img: "456",
  feature_2_title: "456",
  feature_3_content: "vbxvxvbvxnbcnmbcmnbmn",
  feature_3_img: "789",
  feature_3_title: "765",
};


function createObj(obj){
    let result = [];
    let groupObject = {};

    Object.entries(obj).forEach(([keyName,value])=>{
        let [_,id,content_type] = keyName.split("_");
        if (!groupObject[id]) groupObject[id] = {}
        groupObject[id][content_type] = value;
    })
    Object.values(groupObject).forEach(({img,content,title}) => {
        result.push({
            img,content,title
        })
    })
    
   return result;
}

const data = createObj(feature);
console.log("Data: ",data)

/*

output:
Data:  [
  { img: '123', content: 'vbxvxvbvxnbcnmbcmnbmn', title: 'vbvbvbcvb' },
  { img: '456', content: '671bxvxvbvxnbcnmbcmnbmn', title: '456' },    
  { img: '789', content: 'vbxvxvbvxnbcnmbcmnbmn', title: '765' }       
]
*/