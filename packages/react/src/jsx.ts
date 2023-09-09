import { REACR_ELEMENT_TYPE } from "shared/ReactSymboles"
import { Ref,Key,Props,Type ,ReactElement, ElementType} from "shared/ReactTypes"

// ReactElement
const ReactElement=function(type:Type,key:Key,ref:Ref,props:Props):ReactElement{
const element={
    $$typeof:REACR_ELEMENT_TYPE,
    key,
    type,
    ref,
    props,
    __mark:'Xing'
}
return element
}

//JSX方法
export const jsx=function(type:ElementType,config:any,...maybeChildren:any):ReactElement{
    const props:Props={}
    let ref:Ref=null
    let key:Key=null
    for(const prop in config){
        const val =config[prop]
        if(prop==='key'){
            if(val!==undefined){
                key=''+val
            }
            continue
        }
        if(prop==='ref'){
            if(val!==undefined){
                ref=val
            }
            continue
        }
        if({}.hasOwnProperty.call(config,prop)){
            props[prop]=val
        }
    }
    const maybeChildrenLength=maybeChildren.length
    if(maybeChildrenLength){
        if(maybeChildrenLength===1){
            props.children=maybeChildren[0]
        }else{
            props.children=maybeChildren
        }
    }

    
    return ReactElement(type,key,ref,props,)
}

export const jsxDEV=jsx