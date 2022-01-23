export interface MonsterInterface {
    id: number;
    name: string;
    description: string;
    image: string;
    element: string;
    weak: string;
    smash: [{
        part: string;
        damage: string;
    }] 
}