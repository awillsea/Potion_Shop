export interface PotionAndWiz {
    id: string;
    potion_name: string;
    photoUrl: string;
    effects: string;
    sideEffects: string;
    characteristics: string;
    price: number;
    inStock: boolean;
    createdBy: string;
    wizard_id: string;
    wizard_first_name: string;
    wizard_last_name: string;
    wizard_picture: string;

};

export interface Potion {
id:string
potion_name: string;
photoUrl: string;
effects?: string|null;
sideEffects?: string|null;
characteristics?: string|null;
price: number;
inStock: boolean;
createdBy: string;
};

export interface Wizard{
    wizard_id: string;
    wizard_first_name: string;
    wizard_last_name: string;
    wizard_picture: string;
};
