import ItemType from "./itemType";

type Keys = 'name' | 'price' | 'photo';

type ListType = {
    cartList: Pick<ItemType, Keys>[]
    setCartList: any
}

export default ListType;