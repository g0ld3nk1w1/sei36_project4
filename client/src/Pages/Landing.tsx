//Master lkanding page
import { ClassContainer } from "../Components/DisplayClassContainer"
import { ProductContainer } from "../Components/DisplayProductContainer"

export const Landing = (props: {toggle?: string}) => {

    switch(props.toggle){
        case "class": return (
            <ClassContainer />
        )
        case "product": return (
            <ProductContainer />
        )
        case "all":
        default: return (
            <>
            <ClassContainer />
            <ProductContainer />
            </>
            )
    }
}