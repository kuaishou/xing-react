import { Props, Key, Ref } from "shared/ReactTypes";
import { WorkTag } from "./workTags"
import { Flags, NoFlags } from "./fiberFlags";


export class FilberNode {
    type: any;
    tag: WorkTag;
    pendingProps: Props;
    key: Key;
    stateNode: any
    ref: Ref
    return: FilberNode | null
    sibling: FilberNode | null
    child: FilberNode | null
    index: number
    memoizedProps: Props | null;
    alternate: FilberNode | null
    flags: Flags

    constructor(tag: WorkTag, pendingProps: Props, key: Key) {
        this.tag = tag
        this.key = key
        this.stateNode = null
        this.type = null

        //DOM树
        //父级
        this.return = null
        //右侧下一个
        this.sibling = null
        //子
        this.child = null
        this.index = 0

        this.ref = null

        //工作单元
        this.pendingProps = pendingProps
        this.memoizedProps = null


        this.alternate = null
        //副作用
        this.flags = NoFlags
    }
}



