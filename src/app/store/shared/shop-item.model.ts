export interface ShopItemModel {
  id: string;
  photoUrl?: string;
  title: string;
  price: number;
  description: string;
  category: string;
  inBasket: boolean;
  checked?: boolean;
}
